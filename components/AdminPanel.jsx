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
    <section id="dashboard" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-skydeep">Admin module</p>
            <h2 className="mt-1 text-3xl font-bold text-ink">Service request dashboard</h2>
          </div>
          <button
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-ink transition hover:border-leaf hover:text-leaf"
            type="button"
            onClick={loadRequests}
          >
            <RefreshCcw size={16} aria-hidden="true" />
            Refresh
          </button>
        </div>

        {message ? (
          <p className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">{message}</p>
        ) : null}

        <div className="mt-6 overflow-hidden rounded-lg border border-slate-200">
          <div className="grid grid-cols-12 bg-slate-50 px-4 py-3 text-xs font-bold uppercase text-slate-500">
            <span className="col-span-4">Startup</span>
            <span className="col-span-3 hidden md:block">Service</span>
            <span className="col-span-3 hidden lg:block">Founder</span>
            <span className="col-span-8 md:col-span-5 lg:col-span-2">Status</span>
          </div>

          {loading ? (
            <div className="flex items-center gap-3 px-4 py-8 text-sm text-slate-600">
              <ClipboardList size={18} aria-hidden="true" />
              Loading requests
            </div>
          ) : requests.length ? (
            requests.map((request) => (
              <div
                key={request.id}
                className="grid grid-cols-12 gap-3 border-t border-slate-100 px-4 py-4 text-sm"
              >
                <div className="col-span-4">
                  <p className="font-bold text-ink">{request.startupName}</p>
                  <p className="mt-1 text-xs text-slate-500">{request.city} - {request.stage}</p>
                </div>
                <div className="col-span-3 hidden text-slate-700 md:block">{request.service}</div>
                <div className="col-span-3 hidden text-slate-700 lg:block">
                  <p>{request.founderName}</p>
                  <p className="mt-1 text-xs text-slate-500">{request.email}</p>
                </div>
                <div className="col-span-8 md:col-span-5 lg:col-span-2">
                  <select
                    className="focus-ring w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-ink"
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
            <div className="px-4 py-8 text-sm text-slate-600">No service requests yet.</div>
          )}
        </div>
      </div>
    </section>
  );
}
