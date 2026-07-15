"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
// CSS do Leaflet — importado aqui para ser incluído apenas no bundle client-side
import "leaflet/dist/leaflet.css";

export interface MapMarker {
  lat: number;
  lng: number;
  name: string;
  description: string;
  category: "food" | "study" | "admin" | "health" | "transport" | "teaching";
}

const CAMPUS_CENTER = { lat: -27.5997, lng: -48.5202 };
const CAMPUS_ZOOM = 15;

const CATEGORY_COLORS: Record<MapMarker["category"], string> = {
  food: "#22C55E",
  study: "#1877F2",
  admin: "#F59E0B",
  health: "#EF4444",
  transport: "#8B5CF6",
  teaching: "#0EA5E9",
};

const CATEGORY_LABELS: Record<MapMarker["category"], string> = {
  food: "Alimentação",
  study: "Estudo / Biblioteca",
  admin: "Administração",
  health: "Saúde",
  transport: "Transporte",
  teaching: "Ensino / CTC",
};

export const CAMPUS_MARKERS: MapMarker[] = [
  {
    lat: -27.5971,
    lng: -48.5229,
    name: "RU — Restaurante Universitário",
    description:
      "Principal refeição do calouro. Almoço e jantar a preços subsidiados. Ver a seção Carteira do RU para se cadastrar.",
    category: "food",
  },
  {
    lat: -27.5966,
    lng: -48.521,
    name: "BU — Biblioteca Universitária",
    description:
      "Salas de estudo, acervo físico e digital, empréstimo de livros. Setor D — Acesso Trindade, CEP 88040-900.",
    category: "study",
  },
  {
    lat: -27.6005,
    lng: -48.52,
    name: "CTC — Centro Tecnológico",
    description:
      "Prédios dos cursos de Engenharia e Computação. Maioria das aulas dos cursos do CTC. Ver mapa oficial em portasabertas.ctc.ufsc.br/localizacao/",
    category: "teaching",
  },
  {
    lat: -27.596,
    lng: -48.5195,
    name: "DAE — Divisão de Administração Escolar",
    description:
      "Prédio Reitoria II, Sala 01 (térreo), Salas 102–103 (1º andar) — Rua Des. Vitor Lima, 222. Emissão de histórico, atestados e diplomas. dae.ufsc.br",
    category: "admin",
  },
  {
    lat: -27.595,
    lng: -48.518,
    name: "TITRI — Terminal Integrado Trindade",
    description:
      "Principal acesso ao campus por ônibus. Linhas 470, 471, 469, 477 entre outras. Ver guia de locomoção em cale.ufsc.br.",
    category: "transport",
  },
  {
    lat: -27.5975,
    lng: -48.5215,
    name: "Farmácia Escola UFSC",
    description:
      "Medicamentos pelo SUS, dentro do campus. Rua Delfino Conti, 100, Trindade. farmaciaescola.ccs.ufsc.br",
    category: "health",
  },
  {
    lat: -27.599,
    lng: -48.519,
    name: "HU — Hospital Universitário",
    description:
      "Rua Professora Maria Flora Pausewang, Campus Trindade. Atendimento SUS, dentro do campus. hu.ufsc.br",
    category: "health",
  },
];

function createMarkerIcon(color: string): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
      <path d="M14 0C6.27 0 0 6.27 0 14c0 9.63 12.55 21.25 13.1 21.76a1.3 1.3 0 0 0 1.8 0C15.45 35.25 28 23.63 28 14 28 6.27 21.73 0 14 0z"
        fill="${color}" stroke="white" stroke-width="1.5"/>
      <circle cx="14" cy="14" r="5.5" fill="white" fill-opacity="0.9"/>
    </svg>
  `.trim();
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export default function MapView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    // Importa Leaflet de forma dinâmica para evitar acesso a `window` no SSR
    import("leaflet").then((L) => {
      if (!containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        center: [CAMPUS_CENTER.lat, CAMPUS_CENTER.lng],
        zoom: CAMPUS_ZOOM,
        scrollWheelZoom: false,
        zoomControl: true,
      });

      mapRef.current = map;

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      CAMPUS_MARKERS.forEach((marker) => {
        const iconUrl = createMarkerIcon(CATEGORY_COLORS[marker.category]);

        const icon = L.icon({
          iconUrl,
          iconSize: [28, 36],
          iconAnchor: [14, 36],
          popupAnchor: [0, -36],
        });

        const categoryLabel = CATEGORY_LABELS[marker.category];

        L.marker([marker.lat, marker.lng], { icon })
          .addTo(map)
          .bindPopup(
            `<strong style="font-size:0.9rem;display:block;margin-bottom:4px">${marker.name}</strong>` +
              `<span style="font-size:0.75rem;color:#4B5563;display:block;margin-bottom:6px">${categoryLabel}</span>` +
              `<span style="font-size:0.8rem;line-height:1.4">${marker.description}</span>`,
            { maxWidth: 240, className: "leaflet-popup-portal" }
          );
      });
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-surface-border shadow-card">
      {/* Legenda */}
      <div className="absolute top-3 right-3 z-[1000] bg-surface/95 backdrop-blur-sm border border-surface-border rounded-lg p-3 shadow-card-hover">
        <p className="text-xs font-semibold text-ink-primary mb-2">Legenda</p>
        <ul className="space-y-1.5">
          {(Object.keys(CATEGORY_COLORS) as MapMarker["category"][]).map((cat) => (
            <li key={cat} className="flex items-center gap-2 text-xs text-ink-secondary">
              <span
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: CATEGORY_COLORS[cat] }}
                aria-hidden
              />
              {CATEGORY_LABELS[cat]}
            </li>
          ))}
        </ul>
      </div>

      {/* Container do mapa */}
      <div
        ref={containerRef}
        className="w-full h-[400px] md:h-[560px]"
        aria-label="Mapa interativo do Campus Trindade da UFSC com marcadores de pontos de interesse"
        role="application"
      />
    </div>
  );
}
