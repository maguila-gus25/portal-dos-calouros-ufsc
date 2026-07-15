"use client";

import dynamic from "next/dynamic";

const MapView = dynamic(() => import("@/components/MapView"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full h-[400px] md:h-[560px] rounded-xl border border-surface-border bg-bg-app flex items-center justify-center"
      aria-label="Carregando mapa…"
      role="status"
    >
      <span className="text-ink-secondary text-sm animate-pulse">Carregando mapa…</span>
    </div>
  ),
});

export default function MapViewClient() {
  return <MapView />;
}
