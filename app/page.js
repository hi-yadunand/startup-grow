import {
  ArrowRight,
  BarChart3,
  Code2,
  Compass,
  Mail,
  MousePointerClick,
  PenLine,
  Play,
  Search,
  Send,
  Share2,
  Sparkles,
  Users
} from "lucide-react";
import AdminPanel from "@/components/AdminPanel";
import QuoteForm from "@/components/QuoteForm";

const services = [
  {
    title: "SEO",
    description: "Keyword planning, technical fixes, and search content for steady organic traffic.",
    icon: Search
  },
  {
    title: "PPC Advertising",
    description: "Google and Instagram campaigns designed around startup budgets and conversion goals.",
    icon: MousePointerClick
  },
  {
    title: "Social Media Marketing",
    description: "Content calendars, profile management, and founder-led storytelling for growing teams.",
    icon: Share2
  },
  {
    title: "Content Marketing",
    description: "Blogs, videos, launch posts, and product education that turn attention into trust.",
    icon: PenLine
  },
  {
    title: "Email Marketing",
    description: "Campaigns, newsletters, and launch sequences for leads, users, and early customers.",
    icon: Mail
  },
  {
    title: "Web Design & Development",
    description: "Responsive websites, landing pages, and product interfaces built for conversion.",
    icon: Code2
  }
];

const portfolio = [
  {
    name: "Fintech MVP",
    result: "Built launch site, lead form, and investor-ready brand kit.",
    metric: "42% more demo requests",
    tags: ["Web", "Branding"],
    image: "/arolax/works/work-02.webp"
  },
  {
    name: "D2C Food Brand",
    result: "Improved Instagram content flow and product page messaging.",
    metric: "3.1x social reach",
    tags: ["Social", "Content"],
    image: "/arolax/works/work-03.webp"
  },
  {
    name: "Edtech Platform",
    result: "Created SEO content plan and high-intent landing pages.",
    metric: "68% traffic lift",
    tags: ["SEO", "Growth"],
    image: "/arolax/works/work-01.webp"
  },
  {
    name: "Founder Launch",
    result: "Shaped pitch-ready positioning and a conversion-focused launch flow.",
    metric: "2.4x inquiry quality",
    tags: ["PPC", "Identity"],
    image: "/arolax/works/work-04.webp"
  }
];

const processSteps = [
  {
    title: "Requirement analysis",
    description: "Founder goals, market, city, budget, and launch urgency are mapped into one brief.",
    icon: Users
  },
  {
    title: "Design",
    description: "Visual direction, offer hierarchy, and page structure are shaped for credibility.",
    icon: PenLine
  },
  {
    title: "Development",
    description: "Responsive pages, forms, and request records are wired into the platform.",
    icon: Code2
  },
  {
    title: "Testing and deployment",
    description: "The team checks flows, records, and campaign handoff before launch.",
    icon: BarChart3
  }
];

const serviceNames = services.map((service) => service.title);

function ButtonGroup({ href, children, tone = "dark" }) {
  const isLight = tone === "light";
  const circleClass = isLight
    ? "border-white/20 bg-white text-ink"
    : "border-ink bg-ink text-white";
  const labelClass = isLight
    ? "border-white/20 bg-white text-ink"
    : "border-ink bg-ink text-white";

  return (
    <a className="focus-ring group inline-flex w-fit items-center rounded-full" href={href}>
      <span
        className={`grid h-12 w-12 place-items-center rounded-full border transition group-hover:-mr-2 group-hover:scale-75 ${circleClass}`}
      >
        <ArrowRight size={17} aria-hidden="true" />
      </span>
      <span
        className={`grid h-12 place-items-center rounded-full border px-5 text-sm font-bold uppercase whitespace-nowrap transition ${labelClass}`}
      >
        {children}
      </span>
      <span
        className={`-ml-2 grid h-12 w-12 scale-75 place-items-center rounded-full border opacity-0 transition group-hover:ml-0 group-hover:scale-100 group-hover:opacity-100 ${circleClass}`}
      >
        <ArrowRight size={17} aria-hidden="true" />
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-cream text-ink">
      <section className="relative isolate min-h-[92vh] bg-acid">
        <img
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src="/arolax/gallery/hero-lime.webp"
          alt=""
          aria-hidden="true"
        />

        <header className="relative z-10">
          <nav className="mx-auto flex max-w-[1720px] items-center justify-between gap-5 px-4 py-5 sm:px-6 lg:px-10">
            <a className="focus-ring flex items-center gap-3 rounded-md" href="#top" aria-label="StartupGrow home">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-acid">
                <Sparkles size={19} aria-hidden="true" />
              </span>
              <span className="text-xl font-black uppercase">StartupGrow</span>
            </a>

            <div className="hidden items-center gap-8 rounded-full border border-ink/10 bg-white/25 px-6 py-3 text-sm font-bold uppercase backdrop-blur md:flex">
              <a className="focus-ring rounded-md hover:text-black/60" href="#services">Services</a>
              <a className="focus-ring rounded-md hover:text-black/60" href="#portfolio">Work</a>
              <a className="focus-ring rounded-md hover:text-black/60" href="#dashboard">Dashboard</a>
            </div>

            <div className="hidden sm:block">
              <ButtonGroup href="#quote">Get started</ButtonGroup>
            </div>
            <a
              className="focus-ring grid h-11 w-11 place-items-center rounded-full bg-ink text-white sm:hidden"
              href="#quote"
              aria-label="Get started"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </nav>
        </header>

        <div
          id="top"
          className="relative z-10 mx-auto grid max-w-[1720px] gap-10 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-[1fr_390px] lg:px-10 lg:pb-20 lg:pt-16"
        >
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white/25 px-4 py-2 text-sm font-bold uppercase backdrop-blur">
              <Compass size={16} aria-hidden="true" />
              Digital growth agency for Indian startups
            </p>
            <h1 className="mt-8 max-w-5xl text-6xl font-black uppercase leading-[0.88] sm:text-8xl lg:text-[150px] xl:text-[190px] 2xl:text-[216px]">
              Startup
              <br />
              Grow
            </h1>
          </div>

          <div className="self-end">
            <div className="overflow-hidden rounded-lg bg-ink p-3 text-white shadow-arolax">
              <div className="relative overflow-hidden rounded-md">
                <img
                  className="h-48 w-full object-cover sm:h-64 lg:h-72"
                  src="/arolax/gallery/media-tile.webp"
                  alt="Abstract black digital blocks with orange light accents"
                />
                <span className="absolute inset-0 bg-black/10" aria-hidden="true" />
                <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-acid text-ink">
                  <Play size={22} fill="currentColor" aria-hidden="true" />
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 px-1 py-4 text-center">
                <div>
                  <p className="text-2xl font-black">6</p>
                  <p className="mt-1 text-xs uppercase text-white/60">Services</p>
                </div>
                <div>
                  <p className="text-2xl font-black">4</p>
                  <p className="mt-1 text-xs uppercase text-white/60">Stages</p>
                </div>
                <div>
                  <p className="text-2xl font-black">1</p>
                  <p className="mt-1 text-xs uppercase text-white/60">Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1720px] px-4 pb-12 sm:px-6 lg:px-10">
          <div className="grid gap-8 border-t border-ink/20 pt-10 lg:grid-cols-[0.35fr_0.65fr]">
            <p className="text-sm font-black uppercase">Who we are</p>
            <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <p className="max-w-3xl text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
                StartupGrow turns early-stage ideas into credible digital launches with brand, website, marketing, and request tracking in one place.
              </p>
              <ButtonGroup href="#quote">Build brief</ButtonGroup>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_0.25fr] lg:items-end">
            <h2 className="max-w-4xl text-5xl font-black uppercase leading-none sm:text-6xl lg:text-8xl">
              Selected work
            </h2>
            <p className="text-lg leading-8 text-zinc-600">
              The original Arolax portfolio rhythm, adapted for startup websites, marketing, and growth proof points.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {portfolio.map((item) => (
              <article key={item.name} className="group">
                <div className="overflow-hidden rounded-lg bg-zinc-100">
                  <img
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    src={item.image}
                    alt={`${item.name} visual mockup`}
                  />
                </div>
                <div className="mt-6">
                  <p className="text-sm font-black uppercase text-zinc-500">{item.metric}</p>
                  <h3 className="mt-2 text-2xl font-black leading-tight">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{item.result}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-ink/10 px-4 py-2 text-xs font-bold uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lavender py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1720px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.7fr_0.3fr] lg:px-10">
          <h2 className="max-w-5xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Building a growth system is hard. StartupGrow keeps the work sharp, simple, and ready for launch.
          </h2>
          <div className="flex items-end justify-start lg:justify-end">
            <p className="text-[150px] font-black leading-none sm:text-[220px] lg:text-[300px]">6</p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-ink py-20 text-white lg:py-28">
        <div className="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-5xl">
            <p className="text-sm font-black uppercase text-white/50">Core services</p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              We solve startup growth problems with a different method.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-lg bg-soot p-7 transition duration-300 hover:-translate-y-1 hover:bg-[#242424] lg:p-9"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-lg font-black text-white/70">0{index + 1}</span>
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-acid text-ink">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="mt-16 text-2xl font-black leading-tight">{service.title}</h3>
                  <p className="mt-5 leading-7 text-white/60">{service.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-14 flex justify-center">
            <p className="rounded-full bg-soot px-6 py-4 text-center text-sm font-semibold text-white/75 sm:px-10">
              Save your precious time finding a solution. <a className="focus-ring rounded-md text-white underline" href="#quote">Request a quote now</a>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mint py-20 lg:py-28">
        <div className="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr]">
            <div>
              <p className="text-sm font-black uppercase text-zinc-500">Process</p>
              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                From founder brief to live digital system.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article key={step.title} className="border-l border-ink/20 py-6 pl-6">
                    <span className="text-sm font-black text-zinc-500">0{index + 1}</span>
                    <div className="mt-8 grid h-16 w-16 place-items-center rounded-full bg-ink text-white">
                      <Icon size={23} aria-hidden="true" />
                    </div>
                    <h3 className="mt-8 text-2xl font-black">{step.title}</h3>
                    <p className="mt-4 leading-7 text-zinc-600">{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="bg-blush py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1720px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.42fr_0.58fr] lg:px-10">
          <div>
            <p className="text-sm font-black uppercase text-zinc-500">Request module</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              A clean path from inquiry to service planning.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              StartupGrow collects the details a digital team needs: stage, budget, city, service area, and business goal. The backend stores each request for follow-up.
            </p>
            <div className="mt-8 grid gap-4">
              {["Affordable service bundles", "Responsive startup website", "MongoDB-backed request records"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-black uppercase">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white">
                    <ArrowRight size={16} aria-hidden="true" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <QuoteForm services={serviceNames} />
        </div>
      </section>

      <AdminPanel />

      <section className="bg-mint py-20 text-center lg:py-28">
        <div className="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10">
          <p className="text-2xl font-normal uppercase sm:text-3xl">Have a startup in mind?</p>
          <h2 className="mx-auto mt-5 max-w-5xl text-6xl font-black uppercase leading-none sm:text-8xl lg:text-[150px]">
            Let's work together
          </h2>
          <div className="mt-8 flex justify-center">
            <ButtonGroup href="#quote">Contact us</ButtonGroup>
          </div>
        </div>
      </section>

      <footer className="bg-ink py-16 text-white">
        <div className="mx-auto grid max-w-[1720px] gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-10">
          <div>
            <a className="focus-ring flex w-fit items-center gap-3 rounded-md" href="#top" aria-label="StartupGrow home">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-acid text-ink">
                <Sparkles size={20} aria-hidden="true" />
              </span>
              <span className="text-2xl font-black uppercase">StartupGrow</span>
            </a>
            <p className="mt-6 max-w-sm leading-7 text-white/60">
              Digital Solutions Platform for Indian Startups.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-black">Service</h3>
            <ul className="mt-5 space-y-3 text-white/60">
              <li><a className="focus-ring rounded-md hover:text-white" href="#services">Web Design</a></li>
              <li><a className="focus-ring rounded-md hover:text-white" href="#services">Branding</a></li>
              <li><a className="focus-ring rounded-md hover:text-white" href="#services">SEO</a></li>
              <li><a className="focus-ring rounded-md hover:text-white" href="#services">Marketing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-black">Company</h3>
            <ul className="mt-5 space-y-3 text-white/60">
              <li><a className="focus-ring rounded-md hover:text-white" href="#top">Home</a></li>
              <li><a className="focus-ring rounded-md hover:text-white" href="#portfolio">Work</a></li>
              <li><a className="focus-ring rounded-md hover:text-white" href="#quote">Contact</a></li>
              <li><a className="focus-ring rounded-md hover:text-white" href="#dashboard">Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-black">Project team</h3>
            <p className="mt-5 leading-7 text-white/60">
              Yadunand Pavithran
              <br />
              Nashid Nihal C
              <br />
              Gokul Krishna
            </p>
            <a className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md text-sm font-bold uppercase text-white underline" href="#quote">
              Send request
              <Send size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
