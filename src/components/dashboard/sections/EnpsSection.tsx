import { Heart, Users, TrendingUp, Award } from 'lucide-react';
import { KpiCard } from '../KpiCard';
import { EnpsChart } from '../EnpsChart';
import { getEnpsData, getFilteredData } from '@/data/hrData';

interface EnpsSectionProps {
  ano: number;
  mes: string | null;
}

export function EnpsSection({ ano, mes }: EnpsSectionProps) {
  const enpsData = getFilteredData(getEnpsData(ano), mes);
  const validData = enpsData.filter(d => d.valor !== null) as { mes: string; valor: number; respondentes: number; meta: number }[];
  const lastEnps = validData.at(-1);
  const avgEnps = validData.length ? Math.round(validData.reduce((a, b) => a + b.valor, 0) / validData.length) : 0;
  const totalRespondentes = validData.reduce((a, b) => a + b.respondentes, 0);
  const mesesAcimaMeta = validData.filter(d => d.valor >= d.meta).length;

  const getCategory = (v: number) => {
    if (v >= 75) return 'Excelente';
    if (v >= 50) return 'Bom';
    if (v >= 0) return 'Regular';
    return 'Crítico';
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="eNPS Atual" value={lastEnps?.valor ?? 'N/A'} subtitle={lastEnps ? getCategory(lastEnps.valor) : 'Sem dados'} icon={Heart}
          status={lastEnps ? (lastEnps.valor >= lastEnps.meta ? 'success' : 'warning') : 'neutral'} delay={0} />
        <KpiCard title="eNPS Médio" value={avgEnps || 'N/A'} subtitle={`Meta: ${lastEnps?.meta ?? 50}`} icon={TrendingUp}
          status={avgEnps >= (lastEnps?.meta ?? 50) ? 'success' : 'warning'} delay={100} />
        <KpiCard title="Total Respondentes" value={totalRespondentes} subtitle="Participações acumuladas" icon={Users}
          status="info" delay={200} />
        <KpiCard title="Meses Acima da Meta" value={`${mesesAcimaMeta}/${validData.length}`} subtitle="Meta atingida" icon={Award}
          status={mesesAcimaMeta === validData.length ? 'success' : mesesAcimaMeta > 0 ? 'warning' : 'danger'} delay={300} />
      </div>

      <EnpsChart data={enpsData} />

      {/* eNPS Scale */}
      <div className="card-surface p-5 animate-fade-in">
        <h3 className="text-sm font-bold font-display text-foreground mb-4">Escala eNPS</h3>
        <div className="flex gap-2">
          {[
            { range: '-100 a -1', label: 'Crítico', color: 'bg-danger', text: 'text-danger' },
            { range: '0 a 24', label: 'Regular', color: 'bg-warning', text: 'text-warning' },
            { range: '25 a 49', label: 'Bom', color: 'bg-info', text: 'text-info' },
            { range: '50 a 74', label: 'Muito Bom', color: 'bg-success/60', text: 'text-success' },
            { range: '75 a 100', label: 'Excelente', color: 'bg-success', text: 'text-success' },
          ].map((item, i) => (
            <div key={i} className="flex-1 text-center">
              <div className={`h-2 rounded-full ${item.color} mb-2`} />
              <p className={`text-[10px] font-bold ${item.text}`}>{item.label}</p>
              <p className="text-[9px] text-muted-foreground">{item.range}</p>
            </div>
          ))}
        </div>
        {lastEnps && (
          <div className="mt-4 p-3 rounded-lg bg-surface-2 border border-border text-center">
            <p className="text-xs text-muted-foreground">Último score registrado</p>
            <p className="text-3xl font-bold font-display text-foreground mt-1">{lastEnps.valor}</p>
            <p className="text-sm font-semibold text-success mt-0.5">{getCategory(lastEnps.valor)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
