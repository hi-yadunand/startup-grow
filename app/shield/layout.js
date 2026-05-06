import "../../globals.css";

export const metadata = {
  title: "StartupGrow | Admin Dashboard",
  description: "Secure admin dashboard for StartupGrow operations.",
};

export default function ShieldLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-slate-200 selection:bg-indigo-500/30">
      {/* We apply a dark theme natively to the body via this layout. */}
      {children}
    </div>
  );
}
