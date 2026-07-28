"use client";

import dynamic from "next/dynamic";

const MapView = dynamic(() => import("@/components/MapView"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full h-[400px] md:h-[560px] rounded-lg border border-border bg-muted flex items-center justify-center"
      aria-label="Carregando mapa…"
      role="status"
    >
      <span className="text-muted-foreground text-sm animate-pulse">Carregando mapa…</span>
    </div>
  ),
});

export default function MapViewClient() {
  return <MapView />;
}
