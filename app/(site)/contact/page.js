import QuoteForm from "@/components/QuoteForm";

const services = [
  "Search Engine Optimisation",
  "Pay-Per-Click Advertising (PPC)",
  "Social Media Marketing",
  "Content Marketing",
  "Email Marketing",
  "Web Design & Development"
];

export const metadata = {
  title: "Contact | STARTUPGROW",
  description: "Submit a startup growth brief to the StartupGrow team."
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfa] px-5 py-10 text-[#111827] sm:px-8 lg:px-0">
      <section className="mx-auto w-full max-w-[1244px]">
        <h1 className="text-[clamp(2.1rem,4vw,2.9rem)] font-black leading-none tracking-normal text-[#111827]">
          Public Form Simulation
        </h1>
        <div className="mt-10 border-t border-[#dedede] pt-12">
          <QuoteForm services={services} variant="dashboard" />
        </div>
      </section>
    </main>
  );
}
