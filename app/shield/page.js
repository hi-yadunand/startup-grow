"use client";

import { useMemo, useState } from "react";
import {
  Activity,
  BellRing,
  CalendarDays,
  CheckSquare,
  ChevronsLeft,
  CreditCard,
  FileSignature,
  FileStack,
  FileText,
  FolderKanban,
  Home,
  IndianRupee,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  MessageCircle,
  Monitor,
  Plus,
  ReceiptText,
  RefreshCcw,
  Search,
  Settings,
  UserPlus,
  Users,
} from "lucide-react";
import DashboardView from "@/components/shield/DashboardView";
import LeadsView from "@/components/shield/LeadsView";

const sidebarItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "clients", label: "Clients", icon: Users },
  { id: "leads", label: "Leads", icon: UserPlus },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "tasks", label: "Tasks", icon: CheckSquare },
  { id: "invoices", label: "Invoices", icon: ReceiptText },
  { id: "payments", label: "Payments", icon: CreditCard },
  { id: "expenses", label: "Expenses", icon: IndianRupee },
  { id: "team", label: "Team", icon: Users },
  { id: "vault", label: "Vault", icon: LockKeyhole },
  { id: "documents", label: "Documents", icon: FileStack },
  { id: "communication", label: "Communication", icon: MessageCircle },
  { id: "contracts", label: "Contracts", icon: FileSignature },
  { id: "recurring", label: "Recurring", icon: RefreshCcw },
];

const footerItems = [
  { id: "settings", label: "Settings", icon: Settings },
  { id: "system", label: "System", icon: Monitor },
];

const clients = [
  { name: "Orbit Foods", founder: "Ananya Sharma", service: "Web Design & Development", status: "Active", value: "Rs. 48,000" },
  { name: "Kochi Labs", founder: "Arjun Menon", service: "SEO", status: "Onboarding", value: "Rs. 25,000" },
  { name: "PixelCart", founder: "Meera Nair", service: "Social Media Marketing", status: "Active", value: "Rs. 34,000" },
];

const projects = [
  { name: "Orbit Foods launch site", client: "Orbit Foods", progress: 72, due: "18 May 2026", owner: "Yadunand" },
  { name: "Kochi Labs SEO sprint", client: "Kochi Labs", progress: 44, due: "22 May 2026", owner: "Nashith" },
  { name: "PixelCart campaign setup", client: "PixelCart", progress: 86, due: "12 May 2026", owner: "Gokul" },
];

const invoices = [
  { code: "INV-1024", client: "Orbit Foods", amount: "Rs. 48,000", status: "Sent", date: "07 May 2026" },
  { code: "INV-1025", client: "Kochi Labs", amount: "Rs. 25,000", status: "Draft", date: "08 May 2026" },
  { code: "INV-1026", client: "PixelCart", amount: "Rs. 34,000", status: "Paid", date: "05 May 2026" },
];

const payments = [
  { client: "PixelCart", amount: "Rs. 34,000", method: "UPI", status: "Received" },
  { client: "Orbit Foods", amount: "Rs. 18,000", method: "Bank transfer", status: "Partial" },
  { client: "Kochi Labs", amount: "Rs. 0", method: "Pending", status: "Awaiting" },
];

const expenses = [
  { item: "Domain research tools", category: "Software", amount: "Rs. 2,400" },
  { item: "Ad creative assets", category: "Marketing", amount: "Rs. 3,200" },
  { item: "Hosting trial", category: "Infrastructure", amount: "Rs. 1,100" },
];

const teamMembers = [
  { name: "Yadunand Pavithran", role: "Dashboard and frontend", initials: "YP" },
  { name: "Nashith Nihal C", role: "Backend and database", initials: "NN" },
  { name: "Gokul Krishna", role: "Content and testing", initials: "GK" },
];

const documents = [
  { name: "Project scope document", type: "PDF", updated: "Today" },
  { name: "Client intake template", type: "DOC", updated: "Yesterday" },
  { name: "Service pricing sheet", type: "SHEET", updated: "06 May 2026" },
];

const messages = [
  { from: "Orbit Foods", subject: "Homepage copy approved", time: "10:30 AM" },
  { from: "Kochi Labs", subject: "SEO keywords shared", time: "09:15 AM" },
  { from: "StartupGrow Team", subject: "Presentation review tonight", time: "08:40 AM" },
];

const contracts = [
  { client: "Orbit Foods", status: "Ready to sign", value: "Rs. 48,000" },
  { client: "Kochi Labs", status: "Drafting", value: "Rs. 25,000" },
  { client: "PixelCart", status: "Signed", value: "Rs. 34,000" },
];

const recurring = [
  { name: "Monthly SEO report", interval: "Every month", next: "01 Jun 2026" },
  { name: "Social media calendar", interval: "Every week", next: "12 May 2026" },
  { name: "Invoice reminder", interval: "Every 15 days", next: "20 May 2026" },
];

const statusStyles = {
  Active: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  Onboarding: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  Sent: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  Draft: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  Paid: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  Received: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  Partial: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  Awaiting: "bg-slate-500/10 text-slate-300 border-slate-500/20",
  "Ready to sign": "bg-blue-500/10 text-blue-300 border-blue-500/20",
  Drafting: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  Signed: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
};

const pageMeta = {
  dashboard: {
    title: "Dashboard",
    description: "Live service requests, notifications, and operating overview.",
  },
  clients: {
    title: "Clients",
    description: "Manage active startup clients and service value.",
  },
  leads: {
    title: "Leads",
    description: "Contact leads submitted from the public website.",
  },
  projects: {
    title: "Projects",
    description: "Track project progress, deadlines, and owners.",
  },
  tasks: {
    title: "Tasks",
    description: "Assign and complete internal StartupGrow tasks.",
  },
  invoices: {
    title: "Invoices",
    description: "View invoice status and billing history.",
  },
  payments: {
    title: "Payments",
    description: "Monitor received and pending client payments.",
  },
  expenses: {
    title: "Expenses",
    description: "Track project and operating expenses.",
  },
  team: {
    title: "Team",
    description: "StartupGrow project team and responsibilities.",
  },
  vault: {
    title: "Vault",
    description: "Protected notes for credentials and internal references.",
  },
  documents: {
    title: "Documents",
    description: "Project documents, templates, and client files.",
  },
  communication: {
    title: "Communication",
    description: "Recent client and internal messages.",
  },
  contracts: {
    title: "Contracts",
    description: "Client agreements and signing status.",
  },
  recurring: {
    title: "Recurring",
    description: "Automations and repeating project reminders.",
  },
  settings: {
    title: "Settings",
    description: "Dashboard preferences and account controls.",
  },
  system: {
    title: "System",
    description: "Backend health, API routes, and uptime indicators.",
  },
};

function Pill({ children, status }) {
  return (
    <span className={`rounded-full border px-2.5 py-1 text-xs font-bold ${statusStyles[status] || "border-white/10 bg-white/5 text-slate-300"}`}>
      {children}
    </span>
  );
}

function SectionCard({ children, className = "" }) {
  return (
    <section className={`rounded-3xl border border-white/10 bg-[#1b1b1b] p-5 shadow-2xl shadow-black/20 ${className}`}>
      {children}
    </section>
  );
}

function DataTable({ columns, rows, renderRow }) {
  return (
    <SectionCard className="overflow-hidden p-0">
      <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-4 text-xs font-black uppercase tracking-wider text-zinc-500" style={{ gridTemplateColumns: columns.map((column) => column.width || "1fr").join(" ") }}>
        {columns.map((column) => (
          <span key={column.label}>{column.label}</span>
        ))}
      </div>
      <div className="divide-y divide-white/10">
        {rows.map((row, index) => renderRow(row, index))}
      </div>
    </SectionCard>
  );
}

function StatGrid() {
  const stats = [
    { label: "Clients", value: clients.length, tone: "text-orange-400" },
    { label: "Projects", value: projects.length, tone: "text-emerald-400" },
    { label: "Invoices", value: invoices.length, tone: "text-blue-400" },
    { label: "Team", value: teamMembers.length, tone: "text-zinc-100" },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <SectionCard key={stat.label}>
          <p className="text-sm font-bold text-zinc-500">{stat.label}</p>
          <p className={`mt-3 text-4xl font-black ${stat.tone}`}>{stat.value}</p>
        </SectionCard>
      ))}
    </div>
  );
}

function ClientsView() {
  return (
    <DataTable
      columns={[
        { label: "Client", width: "1.4fr" },
        { label: "Service", width: "1.4fr" },
        { label: "Value" },
        { label: "Status" },
      ]}
      rows={clients}
      renderRow={(client) => (
        <div key={client.name} className="grid items-center gap-4 px-5 py-4 text-sm text-zinc-300 md:grid-cols-[1.4fr_1.4fr_1fr_1fr]">
          <div>
            <p className="font-black text-white">{client.name}</p>
            <p className="mt-1 text-xs text-zinc-500">{client.founder}</p>
          </div>
          <p>{client.service}</p>
          <p className="font-bold text-white">{client.value}</p>
          <Pill status={client.status}>{client.status}</Pill>
        </div>
      )}
    />
  );
}

function ProjectsView() {
  return (
    <div className="grid gap-4 xl:grid-cols-3">
      {projects.map((project) => (
        <SectionCard key={project.name}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-lg font-black text-white">{project.name}</p>
              <p className="mt-1 text-sm text-zinc-500">{project.client}</p>
            </div>
            <FolderKanban className="h-5 w-5 text-orange-400" />
          </div>
          <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-orange-500" style={{ width: `${project.progress}%` }} />
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="font-bold text-white">{project.progress}% complete</span>
            <span className="text-zinc-500">{project.due}</span>
          </div>
          <p className="mt-4 text-xs font-bold uppercase tracking-wider text-zinc-500">Owner: {project.owner}</p>
        </SectionCard>
      ))}
    </div>
  );
}

function TasksView() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Review new service requests", done: false },
    { id: 2, title: "Prepare client proposal deck", done: true },
    { id: 3, title: "Update StartupGrow project report", done: false },
  ]);
  const [taskTitle, setTaskTitle] = useState("");

  function addTask(event) {
    event.preventDefault();
    const title = taskTitle.trim();

    if (!title) {
      return;
    }

    setTasks((current) => [{ id: Date.now(), title, done: false }, ...current]);
    setTaskTitle("");
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
      <SectionCard>
        <div className="space-y-3">
          {tasks.map((task) => (
            <button
              key={task.id}
              className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left transition hover:bg-white/[0.06]"
              onClick={() => setTasks((current) => current.map((item) => (item.id === task.id ? { ...item, done: !item.done } : item)))}
            >
              <span className={`flex h-6 w-6 items-center justify-center rounded-md border ${task.done ? "border-emerald-400 bg-emerald-400 text-black" : "border-zinc-600"}`}>
                {task.done ? <CheckSquare size={15} /> : null}
              </span>
              <span className={`font-bold ${task.done ? "text-zinc-500 line-through" : "text-white"}`}>{task.title}</span>
            </button>
          ))}
        </div>
      </SectionCard>
      <SectionCard>
        <h3 className="text-xl font-black text-white">Add task</h3>
        <form className="mt-4 space-y-3" onSubmit={addTask}>
          <input
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-bold text-white outline-none focus:border-orange-400"
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            placeholder="Task name"
          />
          <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-4 py-3 text-sm font-black text-black transition hover:bg-orange-400">
            <Plus size={16} />
            Add task
          </button>
        </form>
      </SectionCard>
    </div>
  );
}

function InvoicesView() {
  return (
    <DataTable
      columns={[{ label: "Invoice" }, { label: "Client" }, { label: "Amount" }, { label: "Status" }]}
      rows={invoices}
      renderRow={(invoice) => (
        <div key={invoice.code} className="grid items-center gap-4 px-5 py-4 text-sm text-zinc-300 md:grid-cols-4">
          <p className="font-black text-white">{invoice.code}</p>
          <p>{invoice.client}</p>
          <p className="font-bold text-white">{invoice.amount}</p>
          <Pill status={invoice.status}>{invoice.status}</Pill>
        </div>
      )}
    />
  );
}

function PaymentsView() {
  return (
    <DataTable
      columns={[{ label: "Client" }, { label: "Amount" }, { label: "Method" }, { label: "Status" }]}
      rows={payments}
      renderRow={(payment) => (
        <div key={payment.client} className="grid items-center gap-4 px-5 py-4 text-sm text-zinc-300 md:grid-cols-4">
          <p className="font-black text-white">{payment.client}</p>
          <p className="font-bold text-white">{payment.amount}</p>
          <p>{payment.method}</p>
          <Pill status={payment.status}>{payment.status}</Pill>
        </div>
      )}
    />
  );
}

function ExpensesView() {
  return (
    <DataTable
      columns={[{ label: "Expense" }, { label: "Category" }, { label: "Amount" }]}
      rows={expenses}
      renderRow={(expense) => (
        <div key={expense.item} className="grid items-center gap-4 px-5 py-4 text-sm text-zinc-300 md:grid-cols-3">
          <p className="font-black text-white">{expense.item}</p>
          <p>{expense.category}</p>
          <p className="font-bold text-white">{expense.amount}</p>
        </div>
      )}
    />
  );
}

function TeamView() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {teamMembers.map((member) => (
        <SectionCard key={member.name}>
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-500/15 text-xl font-black text-orange-400">
            {member.initials}
          </div>
          <h3 className="mt-5 text-xl font-black text-white">{member.name}</h3>
          <p className="mt-2 text-sm text-zinc-500">{member.role}</p>
        </SectionCard>
      ))}
    </div>
  );
}

function VaultView() {
  const [locked, setLocked] = useState(true);

  return (
    <SectionCard>
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-black text-white">Secure Vault</h3>
          <p className="mt-2 text-sm text-zinc-500">Store private project notes, hosting references, and handoff details.</p>
        </div>
        <button
          className="rounded-2xl bg-orange-500 px-5 py-3 text-sm font-black text-black transition hover:bg-orange-400"
          onClick={() => setLocked((current) => !current)}
        >
          {locked ? "Unlock preview" : "Lock vault"}
        </button>
      </div>
      <div className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-5">
        {locked ? (
          <p className="font-bold text-zinc-500">Vault is locked. Use the button to preview stored records.</p>
        ) : (
          <div className="space-y-3 text-sm text-zinc-300">
            <p><span className="font-black text-white">Hosting:</span> Vercel deployment dashboard</p>
            <p><span className="font-black text-white">Database:</span> MongoDB service request collections</p>
            <p><span className="font-black text-white">Support:</span> startupgrow@example.com</p>
          </div>
        )}
      </div>
    </SectionCard>
  );
}

function DocumentsView() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {documents.map((document) => (
        <SectionCard key={document.name}>
          <FileText className="h-8 w-8 text-orange-400" />
          <h3 className="mt-5 text-lg font-black text-white">{document.name}</h3>
          <p className="mt-2 text-sm text-zinc-500">{document.type} . Updated {document.updated}</p>
        </SectionCard>
      ))}
    </div>
  );
}

function CommunicationView() {
  return (
    <SectionCard>
      <div className="space-y-3">
        {messages.map((message) => (
          <div key={message.subject} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
            <div>
              <p className="font-black text-white">{message.from}</p>
              <p className="mt-1 text-sm text-zinc-500">{message.subject}</p>
            </div>
            <span className="text-xs font-bold text-zinc-500">{message.time}</span>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

function ContractsView() {
  return (
    <DataTable
      columns={[{ label: "Client" }, { label: "Value" }, { label: "Status" }]}
      rows={contracts}
      renderRow={(contract) => (
        <div key={contract.client} className="grid items-center gap-4 px-5 py-4 text-sm text-zinc-300 md:grid-cols-3">
          <p className="font-black text-white">{contract.client}</p>
          <p className="font-bold text-white">{contract.value}</p>
          <Pill status={contract.status}>{contract.status}</Pill>
        </div>
      )}
    />
  );
}

function RecurringView() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {recurring.map((item) => (
        <SectionCard key={item.name}>
          <RefreshCcw className="h-7 w-7 text-orange-400" />
          <h3 className="mt-5 text-lg font-black text-white">{item.name}</h3>
          <p className="mt-2 text-sm text-zinc-500">{item.interval}</p>
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white"><CalendarDays size={15} /> {item.next}</p>
        </SectionCard>
      ))}
    </div>
  );
}

function SettingsView() {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [compactMode, setCompactMode] = useState(false);

  return (
    <SectionCard>
      <div className="space-y-4">
        {[
          ["Service request notifications", emailAlerts, setEmailAlerts],
          ["Compact dashboard mode", compactMode, setCompactMode],
        ].map(([label, enabled, setEnabled]) => (
          <button
            key={label}
            className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-left"
            onClick={() => setEnabled(!enabled)}
          >
            <span className="font-black text-white">{label}</span>
            <span className={`rounded-full px-3 py-1 text-xs font-black ${enabled ? "bg-emerald-500 text-black" : "bg-zinc-700 text-zinc-300"}`}>
              {enabled ? "On" : "Off"}
            </span>
          </button>
        ))}
      </div>
    </SectionCard>
  );
}

function SystemView() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {[
        ["API", "Online", "/api/health"],
        ["Requests", "Connected", "/api/requests"],
        ["Leads", "Connected", "/api/leads"],
      ].map(([name, status, endpoint]) => (
        <SectionCard key={name}>
          <Activity className="h-7 w-7 text-emerald-400" />
          <h3 className="mt-5 text-xl font-black text-white">{name}</h3>
          <p className="mt-2 text-sm text-zinc-500">{endpoint}</p>
          <Pill status="Active">{status}</Pill>
        </SectionCard>
      ))}
    </div>
  );
}

function ModuleView({ activeTab }) {
  switch (activeTab) {
    case "dashboard":
      return (
        <>
          <StatGrid />
          <DashboardView />
        </>
      );
    case "clients":
      return <ClientsView />;
    case "leads":
      return <LeadsView />;
    case "projects":
      return <ProjectsView />;
    case "tasks":
      return <TasksView />;
    case "invoices":
      return <InvoicesView />;
    case "payments":
      return <PaymentsView />;
    case "expenses":
      return <ExpensesView />;
    case "team":
      return <TeamView />;
    case "vault":
      return <VaultView />;
    case "documents":
      return <DocumentsView />;
    case "communication":
      return <CommunicationView />;
    case "contracts":
      return <ContractsView />;
    case "recurring":
      return <RecurringView />;
    case "settings":
      return <SettingsView />;
    case "system":
      return <SystemView />;
    default:
      return <DashboardView />;
  }
}

export default function ShieldDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [query, setQuery] = useState("");
  const meta = pageMeta[activeTab] || pageMeta.dashboard;

  const filteredItems = useMemo(() => {
    if (!query.trim()) {
      return sidebarItems;
    }

    return sidebarItems.filter((item) => item.label.toLowerCase().includes(query.trim().toLowerCase()));
  }, [query]);

  return (
    <div className="flex h-screen overflow-hidden bg-[#101010] font-sans text-zinc-200 selection:bg-orange-500/30">
      <aside className="flex w-[310px] shrink-0 flex-col border-r border-white/10 bg-[#151515]">
        <div className="flex items-center gap-4 px-6 py-7">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-orange-500/15 text-lg font-black text-orange-400">
            YP
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xl font-black text-zinc-200">Yadunand Pavithran</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-zinc-600">STARTUPGROW</p>
          </div>
          <ChevronsLeft className="h-6 w-6 text-zinc-500" />
        </div>

        <div className="px-4">
          <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3">
            <Search className="h-4 w-4 text-zinc-500" />
            <input
              className="w-full bg-transparent text-sm font-bold text-white outline-none placeholder:text-zinc-600"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
            />
          </label>
        </div>

        <nav className="mt-4 flex-1 space-y-1 overflow-y-auto px-4 pb-5">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            const selected = activeTab === item.id;

            return (
              <button
                key={item.id}
                className={`flex w-full items-center gap-4 rounded-2xl px-5 py-3.5 text-left text-lg font-semibold transition ${
                  selected ? "bg-[#262626] text-white" : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon className="h-6 w-6 shrink-0" strokeWidth={1.8} />
                <span>{item.label}</span>
                {item.id === "dashboard" ? (
                  <span className="ml-auto flex h-2.5 w-2.5 rounded-full bg-orange-500" />
                ) : null}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-white/10 px-4 py-5">
          <div className="space-y-1">
            {footerItems.map((item) => {
              const Icon = item.icon;
              const selected = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  className={`flex w-full items-center gap-4 rounded-2xl px-5 py-3.5 text-left text-lg font-semibold transition ${
                    selected ? "bg-[#262626] text-white" : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <Icon className="h-6 w-6 shrink-0" strokeWidth={1.8} />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <a
              href="/"
              className="flex w-full items-center gap-4 rounded-2xl px-5 py-3.5 text-left text-lg font-semibold text-zinc-400 transition hover:bg-white/[0.04] hover:text-white"
            >
              <LogOut className="h-6 w-6 shrink-0" strokeWidth={1.8} />
              <span>Sign out</span>
            </a>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="sticky top-0 z-20 border-b border-white/10 bg-[#101010]/90 px-6 py-5 backdrop-blur xl:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-600">
                <Home className="h-4 w-4" />
                STARTUPGROW Dashboard
              </div>
              <h1 className="mt-2 text-4xl font-black tracking-tight text-white">{meta.title}</h1>
              <p className="mt-2 max-w-2xl text-sm font-semibold text-zinc-500">{meta.description}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-black text-emerald-300 md:flex">
                <Activity className="h-4 w-4" />
                System online
              </div>
              <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#1b1b1b] text-zinc-300 transition hover:text-white">
                <BellRing className="h-5 w-5" />
                <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-orange-500" />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6 p-6 xl:p-10">
          <ModuleView activeTab={activeTab} />
        </div>
      </main>
    </div>
  );
}
