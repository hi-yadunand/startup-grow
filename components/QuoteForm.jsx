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

const inputClass =
  "focus-ring w-full rounded-md border border-slate-200 bg-white px-3 py-3 text-sm text-ink shadow-sm transition placeholder:text-slate-400 focus:border-leaf";

export default function QuoteForm({ services }) {
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
    <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft md:p-6">
      <div className="flex flex-col gap-2 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-leaf">Service request</p>
          <h2 className="mt-1 text-2xl font-bold text-ink">Build a startup growth brief</h2>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-leaf text-white">
          <Send size={19} aria-hidden="true" />
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Startup name
          <input
            className={`${inputClass} mt-2`}
            name="startupName"
            value={form.startupName}
            onChange={updateField}
            placeholder="Orbit Foods"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Founder name
          <input
            className={`${inputClass} mt-2`}
            name="founderName"
            value={form.founderName}
            onChange={updateField}
            placeholder="Ananya Sharma"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Email
          <input
            className={`${inputClass} mt-2`}
            type="email"
            name="email"
            value={form.email}
            onChange={updateField}
            placeholder="founder@startup.in"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Phone
          <input
            className={`${inputClass} mt-2`}
            name="phone"
            value={form.phone}
            onChange={updateField}
            placeholder="+91 98765 43210"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          City
          <input
            className={`${inputClass} mt-2`}
            name="city"
            value={form.city}
            onChange={updateField}
            placeholder="Kochi"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Startup stage
          <select className={`${inputClass} mt-2`} name="stage" value={form.stage} onChange={updateField}>
            <option>Idea stage</option>
            <option>MVP launched</option>
            <option>Early customers</option>
            <option>Scaling</option>
          </select>
        </label>
        <label className="text-sm font-medium text-slate-700">
          Primary service
          <select className={`${inputClass} mt-2`} name="service" value={form.service} onChange={updateField}>
            {services.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium text-slate-700">
          Budget range
          <select className={`${inputClass} mt-2`} name="budget" value={form.budget} onChange={updateField}>
            <option>Below Rs. 25,000</option>
            <option>Rs. 25,000 - Rs. 50,000</option>
            <option>Rs. 50,000 - Rs. 1,00,000</option>
            <option>Above Rs. 1,00,000</option>
          </select>
        </label>
      </div>

      <label className="mt-4 block text-sm font-medium text-slate-700">
        Project goal
        <textarea
          className={`${inputClass} mt-2 min-h-28 resize-y`}
          name="message"
          value={form.message}
          onChange={updateField}
          placeholder="We need a launch website and social media plan for a seed-stage product."
        />
      </label>

      {status.message ? (
        <div
          className={`mt-4 rounded-md px-4 py-3 text-sm ${
            status.type === "success"
              ? "bg-emerald-50 text-emerald-800"
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
        className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-leaf px-5 py-3 text-sm font-bold text-white transition hover:bg-[#17603d] disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
        type="submit"
        disabled={!canSubmit || submitting}
      >
        {submitting ? "Submitting" : "Submit request"}
        <ArrowRight size={17} aria-hidden="true" />
      </button>
    </form>
  );
}
