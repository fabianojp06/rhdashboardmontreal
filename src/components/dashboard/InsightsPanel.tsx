import { cn } from "@/lib/utils";
import { Insight } from "@/data/hrData";
import { AlertTriangle, CheckCircle, Info, Bell, Sparkles } from "lucide-react";

interface InsightsPanelProps {
  insights: Insight[];
}

const insightConfig = {
  alerta: {
    icon: AlertTriangle,
    iconColor: 'text-danger',
    bg: 'bg-danger/8',
    border: 'border-danger/20',
    badge: 'badge-danger',
    label: 'Alerta',
  },
  sucesso: {
    icon: CheckCircle,
    iconColor: 'text-success',
    bg: 'bg-success/8',
    border: 'border-success/20',
    badge: 'badge-success',
    label: 'Sucesso',
  },
  atencao: {
    icon: Bell,
    iconColor: 'text-warning',
    bg: 'bg-warning/8',
    border: 'border-warning/20',
    badge: 'badge-warning',
    label: 'Atenção',
  },
  info: {
    icon: Info,
    iconColor: 'text-info',
    bg: 'bg-info/8',
    border: 'border-info/20',
    badge: 'bg-info/15 text-info border border-info/30',
    label: 'Info',
  },
};

export function InsightsPanel({ insights }: InsightsPanelProps) {
  return (
    <div className="card-surface h-full flex flex-col border-primary/15">
      {/* Header */}
      <div className="px-4 py-4 border-b border-border flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-primary" />
        </div>
        <div>
          <h3 className="text-sm font-bold font-display text-foreground">Insights do Consultor</h3>
          <p className="text-[10px] text-muted-foreground">IA · Análise automática</p>
        </div>
        <span className="ml-auto text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
          {insights.length} insights
        </span>
      </div>

      {/* Insights list */}
      <div className="flex-1 overflow-y-auto py-3 px-3 space-y-2">
        {insights.length === 0 && (
          <div className="text-center py-8 text-muted-foreground text-sm">
            Sem insights para o período selecionado.
          </div>
        )}
        {insights.map((insight, i) => {
          const config = insightConfig[insight.tipo];
          const Icon = config.icon;
          return (
            <div
              key={i}
              className={cn(
                "p-3 rounded-xl border transition-all duration-200 hover:scale-[1.01] animate-fade-in",
                config.bg,
                config.border
              )}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-2.5">
                <Icon className={cn("w-4 h-4 flex-shrink-0 mt-0.5", config.iconColor)} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                    <span className={cn("text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full", config.badge)}>
                      {config.label}
                    </span>
                    <p className="text-xs font-semibold text-foreground leading-tight">{insight.titulo}</p>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{insight.descricao}</p>
                  <div className="mt-1.5">
                    <span className="text-[10px] font-mono font-semibold text-subtle bg-surface px-1.5 py-0.5 rounded">
                      {insight.metrica}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
