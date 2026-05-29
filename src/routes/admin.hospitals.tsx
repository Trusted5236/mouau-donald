import { createFileRoute } from "@tanstack/react-router";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HOSPITALS } from "@/lib/mockData";

export const Route = createFileRoute("/admin/hospitals")({ component: ManageHospitals });

function ManageHospitals() {
  return (
    <div>
      <div className="animate-fade-up flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-semibold">Hospitals</h1>
          <p className="mt-1 text-muted-foreground">Manage hospital registry.</p>
        </div>
        <Button><Plus className="h-4 w-4" /> Add hospital</Button>
      </div>

      <div className="animate-fade-up delay-100 mt-8 overflow-hidden rounded-2xl border border-border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-secondary/50 text-left text-xs uppercase text-muted-foreground">
            <tr>
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">State</th>
              <th className="px-5 py-3">Type</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {HOSPITALS.map((h, i) => (
              <tr key={h.id} className="animate-fade-up border-t border-border transition-colors hover:bg-secondary/30" style={{ animationDelay: `${i * 50}ms` }}>
                <td className="px-5 py-4 font-medium">{h.name}</td>
                <td className="px-5 py-4 text-muted-foreground">{h.state}</td>
                <td className="px-5 py-4"><Badge variant="secondary" className="rounded-full capitalize">{h.type}</Badge></td>
                <td className="px-5 py-4">
                  {h.isVerified
                    ? <Badge className="rounded-full">Verified</Badge>
                    : <Badge variant="outline" className="rounded-full">Pending</Badge>}
                </td>
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
