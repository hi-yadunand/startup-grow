import fs from "node:fs";
import path from "node:path";

const templateRoot =
  "/Users/yadunand/Documents/GitHub/crowdytheme-com-html-arolax-branding-agency-html20260506094112/html/arolax";
const siteRoot =
  "/Users/yadunand/Documents/GitHub/College Project/startup-grow/app/(site)";

const copyright =
  "© 2026 STARTUPGROW – Academic Innovation Project for Indian Startups";

const pages = [
  { file: "about.html", route: "about", component: "AboutPage", css: "master-about.css" },
  { file: "services.html", route: "services", component: "ServicesPage", css: "master-services.css" },
  { file: "works.html", route: "works", component: "WorksPage", css: "master-works.css" },
  { file: "team.html", route: "team", component: "TeamPage", css: "master-team.css" },
  { file: "career.html", route: "career", component: "CareerPage", css: "master-career.css" },
  { file: "faq.html", route: "faq", component: "FaqPage", css: "master-faq.css" },
  { file: "blog.html", route: "blog", component: "BlogPage", css: "master-blog.css" },
  { file: "contact.html", route: "contact", component: "ContactPage", css: "master-contact.css" },
];

const linkMap = new Map([
  ["branding-agency", "/"],
  ["index", "/"],
  ["about", "/about"],
  ["services", "/services"],
  ["works", "/works"],
  ["team", "/team"],
  ["career", "/career"],
  ["faq", "/faq"],
  ["blog", "/blog"],
  ["contact", "/contact"],
]);

function mainMenu(extraClass = "") {
  return `<nav class="main-menu${extraClass}">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/about">ABOUT</a></li>
              <li><a href="/services">SERVICES</a></li>
              <li class="menu-item-has-children">
                <a href="#">PAGES</a>
                <ul class="dp-menu">
                  <li><a href="/works">Project Pages</a></li>
                  <li><a href="/team">Team Pages</a></li>
                  <li><a href="/career">Career Pages</a></li>
                  <li><a href="/faq">Faq</a></li>
                </ul>
              </li>
              <li><a href="/blog">BLOG</a></li>
              <li><a href="/contact">CONTACT</a></li>
            </ul>
          </nav>`;
}

function offcanvasMenu() {
  return `<nav class="nav-menu offcanvas-3__menu">
          <ul>
            <li><a href="/">home</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="/services">services</a></li>
            <li><a href="/works">Project Pages</a></li>
            <li><a href="/team">Team Pages</a></li>
            <li><a href="/career">Career Pages</a></li>
            <li><a href="/faq">Faq</a></li>
            <li><a href="/blog">blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>`;
}

function preloader() {
  return `<div class="txt-loading">
          <span data-text="S" class="characters">S</span>
          <span data-text="T" class="characters">T</span>
          <span data-text="A" class="characters">A</span>
          <span data-text="R" class="characters">R</span>
          <span data-text="T" class="characters">T</span>
          <span data-text="U" class="characters">U</span>
          <span data-text="P" class="characters">P</span>
          <span data-text="G" class="characters">G</span>
          <span data-text="R" class="characters">R</span>
          <span data-text="O" class="characters">O</span>
          <span data-text="W" class="characters">W</span>
        </div>`;
}

function serviceItem(number, title, features, icon) {
  const featureHtml = features.map((feature) => `<li>${feature}</li>`).join("");

  return `<div class="service-item has_fade_anim" data-delay="${number === 1 ? "0.15" : (number * 0.15).toFixed(2)}"><div class="icon"><img class="show-light" src="/assets/imgs/icon/icon-s-${icon}.webp" alt="service-icon"><img class="show-dark" src="/assets/imgs/icon/icon-s-${icon}-light.webp" alt="service-icon"></div><h2 class="title">${title}</h2><ul class="service-features">${featureHtml}</ul></div>`;
}

function customizeServices(body) {
  const services = [
    serviceItem(1, "Search Engine <br>Optimisation", ["Search ranking", "Keyword research", "Technical SEO", "Local visibility", "Content optimisation", "Traffic growth"], 1),
    serviceItem(2, "Pay-Per-Click <br>Advertising", ["Google Ads", "Instagram Ads", "Budget planning", "Campaign setup", "Lead targeting", "Performance review"], 2),
    serviceItem(3, "Social Media <br>Marketing", ["Account setup", "Content calendar", "Reels and posts", "Community replies", "Brand consistency", "Growth reports"], 3),
    serviceItem(4, "Content <br>Marketing", ["Blog writing", "Video ideas", "Website copy", "Campaign messaging", "Educational posts", "Lead magnets"], 4),
    serviceItem(5, "Email <br>Marketing", ["Welcome emails", "Promotional campaigns", "Audience segments", "Templates", "Follow-up flows", "Reports"], 1),
    serviceItem(6, "Web Design and <br>Development", ["Startup websites", "Landing pages", "Responsive design", "Contact forms", "Conversion copy", "Maintenance"], 2),
  ].join("");

  return body
    .replace(/inspire\./, "grow online.")
    .replace(
      /We take a similar approach to design commercial we do impactfully approache, over the flowchart of user friendly wireframe\./g,
      "StartupGrow brings essential digital services into one clear, affordable platform for early-stage Indian startups."
    )
    .replace(/Our exclusive <br>services/, "Six core digital <br>services")
    .replace(/<div class="services-grid">[\s\S]*?<\/div><\/div><\/div><\/section>/, `<div class="services-grid">${services}</div></div></div></section>`)
    .replace(/Start your experience\s+with StartupGrow/, "Start your growth plan\n                        with StartupGrow");
}

function customizeAbout(body) {
  return body
    .replace(
      /We are ”StartupGrow” - product and\s+branding and creative agency\s+based in California/,
      "StartupGrow helps Indian startups\n                        build a strong digital presence"
    )
    .replace(
      /Unlocking creative horizons: the story behind “StartupGrow” a global digital agency crafting experiences, building dreams, and shaping success\./,
      "A digital solutions platform created to make websites, branding, and marketing simpler for early-stage founders."
    )
    .replace(/We have 100\+ <br>satisfied clients/, "We provide 6 core <br>digital services")
    .replace(/100\+/, "6")
    .replace(/We helped to get <br>companies with \$25M\+ <br>funding/, "We support <br>startups with simple <br>growth systems")
    .replace(/25M\+/, "1")
    .replace(/We make storable strategy growth your company with StartupGrow agency!/, "We make startup digital growth simple, affordable, and practical!")
    .replace(/We’re simple\s+but pro-level\s+agency/, "Simple,\n                      scalable,\n                      startup-ready")
    .replace(
      /Theme Builder, you have complete control over the <span>static elements<\/span> of your website/,
      "StartupGrow brings websites, branding, SEO, content, PPC, social media, and email into <span>one place</span>"
    )
    .replace(/Quality team/, "Project team")
    .replace(/Kamal Abraham/g, "Yadunand Pavithran")
    .replace(/Selina Gomaze/g, "Nashid Nihal C")
    .replace(/Pedrik Vadra/g, "Gokul Krishna")
    .replace(/Thomas Ribbon/g, "StartupGrow Team")
    .replace(/CEO, Wealcoder|Junior Executive|Sr\. Developer|UX Designer/g, "Team Member");
}

function customizeWorks(body) {
  return body
    .replace(/<h1 class="section-title large has_text_move_anim">Work<\/h1>/, '<h1 class="section-title large has_text_move_anim">Project</h1>')
    .replace(
      /We take a similar approach to design commercial we do impactfully approache, over the flowchart of user friendly wireframe\./,
      "StartupGrow is planned as a one-stop digital platform where Indian startups can explore services and request support."
    )
    .replace(/Victoria kinko/g, "Website Development")
    .replace(/Jimmy Fermin/g, "Branding System")
    .replace(/Briyokath Woody/g, "SEO Growth")
    .replace(/Mastartery/g, "Social Campaign")
    .replace(/Festonax Card/g, "Request Module")
    .replace(/Design - 2019/g, "StartupGrow - 2026");
}

function customizeTeam(body) {
  return body
    .replace(/Want to our serve global audiences and take your career next level\?/, "Meet the team building StartupGrow for Indian startups.")
    .replace(/Work together for\s+success\./, "Team members of\n                          StartupGrow.")
    .replace(
      /StartupGrow is a beacon of best innovation and the dynamic parent a company of wealcoder and many other subsidiaries\./,
      "StartupGrow is an academic innovation project built by a focused student team."
    )
    .replace(/4,000 \+/, "3")
    .replace(/Happy Clients/, "Team Members")
    .replace(/99\+/, "6")
    .replace(/Expertise <br>employees/, "Core <br>services")
    .replace(/Bringing passion and our expertise together!/, "Bringing planning, design, and development together!")
    .replace(
      /We bet on brands that shift categories and add value to people's lives; and on founders who are motivated to shape/,
      "The team works together on research, design, development, testing, and presentation."
    )
    .replace(/Kamal Abraham/g, "Yadunand Pavithran")
    .replace(/Selina Gomaze/g, "Nashid Nihal C")
    .replace(/Pedrik Vadra/g, "Gokul Krishna")
    .replace(/Thomas Ribbon/g, "StartupGrow Team")
    .replace(/CEO, Wealcoder|Junior Executive|Sr\. Developer|UX Designer/g, "Team Member");
}

function customizeCareer(body) {
  return body
    .replace(/Unlock your future!/, "Build startup growth!")
    .replace(/start here career\s+at StartupGrow/, "academic project\n                        with StartupGrow")
    .replace(
      /We question and try to see everything from every perspective\. Our passion lies in making everything universal human values, to expand the possibility\./,
      "StartupGrow is designed as a practical project where digital services, request handling, and basic admin workflows come together."
    )
    .replace(/Future \. Community \. Honor/, "Plan . Design . Develop")
    .replace(
      /What sets us apart is what brings us together – a shared passion for solving business challenges through strategy, design, and engineering\. We are the sum total of our team, their unique perspectives, capabilities, and our ability to collaborate from ideation to deployment\./,
      "The project combines requirement analysis, UI design, service planning, contact flow, and request management for early-stage Indian startups."
    )
    .replace(/We're Currently <br>hiring/, "Project <br>modules")
    .replace(/UI\/UX Designer/g, "User Interface Module")
    .replace(/Frontend Developer/g, "Service Module")
    .replace(/Product Manager/g, "Contact Module")
    .replace(/JavaScript Engineer/g, "Admin Module")
    .replace(/\(\d+ Open Roles\)/g, "(StartupGrow)")
    .replace(/Why you should attach our expert member!/, "Why this project matters for startups!")
    .replace(/Innovation<\/h3><p class="text">We thrive on fresh ideas, driving us pioneer solutions that redefine norm and position us as a trailblazing team!/, "Innovation</h3><p class=\"text\">StartupGrow turns early startup challenges into a simple digital growth path.")
    .replace(/Collaboration<\/h3><p class="text">Diverse viewpoints unite in seamless collaboration, nurturing a rich on ecosystem of creativity, ensuring we deliver excellence!/, "Collaboration</h3><p class=\"text\">The system connects users, service requests, and basic admin tracking in one flow.")
    .replace(/Empathy<\/h3><p class="text">Our empathetic approach enables us to understand user needs deeply resulting designs that truly resonate and set us apart\./, "Empathy</h3><p class=\"text\">The platform keeps the experience easy for founders with limited time, budget, and technical support.");
}

function customizeFaq(body) {
  return body
    .replace(/Building outstanding design, development and strategy/, "Simple answers about StartupGrow")
    .replace(/Frequently asked\s+question!/, "Frequently asked\n                          questions!")
    .replace(
      /StartupGrow is a beacon of best innovation and the dynamic parent a company of wealcoder and many other subsidiaries\./,
      "StartupGrow is a web-based digital solutions platform for Indian startups."
    )
    .replace(/How does the Agile Manifesto address planning\?/, "What is StartupGrow?")
    .replace(/Reflects your audience’s need\?/, "Who can use StartupGrow?")
    .replace(/What Is a Statement of Work in Project Management\?/, "What services are included?")
    .replace(/When is an FAQ page appropriate\?/, "What comes next for the project?")
    .replace(
      /People know what an FAQ is, so make that your page title\. don’t overcomplicate thing heve calling it’s good to know or more info\./g,
      "StartupGrow helps early-stage teams explore digital services, request support, and plan their online growth in a simple way."
    );
}

function customizeBlog(body) {
  return body
    .replace(/We always\s+think/, "Digital growth\n                        insights")
    .replace(/Add the best talent on the market, an agile skilled management & seamless involvement/g, "Ideas for websites, marketing, branding, and online growth for Indian startups.")
    .replace(/4,00 \+/, "6")
    .replace(/Total post/, "Core Services")
    .replace(/99 \+/, "3")
    .replace(/Blog writer/, "Team Members")
    .replace(/Insights from Industry Leaders/, "Building Startup Websites")
    .replace(/Building quality/, "Marketing Basics")
    .replace(/Market research/, "Finding Startup Users")
    .replace(/Latest\s+insight the\s+StartupGrow!/, "Latest\n                        StartupGrow\n                        insights!")
    .replace(/Business <br>consultation/, "Website <br>development")
    .replace(/Market research <br>& strategy/, "SEO <br>& strategy")
    .replace(/Building quality <br>sustainable/, "Social media <br>growth");
}

function customizeContact(body) {
  return body
    .replace(/Any\s+questions\? <br>\s+simply\s+ask us\. <br>\s+this is your\s+home!/, "Need digital <br>\n                        support? <br>\n                        contact\n                        StartupGrow!")
    .replace(/Skype\.StartupGrow007|Skype\.arolax007/g, "startupgrow@example.com")
    .replace(/We’ve been\s+waiting for you!/, "Send your\n                        startup request!")
    .replace(/Add the best talent on the market, an agile skilled management & seamless involvement/, "Tell us what your startup needs and the team will plan the next step.")
    .replace(/We want to hear from you\. let’s us know how we can help!/, "Share your website, branding, SEO, social media, content, PPC, or email marketing requirement.")
    .replace(/\+881 750 6606 00/g, "Contact and Request Module")
    .replace(/hello@StartupGrow\.com|hello@arolax\.com/g, "startupgrow@example.com")
    .replace(/230 alaska street dunasia <br>QC \(USA\) H8R 1A1/, "Digital Solutions <br>for Indian Startups");
}

function customizeCommon(body) {
  const isLightHeader = /main-menu menu-light/.test(body);
  const wordmarkClass = isLightHeader ? "startupgrow-wordmark light" : "startupgrow-wordmark";

  body = body.replace(/<script[\s\S]*?<\/script>/gi, "");
  body = body.replace(/<!--[\s\S]*?-->/g, "");
  body = body.replace(/<div class="txt-loading">[\s\S]*?<\/div>/, preloader());
  body = body.replace(/<div class="header__logo">[\s\S]*?<\/div>/, `<div class="header__logo">
          <a href="/">
            <span class="${wordmarkClass}">STARTUPGROW</span>
          </a>
        </div>`);
  body = body.replace(/<nav class="main-menu([^"]*)">[\s\S]*?<\/nav>/, (_, extraClass) => mainMenu(extraClass));
  body = body.replace(/<nav class="nav-menu offcanvas-3__menu">[\s\S]*?<\/nav>/, offcanvasMenu());
  body = body.replace(
    /<div class="offcanvas-3__meta mb-145 d-none d-md-block">[\s\S]*?<\/div>\s*<div class="offcanvas-3__social/,
    `<div class="offcanvas-3__meta mb-145 d-none d-md-block">
            <ul>
              <li><a href="tel:+91-0000000000" class="unnerline"><u>Contact and Request Module</u></a></li>
              <li><a href="mailto:startupgrow@example.com">startupgrow@example.com</a></li>
              <li><a href="">Digital Solutions <br>
                  for Indian Startups</a></li>
            </ul>
          </div>
          <div class="offcanvas-3__social`
  );
  body = body.replace(/<p class="title">Follow Me<\/p>/g, '<p class="title">Team Members</p>');
  body = body.replace(/href="([^"#]+)\.html"/g, (_, target) => {
    const key = path.posix.basename(target);
    return `href="${linkMap.get(key) ?? "#"}"`;
  });
  body = body.replace(/\b(src|href)="assets\//g, '$1="/assets/');
  body = body.replace(/Arolax/g, "StartupGrow").replace(/arolax/g, "StartupGrow");
  body = body.replace(/contact@me\.com/g, "startupgrow@example.com");
  body = body.replace(/\+2-352 698 102/g, "Contact and Request Module");
  body = body.replace(/\+2-352698102/g, "+91-0000000000");
  body = body.replace(/27 Division St, <br>\s+New York, NY 10002, USA/g, "Digital Solutions <br>\n                  for Indian Startups");
  body = body.replace(/<h2 class="title">London<\/h2>/g, '<h2 class="title">Team</h2>');
  body = body.replace(/Baltia Squar, Mark Street, <br>\s+London/g, "Yadunand Pavithran, <br>\n                      Nashid Nihal C");
  body = body.replace(/<h2 class="title">New York<\/h2>/g, '<h2 class="title">Project</h2>');
  body = body.replace(/Nenuya Centre, Elia Street <br>\s+New York, USA/g, "Gokul Krishna, <br>\n                      StartupGrow");
  body = body.replace(
    /<p class="text">© 2022 - 2025 \| Alrights reserved <br>\s+by <a href="https:\/\/themeforest\.net\/user\/crowdytheme" target="_blank">crowdyTheme<\/a><\/p>/g,
    `<p class="text">${copyright}</p>`
  );
  body = body.replace(/Get started<\/span> <br>\s+now/, "Get started</span> <br>\n                      now");
  body = body.replace(
    /If you would like to work with us or\s+just want to get in touch, we’d love\s+to hear from you!/g,
    "If your startup needs a website, branding, or digital marketing support, we would love to hear from you!"
  );

  return body;
}

function pageSpecific(route, body) {
  switch (route) {
    case "about":
      return customizeAbout(body);
    case "services":
      return customizeServices(body);
    case "works":
      return customizeWorks(body);
    case "team":
      return customizeTeam(body);
    case "career":
      return customizeCareer(body);
    case "faq":
      return customizeFaq(body);
    case "blog":
      return customizeBlog(body);
    case "contact":
      return customizeContact(body);
    default:
      return body;
  }
}

function escapeTemplateLiteral(value) {
  return value.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function renderPage({ component, css, bodyClass, html }) {
  return `"use client";
import { useEffect } from "react";

const pageHtml = \`${escapeTemplateLiteral(html)}\`;

export default function ${component}() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.initArolax) {
      window.initArolax();
    }
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/assets/css/${css}" />
      <div
        className={\`public-arolax-page ${bodyClass}\`}
        dangerouslySetInnerHTML={{ __html: pageHtml }}
      />
    </>
  );
}
`;
}

function stripTrailingWhitespace(value) {
  return value.replace(/[ \t]+$/gm, "");
}

for (const page of pages) {
  const source = fs.readFileSync(path.join(templateRoot, page.file), "utf8");
  const bodyClass = source.match(/<body[^>]*class="([^"]*)"/)?.[1] ?? "";
  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/)?.[1];

  if (!body) {
    throw new Error(`Could not find body content in ${page.file}`);
  }

  const html = pageSpecific(page.route, customizeCommon(body)).trim();
  const routeDir = path.join(siteRoot, page.route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(
    path.join(routeDir, "page.js"),
    stripTrailingWhitespace(renderPage({ component: page.component, css: page.css, bodyClass, html }))
  );
  console.log(`Imported ${page.route}`);
}
