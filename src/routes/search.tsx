import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { Search, MapPin, Siren } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { HospitalCard } from "@/components/HospitalCard";
import { MapView } from "@/components/MapView";
import { searchHospitals } from "@/lib/mockData";

const searchSchema = z.object({
  q: z.string().optional().default(""),
  state: z.string().optional().default(""),
  emergency: z.boolean().optional().default(false),
});

export const Route = createFileRoute("/search")({
  component: SearchPage,
  validateSearch: searchSchema,
});

function SearchPage() {
  const sp = Route.useSearch();
  const navigate = Route.useNavigate();
  const [q, setQ] = useState(sp.q);
  const [state, setState] = useState(sp.state);
  const [emergency, setEmergency] = useState(sp.emergency);
  const [activeId, setActiveId] = useState<string | undefined>();

  const results = useMemo(
    () => searchHospitals({ specialty: sp.q, condition: sp.q, state: sp.state, emergency: sp.emergency }),
    [sp.q, sp.state, sp.emergency],
  );

  const apply = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ search: { q, state, emergency } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="border-b border-border bg-secondary/30">
        <form onSubmit={apply} className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 md:flex-row md:items-center">
          <div className="flex flex-1 items-center gap-2 rounded-xl border border-border bg-card px-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Specialty or condition" className="border-0 bg-transparent shadow-none focus-visible:ring-0" />
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 md:w-56">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <Input value={state} onChange={(e) => setState(e.target.value)} placeholder="State" className="border-0 bg-transparent shadow-none focus-visible:ring-0" />
          </div>
          <label className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm">
            <Siren className={`h-4 w-4 ${emergency ? "text-primary" : "text-muted-foreground"}`} />
            Emergency
            <Switch checked={emergency} onCheckedChange={setEmergency} />
          </label>
          <Button type="submit">Search</Button>
        </form>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1fr_460px]">
        <div>
          <div className="mb-6 flex items-baseline justify-between">
            <h1 className="font-display text-2xl font-semibold">
              {results.length} hospital{results.length === 1 ? "" : "s"} found
            </h1>
            <span className="text-sm text-muted-foreground">{sp.q && `for "${sp.q}"`}</span>
          </div>
          {results.length === 0 ? (
            <div className="animate-fade-up rounded-2xl border border-dashed border-border bg-card p-12 text-center">
              <p className="text-muted-foreground">No matches. Try a different specialty or state.</p>
              <Link to="/" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">← Back home</Link>
            </div>
          ) : (
            <div className="grid gap-4" onMouseLeave={() => setActiveId(undefined)}>
              {results.map((h, i) => (
                <div key={h.id} onMouseEnter={() => setActiveId(h.id)}>
                  <HospitalCard hospital={h} index={i} />
                </div>
              ))}
            </div>
          )}
        </div>
        <aside className="hidden lg:block">
          <div className="sticky top-24 h-[calc(100vh-8rem)]">
            <MapView hospitals={results} activeId={activeId} />
          </div>
        </aside>
      </div>
    </div>
  );
}
