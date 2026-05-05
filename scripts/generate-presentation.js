const path = require("path");
const pptxgen = require("pptxgenjs");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "StartupGrow Team";
pptx.subject = "StartupGrow project presentation";
pptx.title = "StartupGrow";
pptx.company = "StartupGrow";
pptx.lang = "en-US";
pptx.theme = {
  headFontFace: "Aptos Display",
  bodyFontFace: "Aptos",
  lang: "en-US"
};

const colors = {
  ink: "17201B",
  leaf: "1F7A4D",
  saffron: "F59F30",
  sky: "22577A",
  mist: "F5F8F2",
  white: "FFFFFF",
  muted: "64748B"
};

function addTitle(slide, title, subtitle) {
  slide.addText(title, {
    x: 0.55,
    y: 0.35,
    w: 7.7,
    h: 0.45,
    fontSize: 22,
    bold: true,
    color: colors.ink,
    margin: 0
  });

  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.58,
      y: 0.82,
      w: 9.5,
      h: 0.28,
      fontSize: 9,
      color: colors.muted,
      margin: 0
    });
  }
}

function addFooter(slide, index) {
  slide.addText(`StartupGrow - ${index}`, {
    x: 10.8,
    y: 7.08,
    w: 1.8,
    h: 0.2,
    fontSize: 7,
    color: colors.muted,
    align: "right",
    margin: 0
  });
}

function addBullets(slide, bullets, x, y, w, h, options = {}) {
  slide.addText(
    bullets.map((text) => ({ text, options: { bullet: { type: "bullet" } } })),
    {
      x,
      y,
      w,
      h,
      fontSize: options.fontSize || 15,
      color: options.color || colors.ink,
      breakLine: false,
      fit: "shrink",
      valign: "mid",
      margin: 0.08,
      paraSpaceAfterPt: 8
    }
  );
}

function addBadge(slide, text, x, y, w, color = colors.leaf) {
  slide.addShape(pptx.ShapeType.rect, {
    x,
    y,
    w,
    h: 0.38,
    fill: { color },
    line: { color },
    radius: 0.08
  });
  slide.addText(text, {
    x: x + 0.13,
    y: y + 0.09,
    w: w - 0.26,
    h: 0.14,
    fontSize: 8,
    bold: true,
    color: colors.white,
    margin: 0,
    align: "center"
  });
}

function addCard(slide, title, body, x, y, w, h, accent = colors.leaf) {
  slide.addShape(pptx.ShapeType.rect, {
    x,
    y,
    w,
    h,
    fill: { color: colors.white },
    line: { color: "D8E1D8", width: 1 },
    radius: 0.08
  });
  slide.addShape(pptx.ShapeType.rect, {
    x,
    y,
    w: 0.08,
    h,
    fill: { color: accent },
    line: { color: accent }
  });
  slide.addText(title, {
    x: x + 0.25,
    y: y + 0.18,
    w: w - 0.4,
    h: 0.28,
    fontSize: 12,
    bold: true,
    color: colors.ink,
    margin: 0
  });
  slide.addText(body, {
    x: x + 0.25,
    y: y + 0.56,
    w: w - 0.4,
    h: h - 0.7,
    fontSize: 9,
    color: colors.muted,
    fit: "shrink",
    margin: 0
  });
}

function createSlide(title, subtitle) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.mist };
  addTitle(slide, title, subtitle);
  return slide;
}

let slide = pptx.addSlide();
slide.background = { color: colors.ink };
slide.addShape(pptx.ShapeType.rect, {
  x: 0,
  y: 0,
  w: 13.33,
  h: 7.5,
  fill: { color: colors.ink },
  line: { color: colors.ink }
});
slide.addText("StartupGrow", {
  x: 0.75,
  y: 1.5,
  w: 8.2,
  h: 0.75,
  fontSize: 44,
  bold: true,
  color: colors.white,
  margin: 0
});
slide.addText("A Digital Solutions Platform for Indian Startups", {
  x: 0.78,
  y: 2.35,
  w: 7.5,
  h: 0.35,
  fontSize: 18,
  color: "DDEFE4",
  margin: 0
});
slide.addText("Yadunand Pavithran - Nashid Nihal C - Gokul Krishna", {
  x: 0.8,
  y: 5.95,
  w: 7.6,
  h: 0.28,
  fontSize: 12,
  color: "DDEFE4",
  margin: 0
});
addBadge(slide, "Next.js", 9.3, 1.55, 1.15, colors.leaf);
addBadge(slide, "Express.js", 10.65, 1.55, 1.25, colors.sky);
addBadge(slide, "MongoDB", 9.95, 2.15, 1.35, colors.saffron);

slide = createSlide("Problem Statement", "Early-stage startups need credible digital presence without heavy agency costs.");
addBullets(
  slide,
  [
    "Limited technical skills make website and marketing setup difficult.",
    "Multiple service providers increase cost, delay, and communication issues.",
    "Poor SEO, social media, and content strategy reduce customer reach.",
    "StartupGrow centralizes affordable digital growth services."
  ],
  0.9,
  1.65,
  6.1,
  4.5
);
addCard(slide, "Target Users", "Indian startups at idea, MVP, early customer, and scaling stages.", 7.45, 1.5, 4.4, 1.25, colors.leaf);
addCard(slide, "Main Need", "A simple platform to request digital services and begin online growth.", 7.45, 3.05, 4.4, 1.25, colors.sky);
addFooter(slide, 2);

slide = createSlide("Project Objectives", "The project combines digital service discovery, request collection, and admin tracking.");
addBullets(
  slide,
  [
    "Help startups build professional websites.",
    "Provide digital marketing services such as SEO, PPC, social media, content, and email.",
    "Offer affordable and scalable solutions.",
    "Create a simple service request and communication system.",
    "Support request management through a basic admin dashboard."
  ],
  1,
  1.6,
  10.9,
  4.7
);
addFooter(slide, 3);

slide = createSlide("Core Services", "StartupGrow works as a one-stop digital service platform.");
[
  ["SEO", "Improve search ranking and organic traffic."],
  ["PPC Advertising", "Run focused paid campaigns on Google and Instagram."],
  ["Social Media", "Manage profiles, posts, and campaigns."],
  ["Content Marketing", "Create blogs, videos, and launch content."],
  ["Email Marketing", "Send promotional campaigns and newsletters."],
  ["Web Development", "Build responsive websites that convert visitors."]
].forEach(([title, body], index) => {
  const col = index % 3;
  const row = Math.floor(index / 3);
  addCard(slide, title, body, 0.75 + col * 4.1, 1.45 + row * 2.05, 3.55, 1.55, index % 2 ? colors.sky : colors.leaf);
});
addFooter(slide, 4);

slide = createSlide("Proposed System", "The platform connects founders, service requests, admin tracking, and database storage.");
addCard(slide, "Startup Founder", "Explores services and submits project details.", 0.8, 2.2, 2.25, 1.15, colors.leaf);
addCard(slide, "Next.js Frontend", "Responsive website, service listing, request form, dashboard UI.", 3.65, 1.65, 2.65, 1.7, colors.sky);
addCard(slide, "Express API", "Validates requests and manages records.", 6.95, 2.2, 2.25, 1.15, colors.saffron);
addCard(slide, "MongoDB", "Stores client details and service requests.", 9.8, 2.2, 2.25, 1.15, colors.leaf);
slide.addText("Founder -> Frontend -> API -> Database", {
  x: 1.35,
  y: 4.55,
  w: 10.5,
  h: 0.4,
  fontSize: 20,
  bold: true,
  color: colors.ink,
  align: "center",
  margin: 0
});
addFooter(slide, 5);

slide = createSlide("Modules of the System", "Each module maps to a clear project responsibility.");
[
  ["User Interface Module", "Displays website content and service navigation."],
  ["Service Module", "Shows all digital services with details."],
  ["Contact & Request Module", "Collects client information and project goals."],
  ["Admin Module", "Manages client details and tracks request status."]
].forEach(([title, body], index) => {
  addCard(slide, title, body, 1.05 + (index % 2) * 5.75, 1.55 + Math.floor(index / 2) * 2.15, 4.95, 1.55, index % 2 ? colors.sky : colors.leaf);
});
addFooter(slide, 6);

slide = createSlide("Database Design", "The first version centers on service request data.");
addCard(slide, "SERVICE_REQUEST", "startupName, founderName, email, phone, city, stage, service, budget, message, status, createdAt, updatedAt", 1, 1.45, 5.1, 3.3, colors.leaf);
addCard(slide, "SERVICE", "name, category, description", 7.1, 1.45, 2.25, 1.45, colors.sky);
addCard(slide, "ADMIN", "name, email, role", 7.1, 3.3, 2.25, 1.45, colors.saffron);
slide.addText("SERVICE and ADMIN relate to many SERVICE_REQUEST records", {
  x: 1.05,
  y: 5.45,
  w: 10.5,
  h: 0.4,
  fontSize: 15,
  bold: true,
  color: colors.ink,
  align: "center",
  margin: 0
});
addFooter(slide, 7);

slide = createSlide("Implementation", "The project is implemented as a practical full-stack web application.");
addBullets(
  slide,
  [
    "Next.js app router powers the frontend.",
    "Tailwind CSS handles responsive styling.",
    "Express.js provides REST API endpoints.",
    "Mongoose connects request data to MongoDB.",
    "The API includes a memory fallback for local demonstrations."
  ],
  0.95,
  1.55,
  6.2,
  4.6
);
addCard(slide, "Main Files", "app/page.js, components/QuoteForm.jsx, components/AdminPanel.jsx, server/index.js, server/models/ServiceRequest.js", 7.4, 1.55, 4.4, 2.0, colors.leaf);
addFooter(slide, 8);

slide = createSlide("Testing", "Testing focuses on correctness, usability, and reliable request handling.");
addBullets(
  slide,
  [
    "Functional testing for request form submission.",
    "API testing for create, list, health, and status update endpoints.",
    "UI testing for responsive website layout.",
    "Build testing with Next.js production build.",
    "Database testing with MongoDB connection and request storage."
  ],
  1,
  1.55,
  10.9,
  4.6
);
addFooter(slide, 9);

slide = createSlide("Conclusion and Future Enhancements", "StartupGrow provides a scalable base for digital startup services.");
addBullets(
  slide,
  [
    "The project delivers a responsive frontend, backend API, MongoDB model, and admin dashboard.",
    "It helps startups request affordable digital services from one platform.",
    "Future versions can add client login, payments, project tracking, analytics, and AI suggestions."
  ],
  0.95,
  1.55,
  7.2,
  3.7
);
addCard(slide, "Result", "A practical platform for Indian startups to begin building their online presence.", 8.55, 1.65, 3.25, 1.65, colors.leaf);
addFooter(slide, 10);

const output = path.join(__dirname, "..", "docs", "StartupGrow_Presentation.pptx");

pptx.writeFile({ fileName: output }).then(() => {
  console.log(`Presentation written to ${output}`);
});
