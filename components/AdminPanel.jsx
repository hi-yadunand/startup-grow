"use client";

import { ClipboardList, RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchServiceRequests, updateRequestStatus } from "@/lib/api";

const statuses = ["New", "Contacted", "In progress", "Closed"];

export default function AdminPanel() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  async function loadRequests() {
    setLoading(true);
    setMessage("");

    try {
      const payload = await fetchServiceRequests();
      setRequests(payload.data || []);
    } catch (error) {
      setMessage(error.message || "Unable to load requests.");
    } finally {
      setLoading(false);
    }
  }

  async function changeStatus(id, status) {
    try {
      const payload = await updateRequestStatus(id, status);
      setRequests((current) =>
        current.map((request) => (request.id === id ? payload.data : request))
      );
    } catch (error) {
      setMessage(error.message || "Unable to update status.");
    }
  }

  useEffect(() => {
    loadRequests();
  }, []);

  return (
    <section id="dashboard" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 border-b border-ink/10 pb-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-sm font-black uppercase text-zinc-500">Admin module</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-7xl">
              Service request dashboard
            </h2>
          </div>
          <button
            className="focus-ring inline-flex w-fit items-center justify-center gap-2 rounded-full border border-ink px-5 py-3 text-sm font-black uppercase text-ink transition hover:bg-ink hover:text-white"
            type="button"
            onClick={loadRequests}
          >
            <RefreshCcw size={16} aria-hidden="true" />
            Refresh
          </button>
        </div>

        {message ? (
          <p className="mt-5 rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{message}</p>
        ) : null}

        <div className="mt-8 overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft">
          <div className="grid grid-cols-12 bg-ink px-4 py-4 text-xs font-black uppercase text-white/60">
            <span className="col-span-4">Startup</span>
            <span className="col-span-3 hidden md:block">Service</span>
            <span className="col-span-3 hidden lg:block">Founder</span>
            <span className="col-span-8 md:col-span-5 lg:col-span-2">Status</span>
          </div>

          {loading ? (
            <div className="flex items-center gap-3 px-4 py-8 text-sm font-semibold text-zinc-600">
              <ClipboardList size={18} aria-hidden="true" />
              Loading requests
            </div>
          ) : requests.length ? (
            requests.map((request) => (
              <div
                key={request.id}
                className="grid grid-cols-12 gap-3 border-t border-ink/10 px-4 py-5 text-sm"
              >
                <div className="col-span-4">
                  <p className="font-black text-ink">{request.startupName}</p>
                  <p className="mt-1 text-xs font-semibold text-zinc-500">{request.city} - {request.stage}</p>
                </div>
                <div className="col-span-3 hidden font-semibold text-zinc-700 md:block">{request.service}</div>
                <div className="col-span-3 hidden font-semibold text-zinc-700 lg:block">
                  <p>{request.founderName}</p>
                  <p className="mt-1 text-xs text-zinc-500">{request.email}</p>
                </div>
                <div className="col-span-8 md:col-span-5 lg:col-span-2">
                  <select
                    className="focus-ring w-full rounded-md border border-ink/10 bg-cream px-3 py-2 text-sm font-bold text-ink"
                    value={request.status}
                    onChange={(event) => changeStatus(request.id, event.target.value)}
                  >
                    {statuses.map((status) => (
                      <option key={status}>{status}</option>
                    ))}
                  </select>
                </div>
              </div>
            ))
          ) : (
            <div className="px-4 py-8 text-sm font-semibold text-zinc-600">No service requests yet.</div>
          )}
        </div>
      </div>
    </section>
  );
}
