import { Map, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { SectionBlock } from "@/lib/content";
import { ProseBlockGroup } from "./ProseBlocks";

/**
 * Dedicated UI for the "Mapa da universidade" section.
 * Shows a prominent card that directs users to the interactive map at /mapa,
 * then renders the remaining prose content (reference tables, tips, links).
 */
export function MapaSection({ blocks }: { blocks: SectionBlock[] }) {
  return (
    <div className="space-y-6">
      {/* Interactive map CTA */}
      <div className="card p-5 sm:p-6 border-l-4 border-primary">
        <div className="flex items-start gap-4">
          <span className="section-icon-wrapper icon-blue flex-shrink-0 mt-0.5" aria-hidden>
            <Map size={20} />
          </span>

          <div className="flex-1 min-w-0">
            <h2 className="text-base font-bold text-foreground mb-1">
              Mapa interativo do campus
            </h2>
            <p className="text-sm text-muted-foreground mb-3">
              Veja os prédios, RU, biblioteca e pontos de interesse do Campus Trindade
              com marcadores clicáveis.
            </p>
            <Link
              href="/mapa"
              className="btn-primary inline-flex items-center gap-1.5"
            >
              Ver o mapa interativo
              <ArrowRight size={15} aria-hidden />
            </Link>
          </div>
        </div>
      </div>

      {/* Remaining prose content from mapa.md */}
      {blocks.length > 0 && <ProseBlockGroup blocks={blocks} />}
    </div>
  );
}
