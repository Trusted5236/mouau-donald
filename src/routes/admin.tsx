import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { LayoutDashboard, Building2, Users, Stethoscope } from "lucide-react";

export const Route = createFileRoute("/admin")({ component: AdminLayout });

function AdminLayout() {
  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="grid min-h-screen md:grid-cols-[260px_1fr]">
        <aside className="border-r border-border bg-card p-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Stethoscope className="h-5 w-5" />
            </div>
            <span className="font-display text-lg font-semibold">MediFind</span>
          </Link>
          <div className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">Admin</div>
          <nav className="mt-8 space-y-1">
            <NavItem to="/admin" icon={LayoutDashboard} label="Dashboard" exact />
            <NavItem to="/admin/hospitals" icon={Building2} label="Hospitals" />
            <NavItem to="/admin/specialists" icon={Users} label="Specialists" />
          </nav>
        </aside>
        <main className="p-8 md:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function NavItem({ to, icon: Icon, label, exact }: { to: string; icon: any; label: string; exact?: boolean }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact }}
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
      activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" }}
    >
      <Icon className="h-4 w-4" /> {label}
    </Link>
  );
}
