import { MapPin } from "lucide-react";
import type { Hospital } from "@/lib/mockData";

/** Lightweight pseudo-map for the prototype (no API key needed). */
export function MapView({ hospitals, activeId }: { hospitals: Hospital[]; activeId?: string }) {
  // Project lat/lng of Nigeria into the box.
  const minLat = 4, maxLat = 13, minLng = 2.5, maxLng = 14.5;
  const project = (lat: number, lng: number) => ({
    x: ((lng - minLng) / (maxLng - minLng)) * 100,
    y: ((maxLat - lat) / (maxLat - minLat)) * 100,
  });

  return (
    <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-2xl border border-border gradient-warm">
      {/* grid */}
      <svg className="absolute inset-0 h-full w-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {hospitals.map((h, i) => {
        const { x, y } = project(h.coordinates.lat, h.coordinates.lng);
        const active = h.id === activeId;
        return (
          <div
            key={h.id}
            className="absolute -translate-x-1/2 -translate-y-full animate-fade-up"
            style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 100}ms` }}
          >
            <div className={`relative grid place-items-center rounded-full p-2 shadow-lg transition-all duration-300 ${
              active ? "bg-primary text-primary-foreground scale-125 animate-pulse-ring" : "bg-card text-primary hover:scale-110"
            }`}>
              <MapPin className="h-4 w-4" />
            </div>
            <div className="mt-1 whitespace-nowrap rounded-md bg-card/90 px-2 py-0.5 text-[10px] font-medium text-foreground shadow-sm backdrop-blur">
              {h.name.split(" ").slice(0, 2).join(" ")}
            </div>
          </div>
        );
      })}

      <div className="absolute bottom-3 right-3 rounded-md bg-card/80 px-2 py-1 text-[10px] text-muted-foreground backdrop-blur">
        Nigeria · interactive map
      </div>
    </div>
  );
}
