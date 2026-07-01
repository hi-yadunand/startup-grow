const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "..", "docs", "StartupGrow_Exam_Brief_Answer.md");
const outputPath = path.join(__dirname, "..", "docs", "StartupGrow_Exam_Brief_Answer.pdf");

const markdown = fs.readFileSync(inputPath, "utf8").replace(/\r\n/g, "\n");

const pageWidth = 595.28;
const pageHeight = 841.89;
const marginX = 54;
const marginTop = 58;
const marginBottom = 52;
const usableWidth = pageWidth - marginX * 2;

const pages = [];
let current = [];
let y = pageHeight - marginTop;
let pageNumber = 1;

function escapePdf(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function maxCharsFor(size, indent = 0) {
  return Math.max(28, Math.floor((usableWidth - indent) / (size * 0.51)));
}

function wrapText(text, size, indent = 0) {
  const max = maxCharsFor(size, indent);
  const words = text.split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";

  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > max && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }

  if (line) {
    lines.push(line);
  }

  return lines.length ? lines : [""];
}

function newPage() {
  if (current.length) {
    addRawText(`Page ${pageNumber}`, "F1", 8, pageWidth - marginX - 35, 28);
    pages.push(current);
    pageNumber += 1;
  }
  current = [];
  y = pageHeight - marginTop;
}

function ensureSpace(height) {
  if (y - height < marginBottom) {
    newPage();
  }
}

function addRawText(text, font, size, x, textY) {
  current.push(`BT /${font} ${size} Tf 1 0 0 1 ${x.toFixed(2)} ${textY.toFixed(2)} Tm (${escapePdf(text)}) Tj ET`);
}

function addText(text, options = {}) {
  const size = options.size || 10.5;
  const font = options.font || "F1";
  const indent = options.indent || 0;
  const leading = options.leading || size + 4.2;
  const before = options.before || 0;
  const after = options.after || 0;
  const prefix = options.prefix || "";
  const lines = wrapText(text, size, indent + (prefix ? 13 : 0));

  ensureSpace(before + lines.length * leading + after);
  y -= before;

  lines.forEach((line, index) => {
    const x = marginX + indent + (index > 0 && prefix ? 13 : 0);
    addRawText(index === 0 ? `${prefix}${line}` : line, font, size, x, y);
    y -= leading;
  });

  y -= after;
}

function addBlank(height = 6) {
  ensureSpace(height);
  y -= height;
}

function parseLine(line) {
  const trimmed = line.trim();

  if (!trimmed) {
    addBlank(4);
    return;
  }

  if (trimmed.startsWith("# ")) {
    addText(trimmed.slice(2), { font: "F2", size: 20, leading: 25, before: 0, after: 8 });
    return;
  }

  if (trimmed.startsWith("## ")) {
    addText(trimmed.slice(3), { font: "F2", size: 13.5, leading: 18, before: 10, after: 3 });
    return;
  }

  if (trimmed.startsWith("### ")) {
    addText(trimmed.slice(4), { font: "F2", size: 11.5, leading: 16, before: 6, after: 2 });
    return;
  }

  if (trimmed.startsWith("- ")) {
    addText(trimmed.slice(2), { size: 10.2, leading: 14.2, indent: 14, prefix: "- " });
    return;
  }

  if (/^[A-Za-z][A-Za-z /&-]+:$/.test(trimmed)) {
    addText(trimmed, { font: "F2", size: 10.8, leading: 15, before: 3, after: 1 });
    return;
  }

  addText(trimmed, { size: 10.5, leading: 14.8 });
}

markdown.split("\n").forEach(parseLine);
newPage();

const objects = [];

function addObject(content) {
  objects.push(content);
  return objects.length;
}

const fontRegular = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
const fontBold = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");

const pageObjectIds = [];

for (const page of pages) {
  const stream = page.join("\n");
  const contentObject = addObject(`<< /Length ${Buffer.byteLength(stream, "utf8")} >>\nstream\n${stream}\nendstream`);
  const pageObject = addObject(
    `<< /Type /Page /Parent __PAGES__ /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontRegular} 0 R /F2 ${fontBold} 0 R >> >> /Contents ${contentObject} 0 R >>`
  );
  pageObjectIds.push(pageObject);
}

const pagesObject = addObject(
  `<< /Type /Pages /Kids [${pageObjectIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageObjectIds.length} >>`
);
const catalogObject = addObject(`<< /Type /Catalog /Pages ${pagesObject} 0 R >>`);

for (const id of pageObjectIds) {
  objects[id - 1] = objects[id - 1].replace("__PAGES__", `${pagesObject} 0 R`);
}

let pdf = "%PDF-1.4\n";
const offsets = [0];

objects.forEach((object, index) => {
  offsets.push(Buffer.byteLength(pdf, "utf8"));
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
});

const xrefOffset = Buffer.byteLength(pdf, "utf8");
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
for (let i = 1; i < offsets.length; i += 1) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogObject} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

fs.writeFileSync(outputPath, pdf);
console.log(outputPath);
