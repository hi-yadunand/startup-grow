import fs from 'fs';
import path from 'path';

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      getAllFiles(path.join(dir, file), fileList);
    } else if (file === 'page.js' || file === 'layout.js') {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const targetFiles = getAllFiles('/Users/yadunand/Documents/GitHub/College Project/startup-grow/app/(site)');

const replacements = [
  // Footer
  { from: /UI\/UX Design/g, to: 'Web Design' },
  { from: /Webflow/g, to: 'Social Media' },
  { from: /Branding/g, to: 'SEO & Marketing' },
  { from: /© 2024-25 <a href="https:\/\/themeforest.net\/user\/crowdytheme"[\s\n]*target="_blank">crowdyTheme<\/a> Agency/g, to: '© 2026 StartupGrow | Digital Solutions for Indian Startups' },
  
  // Footer text
  { from: /Feel free to reach out if you want to collaborate with us, or simply have a chat./g, to: 'Subscribe to our newsletter to receive updates on digital marketing and web development tips for startups.' },

  // Team
  { from: /Kamal Abraham/g, to: 'Yadunand Pavithran' },
  { from: /CEO, Alaska/g, to: 'Founder & UI/UX' },
  { from: /Selina Gomaze/g, to: 'Nashid Nihal C' },
  { from: /Jr. Executive/g, to: 'Co-Founder & Marketing' },
  { from: /Pedrik Vadra/g, to: 'Gokul Krishna' },
  { from: /Logo Designer/g, to: 'Lead Developer' },

  // Headings
  { from: /Designing great products\s+is so hard. But we've done\s+more than 150 of them in\s+this year./g, to: "Building digital growth is hard. But we've helped more than 150 Indian startups scale this year." },
  { from: /We solve your brand problem in a different method/g, to: "We solve your startup challenges with custom digital solutions" },
  { from: /The talented team\s+behind the creative\s+design/g, to: "The talented team behind StartupGrow" },
  { from: /Journal from\s+arolax/g, to: "StartupGrow Insights" },
  { from: /Have a project in mind\?/g, to: "Ready to scale your startup?" },

  // Home Hero (If not already replaced)
  { from: /Arolax is a full-service brand agency for purpose-driven\s+companies. We build\s+brands that look good, sound good, and do good./g, to: "StartupGrow is a digital solutions platform designed to help startups overcome their initial challenges with affordable, high-quality web development and marketing." },

  // Services exactly as they appear
  { from: /<h3 className="title">Brand Strategy<\/h3><p className="text">We closely collaborate with our clients to understand the needs and goals of the key to design<\/p>/g, to: '<h3 className="title">Web Design & Development</h3><p className="text">Build professional websites that convert visitors into customers with scalable, affordable solutions.</p>' },
  { from: /<h3 className="title">Brand Identity<\/h3><p className="text">We closely collaborate with our clients to understand the needs and goals of the key to design<\/p>/g, to: '<h3 className="title">Search Engine Optimisation</h3><p className="text">Improve website ranking on search engines to increase organic traffic and digital visibility.</p>' },
  { from: /<h3 className="title">Brand Guidelines<\/h3><p className="text">We closely collaborate with our clients to understand the needs and goals of the key to design<\/p>/g, to: '<h3 className="title">Social Media Marketing</h3><p className="text">Manage social media accounts and content to build a strong online presence for startups.</p>' },
  { from: /<h3 className="title">Brand Support<\/h3><p className="text">We closely collaborate with our clients to understand the needs and goals of the key to design<\/p>/g, to: '<h3 className="title">Content Marketing</h3><p className="text">Create blogs, videos, and posts to attract users and boost your digital marketing strategy.</p>' },
];

for (const file of targetFiles) {
  let content = fs.readFileSync(file, 'utf8');
  for (const { from, to } of replacements) {
    content = content.replace(from, to);
  }
  fs.writeFileSync(file, content);
}

console.log("Content updated successfully across all pages.");
