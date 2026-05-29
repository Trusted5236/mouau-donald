import { createFileRoute } from "@tanstack/react-router";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HOSPITALS } from "@/lib/mockData";

export const Route = createFileRoute("/admin/specialists")({ component: ManageSpecialists });

function ManageSpecialists() {
  const rows = HOSPITALS.flatMap((h) => h.specialists.map((s) => ({ ...s, hospital: h.name })));
  return (
    <div>
      <div className="animate-fade-up flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-semibold">Specialists</h1>
          <p className="mt-1 text-muted-foreground">All registered medical specialists.</p>
        </div>
        <Button><Plus className="h-4 w-4" /> Add specialist</Button>
      </div>

      <div className="animate-fade-up delay-100 mt-8 overflow-hidden rounded-2xl border border-border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-secondary/50 text-left text-xs uppercase text-muted-foreground">
            <tr>
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Specialty</th>
              <th className="px-5 py-3">Hospital</th>
              <th className="px-5 py-3">Availability</th>
              <th className="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((s, i) => (
              <tr key={s.id} className="animate-fade-up border-t border-border transition-colors hover:bg-secondary/30" style={{ animationDelay: `${i * 40}ms` }}>
                <td className="px-5 py-4 font-medium">{s.fullName}</td>
                <td className="px-5 py-4"><Badge variant="secondary" className="rounded-full">{s.specialty}</Badge></td>
                <td className="px-5 py-4 text-muted-foreground">{s.hospital}</td>
                <td className="px-5 py-4 text-xs text-muted-foreground">{s.availableDays.join(", ")} · {s.availableHours}</td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <Button size="icon" variant="ghost"><Pencil className="h-4 w-4" /></Button>
                    <Button size="icon" variant="ghost"><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
