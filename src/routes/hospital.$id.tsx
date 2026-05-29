import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Phone, Mail, Clock, ShieldCheck, Siren, Calendar } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { MapView } from "@/components/MapView";
import { Badge } from "@/components/ui/badge";
import { HOSPITALS } from "@/lib/mockData";

export const Route = createFileRoute("/hospital/$id")({
  component: HospitalDetail,
  loader: ({ params }) => {
    const hospital = HOSPITALS.find((h) => h.id === params.id);
    if (!hospital) throw notFound();
    return { hospital };
  },
});

function HospitalDetail() {
  const { hospital } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <Link to="/search" search={{ q: "", state: "", emergency: false }} className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to results
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_400px]">
          <div className="animate-fade-up">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Badge variant="secondary" className="rounded-full capitalize">{hospital.type}</Badge>
                <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
                  {hospital.name}
                </h1>
                <p className="mt-3 flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" /> {hospital.address}, {hospital.state}
                </p>
              </div>
              {hospital.isVerified && (
                <div className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" /> Verified
                </div>
              )}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
              <InfoTile icon={Phone} label="Phone" value={hospital.phone} />
              <InfoTile icon={Mail} label="Email" value={hospital.email} />
              <InfoTile icon={Clock} label="Hours" value={hospital.operatingHours} />
            </div>

            {hospital.emergencyReady && (
              <div className="animate-fade-up delay-200 mt-6 flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/5 p-4 text-sm">
                <Siren className="h-5 w-5 animate-pulse text-primary" />
                <span><strong>Emergency-ready</strong> · 24/7 admissions and trauma response</span>
              </div>
            )}

            <h2 className="animate-fade-up delay-300 mt-12 font-display text-2xl font-semibold">Specialists ({hospital.specialists.length})</h2>
            <div className="mt-4 grid gap-3">
              {hospital.specialists.map((s: any, i: number) => (
                <div key={s.id} className="animate-fade-up smooth-hover rounded-2xl border border-border bg-card p-5" style={{ animationDelay: `${300 + i * 80}ms` }}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-medium">{s.fullName}</div>
                      <div className="text-sm text-muted-foreground">{s.specialty}</div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {s.qualifications.map((q: string) => (
                          <Badge key={q} variant="outline" className="rounded-full font-normal">{q}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-right text-xs text-muted-foreground">
                      <div className="flex items-center justify-end gap-1"><Calendar className="h-3 w-3" />{s.availableDays.join(", ")}</div>
                      <div className="mt-1">{s.availableHours}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside>
            <div className="sticky top-24 h-[500px]">
              <MapView hospitals={[hospital]} activeId={hospital.id} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function InfoTile({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground"><Icon className="h-3.5 w-3.5" />{label}</div>
      <div className="mt-1 truncate text-sm font-medium">{value}</div>
    </div>
  );
}
