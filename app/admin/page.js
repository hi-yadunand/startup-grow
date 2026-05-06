import AdminPanel from "@/components/AdminPanel";
import QuoteForm from "@/components/QuoteForm";

const services = [
  "SEO",
  "PPC Advertising",
  "Social Media Marketing",
  "Content Marketing",
  "Email Marketing",
  "Web Design & Development"
];

export const metadata = {
  title: "StartupGrow Admin",
  description: "Private StartupGrow request and admin dashboard."
};

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-ink">
      <section className="border-b border-slate-200 bg-[#111827] text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-black uppercase text-white/50">Private workspace</p>
              <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
                StartupGrow Admin
              </h1>
            </div>
            <a
              className="focus-ring inline-flex w-fit items-center rounded-full border border-white/20 px-5 py-3 text-sm font-black uppercase text-white transition hover:bg-white hover:text-[#111827]"
              href="/"
            >
              View website
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.42fr_0.58fr] lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-black uppercase text-slate-500">Request intake</p>
          <h2 className="mt-3 text-3xl font-black leading-tight">Create or test a contact request</h2>
          <p className="mt-4 leading-7 text-slate-600">
            The public site now treats requests as contact. This private page keeps the intake form and dashboard out of the website navigation.
          </p>
          <div className="mt-6 grid gap-3 text-sm font-bold text-slate-700">
            <span className="rounded-md bg-slate-50 px-4 py-3">Unlinked from public pages</span>
            <span className="rounded-md bg-slate-50 px-4 py-3">Stores records through the existing API</span>
            <span className="rounded-md bg-slate-50 px-4 py-3">Status changes stay in the admin dashboard</span>
          </div>
        </div>

        <QuoteForm services={services} />
      </section>

      <AdminPanel />
    </main>
  );
}
