"use client";

import { useState } from "react";
import { LayoutDashboard, PlusCircle, LogOut, Activity, Hexagon, User, Inbox } from "lucide-react";
import DashboardView from "@/components/shield/DashboardView";
import LeadsView from "@/components/shield/LeadsView";
import QuoteForm from "@/components/QuoteForm";

const services = [
  "Search Engine Optimisation",
  "Pay-Per-Click Advertising (PPC)",
  "Social Media Marketing",
  "Content Marketing",
  "Email Marketing",
  "Web Design & Development"
];

export default function ShieldDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen overflow-hidden bg-[#0A0F1C] font-sans selection:bg-indigo-500/30">
      
      {/* Sidebar Navigation - Glassmorphism */}
      <aside className="relative flex w-72 flex-col border-r border-white/10 bg-white/[0.02] backdrop-blur-3xl">
        <div className="flex items-center gap-3 border-b border-white/10 px-8 py-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            <Hexagon className="h-6 w-6 text-white" fill="currentColor" strokeWidth={1} />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-wide text-white">SHIELD</h1>
            <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">Admin Portal</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-8">
          <p className="px-4 text-xs font-bold uppercase tracking-wider text-slate-500">Menu</p>
          
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`mt-4 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
              activeTab === "dashboard"
                ? "bg-indigo-500/10 text-indigo-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-indigo-500/50"
                : "text-slate-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <LayoutDashboard className="h-5 w-5" />
            Overview
            {activeTab === "dashboard" && (
              <span className="ml-auto flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,1)]"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("new-request")}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
              activeTab === "new-request"
                ? "bg-indigo-500/10 text-indigo-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-indigo-500/50"
                : "text-slate-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <PlusCircle className="h-5 w-5" />
            Test Request
            {activeTab === "new-request" && (
              <span className="ml-auto flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,1)]"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("leads")}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
              activeTab === "leads"
                ? "bg-indigo-500/10 text-indigo-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-indigo-500/50"
                : "text-slate-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <Inbox className="h-5 w-5" />
            Contact Leads
            {activeTab === "leads" && (
              <span className="ml-auto flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,1)]"></span>
            )}
          </button>
        </nav>

        <div className="border-t border-white/10 p-4">
          <div className="mb-4 flex items-center gap-3 rounded-xl bg-white/5 p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 ring-1 ring-indigo-500/30">
              <User size={16} />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-sm font-bold text-white">Admin User</p>
              <p className="flex items-center gap-1.5 truncate text-xs text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></span>
                Online
              </p>
            </div>
          </div>
          <a
            href="/"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <LogOut className="h-4 w-4" />
            Back to Website
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="relative flex-1 overflow-y-auto overflow-x-hidden">
        {/* Subtle background gradients for premium feel */}
        <div className="pointer-events-none absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-indigo-900/20 blur-[120px]"></div>
        <div className="pointer-events-none absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-purple-900/10 blur-[100px]"></div>
        
        <div className="relative z-10 p-8 lg:p-12">
          {activeTab === "dashboard" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
              <header className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="flex items-center gap-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                    Command Center
                    <span className="flex h-6 items-center justify-center rounded-full bg-indigo-500/20 px-3 text-xs font-bold uppercase tracking-widest text-indigo-400 ring-1 ring-indigo-500/30">
                      Live
                    </span>
                  </h2>
                  <p className="mt-2 text-slate-400">
                    Monitor, manage, and engage with startup service requests.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-400">
                  <Activity className="h-4 w-4 text-emerald-500" />
                  System Nominal
                </div>
              </header>
              <DashboardView />
            </div>
          )}

          {activeTab === "new-request" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
               <header className="mb-10">
                <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Intake Testing
                </h2>
                <p className="mt-2 text-slate-400 max-w-2xl">
                  Simulate a public contact request. This form connects directly to your live database.
                </p>
              </header>
              <div className="max-w-3xl rounded-2xl border border-white/10 bg-[#0F172A]/80 p-6 backdrop-blur-xl md:p-8">
                {/* We wrap QuoteForm in a slightly customized theme wrapper or just rely on its own styling.
                    Since QuoteForm might be styled for light mode, let's inject a wrapper that forces light mode text styling or restyles it.
                    QuoteForm uses generic Tailwind colors like text-slate-700 which will be dark. We will render it inside a white card to preserve its original light mode look. */}
                <div className="rounded-xl bg-white p-6 md:p-10 shadow-2xl">
                   <h3 className="mb-6 text-xl font-bold text-slate-900 border-b pb-4">Public Form Simulation</h3>
                   <QuoteForm services={services} />
                </div>
              </div>
            </div>
          )}

          {activeTab === "leads" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
              <header className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                    Contact Leads
                  </h2>
                  <p className="mt-2 text-slate-400">
                    Submissions from the public contact page.
                  </p>
                </div>
              </header>
              <LeadsView />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
