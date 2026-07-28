"use client";

import { useState, useEffect, useRef } from "react";
import type { Map as LeafletMap, Marker as LeafletMarker } from "leaflet";
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
  teaching: "Centros Acadêmicos",
};

export const CAMPUS_MARKERS: MapMarker[] = [
  {
    lat: -27.60292639265232,
    lng: -48.52156942962812,
    name: "RU — Restaurante Universitário",
    description:
      "Principal refeição do calouro. Almoço e jantar a preços subsidiados. Ver a seção Carteira do RU para se cadastrar.",
    category: "food",
  },
  {
    lat: -27.599661859468497,
    lng: -48.51967097507556,
    name: "BU — Biblioteca Universitária",
    description:
      "Salas de estudo, acervo físico e digital, empréstimo de livros. Setor D — Acesso Trindade, CEP 88040-900.",
    category: "study",
  },
  {
    lat: -27.600262636788255,
    lng: -48.51772754485346,
    name: "CTC — Centro Tecnológico",
    description:
      "Prédios dos cursos de Engenharia e Computação. Maioria das aulas dos cursos do CTC. Ver mapa oficial em portasabertas.ctc.ufsc.br/localizacao/",
    category: "teaching",
  },
  {
    lat: -27.59707976322521,
    lng: -48.52216766351573,
    name: "DAE — Divisão de Administração Escolar",
    description:
      "Prédio Reitoria II, Sala 01 (térreo), Salas 102–103 (1º andar) — Rua Des. Vitor Lima, 222. Emissão de histórico, atestados e diplomas. dae.ufsc.br",
    category: "admin",
  },
  {
    lat: -27.58404164685532,
    lng: -48.522770833555626,
    name: "TITRI — Terminal Integrado Trindade",
    description:
      "Principal acesso ao campus por ônibus. Linhas 470, 471, 469, 477 entre outras. Ver guia de locomoção em cale.ufsc.br.",
    category: "transport",
  },
  {
    lat: -27.598324100782396,
    lng: -48.51955445365848,
    name: "Farmácia Escola UFSC",
    description:
      "Medicamentos pelo SUS, dentro do campus. Rua Delfino Conti, 100, Trindade. farmaciaescola.ccs.ufsc.br",
    category: "health",
  },
  {
    lat: -27.597280134692472,
    lng: -48.51879326018042,
    name: "HU — Hospital Universitário",
    description:
      "Rua Professora Maria Flora Pausewang, Campus Trindade. Atendimento SUS, dentro do campus. hu.ufsc.br",
    category: "health",
  },
  // Centros acadêmicos adicionados em B-62
  {
    lat: -27.6009829301275,
    lng: -48.52141492932045,
    name: "CCE — Centro de Comunicação e Expressão",
    description:
      "Jornalismo, Letras, Artes, Cinema e Design. Bloco principal do CCE.",
    category: "teaching",
  },
  {
    lat: -27.59919258520732,
    lng: -48.51762121161074,
    name: "CCS — Centro de Ciências da Saúde",
    description:
      "Medicina, Enfermagem, Farmácia, Odontologia e Nutrição. Bloco principal do CCS.",
    category: "teaching",
  },
  {
    lat: -27.598497640726105,
    lng: -48.522066575101306,
    name: "CCJ — Centro de Ciências Jurídicas",
    description: "Direito. Bloco principal do CCJ.",
    category: "teaching",
  },
  {
    lat: -27.60213042929666,
    lng: -48.52322292193917,
    name: "CFH — Centro de Filosofia e Ciências Humanas",
    description:
      "Psicologia, Sociologia, História, Filosofia, Antropologia e Geociências.",
    category: "teaching",
  },
  {
    lat: -27.601411120065425,
    lng: -48.52380552762934,
    name: "CFM — Centro de Ciências Físicas e Matemáticas",
    description: "Física, Química, Matemática e Oceanografia.",
    category: "teaching",
  },
  {
    lat: -27.59832906280479,
    lng: -48.51465289648096,
    name: "CCB — Centro de Ciências Biológicas",
    description: "Biologia, Biotecnologia e Ciências Biomédicas.",
    category: "teaching",
  },
  {
    lat: -27.599022119647845,
    lng: -48.52152701695787,
    name: "CSE — Centro Sócio-Econômico",
    description:
      "Administração, Ciências Contábeis, Ciências Econômicas e Serviço Social.",
    category: "teaching",
  },
  {
    lat: -27.60214617175289,
    lng: -48.523073290850284,
    name: "CED — Centro de Educação",
    description: "Pedagogia e licenciaturas em geral.",
    category: "teaching",
  },
  {
    lat: -27.6038314630442,
    lng: -48.51962283349618,
    name: "CDS — Centro de Desportos e Saúde",
    description: "Educação Física e instalações esportivas do campus.",
    category: "teaching",
  },
  {
    lat: -27.582124154997455,
    lng: -48.5043389382004,
    name: "CCA — Centro de Ciências Agrárias",
    description:
      "⚠️ Localizado em Itacorubi — ~2,4 km do Campus Trindade. Agronomia, Zootecnia, Aquicultura e Medicina Veterinária. Rua Admar Gonzaga, 1346, Itacorubi.",
    category: "teaching",
  },
];

// Categories whose background color provides sufficient contrast for white text (WCAG AA >= 4.5:1 at text-xs)
const DARK_BG_CATEGORIES: Set<MapMarker["category"]> = new Set([
  "health",
  "transport",
]);

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
  const markerLayersRef = useRef<
    { lMarker: LeafletMarker; category: MapMarker["category"] }[]
  >([]);
  const [activeCategory, setActiveCategory] = useState<
    MapMarker["category"] | null
  >(null);

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

      // fitBounds será chamado após inserir todos os marcadores

      mapRef.current = map;

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      markerLayersRef.current = [];

      CAMPUS_MARKERS.forEach((marker) => {
        const iconUrl = createMarkerIcon(CATEGORY_COLORS[marker.category]);

        const icon = L.icon({
          iconUrl,
          iconSize: [28, 36],
          iconAnchor: [14, 36],
          popupAnchor: [0, -36],
        });

        const categoryLabel = CATEGORY_LABELS[marker.category];

        const lMarker = L.marker([marker.lat, marker.lng], { icon });
        markerLayersRef.current.push({ lMarker, category: marker.category });
        lMarker
          .addTo(map)
          .bindPopup(
            `<strong style="font-size:0.9rem;display:block;margin-bottom:4px">${marker.name}</strong>` +
              `<span style="font-size:0.75rem;color:#4B5563;display:block;margin-bottom:6px">${categoryLabel}</span>` +
              `<span style="font-size:0.8rem;line-height:1.4">${marker.description}</span>`,
            { maxWidth: 240, className: "leaflet-popup-portal" }
          );
      });

      // Ajusta o viewport para cobrir todos os marcadores, incluindo CCA em Itacorubi
      const allLatLngs = CAMPUS_MARKERS.map((m) => L.latLng(m.lat, m.lng));
      const bounds = L.latLngBounds(allLatLngs);
      map.fitBounds(bounds, { padding: [40, 40] });
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;
    markerLayersRef.current.forEach(({ lMarker, category }) => {
      if (activeCategory === null || category === activeCategory) {
        lMarker.addTo(mapRef.current!);
      } else {
        lMarker.removeFrom(mapRef.current!);
      }
    });
  }, [activeCategory]);

  return (
    <div className="w-full rounded-xl overflow-hidden border border-surface-border shadow-card">
      {/* Filtro por categoria */}
      <div className="flex gap-2 flex-wrap p-3 bg-surface border-b border-surface-border overflow-x-auto">
        {/* Finding 1: py-2 + min-h-[36px] para toque mobile adequado */}
        <button
          onClick={() => setActiveCategory(null)}
          aria-pressed={activeCategory === null}
          className={`px-3 py-2 min-h-[36px] rounded-full text-xs font-medium transition-colors whitespace-nowrap
            ${
              activeCategory === null
                ? "bg-[#1565C0] text-white"
                : "bg-surface border border-surface-border text-ink-primary hover:bg-surface-alt"
            }`}
        >
          Todos
        </button>
        {(Object.keys(CATEGORY_COLORS) as MapMarker["category"][]).map(
          (cat) => (
            <button
              key={cat}
              onClick={() =>
                setActiveCategory(activeCategory === cat ? null : cat)
              }
              aria-pressed={activeCategory === cat}
              className={`px-3 py-2 min-h-[36px] rounded-full text-xs font-medium transition-colors whitespace-nowrap
                ${
                  activeCategory === cat
                    ? DARK_BG_CATEGORIES.has(cat)
                      ? "text-white"
                      : "text-gray-900"
                    : "bg-surface border border-surface-border text-ink-primary hover:bg-surface-alt"
                }`}
              style={
                activeCategory === cat
                  ? { backgroundColor: CATEGORY_COLORS[cat] }
                  : undefined
              }
            >
              {CATEGORY_LABELS[cat]}
            </button>
          )
        )}
      </div>

      {/* Sub-wrapper relative: mapa + legenda sem sobreposição nos chips */}
      <div className="relative">
        {/* Legenda — absolute dentro do sub-wrapper do mapa (Finding 2) */}
        <div className="absolute top-3 right-3 z-[1000] bg-surface/95 backdrop-blur-sm border border-surface-border rounded-lg p-3 shadow-card-hover">
          {/* Finding 5: text-ink-primary em vez de text-gray-900 */}
          <p className="text-xs font-semibold text-ink-primary mb-2">Legenda</p>
          <ul className="space-y-1.5">
            {(Object.keys(CATEGORY_COLORS) as MapMarker["category"][]).map((cat) => (
              <li key={cat} className="flex items-center gap-2 text-xs text-ink-primary">
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
          aria-label="Mapa interativo dos campi da UFSC Florianópolis com marcadores de pontos de interesse"
          role="application"
        />
      </div>
    </div>
  );
}
