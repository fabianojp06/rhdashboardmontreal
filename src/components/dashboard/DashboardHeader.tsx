import { Filter, Calendar } from "lucide-react";
import { MONTHS_PT } from "@/data/hrData";

interface DashboardHeaderProps {
  ano: number;
  mes: string | null;
  onAnoChange: (ano: number) => void;
  onMesChange: (mes: string | null) => void;
  activeSection: string;
}

const SECTION_LABELS: Record<string, string> = {
  overview:     'Visão Geral',
  recrutamento: 'Recrutamento',
  diversidade:  'Diversidade & Inclusão',
  enps:         'eNPS & Engajamento',
  financeiro:   'Financeiro & ROI',
};

export function DashboardHeader({ ano, mes, onAnoChange, onMesChange, activeSection }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-3.5 border-b border-border bg-background/90 backdrop-blur-sm">
      <div>
        <h1 className="text-lg font-bold font-display text-foreground">
          {SECTION_LABELS[activeSection]}
        </h1>
        <p className="text-xs text-muted-foreground mt-0.5">
          Dashboard Estratégico de RH • Dados em tempo real
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs text-muted-foreground">
          <Filter className="w-3 h-3" />
          <span>Filtros</span>
        </div>

        {/* Ano filter */}
        <div className="flex items-center gap-1 bg-surface border border-border rounded-lg p-1">
          {[2025, 2026].map(a => (
            <button
              key={a}
              onClick={() => onAnoChange(a)}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                ano === a
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {a}
            </button>
          ))}
        </div>

        {/* Mês filter */}
        <div className="flex items-center gap-2 bg-surface border border-border rounded-lg px-3 py-1.5">
          <Calendar className="w-3 h-3 text-muted-foreground" />
          <select
            value={mes ?? ''}
            onChange={e => onMesChange(e.target.value || null)}
            className="bg-transparent text-xs font-medium text-foreground outline-none cursor-pointer"
          >
            <option value="">Todos os meses</option>
            {MONTHS_PT.map(m => (
              <option key={m} value={m} className="bg-surface text-foreground">{m}</option>
            ))}
          </select>
        </div>

        {/* Live indicator */}
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-success/10 border border-success/20">
          <span className="w-1.5 h-1.5 rounded-full bg-success pulse-dot" />
          <span className="text-[10px] font-semibold text-success uppercase tracking-wide">Live</span>
        </div>
      </div>
    </header>
  );
}
