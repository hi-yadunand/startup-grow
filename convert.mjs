import fs from 'fs';

function convertHtmlToJsx(htmlContent) {
  let jsx = htmlContent;
  
  // 1. Remove HTML comments
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');
  
  // 2. Class to className
  jsx = jsx.replace(/class=/g, 'className=');
  
  // 3. Self-closing tags
  jsx = jsx.replace(/<img([\s\S]*?)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return `<img${p1} />`;
  });
  jsx = jsx.replace(/<input([\s\S]*?)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return `<input${p1} />`;
  });
  jsx = jsx.replace(/<br>/g, '<br />');
  jsx = jsx.replace(/<hr([\s\S]*?)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return `<hr${p1} />`;
  });

  // 4. svg attributes
  jsx = jsx.replace(/stroke-width=/g, 'strokeWidth=');
  jsx = jsx.replace(/stroke-linecap=/g, 'strokeLinecap=');
  jsx = jsx.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  jsx = jsx.replace(/fill-rule=/g, 'fillRule=');
  jsx = jsx.replace(/clip-rule=/g, 'clipRule=');
  jsx = jsx.replace(/stroke-dasharray=/g, 'strokeDasharray=');
  jsx = jsx.replace(/stroke-dashoffset=/g, 'strokeDashoffset=');
  jsx = jsx.replace(/clip-path=/g, 'clipPath=');

  // 5. inline styles (very basic)
  jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
    const rules = p1.split(';').filter(r => r.trim());
    const obj = rules.reduce((acc, rule) => {
      const [key, value] = rule.split(':');
      if (!key || !value) return acc;
      const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      acc[camelKey] = value.trim();
      return acc;
    }, {});
    return `style={${JSON.stringify(obj)}}`;
  });

  return jsx;
}

const templatePath = '/Users/yadunand/Documents/GitHub/crowdytheme-com-html-arolax-branding-agency-html20260506094112/html/arolax/';
const outPath = '/Users/yadunand/Documents/GitHub/College Project/startup-grow/app/(site)';

if (!fs.existsSync(outPath)) fs.mkdirSync(outPath, { recursive: true });

function processPage(fileName, outputName, titleReplacements) {
  let html = fs.readFileSync(templatePath + fileName, 'utf8');
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
  let bodyContent = bodyMatch ? bodyMatch[1] : '';
  
  // Remove script tags at the bottom
  bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/g, '');

  // Convert
  let jsxContent = convertHtmlToJsx(bodyContent);

  // Apply specific replacements
  titleReplacements.forEach(rep => {
    jsxContent = jsxContent.replace(rep.regex, rep.replace);
  });

  // Add layout wrappers, remove hardcoded menus to replace later if needed
  // For now, we will just output the full JSX.
  const jsxFile = `
export default function ${outputName}Page() {
  return (
    <>
      ${jsxContent}
    </>
  );
}
`;

  const filePath = outPath + '/' + (outputName === 'Home' ? 'page' : outputName.toLowerCase() + '/page') + '.js';
  fs.writeFileSync(filePath, jsxFile);
  console.log(outputName + ' page created.');
}

// Ensure subdirs exist
['about', 'services', 'contact'].forEach(dir => {
  const p = outPath + '/' + dir;
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
});

// HOME PAGE
processPage('branding-agency.html', 'Home', [
  { regex: /We <br>[\s\S]*?sharp <span className="has_fade_anim" data-fade-from="left" data-delay="1">Pro<\/span>[\s\S]*?brand[\s\S]*?Value/g, replace: 'Digital <br> Solutions for <span className="has_fade_anim" data-fade-from="left" data-delay="1">Indian</span> Startups' },
  { regex: /Arolax is a full-service brand agency for purpose-driven companies. We build brands that look good, sound good, and do good./g, replace: 'StartupGrow is a digital solutions platform designed to help Indian startups overcome their initial challenges with affordable, high-quality web development and marketing.' }
]);

// ABOUT PAGE
processPage('about.html', 'About', [
  { regex: /Who We Are/g, replace: 'About StartupGrow' },
  { regex: /Arolax is a full-service brand agency/g, replace: 'StartupGrow is a digital solutions platform' }
]);

// SERVICES PAGE
processPage('services.html', 'Services', [
  { regex: /Our Services/g, replace: 'Core Services' }
]);

// CONTACT PAGE
processPage('contact.html', 'Contact', [
  { regex: /Get in touch/g, replace: 'Contact StartupGrow' }
]);

