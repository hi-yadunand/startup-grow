import {
  ArrowRight,
  BarChart3,
  Code2,
  Compass,
  Mail,
  Megaphone,
  MousePointerClick,
  PenLine,
  Search,
  Share2,
  Sparkles,
  Target,
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
    metric: "42% more demo requests"
  },
  {
    name: "D2C Food Brand",
    result: "Improved Instagram content flow and product page messaging.",
    metric: "3.1x social reach"
  },
  {
    name: "Edtech Platform",
    result: "Created SEO content plan and high-intent landing pages.",
    metric: "68% organic traffic lift"
  }
];

const serviceNames = services.map((service) => service.title);

export default function Home() {
  return (
    <main>
      <section className="hero-image min-h-[78vh] text-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <a className="focus-ring flex items-center gap-3 rounded-md" href="#top" aria-label="StartupGrow home">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-leaf">
              <Sparkles size={20} aria-hidden="true" />
            </span>
            <span className="text-xl font-bold">StartupGrow</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-semibold text-white/85 md:flex">
            <a className="focus-ring rounded-md hover:text-white" href="#services">Services</a>
            <a className="focus-ring rounded-md hover:text-white" href="#portfolio">Portfolio</a>
            <a className="focus-ring rounded-md hover:text-white" href="#dashboard">Dashboard</a>
          </div>
          <a
            className="focus-ring inline-flex items-center gap-2 rounded-md bg-saffron px-4 py-2 text-sm font-bold text-ink transition hover:bg-[#ffb84e]"
            href="#quote"
          >
            Request quote
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </nav>

        <div id="top" className="mx-auto grid max-w-7xl gap-8 px-4 pb-14 pt-12 sm:px-6 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
              <Compass size={16} aria-hidden="true" />
              Digital solutions for Indian startups
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.03] sm:text-6xl lg:text-7xl">
              StartupGrow
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/88">
              Website development, branding, SEO, social media, content, PPC, and email marketing in one affordable platform for early-stage teams.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-leaf px-5 py-3 text-sm font-bold text-white transition hover:bg-[#17603d]"
                href="#quote"
              >
                Build growth brief
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                href="#services"
              >
                View services
                <Target size={17} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="self-end rounded-lg border border-white/20 bg-white/10 p-5 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div>
                <p className="text-3xl font-black">6</p>
                <p className="mt-1 text-sm text-white/78">Core digital services</p>
              </div>
              <div>
                <p className="text-3xl font-black">4</p>
                <p className="mt-1 text-sm text-white/78">Startup request stages</p>
              </div>
              <div>
                <p className="text-3xl font-black">1</p>
                <p className="mt-1 text-sm text-white/78">Simple admin dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="bg-mist py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-leaf">Request module</p>
            <h2 className="mt-2 text-3xl font-bold text-ink">A clean path from inquiry to service planning</h2>
            <p className="mt-4 leading-7 text-slate-600">
              StartupGrow collects the details a digital team needs: stage, budget, city, service area, and business goal. The backend stores each request for follow-up.
            </p>
            <div className="mt-6 grid gap-3">
              {["Affordable service bundles", "Responsive startup website", "MongoDB-backed request records"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-ink">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-leaf shadow-sm">
                    <ArrowRight size={15} aria-hidden="true" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <QuoteForm services={serviceNames} />
        </div>
      </section>

      <section id="services" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-skydeep">Core services</p>
            <h2 className="mt-2 text-3xl font-bold text-ink">Everything a young startup needs to look credible online</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="rounded-lg border border-slate-200 bg-white p-5 transition hover:border-leaf hover:shadow-soft">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-mist text-leaf">
                    <Icon size={21} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-mist py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-leaf">Portfolio display</p>
              <h2 className="mt-2 text-3xl font-bold text-ink">Proof points for website, marketing, and branding work</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {portfolio.map((item) => (
                <article key={item.name} className="rounded-lg border border-slate-200 bg-white p-5">
                  <p className="text-sm font-semibold text-saffron">{item.metric}</p>
                  <h3 className="mt-3 text-lg font-bold text-ink">{item.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.result}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["Requirement analysis", Users],
              ["Design", PenLine],
              ["Development", Code2],
              ["Testing and deployment", BarChart3]
            ].map(([label, Icon], index) => (
              <div key={label} className="border-l-4 border-leaf bg-mist p-5">
                <div className="flex items-center justify-between">
                  <Icon size={22} className="text-leaf" aria-hidden="true" />
                  <span className="text-sm font-black text-slate-400">0{index + 1}</span>
                </div>
                <p className="mt-4 font-bold text-ink">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdminPanel />

      <footer className="bg-ink py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-white/70 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>StartupGrow - Digital Solutions Platform for Indian Startups</p>
          <p>Yadunand Pavithran - Nashid Nihal C - Gokul Krishna</p>
        </div>
      </footer>
    </main>
  );
}
