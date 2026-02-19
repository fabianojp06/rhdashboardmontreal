import { Filter, Calendar, MapPin } from "lucide-react";
import { MONTHS_PT, REGIONAIS } from "@/data/hrData";

interface DashboardHeaderProps {
  ano: number;
  mes: string | null;
  regional: string | null;
  onAnoChange: (ano: number) => void;
  onMesChange: (mes: string | null) => void;
  onRegionalChange: (r: string | null) => void;
  activeSection: string;
  showFilters?: boolean;
}

const SECTION_LABELS: Record<string, string> = {
  overview:     'Visão Geral',
  recrutamento: 'Recrutamento',
  diversidade:  'Diversidade & Inclusão',
  enps:         'eNPS & Engajamento',
  financeiro:   'Financeiro & ROI',
  yoy:          'Comparativo YoY — 2025 vs 2026',
  regional:     'Performance por Regional',
};

const REGIONAL_LABELS: Record<string, string> = {
  MG: 'Minas Gerais',
  RJ: 'Rio de Janeiro',
  SP: 'São Paulo',
  DF: 'Distrito Federal',
  PA: 'Pará',
};

export function DashboardHeader({
  ano, mes, regional,
  onAnoChange, onMesChange, onRegionalChange,
  activeSection, showFilters = true
}: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-3.5 border-b border-border bg-background/90 backdrop-blur-sm">
      <div>
        <h1 className="text-lg font-bold font-display text-foreground">
          {SECTION_LABELS[activeSection]}
        </h1>
        <p className="text-xs text-muted-foreground mt-0.5">
          Dashboard Estratégico de RH
          {regional ? ` • Regional: ${REGIONAL_LABELS[regional] ?? regional}` : ' • Todas as Regionais'}
          {' '}• Dados em tempo real
        </p>
      </div>

      <div className="flex items-center gap-2 flex-wrap justify-end">
        {showFilters && (
          <>
            {/* Filtro Regional */}
            <div className="flex items-center gap-1.5 bg-surface border border-border rounded-lg px-2.5 py-1.5">
              <MapPin className="w-3 h-3 text-muted-foreground flex-shrink-0" />
              <select
                value={regional ?? ''}
                onChange={e => onRegionalChange(e.target.value || null)}
                className="bg-transparent text-xs font-medium text-foreground outline-none cursor-pointer"
              >
                <option value="">Todas as Regionais</option>
                {REGIONAIS.map(r => (
                  <option key={r} value={r} className="bg-popover text-foreground">{r} — {REGIONAL_LABELS[r]}</option>
                ))}
              </select>
            </div>

            {/* Filtro Ano */}
            <div className="flex items-center gap-1 bg-surface border border-border rounded-lg p-1">
              {[2025, 2026].map(a => (
                <button key={a} onClick={() => onAnoChange(a)}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${ano === a ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>
                  {a}
                </button>
              ))}
            </div>

            {/* Filtro Mês */}
            <div className="flex items-center gap-2 bg-surface border border-border rounded-lg px-3 py-1.5">
              <Calendar className="w-3 h-3 text-muted-foreground" />
              <select value={mes ?? ''} onChange={e => onMesChange(e.target.value || null)}
                className="bg-transparent text-xs font-medium text-foreground outline-none cursor-pointer">
                <option value="">Todos os meses</option>
                {MONTHS_PT.map(m => (
                  <option key={m} value={m} className="bg-popover text-foreground">{m}</option>
                ))}
              </select>
            </div>
          </>
        )}

        {/* Badge Live */}
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-success/10 border border-success/20">
          <span className="w-1.5 h-1.5 rounded-full bg-success pulse-dot" />
          <span className="text-[10px] font-semibold text-success uppercase tracking-wide">Live</span>
        </div>
      </div>
    </header>
  );
}
