import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Search, MapPin, Siren, Stethoscope, Heart, Brain, Baby, Bone, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SPECIALTIES } from "@/lib/mockData";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [state, setState] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/search", search: { q, state } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 gradient-warm opacity-60" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/40 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Find the right specialist, not just the nearest hospital
            </span>
            <h1 className="animate-fade-up delay-100 mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance md:text-7xl">
              Locate hospitals by the <em className="not-italic text-primary">specialist</em> you need.
            </h1>
            <p className="animate-fade-up delay-200 mt-6 text-lg text-muted-foreground text-balance">
              MediFind connects patients across Nigeria with verified medical specialists —
              so you go to the <em>right</em> hospital, not just the closest one.
            </p>

            <form
              onSubmit={submit}
              className="animate-scale-in delay-300 mx-auto mt-10 flex max-w-2xl flex-col items-stretch gap-2 rounded-2xl border border-border bg-card p-2 shadow-xl shadow-primary/5 md:flex-row md:items-center"
            >
              <div className="flex flex-1 items-center gap-2 pl-3">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Cardiologist, stroke, pediatrics…"
                  className="h-11 border-0 bg-transparent shadow-none focus-visible:ring-0"
                />
              </div>
              <div className="hidden h-8 w-px bg-border md:block" />
              <div className="flex items-center gap-2 pl-3 md:pl-0">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <Input
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="State (e.g. Lagos)"
                  className="h-11 border-0 bg-transparent shadow-none focus-visible:ring-0 md:w-44"
                />
              </div>
              <Button type="submit" size="lg" className="h-11 rounded-xl">
                Search <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            <div className="animate-fade-up delay-400 mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="text-muted-foreground">Try:</span>
              {["Cardiology", "Neurology", "Pediatrics", "Stroke"].map((t) => (
                <button
                  key={t}
                  onClick={() => navigate({ to: "/search", search: { q: t, state: "" } })}
                  className="rounded-full border border-border bg-card px-3 py-1 text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Browse by specialty</h2>
          <p className="mt-3 text-muted-foreground">Eight major fields, hundreds of verified specialists across Nigeria.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {SPECIALTIES.map((s, i) => {
            const Icon = [Heart, Brain, Baby, Bone, Stethoscope, ShieldCheck, Search, Sparkles][i % 8];
            return (
              <Link
                key={s}
                to="/search"
                search={{ q: s, state: "" }}
                className="animate-fade-up smooth-hover group flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">{s}</div>
                  <div className="mt-1 text-xs text-muted-foreground">View hospitals →</div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">How it works</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Search by need", d: "Enter a specialty, a condition like 'stroke', or your location." },
              { n: "02", t: "Match by capability", d: "We match hospitals by verified specialists — not just distance." },
              { n: "03", t: "Go with confidence", d: "View hours, emergency status and contact, then head straight there." },
            ].map((s, i) => (
              <div key={s.n} className="animate-fade-up rounded-2xl border border-border bg-card p-8" style={{ animationDelay: `${i * 120}ms` }}>
                <div className="font-display text-3xl text-primary/40">{s.n}</div>
                <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground md:p-16">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl animate-float" />
          <div className="relative max-w-2xl">
            <Siren className="h-8 w-8 animate-pulse" />
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Emergency? Find ready hospitals near you.</h2>
            <p className="mt-4 text-primary-foreground/80">One tap to filter only hospitals with 24/7 emergency readiness.</p>
            <Link
              to="/search"
              search={{ q: "", state: "", emergency: true }}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-background px-6 py-3 font-medium text-foreground transition-transform hover:scale-[1.02]"
            >
              Emergency Mode <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-muted-foreground">
          © {new Date().getFullYear()} MediFind · Built for Nigeria
        </div>
      </footer>
    </div>
  );
}
