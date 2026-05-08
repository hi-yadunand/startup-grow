"use client";

import { ArrowRight, CheckCircle2, Send } from "lucide-react";
import { useMemo, useState } from "react";
import { createServiceRequest } from "@/lib/api";

const initialForm = {
  startupName: "",
  founderName: "",
  email: "",
  phone: "",
  city: "",
  stage: "Idea stage",
  service: "Web Design & Development",
  budget: "Below Rs. 25,000",
  message: ""
};

const variantStyles = {
  default: {
    form: "rounded-lg border border-ink/10 bg-white p-5 shadow-arolax md:p-8",
    header:
      "flex flex-col gap-4 border-b border-ink/10 pb-5 sm:flex-row sm:items-center sm:justify-between",
    eyebrow: "text-sm font-black uppercase text-zinc-500",
    title: "mt-2 text-3xl font-black leading-tight text-ink",
    iconWrap: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-white",
    iconSize: 19,
    grid: "mt-5 grid gap-4 md:grid-cols-2",
    label: "text-xs font-black uppercase text-zinc-500",
    input:
      "focus-ring mt-2 w-full rounded-md border border-ink/10 bg-cream px-4 py-3 text-sm font-medium normal-case text-ink transition placeholder:text-zinc-400 focus:border-ink",
    textarea:
      "focus-ring mt-2 min-h-28 w-full resize-y rounded-md border border-ink/10 bg-cream px-4 py-3 text-sm font-medium normal-case text-ink transition placeholder:text-zinc-400 focus:border-ink",
    messageLabel: "mt-4 block text-xs font-black uppercase text-zinc-500",
    status: "mt-4 rounded-md px-4 py-3 text-sm",
    button:
      "focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-black uppercase text-white transition hover:bg-soot disabled:cursor-not-allowed disabled:bg-zinc-300 sm:w-auto",
    buttonIcon: 17
  },
  dashboard: {
    form:
      "rounded-[14px] border border-[#dedede] bg-white px-6 py-8 shadow-[0_32px_90px_rgba(15,23,42,0.08)] sm:px-10 sm:py-12 lg:px-16 lg:py-[68px]",
    header:
      "flex items-center justify-between gap-6 border-b border-[#dedede] pb-8 sm:pb-10 lg:pb-12",
    eyebrow: "text-[clamp(1rem,2vw,1.7rem)] font-black uppercase leading-none text-[#74747f]",
    title:
      "mt-5 text-[clamp(2.6rem,5vw,4.1rem)] font-black leading-[0.98] text-[#111111]",
    iconWrap:
      "flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#111111] text-white sm:h-20 sm:w-20 lg:h-24 lg:w-24",
    iconSize: 40,
    grid: "mt-9 grid gap-x-8 gap-y-8 md:grid-cols-2 lg:mt-11",
    label:
      "text-[clamp(1rem,1.8vw,1.55rem)] font-black uppercase leading-none text-[#72727d]",
    input:
      "focus-ring mt-4 h-[72px] w-full rounded-[10px] border border-[#dedede] bg-[#fffafa] px-4 text-base font-bold normal-case text-[#111111] transition placeholder:text-[#a3a3ad] focus:border-[#111111] sm:h-[92px] sm:px-8 sm:text-[clamp(1.2rem,2vw,1.75rem)]",
    textarea:
      "focus-ring mt-4 min-h-[180px] w-full resize-y rounded-[10px] border border-[#dedede] bg-[#fffafa] px-4 py-6 text-base font-bold normal-case text-[#111111] transition placeholder:text-[#a3a3ad] focus:border-[#111111] sm:min-h-[224px] sm:px-8 sm:py-7 sm:text-[clamp(1.2rem,2vw,1.75rem)]",
    messageLabel:
      "mt-8 block text-[clamp(1rem,1.8vw,1.55rem)] font-black uppercase leading-none text-[#72727d]",
    status: "mt-7 rounded-[10px] px-5 py-4 text-base font-bold",
    button:
      "focus-ring mt-8 inline-flex h-[78px] w-full items-center justify-center gap-4 rounded-full bg-[#111111] px-8 text-[clamp(1rem,1.7vw,1.55rem)] font-black uppercase text-white transition hover:bg-[#242424] disabled:cursor-not-allowed disabled:bg-[#d1d1d8] sm:h-[104px] sm:w-auto sm:min-w-[404px]",
    buttonIcon: 30
  }
};

export default function QuoteForm({ services, variant = "default" }) {
  const styles = variantStyles[variant] || variantStyles.default;
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const canSubmit = useMemo(() => {
    return (
      form.startupName.trim() &&
      form.founderName.trim() &&
      form.email.trim() &&
      form.phone.trim() &&
      form.city.trim() &&
      form.message.trim()
    );
  }, [form]);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      await createServiceRequest(form);
      setForm(initialForm);
      setStatus({
        type: "success",
        message: "Request submitted. The StartupGrow team can now review it in the dashboard."
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to submit the request right now."
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Service request</p>
          <h2 className={styles.title}>Build a startup growth brief</h2>
        </div>
        <div className={styles.iconWrap}>
          <Send size={styles.iconSize} aria-hidden="true" strokeWidth={variant === "dashboard" ? 1.8 : 2} />
        </div>
      </div>

      <div className={styles.grid}>
        <label className={styles.label}>
          Startup name
          <input
            className={styles.input}
            name="startupName"
            value={form.startupName}
            onChange={updateField}
            placeholder="Orbit Foods"
          />
        </label>
        <label className={styles.label}>
          Founder name
          <input
            className={styles.input}
            name="founderName"
            value={form.founderName}
            onChange={updateField}
            placeholder="Ananya Sharma"
          />
        </label>
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            type="email"
            name="email"
            value={form.email}
            onChange={updateField}
            placeholder="founder@startup.in"
          />
        </label>
        <label className={styles.label}>
          Phone
          <input
            className={styles.input}
            name="phone"
            value={form.phone}
            onChange={updateField}
            placeholder="+91 98765 43210"
          />
        </label>
        <label className={styles.label}>
          City
          <input
            className={styles.input}
            name="city"
            value={form.city}
            onChange={updateField}
            placeholder="Kochi"
          />
        </label>
        <label className={styles.label}>
          Startup stage
          <select className={styles.input} name="stage" value={form.stage} onChange={updateField}>
            <option>Idea stage</option>
            <option>MVP launched</option>
            <option>Early customers</option>
            <option>Scaling</option>
          </select>
        </label>
        <label className={styles.label}>
          Primary service
          <select className={styles.input} name="service" value={form.service} onChange={updateField}>
            {services.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>
        <label className={styles.label}>
          Budget range
          <select className={styles.input} name="budget" value={form.budget} onChange={updateField}>
            <option>Below Rs. 25,000</option>
            <option>Rs. 25,000 - Rs. 50,000</option>
            <option>Rs. 50,000 - Rs. 1,00,000</option>
            <option>Above Rs. 1,00,000</option>
          </select>
        </label>
      </div>

      <label className={styles.messageLabel}>
        Project goal
        <textarea
          className={styles.textarea}
          name="message"
          value={form.message}
          onChange={updateField}
          placeholder="We need a launch website and social media plan for a seed-stage product."
        />
      </label>

      {status.message ? (
        <div
          className={`${styles.status} ${
            status.type === "success"
              ? "bg-mint text-ink"
              : "bg-red-50 text-red-700"
          }`}
          role="status"
        >
          <span className="inline-flex items-center gap-2">
            {status.type === "success" ? <CheckCircle2 size={16} aria-hidden="true" /> : null}
            {status.message}
          </span>
        </div>
      ) : null}

      <button
        className={styles.button}
        type="submit"
        disabled={!canSubmit || submitting}
      >
        {submitting ? "Submitting" : "Submit request"}
        <ArrowRight size={styles.buttonIcon} aria-hidden="true" />
      </button>
    </form>
  );
}
