import { Link } from "@tanstack/react-router";
import { MapPin, Phone, ShieldCheck, Siren, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Hospital } from "@/lib/mockData";

export function HospitalCard({ hospital, index = 0 }: { hospital: Hospital; index?: number }) {
  return (
    <Link
      to="/hospital/$id"
      params={{ id: hospital.id }}
      className="animate-fade-up smooth-hover block rounded-2xl border border-border bg-card p-6"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-display text-xl font-semibold leading-tight text-balance">
            {hospital.name}
          </h3>
          <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="truncate">{hospital.address}, {hospital.state}</span>
          </div>
        </div>
        {hospital.isVerified && (
          <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {hospital.specialists.slice(0, 3).map((s) => (
          <Badge key={s.id} variant="secondary" className="rounded-full font-normal">
            {s.specialty}
          </Badge>
        ))}
        {hospital.specialists.length > 3 && (
          <Badge variant="outline" className="rounded-full">+{hospital.specialists.length - 3}</Badge>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" />{hospital.phone}</span>
        <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{hospital.operatingHours}</span>
        {hospital.emergencyReady && (
          <span className="flex items-center gap-1.5 font-medium text-primary">
            <Siren className="h-3.5 w-3.5" /> Emergency
          </span>
        )}
      </div>
    </Link>
  );
}
