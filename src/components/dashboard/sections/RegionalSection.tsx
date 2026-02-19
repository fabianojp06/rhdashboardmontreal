import { MapPin, TrendingUp, Award } from 'lucide-react';
import { KpiCard } from '../KpiCard';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { regionaisData2025 } from '@/data/hrData';

// Aggregate by region
const totaisPorRegional = {
  MG: regionaisData2025.reduce((a, b) => a + b.MG, 0),
  RJ: regionaisData2025.reduce((a, b) => a + b.RJ, 0),
  SP: regionaisData2025.reduce((a, b) => a + b.SP, 0),
  DF: regionaisData2025.reduce((a, b) => a + b.DF, 0),
  PA: regionaisData2025.reduce((a, b) => a + b.PA, 0),
  PC_RJ: regionaisData2025.reduce((a, b) => a + b.PC_RJ, 0),
};

const totalGeral = Object.values(totaisPorRegional).reduce((a, b) => a + b, 0);

const regionaisRankingData = [
  { nome: 'MG',     label: 'Minas Gerais',     vagas: totaisPorRegional.MG,    cor: 'hsl(348,85%,50%)' },
  { nome: 'RJ',     label: 'Rio de Janeiro',   vagas: totaisPorRegional.RJ,    cor: 'hsl(199,89%,48%)' },
  { nome: 'DF',     label: 'Distrito Federal', vagas: totaisPorRegional.DF,    cor: 'hsl(38,92%,50%)' },
  { nome: 'SP',     label: 'São Paulo',        vagas: totaisPorRegional.SP,    cor: 'hsl(160,84%,39%)' },
  { nome: 'PC-RJ',  label: 'PC Service RJ',    vagas: totaisPorRegional.PC_RJ, cor: 'hsl(258,90%,66%)' },
  { nome: 'PA',     label: 'Pará',             vagas: totaisPorRegional.PA,    cor: 'hsl(215,28%,50%)' },
].sort((a, b) => b.vagas - a.vagas);

// Trend data: monthly evolution per region (Jan-Dez 2025)
const trendData = regionaisData2025.map(d => ({
  mes: d.mes,
  MG: d.MG,
  RJ: d.RJ,
  SP: d.SP,
  DF: d.DF,
  PA: d.PA,
  'PC-RJ': d.PC_RJ,
}));

// Radar data normalized
const maxVagas = Math.max(...regionaisRankingData.map(r => r.vagas));
const radarData = regionaisRankingData.map(r => ({
  regional: r.nome,
  volume: Math.round((r.vagas / maxVagas) * 100),
}));

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-surface border border-border rounded-xl p-3 shadow-xl text-xs">
      <p className="font-bold text-foreground mb-2">{label}</p>
      {payload.filter((p: any) => p.value > 0).map((p: any, i: number) => (
        <div key={i} className="flex items-center gap-2 py-0.5">
          <span className="w-2 h-2 rounded-full" style={{ background: p.color || p.fill }} />
          <span className="text-muted-foreground">{p.name}:</span>
          <span className="font-semibold text-foreground">{p.value} vagas</span>
        </div>
      ))}
    </div>
  );
};

export function RegionalSection() {
  const topRegional = regionaisRankingData[0];
  const avgMensal = Math.round(totaisPorRegional.MG / 12);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border">
        <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center">
          <MapPin className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-base font-bold font-display text-foreground">Performance por Regional — 2025</h2>
          <p className="text-xs text-muted-foreground">MG · RJ · SP · DF · PA · PC Service RJ — Total: {totalGeral} vagas</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
        {regionaisRankingData.map((r, i) => (
          <div key={r.nome} className="p-3 rounded-xl bg-surface border border-border text-center card-hover">
            <div className="w-6 h-6 rounded-full mx-auto mb-2 flex items-center justify-center text-[10px] font-bold text-white" style={{ background: r.cor }}>
              {i + 1}
            </div>
            <p className="text-lg font-bold font-display text-foreground">{r.vagas}</p>
            <p className="text-[11px] font-semibold" style={{ color: r.cor }}>{r.nome}</p>
            <p className="text-[9px] text-muted-foreground">{Math.round((r.vagas / totalGeral) * 100)}% do total</p>
          </div>
        ))}
      </div>

      {/* Main ranking bar chart */}
      <div className="card-surface p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold font-display text-foreground">Ranking de Vagas por Regional</h3>
            <p className="text-xs text-muted-foreground">Total acumulado 2025 — todas as regionais</p>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-primary/10 border border-primary/20 text-xs">
            <Award className="w-3 h-3 text-primary" />
            <span className="text-primary font-semibold">Líder: {topRegional.nome}</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={regionaisRankingData} layout="vertical" margin={{ top: 0, right: 60, left: 20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(215,20%,14%)" horizontal={false} />
            <XAxis type="number" tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis type="category" dataKey="nome" tick={{ fill: 'hsl(215,20%,75%)', fontSize: 12, fontWeight: 600 }} axisLine={false} tickLine={false} width={45} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="vagas" name="Vagas" radius={[0, 6, 6, 0]} label={{ position: 'right', fill: 'hsl(215,20%,55%)', fontSize: 11 }}>
              {regionaisRankingData.map((r, i) => (
                <Cell key={i} fill={r.cor} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Monthly trend stacked */}
      <div className="card-surface p-5">
        <h3 className="text-sm font-bold font-display text-foreground mb-1">Evolução Mensal por Regional</h3>
        <p className="text-xs text-muted-foreground mb-4">Volume de vagas abertas por mês em cada regional — 2025</p>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={trendData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }} barCategoryGap="20%">
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(215,20%,14%)" vertical={false} />
            <XAxis dataKey="mes" tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="MG"    name="MG"     stackId="a" fill="hsl(348,85%,50%)" />
            <Bar dataKey="RJ"    name="RJ"     stackId="a" fill="hsl(199,89%,48%)" />
            <Bar dataKey="DF"    name="DF"     stackId="a" fill="hsl(38,92%,50%)" />
            <Bar dataKey="SP"    name="SP"     stackId="a" fill="hsl(160,84%,39%)" />
            <Bar dataKey="PC-RJ" name="PC-RJ"  stackId="a" fill="hsl(258,90%,66%)" />
            <Bar dataKey="PA"    name="PA"     stackId="a" fill="hsl(215,28%,50%)" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mt-3 justify-center">
          {regionaisRankingData.map(r => (
            <div key={r.nome} className="flex items-center gap-1.5 text-xs">
              <span className="w-2.5 h-2.5 rounded-sm" style={{ background: r.cor }} />
              <span className="text-muted-foreground">{r.nome}</span>
              <span className="font-semibold text-foreground">({r.vagas})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Share donut-style table */}
      <div className="card-surface p-5">
        <h3 className="text-sm font-bold font-display text-foreground mb-4">Participação de cada Regional</h3>
        <div className="space-y-3">
          {regionaisRankingData.map((r, i) => {
            const pct = Math.round((r.vagas / totalGeral) * 100);
            return (
              <div key={r.nome} className="flex items-center gap-3">
                <div className="w-5 text-center text-[10px] font-bold text-muted-foreground">{i + 1}º</div>
                <span className="text-sm font-semibold text-foreground w-24">{r.label}</span>
                <div className="flex-1 h-2.5 bg-surface-2 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${pct}%`, background: r.cor }}
                  />
                </div>
                <span className="text-xs font-bold text-foreground w-8 text-right">{pct}%</span>
                <span className="text-xs text-muted-foreground w-16 text-right">{r.vagas} vagas</span>
              </div>
            );
          })}
        </div>
        <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs">
          <span className="text-muted-foreground font-semibold">Total Geral 2025</span>
          <span className="text-lg font-bold font-display text-foreground">{totalGeral} vagas</span>
        </div>
      </div>
    </div>
  );
}
