import {
  ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { GitCompare, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { slaData2025, slaData2026, vagasStatus2025, vagasStatus2026, diversidadeData2025, diversidadeData2026, MONTHS_PT } from '@/data/hrData';

// Merge 2025 and 2026 by month index
const yoySlaDados = MONTHS_PT.map((mes, i) => ({
  mes,
  'SLA 2025': slaData2025[i].sla,
  'SLA 2026': slaData2026[i].sla,
  meta: 15,
}));

const yoyVagasDados = MONTHS_PT.map((mes, i) => {
  const v25 = vagasStatus2025[i];
  const v26 = vagasStatus2026[i];
  return {
    mes,
    'Encerradas 2025': v25.encerradas,
    'Publicadas 2025': v25.publicadas,
    'Encerradas 2026': v26.encerradas || null,
    'Publicadas 2026': v26.publicadas || null,
  };
});

const yoyDivDados = MONTHS_PT.map((mes, i) => ({
  mes,
  'Diversidade 2025': diversidadeData2025[i].apurado,
  'Diversidade 2026': diversidadeData2026[i].apurado,
  meta: 60,
}));

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-surface border border-border rounded-xl p-3 shadow-xl text-xs">
      <p className="font-bold text-foreground mb-2">{label}</p>
      {payload.filter((p: any) => p.value !== null).map((p: any, i: number) => (
        <div key={i} className="flex items-center gap-2 py-0.5">
          <span className="w-2 h-2 rounded-full" style={{ background: p.color || p.fill }} />
          <span className="text-muted-foreground">{p.name}:</span>
          <span className="font-semibold text-foreground">{p.value}{p.name.includes('SLA') || p.name.includes('Div') ? (p.name.includes('SLA') ? 'd' : '%') : ''}</span>
        </div>
      ))}
    </div>
  );
};

interface DeltaCardProps {
  label: string;
  value2025: number | null;
  value2026: number | null;
  unit?: string;
  lowerIsBetter?: boolean;
}

function DeltaCard({ label, value2025, value2026, unit = '', lowerIsBetter = false }: DeltaCardProps) {
  if (value2025 == null || value2026 == null) return null;
  const diff = value2026 - value2025;
  const pct = value2025 !== 0 ? Math.round((diff / value2025) * 100) : 0;
  const improved = lowerIsBetter ? diff < 0 : diff > 0;
  const Icon = diff > 0 ? TrendingUp : diff < 0 ? TrendingDown : Minus;
  const color = improved ? 'text-success' : diff !== 0 ? 'text-danger' : 'text-muted-foreground';

  return (
    <div className="p-3 rounded-xl bg-surface-2 border border-border text-center">
      <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">{label}</p>
      <div className="flex items-center justify-center gap-2 mb-1">
        <span className="text-xs text-muted-foreground">{value2025}{unit}</span>
        <Icon className={`w-3 h-3 ${color}`} />
        <span className="text-sm font-bold text-foreground">{value2026}{unit}</span>
      </div>
      <span className={`text-[11px] font-semibold ${color}`}>
        {diff > 0 ? '+' : ''}{diff}{unit} ({pct > 0 ? '+' : ''}{pct}%)
      </span>
    </div>
  );
}

export function YoYSection() {
  // Summary stats for Jan (only month with 2026 data)
  const sla25Jan = slaData2025[0].sla!;
  const sla26Jan = slaData2026[0].sla!;
  const div25Jan = diversidadeData2025[0].apurado!;
  const div26Jan = diversidadeData2026[0].apurado!;
  const vagas25Jan = vagasStatus2025[0].encerradas + vagasStatus2025[0].publicadas;
  const vagas26Jan = vagasStatus2026[0].encerradas + vagasStatus2026[0].publicadas;

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border">
        <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center">
          <GitCompare className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-base font-bold font-display text-foreground">Comparativo Year over Year</h2>
          <p className="text-xs text-muted-foreground">2025 (ano completo) vs 2026 (Janeiro disponível) — linhas tracejadas = 2026</p>
        </div>
        <div className="ml-auto flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-primary rounded inline-block"/><span className="text-muted-foreground">2025</span></div>
          <div className="flex items-center gap-1.5"><span className="w-3 h-0.5 rounded inline-block" style={{ background: 'hsl(160,84%,39%)', borderTop: '2px dashed' }}/><span className="text-muted-foreground">2026</span></div>
        </div>
      </div>

      {/* Delta cards (Jan comparison) */}
      <div>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">📊 Delta Janeiro: 2025 → 2026</p>
        <div className="grid grid-cols-3 gap-3">
          <DeltaCard label="SLA (Jan)" value2025={sla25Jan} value2026={sla26Jan} unit="d" lowerIsBetter />
          <DeltaCard label="Diversidade (Jan)" value2025={div25Jan} value2026={div26Jan} unit="%" />
          <DeltaCard label="Total Vagas (Jan)" value2025={vagas25Jan} value2026={vagas26Jan} />
        </div>
      </div>

      {/* SLA YoY Chart */}
      <div className="card-surface p-5">
        <h3 className="text-sm font-bold font-display text-foreground mb-1">SLA — 2025 vs 2026</h3>
        <p className="text-xs text-muted-foreground mb-4">Dias médios de fechamento de posições por mês</p>
        <ResponsiveContainer width="100%" height={220}>
          <ComposedChart data={yoySlaDados} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(215,20%,14%)" vertical={false} />
            <XAxis dataKey="mes" tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 35]} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: '11px', color: 'hsl(215,20%,55%)' }} />
            <Line type="monotone" dataKey="meta" name="Meta (15d)" stroke="hsl(215,20%,35%)" strokeDasharray="4 4" strokeWidth={1.5} dot={false} />
            <Line type="monotone" dataKey="SLA 2025" stroke="hsl(348,85%,50%)" strokeWidth={2.5}
              dot={{ fill: 'hsl(348,85%,50%)', r: 3 }} activeDot={{ r: 5 }}
              connectNulls={false} />
            <Line type="monotone" dataKey="SLA 2026" stroke="hsl(160,84%,39%)" strokeWidth={2.5} strokeDasharray="6 3"
              dot={{ fill: 'hsl(160,84%,39%)', r: 4 }} activeDot={{ r: 6 }}
              connectNulls={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Vagas YoY Chart */}
      <div className="card-surface p-5">
        <h3 className="text-sm font-bold font-display text-foreground mb-1">Volume de Vagas — 2025 vs 2026</h3>
        <p className="text-xs text-muted-foreground mb-4">Encerradas + Publicadas por mês (barras agrupadas)</p>
        <ResponsiveContainer width="100%" height={220}>
          <ComposedChart data={yoyVagasDados} margin={{ top: 5, right: 10, left: -10, bottom: 0 }} barCategoryGap="25%" barGap={2}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(215,20%,14%)" vertical={false} />
            <XAxis dataKey="mes" tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: '11px', color: 'hsl(215,20%,55%)' }} />
            <Bar dataKey="Encerradas 2025" fill="hsl(160,84%,39%)" fillOpacity={0.9} radius={[3, 3, 0, 0]} />
            <Bar dataKey="Publicadas 2025" fill="hsl(199,89%,48%)" fillOpacity={0.9} radius={[3, 3, 0, 0]} />
            <Bar dataKey="Encerradas 2026" fill="hsl(160,84%,39%)" fillOpacity={0.45} radius={[3, 3, 0, 0]} />
            <Bar dataKey="Publicadas 2026" fill="hsl(199,89%,48%)" fillOpacity={0.45} radius={[3, 3, 0, 0]} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Diversidade YoY Chart */}
      <div className="card-surface p-5">
        <h3 className="text-sm font-bold font-display text-foreground mb-1">Diversidade — 2025 vs 2026</h3>
        <p className="text-xs text-muted-foreground mb-4">% de contratações diversas vs meta de 60%</p>
        <ResponsiveContainer width="100%" height={220}>
          <ComposedChart data={yoyDivDados} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(215,20%,14%)" vertical={false} />
            <XAxis dataKey="mes" tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} domain={[40, 85]} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: '11px', color: 'hsl(215,20%,55%)' }} />
            <Line type="monotone" dataKey="meta" name="Meta (60%)" stroke="hsl(215,20%,35%)" strokeDasharray="4 4" strokeWidth={1.5} dot={false} />
            <Line type="monotone" dataKey="Diversidade 2025" stroke="hsl(348,85%,50%)" strokeWidth={2.5}
              dot={{ fill: 'hsl(348,85%,50%)', r: 3 }} activeDot={{ r: 5 }} connectNulls={false} />
            <Line type="monotone" dataKey="Diversidade 2026" stroke="hsl(160,84%,39%)" strokeWidth={2.5} strokeDasharray="6 3"
              dot={{ fill: 'hsl(160,84%,39%)', r: 4, strokeWidth: 2, stroke: 'hsl(222,47%,4%)' }} activeDot={{ r: 6 }} connectNulls={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
