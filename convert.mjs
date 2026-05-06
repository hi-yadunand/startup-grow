import fs from 'fs';

function convertHtmlToJsx(htmlContent) {
  let jsx = htmlContent;
  
  // 1. Remove HTML comments
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');
  
  // 2. Class to className
  jsx = jsx.replace(/class=/g, 'className=');
  
  // 3. Self-closing tags
  const voidElements = ['img', 'input', 'hr', 'br', 'source', 'link', 'meta', 'area', 'base', 'col', 'embed', 'param', 'track', 'wbr'];
  voidElements.forEach(tag => {
    // For br specifically, it might not have attributes
    if (tag === 'br') {
      jsx = jsx.replace(/<br([^>]*)>/g, (match, p1) => {
        if (p1 && p1.endsWith('/')) return match;
        return `<br${p1 || ''} />`;
      });
    } else {
      const regex = new RegExp(`<${tag}([\\s\\S]*?)>`, 'g');
      jsx = jsx.replace(regex, (match, p1) => {
        if (p1.endsWith('/')) return match;
        return `<${tag}${p1} />`;
      });
    }
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

  // Fix Next.js links: remove .html
  jsx = jsx.replace(/href="([^"#]+)\.html"/g, (match, p1) => {
    if (p1 === 'branding-agency' || p1 === 'index') return 'href="/"';
    if (p1 === 'faq' || p1 === 'career') return 'href="#"';
    return `href="/${p1}"`;
  });

  return jsx;
}

const templatePath = '/Users/yadunand/Documents/GitHub/crowdytheme-com-html-arolax-branding-agency-html20260506094112/html/arolax/';
const outPath = '/Users/yadunand/Documents/GitHub/College Project/startup-grow/app/(site)';

if (!fs.existsSync(outPath)) fs.mkdirSync(outPath, { recursive: true });

function processPage(fileName, outputName, titleReplacements = []) {
  if (!fs.existsSync(templatePath + fileName)) return;
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

  // Add layout wrappers
  const jsxFile = `
"use client";
import { useEffect } from "react";

export default function ${outputName.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  useEffect(() => {
    // Re-initialize any scripts that need it after React mounts
    if (typeof window !== "undefined" && window.initArolax) {
      window.initArolax();
    }
  }, []);

  return (
    <>
      ${jsxContent}
    </>
  );
}
`;

  const dirName = outputName === 'Home' ? '' : outputName.toLowerCase();
  const dirPath = outPath + (dirName ? '/' + dirName : '');
  if (dirName && !fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

  const filePath = dirPath + '/page.js';
  fs.writeFileSync(filePath, jsxFile);
  console.log(outputName + ' page created.');
}

const globalReplacements = [
  { regex: /<div className="txt-loading">[\s\S]*?<\/div>/g, replace: 
    '<div className="txt-loading">' +
      '<span data-text="S" className="characters">S</span>' +
      '<span data-text="T" className="characters">T</span>' +
      '<span data-text="A" className="characters">A</span>' +
      '<span data-text="R" className="characters">R</span>' +
      '<span data-text="T" className="characters">T</span>' +
      '<span data-text="U" className="characters">U</span>' +
      '<span data-text="P" className="characters">P</span>' +
      '<span data-text=" " className="characters">&nbsp;</span>' +
      '<span data-text="G" className="characters">G</span>' +
      '<span data-text="R" className="characters">R</span>' +
      '<span data-text="O" className="characters">O</span>' +
      '<span data-text="W" className="characters">W</span>' +
    '</div>'
  }
];

const pagesToProcess = [
  { file: 'branding-agency.html', name: 'Home', replacements: [
    ...globalReplacements,
    { regex: /We <br>[\s\S]*?sharp <span className="has_fade_anim" data-fade-from="left" data-delay="1">Pro<\/span>[\s\S]*?brand[\s\S]*?Value/g, replace: 'Digital <br> Solutions for <span className="has_fade_anim" data-fade-from="left" data-delay="1">Indian</span> Startups' },
    { regex: /Arolax is a full-service brand agency for purpose-driven companies. We build brands that look good, sound good, and do good./g, replace: 'StartupGrow is a digital solutions platform designed to help Indian startups overcome their initial challenges with affordable, high-quality web development and marketing.' }
  ]},
  { file: 'about.html', name: 'About', replacements: [
    ...globalReplacements,
    { regex: /Who We Are/g, replace: 'About StartupGrow' },
    { regex: /Arolax is a full-service brand agency/g, replace: 'StartupGrow is a digital solutions platform' }
  ]},
  { file: 'services.html', name: 'Services', replacements: [
    ...globalReplacements,
    { regex: /Our Services/g, replace: 'Core Services' }
  ]},
  { file: 'contact.html', name: 'Contact', replacements: [
    ...globalReplacements,
    { regex: /Get in touch/g, replace: 'Contact StartupGrow' }
  ]},
  { file: 'blog.html', name: 'Blog', replacements: globalReplacements },
  { file: 'works.html', name: 'Works', replacements: globalReplacements },
  { file: 'team.html', name: 'Team', replacements: globalReplacements }
];

pagesToProcess.forEach(p => processPage(p.file, p.name, p.replacements));
