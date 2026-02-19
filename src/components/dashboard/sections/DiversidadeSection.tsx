import { Users, Award, TrendingUp, Percent } from 'lucide-react';
import { KpiCard } from '../KpiCard';
import { DiversidadeDonut } from '../DiversidadeDonut';
import { getDiversidadeData, getFilteredData, calcTotalContratacoes } from '@/data/hrData';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, BarChart, Bar, Cell
} from 'recharts';

interface DiversidadeSectionProps {
  ano: number;
  mes: string | null;
  regional?: string | null;
}

export function DiversidadeSection({ ano, mes, regional }: DiversidadeSectionProps) {
  const divData = getFilteredData(getDiversidadeData(ano, regional), mes);
  const validData = divData.filter(d => d.apurado !== null) as typeof divData;
  const lastDiv = validData.at(-1);
  const totalContratados = calcTotalContratacoes(divData);
  const totalPcds = divData.reduce((a, b) => a + (b.pcds ?? 0), 0);
  const totalMulheres = divData.reduce((a, b) => a + (b.mulheres ?? 0), 0);
  const avgDiversidade = validData.length
    ? Math.round(validData.reduce((a, b) => a + (b.apurado as number), 0) / validData.length)
    : 0;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null;
    return (
      <div className="bg-surface border border-border rounded-xl p-3 shadow-xl text-xs">
        <p className="font-bold text-foreground mb-1">{label}</p>
        {payload.map((p: any, i: number) => (
          <div key={i} className="flex gap-2">
            <span className="text-muted-foreground">{p.name}:</span>
            <span className="font-semibold text-foreground">{p.value}%</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="Diversidade Média" value={`${avgDiversidade}%`} subtitle="Meta: 60%" icon={Percent}
          status={avgDiversidade >= 60 ? 'success' : 'warning'} delay={0} />
        <KpiCard title="Total Contratações" value={totalContratados} subtitle="Período selecionado" icon={Users}
          status="info" delay={100} />
        <KpiCard title="PCDs Contratados" value={totalPcds} subtitle="Pessoas com Deficiência" icon={Award}
          status="success" delay={200} />
        <KpiCard title="Mulheres Contratadas" value={totalMulheres} subtitle="No período" icon={TrendingUp}
          status="info" delay={300} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {lastDiv?.apurado != null && (
          <DiversidadeDonut
            apurado={lastDiv.apurado as number}
            meta={60}
            totalContratados={totalContratados}
            totalPcds={totalPcds}
            totalMulheres={totalMulheres}
            pctMulheres={lastDiv.pctMulheres ?? 0}
          />
        )}
        <div className="card-surface p-5 animate-fade-in">
          <h3 className="text-sm font-bold font-display text-foreground mb-1">Diversidade Mensal vs Meta</h3>
          <p className="text-xs text-muted-foreground mb-4">Evolução do percentual de contratações diversas</p>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={validData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="divGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(160,84%,39%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(160,84%,39%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(215,20%,14%)" vertical={false} />
              <XAxis dataKey="mes" tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} domain={[40, 80]} />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine y={60} stroke="hsl(38,92%,50%)" strokeDasharray="6 3" strokeWidth={1.5} />
              <Area type="monotone" dataKey="apurado" name="Diversidade %" stroke="hsl(160,84%,39%)" fill="url(#divGrad)" strokeWidth={2.5}
                dot={{ fill: 'hsl(160,84%,39%)', r: 4, strokeWidth: 0 }} activeDot={{ r: 6, fill: 'hsl(160,84%,39%)', stroke: 'hsl(222,47%,4%)', strokeWidth: 2 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* PCDs e Mulheres por mês */}
      <div className="card-surface p-5 animate-fade-in">
        <h3 className="text-sm font-bold font-display text-foreground mb-1">PCDs & Mulheres por Mês</h3>
        <p className="text-xs text-muted-foreground mb-4">Volume absoluto de contratações diversas</p>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={validData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }} barCategoryGap="35%">
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(215,20%,14%)" vertical={false} />
            <XAxis dataKey="mes" tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={({ active, payload, label }: any) => {
              if (!active || !payload?.length) return null;
              return (
                <div className="bg-surface border border-border rounded-xl p-3 shadow-xl text-xs">
                  <p className="font-bold text-foreground mb-1">{label}</p>
                  {payload.map((p: any, i: number) => <div key={i} className="flex gap-2"><span className="text-muted-foreground">{p.name}:</span><span className="font-semibold">{p.value}</span></div>)}
                </div>
              );
            }} />
            <Bar dataKey="pcds" name="PCDs" fill="hsl(199,89%,48%)" radius={[3, 3, 0, 0]} />
            <Bar dataKey="mulheres" name="Mulheres" fill="hsl(258,90%,66%)" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
