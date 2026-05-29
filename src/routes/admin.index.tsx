import { createFileRoute } from "@tanstack/react-router";
import { Building2, Users, Activity, ShieldCheck } from "lucide-react";
import { HOSPITALS } from "@/lib/mockData";

export const Route = createFileRoute("/admin/")({ component: Dashboard });

function Dashboard() {
  const totalSpecialists = HOSPITALS.reduce((n, h) => n + h.specialists.length, 0);
  const emergency = HOSPITALS.filter((h) => h.emergencyReady).length;
  const verified = HOSPITALS.filter((h) => h.isVerified).length;

  const stats = [
    { label: "Hospitals", value: HOSPITALS.length, icon: Building2 },
    { label: "Specialists", value: totalSpecialists, icon: Users },
    { label: "Emergency-ready", value: emergency, icon: Activity },
    { label: "Verified", value: verified, icon: ShieldCheck },
  ];

  return (
    <div>
      <h1 className="animate-fade-up font-display text-3xl font-semibold">Dashboard</h1>
      <p className="animate-fade-up delay-100 mt-1 text-muted-foreground">Overview of your MediFind registry.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className="animate-fade-up smooth-hover rounded-2xl border border-border bg-card p-6" style={{ animationDelay: `${i * 80}ms` }}>
            <s.icon className="h-5 w-5 text-primary" />
            <div className="mt-4 font-display text-4xl font-semibold">{s.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="animate-fade-up delay-400 mt-10 rounded-2xl border border-border bg-card p-6">
        <h2 className="font-display text-xl font-semibold">Recent activity</h2>
        <ul className="mt-4 divide-y divide-border text-sm">
          {HOSPITALS.slice(0, 5).map((h) => (
            <li key={h.id} className="flex items-center justify-between py-3">
              <span>{h.name}</span>
              <span className="text-xs text-muted-foreground">{h.state}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
