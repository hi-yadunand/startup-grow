from datetime import datetime, timezone
from pathlib import Path
from xml.sax.saxutils import escape
from zipfile import ZIP_DEFLATED, ZipFile


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "docs" / "StartupGrow_Presentation.pptx"

EMU = 914400
SLIDE_W = 13.333
SLIDE_H = 7.5

COLORS = {
    "ink": "17201B",
    "leaf": "1F7A4D",
    "saffron": "F59F30",
    "sky": "22577A",
    "mist": "F5F8F2",
    "white": "FFFFFF",
    "muted": "64748B",
    "line": "D8E1D8",
}


def emu(value):
    return int(value * EMU)


def font_size(points):
    return int(points * 100)


def solid_fill(color):
    return f'<a:solidFill><a:srgbClr val="{color}"/></a:solidFill>'


def rect_shape(shape_id, x, y, w, h, fill, line=None):
    line_xml = (
        f'<a:ln><a:solidFill><a:srgbClr val="{line}"/></a:solidFill></a:ln>'
        if line
        else "<a:ln><a:noFill/></a:ln>"
    )
    return f"""
    <p:sp>
      <p:nvSpPr>
        <p:cNvPr id="{shape_id}" name="Rectangle {shape_id}"/>
        <p:cNvSpPr/>
        <p:nvPr/>
      </p:nvSpPr>
      <p:spPr>
        <a:xfrm><a:off x="{emu(x)}" y="{emu(y)}"/><a:ext cx="{emu(w)}" cy="{emu(h)}"/></a:xfrm>
        <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
        {solid_fill(fill)}
        {line_xml}
      </p:spPr>
    </p:sp>
    """


def paragraph(text, size, color, bold=False, bullet=False):
    bold_attr = ' b="1"' if bold else ""
    bullet_xml = (
        f'<a:pPr marL="285750" indent="-171450"><a:buChar char="-"/><a:defRPr sz="{font_size(size)}">{solid_fill(color)}</a:defRPr></a:pPr>'
        if bullet
        else f'<a:pPr><a:defRPr sz="{font_size(size)}">{solid_fill(color)}</a:defRPr></a:pPr>'
    )
    return f"""
    <a:p>
      {bullet_xml}
      <a:r>
        <a:rPr lang="en-US" sz="{font_size(size)}"{bold_attr}>
          {solid_fill(color)}
          <a:latin typeface="Aptos"/>
        </a:rPr>
        <a:t>{escape(text)}</a:t>
      </a:r>
    </a:p>
    """


def text_box(shape_id, text, x, y, w, h, size=18, color=None, bold=False, bullet=False, align="l"):
    color = color or COLORS["ink"]
    items = text if isinstance(text, list) else [text]
    paragraphs = "\n".join(paragraph(item, size, color, bold=bold and index == 0 and not bullet, bullet=bullet) for index, item in enumerate(items))
    return f"""
    <p:sp>
      <p:nvSpPr>
        <p:cNvPr id="{shape_id}" name="TextBox {shape_id}"/>
        <p:cNvSpPr txBox="1"/>
        <p:nvPr/>
      </p:nvSpPr>
      <p:spPr>
        <a:xfrm><a:off x="{emu(x)}" y="{emu(y)}"/><a:ext cx="{emu(w)}" cy="{emu(h)}"/></a:xfrm>
        <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
        <a:noFill/>
        <a:ln><a:noFill/></a:ln>
      </p:spPr>
      <p:txBody>
        <a:bodyPr wrap="square" anchor="t"/>
        <a:lstStyle/>
        {paragraphs}
      </p:txBody>
    </p:sp>
    """


def card(shape_id, title, body, x, y, w, h, accent):
    return "\n".join(
        [
            rect_shape(shape_id, x, y, w, h, COLORS["white"], COLORS["line"]),
            rect_shape(shape_id + 1, x, y, 0.08, h, accent, accent),
            text_box(shape_id + 2, title, x + 0.25, y + 0.18, w - 0.35, 0.3, 12, COLORS["ink"], True),
            text_box(shape_id + 3, body, x + 0.25, y + 0.62, w - 0.35, h - 0.72, 9, COLORS["muted"]),
        ]
    )


def slide_xml(elements, background=COLORS["mist"]):
    return f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"
       xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
       xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:cSld>
    <p:bg><p:bgPr>{solid_fill(background)}<a:effectLst/></p:bgPr></p:bg>
    <p:spTree>
      <p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>
      <p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>
      {''.join(elements)}
    </p:spTree>
  </p:cSld>
  <p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr>
</p:sld>
"""


def title_and_footer(index, title, subtitle=None):
    elements = [
        text_box(20, title, 0.55, 0.35, 8.4, 0.45, 22, COLORS["ink"], True),
        text_box(21, f"StartupGrow - {index}", 10.8, 7.08, 1.8, 0.2, 7, COLORS["muted"]),
    ]
    if subtitle:
        elements.append(text_box(22, subtitle, 0.58, 0.82, 9.7, 0.28, 9, COLORS["muted"]))
    return elements


def build_slides():
    slides = []

    slides.append(
        slide_xml(
            [
                text_box(2, "StartupGrow", 0.75, 1.5, 8.2, 0.75, 44, COLORS["white"], True),
                text_box(3, "A Digital Solutions Platform for Indian Startups", 0.78, 2.35, 7.5, 0.35, 18, "DDEFE4"),
                text_box(4, "Yadunand Pavithran - Nashid Nihal C - Gokul Krishna", 0.8, 5.95, 7.6, 0.28, 12, "DDEFE4"),
                rect_shape(5, 9.3, 1.55, 1.15, 0.38, COLORS["leaf"], COLORS["leaf"]),
                text_box(6, "Next.js", 9.52, 1.64, 0.75, 0.18, 8, COLORS["white"], True),
                rect_shape(7, 10.65, 1.55, 1.25, 0.38, COLORS["sky"], COLORS["sky"]),
                text_box(8, "Express.js", 10.82, 1.64, 0.95, 0.18, 8, COLORS["white"], True),
                rect_shape(9, 9.95, 2.15, 1.35, 0.38, COLORS["saffron"], COLORS["saffron"]),
                text_box(10, "MongoDB", 10.18, 2.24, 0.95, 0.18, 8, COLORS["white"], True),
            ],
            COLORS["ink"],
        )
    )

    elements = title_and_footer(2, "Problem Statement", "Early-stage startups need credible digital presence without heavy agency costs.")
    elements += [
        text_box(
            30,
            [
                "Limited technical skills make website and marketing setup difficult.",
                "Multiple service providers increase cost, delay, and communication issues.",
                "Poor SEO, social media, and content strategy reduce customer reach.",
                "StartupGrow centralizes affordable digital growth services.",
            ],
            0.9,
            1.65,
            6.1,
            4.5,
            15,
            COLORS["ink"],
            bullet=True,
        ),
        card(40, "Target Users", "Indian startups at idea, MVP, early customer, and scaling stages.", 7.45, 1.5, 4.4, 1.25, COLORS["leaf"]),
        card(50, "Main Need", "A simple platform to request digital services and begin online growth.", 7.45, 3.05, 4.4, 1.25, COLORS["sky"]),
    ]
    slides.append(slide_xml(elements))

    elements = title_and_footer(3, "Project Objectives", "The project combines service discovery, request collection, and admin tracking.")
    elements.append(
        text_box(
            30,
            [
                "Help startups build professional websites.",
                "Provide SEO, PPC, social media, content, and email marketing.",
                "Offer affordable and scalable solutions.",
                "Create a simple service request and communication system.",
                "Support request management through a basic admin dashboard.",
            ],
            1,
            1.6,
            10.9,
            4.7,
            16,
            COLORS["ink"],
            bullet=True,
        )
    )
    slides.append(slide_xml(elements))

    elements = title_and_footer(4, "Core Services", "StartupGrow works as a one-stop digital service platform.")
    services = [
        ("SEO", "Improve search ranking and organic traffic."),
        ("PPC Advertising", "Run focused paid campaigns on Google and Instagram."),
        ("Social Media", "Manage profiles, posts, and campaigns."),
        ("Content Marketing", "Create blogs, videos, and launch content."),
        ("Email Marketing", "Send promotional campaigns and newsletters."),
        ("Web Development", "Build responsive websites that convert visitors."),
    ]
    for index, (title, body) in enumerate(services):
        col = index % 3
        row = index // 3
        elements.append(card(40 + index * 5, title, body, 0.75 + col * 4.1, 1.45 + row * 2.05, 3.55, 1.55, COLORS["sky"] if index % 2 else COLORS["leaf"]))
    slides.append(slide_xml(elements))

    elements = title_and_footer(5, "Proposed System", "The platform connects founders, requests, admin tracking, and database storage.")
    elements += [
        card(40, "Startup Founder", "Explores services and submits project details.", 0.8, 2.2, 2.25, 1.15, COLORS["leaf"]),
        card(50, "Next.js Frontend", "Responsive website, service listing, request form, dashboard UI.", 3.65, 1.65, 2.65, 1.7, COLORS["sky"]),
        card(60, "Express API", "Validates requests and manages records.", 6.95, 2.2, 2.25, 1.15, COLORS["saffron"]),
        card(70, "MongoDB", "Stores client details and service requests.", 9.8, 2.2, 2.25, 1.15, COLORS["leaf"]),
        text_box(80, "Founder -> Frontend -> API -> Database", 1.35, 4.55, 10.5, 0.4, 20, COLORS["ink"], True),
    ]
    slides.append(slide_xml(elements))

    elements = title_and_footer(6, "Modules of the System", "Each module maps to a clear project responsibility.")
    modules = [
        ("User Interface Module", "Displays website content and service navigation."),
        ("Service Module", "Shows all digital services with details."),
        ("Contact & Request Module", "Collects client information and project goals."),
        ("Admin Module", "Manages client details and tracks request status."),
    ]
    for index, (title, body) in enumerate(modules):
        elements.append(card(40 + index * 5, title, body, 1.05 + (index % 2) * 5.75, 1.55 + (index // 2) * 2.15, 4.95, 1.55, COLORS["sky"] if index % 2 else COLORS["leaf"]))
    slides.append(slide_xml(elements))

    elements = title_and_footer(7, "Database Design", "The first version centers on service request data.")
    elements += [
        card(40, "SERVICE_REQUEST", "startupName, founderName, email, phone, city, stage, service, budget, message, status, createdAt, updatedAt", 1, 1.45, 5.1, 3.3, COLORS["leaf"]),
        card(50, "SERVICE", "name, category, description", 7.1, 1.45, 2.25, 1.45, COLORS["sky"]),
        card(60, "ADMIN", "name, email, role", 7.1, 3.3, 2.25, 1.45, COLORS["saffron"]),
        text_box(70, "SERVICE and ADMIN relate to many SERVICE_REQUEST records", 1.05, 5.45, 10.5, 0.4, 15, COLORS["ink"], True),
    ]
    slides.append(slide_xml(elements))

    elements = title_and_footer(8, "Implementation", "The project is implemented as a practical full-stack web application.")
    elements += [
        text_box(
            30,
            [
                "Next.js app router powers the frontend.",
                "Tailwind CSS handles responsive styling.",
                "Express.js provides REST API endpoints.",
                "Mongoose connects request data to MongoDB.",
                "The API includes a memory fallback for local demonstrations.",
            ],
            0.95,
            1.55,
            6.2,
            4.6,
            15,
            COLORS["ink"],
            bullet=True,
        ),
        card(40, "Main Files", "app/page.js, components/QuoteForm.jsx, components/AdminPanel.jsx, server/index.js, server/models/ServiceRequest.js", 7.4, 1.55, 4.4, 2.0, COLORS["leaf"]),
    ]
    slides.append(slide_xml(elements))

    elements = title_and_footer(9, "Testing", "Testing focuses on correctness, usability, and reliable request handling.")
    elements.append(
        text_box(
            30,
            [
                "Functional testing for request form submission.",
                "API testing for create, list, health, and status update endpoints.",
                "UI testing for responsive website layout.",
                "Build testing with Next.js production build.",
                "Database testing with MongoDB connection and request storage.",
            ],
            1,
            1.55,
            10.9,
            4.6,
            16,
            COLORS["ink"],
            bullet=True,
        )
    )
    slides.append(slide_xml(elements))

    elements = title_and_footer(10, "Conclusion and Future Enhancements", "StartupGrow provides a scalable base for digital startup services.")
    elements += [
        text_box(
            30,
            [
                "The project delivers a responsive frontend, backend API, MongoDB model, and admin dashboard.",
                "It helps startups request affordable digital services from one platform.",
                "Future versions can add client login, payments, project tracking, analytics, and AI suggestions.",
            ],
            0.95,
            1.55,
            7.2,
            3.7,
            15,
            COLORS["ink"],
            bullet=True,
        ),
        card(40, "Result", "A practical platform for Indian startups to begin building their online presence.", 8.55, 1.65, 3.25, 1.65, COLORS["leaf"]),
    ]
    slides.append(slide_xml(elements))

    return slides


def content_types(slide_count):
    slide_overrides = "\n".join(
        f'<Override PartName="/ppt/slides/slide{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>'
        for i in range(1, slide_count + 1)
    )
    return f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>
  <Override PartName="/ppt/slideMasters/slideMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml"/>
  <Override PartName="/ppt/slideLayouts/slideLayout1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"/>
  <Override PartName="/ppt/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>
  {slide_overrides}
</Types>
"""


def package_rels():
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>
"""


def presentation_xml(slide_count):
    slide_ids = "\n".join(
        f'<p:sldId id="{255 + i}" r:id="rId{i + 1}"/>' for i in range(1, slide_count + 1)
    )
    return f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:presentation xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"
                xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
                xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:sldMasterIdLst><p:sldMasterId id="2147483648" r:id="rId1"/></p:sldMasterIdLst>
  <p:sldIdLst>{slide_ids}</p:sldIdLst>
  <p:sldSz cx="{emu(SLIDE_W)}" cy="{emu(SLIDE_H)}" type="wide"/>
  <p:notesSz cx="{emu(7.5)}" cy="{emu(10)}"/>
  <p:defaultTextStyle/>
</p:presentation>
"""


def presentation_rels(slide_count):
    rels = [
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml"/>'
    ]
    for i in range(1, slide_count + 1):
        rels.append(
            f'<Relationship Id="rId{i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide{i}.xml"/>'
        )
    return f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  {''.join(rels)}
</Relationships>
"""


def slide_rels():
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>
</Relationships>
"""


def slide_master():
    return f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sldMaster xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"
             xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
             xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:cSld>
    <p:bg><p:bgPr>{solid_fill(COLORS["mist"])}<a:effectLst/></p:bgPr></p:bg>
    <p:spTree>
      <p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>
      <p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>
    </p:spTree>
  </p:cSld>
  <p:clrMap bg1="lt1" tx1="dk1" bg2="lt2" tx2="dk2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink"/>
  <p:sldLayoutIdLst><p:sldLayoutId id="2147483649" r:id="rId1"/></p:sldLayoutIdLst>
  <p:txStyles><p:titleStyle/><p:bodyStyle/><p:otherStyle/></p:txStyles>
</p:sldMaster>
"""


def slide_master_rels():
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="../theme/theme1.xml"/>
</Relationships>
"""


def slide_layout():
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"
             xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
             xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"
             type="blank" preserve="1">
  <p:cSld name="Blank">
    <p:spTree>
      <p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>
      <p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>
    </p:spTree>
  </p:cSld>
  <p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr>
</p:sldLayout>
"""


def slide_layout_rels():
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml"/>
</Relationships>
"""


def theme():
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="StartupGrow">
  <a:themeElements>
    <a:clrScheme name="StartupGrow">
      <a:dk1><a:srgbClr val="17201B"/></a:dk1>
      <a:lt1><a:srgbClr val="FFFFFF"/></a:lt1>
      <a:dk2><a:srgbClr val="22577A"/></a:dk2>
      <a:lt2><a:srgbClr val="F5F8F2"/></a:lt2>
      <a:accent1><a:srgbClr val="1F7A4D"/></a:accent1>
      <a:accent2><a:srgbClr val="F59F30"/></a:accent2>
      <a:accent3><a:srgbClr val="22577A"/></a:accent3>
      <a:accent4><a:srgbClr val="64748B"/></a:accent4>
      <a:accent5><a:srgbClr val="D8E1D8"/></a:accent5>
      <a:accent6><a:srgbClr val="17201B"/></a:accent6>
      <a:hlink><a:srgbClr val="22577A"/></a:hlink>
      <a:folHlink><a:srgbClr val="1F7A4D"/></a:folHlink>
    </a:clrScheme>
    <a:fontScheme name="StartupGrow">
      <a:majorFont><a:latin typeface="Aptos Display"/></a:majorFont>
      <a:minorFont><a:latin typeface="Aptos"/></a:minorFont>
    </a:fontScheme>
    <a:fmtScheme name="StartupGrow">
      <a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:fillStyleLst>
      <a:lnStyleLst><a:ln w="9525"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln></a:lnStyleLst>
      <a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle></a:effectStyleLst>
      <a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:bgFillStyleLst>
    </a:fmtScheme>
  </a:themeElements>
</a:theme>
"""


def core_props():
    now = datetime.now(timezone.utc).replace(microsecond=0).isoformat()
    return f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
                   xmlns:dc="http://purl.org/dc/elements/1.1/"
                   xmlns:dcterms="http://purl.org/dc/terms/"
                   xmlns:dcmitype="http://purl.org/dc/dcmitype/"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>StartupGrow</dc:title>
  <dc:subject>Digital Solutions Platform for Indian Startups</dc:subject>
  <dc:creator>StartupGrow Team</dc:creator>
  <cp:lastModifiedBy>StartupGrow Team</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">{now}</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">{now}</dcterms:modified>
</cp:coreProperties>
"""


def app_props(slide_count):
    return f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"
            xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
  <Application>StartupGrow Generator</Application>
  <PresentationFormat>Widescreen</PresentationFormat>
  <Slides>{slide_count}</Slides>
  <Company>StartupGrow</Company>
</Properties>
"""


def write_pptx():
    slides = build_slides()
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with ZipFile(OUTPUT, "w", ZIP_DEFLATED) as deck:
        deck.writestr("[Content_Types].xml", content_types(len(slides)))
        deck.writestr("_rels/.rels", package_rels())
        deck.writestr("docProps/core.xml", core_props())
        deck.writestr("docProps/app.xml", app_props(len(slides)))
        deck.writestr("ppt/presentation.xml", presentation_xml(len(slides)))
        deck.writestr("ppt/_rels/presentation.xml.rels", presentation_rels(len(slides)))
        deck.writestr("ppt/slideMasters/slideMaster1.xml", slide_master())
        deck.writestr("ppt/slideMasters/_rels/slideMaster1.xml.rels", slide_master_rels())
        deck.writestr("ppt/slideLayouts/slideLayout1.xml", slide_layout())
        deck.writestr("ppt/slideLayouts/_rels/slideLayout1.xml.rels", slide_layout_rels())
        deck.writestr("ppt/theme/theme1.xml", theme())
        for index, slide in enumerate(slides, start=1):
            deck.writestr(f"ppt/slides/slide{index}.xml", slide)
            deck.writestr(f"ppt/slides/_rels/slide{index}.xml.rels", slide_rels())
    print(f"Presentation written to {OUTPUT}")


if __name__ == "__main__":
    write_pptx()
