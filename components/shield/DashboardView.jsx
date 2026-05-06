"use client";

import { useEffect, useState } from "react";
import { RefreshCcw, Mail, Building, Tag, CheckCircle2, CircleDashed, Clock, ChevronRight } from "lucide-react";
import { fetchServiceRequests, updateRequestStatus } from "@/lib/api";

const statuses = ["New", "Contacted", "In progress", "Closed"];

const StatusBadge = ({ status }) => {
  switch (status) {
    case "New":
      return <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/20"><CircleDashed size={12} /> New</span>;
    case "Contacted":
      return <span className="flex items-center gap-1.5 rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-bold text-blue-400 border border-blue-500/20"><Mail size={12} /> Contacted</span>;
    case "In progress":
      return <span className="flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-bold text-amber-400 border border-amber-500/20"><Clock size={12} /> In Progress</span>;
    case "Closed":
      return <span className="flex items-center gap-1.5 rounded-full bg-slate-500/10 px-2.5 py-1 text-xs font-bold text-slate-400 border border-slate-500/20"><CheckCircle2 size={12} /> Closed</span>;
    default:
      return <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-xs font-bold text-slate-300 border border-white/10">{status}</span>;
  }
};

export default function DashboardView() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [refreshing, setRefreshing] = useState(false);

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

  async function handleRefresh() {
    setRefreshing(true);
    await loadRequests();
    setTimeout(() => setRefreshing(false), 500);
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
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-md">
        <div className="flex gap-6 px-2">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Requests</p>
            <p className="text-2xl font-black text-white">{requests.length}</p>
          </div>
          <div className="w-px bg-white/10"></div>
          <div>
             <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active</p>
             <p className="text-2xl font-black text-emerald-400">
               {requests.filter(r => r.status !== "Closed").length}
             </p>
          </div>
        </div>
        
        <button
          className={`flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-white/10 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${refreshing ? "opacity-75" : ""}`}
          onClick={handleRefresh}
          disabled={refreshing}
        >
          <RefreshCcw size={16} className={refreshing ? "animate-spin text-indigo-400" : "text-indigo-400"} />
          Refresh Data
        </button>
      </div>

      {message && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-400">
          {message}
        </div>
      )}

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl">
        <div className="grid grid-cols-12 gap-4 border-b border-white/10 bg-black/20 px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
          <div className="col-span-12 md:col-span-4">Startup Info</div>
          <div className="hidden md:block md:col-span-3">Contact Details</div>
          <div className="hidden lg:block lg:col-span-2">Service</div>
          <div className="col-span-12 md:col-span-5 lg:col-span-3">Status Management</div>
        </div>

        {loading && !refreshing ? (
          <div className="flex flex-col items-center justify-center py-20">
            <RefreshCcw size={32} className="animate-spin text-indigo-500 mb-4" />
            <p className="text-sm font-semibold text-slate-400">Syncing with database...</p>
          </div>
        ) : requests.length > 0 ? (
          <div className="divide-y divide-white/5">
            {requests.map((request) => (
              <div
                key={request.id}
                className="group grid grid-cols-12 items-center gap-4 px-6 py-5 transition-colors hover:bg-white/[0.02]"
              >
                <div className="col-span-12 md:col-span-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300">
                      <Building size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">{request.startupName}</p>
                      <p className="flex items-center gap-1.5 mt-1 text-xs text-slate-400">
                         {request.city} <span className="h-1 w-1 rounded-full bg-slate-600"></span> {request.stage}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block md:col-span-3">
                  <p className="text-sm font-semibold text-slate-200">{request.founderName}</p>
                  <p className="flex items-center gap-1.5 mt-1 text-xs text-slate-400">
                    <Mail size={12} className="text-slate-500" />
                    {request.email}
                  </p>
                </div>

                <div className="hidden lg:block lg:col-span-2">
                  <div className="flex items-center gap-1.5">
                    <Tag size={14} className="text-indigo-400" />
                    <span className="text-sm font-medium text-slate-300">{request.service}</span>
                  </div>
                </div>

                <div className="col-span-12 flex items-center justify-between gap-4 md:col-span-5 lg:col-span-3">
                  <StatusBadge status={request.status} />
                  
                  <div className="relative group/select w-full max-w-[140px]">
                    <select
                      className="w-full appearance-none rounded-lg border border-white/10 bg-black/40 px-3 py-2 pr-8 text-xs font-bold text-slate-200 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 cursor-pointer"
                      value={request.status}
                      onChange={(event) => changeStatus(request.id, event.target.value)}
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status} className="bg-slate-900">
                          {status}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                      <ChevronRight size={14} className="rotate-90 group-hover/select:text-indigo-400 transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-500">
               <CircleDashed size={24} />
            </div>
            <p className="text-lg font-bold text-white">All clear</p>
            <p className="mt-1 text-sm text-slate-400">No service requests found in the system.</p>
          </div>
        )}
      </div>
    </div>
  );
}
