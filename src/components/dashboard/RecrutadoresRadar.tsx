import { useState } from 'react';
import {
  ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { X, TrendingUp, Target, Award } from 'lucide-react';
import { recrutadoresData2025 } from '@/data/hrData';

// Monthly data per recruiter (2025, from spreadsheet)
const recrutadorMensal: Record<string, { mes: string; vagas: number; posicoes: number; sla: number }[]> = {
  Amanda: [
    { mes: 'Jan', vagas: 13, posicoes: 15,  sla: 8  },
    { mes: 'Fev', vagas: 14, posicoes: 17,  sla: 11 },
    { mes: 'Mar', vagas: 15, posicoes: 26,  sla: 10 },
    { mes: 'Abr', vagas: 17, posicoes: 19,  sla: 28 },
    { mes: 'Mai', vagas: 42, posicoes: 60,  sla: 25 },
    { mes: 'Jun', vagas: 28, posicoes: 33,  sla: 10 },
    { mes: 'Jul', vagas: 21, posicoes: 30,  sla: 10 },
    { mes: 'Ago', vagas: 23, posicoes: 24,  sla: 20 },
    { mes: 'Set', vagas: 21, posicoes: 23,  sla: 16 },
    { mes: 'Out', vagas: 12, posicoes: 22,  sla: 35 },
    { mes: 'Nov', vagas: 11, posicoes: 15,  sla: 7  },
    { mes: 'Dez', vagas: 8,  posicoes: 8,   sla: 13 },
  ],
  Isa: [
    { mes: 'Jan', vagas: 10, posicoes: 21, sla: 17 },
    { mes: 'Fev', vagas: 14, posicoes: 14, sla: 28 },
    { mes: 'Mar', vagas: 13, posicoes: 13, sla: 14 },
    { mes: 'Abr', vagas: 15, posicoes: 23, sla: 10 },
    { mes: 'Mai', vagas: 3,  posicoes: 4,  sla: 21 },
    { mes: 'Jun', vagas: 4,  posicoes: 8,  sla: 21 },
    { mes: 'Jul', vagas: 4,  posicoes: 9,  sla: 17 },
    { mes: 'Ago', vagas: 1,  posicoes: 13, sla: 0  },
    { mes: 'Set', vagas: 5,  posicoes: 15, sla: 17 },
    { mes: 'Out', vagas: 4,  posicoes: 9,  sla: 19 },
    { mes: 'Nov', vagas: 5,  posicoes: 9,  sla: 16 },
    { mes: 'Dez', vagas: 1,  posicoes: 1,  sla: 3  },
  ],
  Kleber: [
    { mes: 'Jan', vagas: 0,  posicoes: 0,  sla: 0  },
    { mes: 'Fev', vagas: 10, posicoes: 13, sla: 4  },
    { mes: 'Mar', vagas: 2,  posicoes: 22, sla: 39 },
    { mes: 'Abr', vagas: 5,  posicoes: 7,  sla: 15 },
    { mes: 'Mai', vagas: 20, posicoes: 48, sla: 19 },
    { mes: 'Jun', vagas: 15, posicoes: 35, sla: 18 },
    { mes: 'Jul', vagas: 22, posicoes: 47, sla: 28 },
    { mes: 'Ago', vagas: 15, posicoes: 35, sla: 45 },
    { mes: 'Set', vagas: 12, posicoes: 57, sla: 24 },
    { mes: 'Out', vagas: 7,  posicoes: 21, sla: 17 },
    { mes: 'Nov', vagas: 12, posicoes: 65, sla: 17 },
    { mes: 'Dez', vagas: 6,  posicoes: 6,  sla: 16 },
  ],
  Miriam: [
    { mes: 'Jan', vagas: 18, posicoes: 22, sla: 34 },
    { mes: 'Fev', vagas: 8,  posicoes: 8,  sla: 24 },
    { mes: 'Mar', vagas: 22, posicoes: 26, sla: 27 },
    { mes: 'Abr', vagas: 16, posicoes: 20, sla: 21 },
    { mes: 'Mai', vagas: 15, posicoes: 16, sla: 23 },
    { mes: 'Jun', vagas: 10, posicoes: 10, sla: 20 },
    { mes: 'Jul', vagas: 17, posicoes: 24, sla: 25 },
    { mes: 'Ago', vagas: 16, posicoes: 18, sla: 26 },
    { mes: 'Set', vagas: 9,  posicoes: 10, sla: 18 },
    { mes: 'Out', vagas: 9,  posicoes: 9,  sla: 15 },
    { mes: 'Nov', vagas: 12, posicoes: 13, sla: 8  },
    { mes: 'Dez', vagas: 9,  posicoes: 9,  sla: 16 },
  ],
  Mayara: [
    { mes: 'Jan', vagas: 5,  posicoes: 5,  sla: 22 },
    { mes: 'Fev', vagas: 63, posicoes: 91, sla: 10 },
    { mes: 'Mar', vagas: 10, posicoes: 39, sla: 18 },
    { mes: 'Abr', vagas: 19, posicoes: 24, sla: 24 },
    { mes: 'Mai', vagas: 8,  posicoes: 8,  sla: 26 },
    { mes: 'Jun', vagas: 11, posicoes: 23, sla: 25 },
    { mes: 'Jul', vagas: 9,  posicoes: 14, sla: 16 },
    { mes: 'Ago', vagas: 8,  posicoes: 8,  sla: 14 },
    { mes: 'Set', vagas: 6,  posicoes: 6,  sla: 14 },
    { mes: 'Out', vagas: 2,  posicoes: 2,  sla: 1  },
    { mes: 'Nov', vagas: 0,  posicoes: 0,  sla: 0  },
    { mes: 'Dez', vagas: 0,  posicoes: 0,  sla: 0  },
  ],
  'Mari Souza': [
    { mes: 'Jan', vagas: 2,  posicoes: 2,  sla: 18 },
    { mes: 'Fev', vagas: 5,  posicoes: 7,  sla: 12 },
    { mes: 'Mar', vagas: 7,  posicoes: 9,  sla: 21 },
    { mes: 'Abr', vagas: 7,  posicoes: 7,  sla: 18 },
    { mes: 'Mai', vagas: 5,  posicoes: 5,  sla: 25 },
    { mes: 'Jun', vagas: 5,  posicoes: 5,  sla: 47 },
    { mes: 'Jul', vagas: 1,  posicoes: 1,  sla: 23 },
    { mes: 'Ago', vagas: 11, posicoes: 11, sla: 14 },
    { mes: 'Set', vagas: 4,  posicoes: 5,  sla: 16 },
    { mes: 'Out', vagas: 0,  posicoes: 0,  sla: 0  },
    { mes: 'Nov', vagas: 1,  posicoes: 1,  sla: 1  },
    { mes: 'Dez', vagas: 0,  posicoes: 0,  sla: 0  },
  ],
  Mari: [
    { mes: 'Jan', vagas: 5,  posicoes: 17, sla: 41 },
    { mes: 'Fev', vagas: 1,  posicoes: 10, sla: 35 },
    { mes: 'Mar', vagas: 4,  posicoes: 6,  sla: 48 },
    { mes: 'Abr', vagas: 7,  posicoes: 20, sla: 22 },
    { mes: 'Mai', vagas: 9,  posicoes: 15, sla: 21 },
    { mes: 'Jun', vagas: 10, posicoes: 10, sla: 51 },
    { mes: 'Jul', vagas: 21, posicoes: 23, sla: 20 },
    { mes: 'Ago', vagas: 15, posicoes: 16, sla: 39 },
    { mes: 'Set', vagas: 11, posicoes: 13, sla: 22 },
    { mes: 'Out', vagas: 21, posicoes: 22, sla: 18 },
    { mes: 'Nov', vagas: 6,  posicoes: 6,  sla: 23 },
    { mes: 'Dez', vagas: 20, posicoes: 20, sla: 28 },
  ],
  Sheila: [
    { mes: 'Jan', vagas: 0,  posicoes: 0,  sla: 0  },
    { mes: 'Fev', vagas: 0,  posicoes: 0,  sla: 0  },
    { mes: 'Mar', vagas: 0,  posicoes: 0,  sla: 0  },
    { mes: 'Abr', vagas: 0,  posicoes: 0,  sla: 0  },
    { mes: 'Mai', vagas: 13, posicoes: 15, sla: 42 },
    { mes: 'Jun', vagas: 8,  posicoes: 12, sla: 29 },
    { mes: 'Jul', vagas: 15, posicoes: 15, sla: 36 },
    { mes: 'Ago', vagas: 36, posicoes: 57, sla: 2  },
    { mes: 'Set', vagas: 26, posicoes: 34, sla: 5  },
    { mes: 'Out', vagas: 17, posicoes: 21, sla: 20 },
    { mes: 'Nov', vagas: 0,  posicoes: 0,  sla: 0  },
    { mes: 'Dez', vagas: 0,  posicoes: 0,  sla: 0  },
  ],
  'Ana Paula': [
    { mes: 'Jan', vagas: 0, posicoes: 0,   sla: 0  },
    { mes: 'Fev', vagas: 0, posicoes: 0,   sla: 0  },
    { mes: 'Mar', vagas: 0, posicoes: 0,   sla: 0  },
    { mes: 'Abr', vagas: 0, posicoes: 0,   sla: 0  },
    { mes: 'Mai', vagas: 0, posicoes: 0,   sla: 0  },
    { mes: 'Jun', vagas: 0, posicoes: 0,   sla: 0  },
    { mes: 'Jul', vagas: 0, posicoes: 0,   sla: 0  },
    { mes: 'Ago', vagas: 0, posicoes: 0,   sla: 0  },
    { mes: 'Set', vagas: 8, posicoes: 9,   sla: 8  },
    { mes: 'Out', vagas: 8, posicoes: 162, sla: 11 },
    { mes: 'Nov', vagas: 1, posicoes: 1,   sla: 24 },
    { mes: 'Dez', vagas: 3, posicoes: 3,   sla: 23 },
  ],
  João: [
    { mes: 'Jan', vagas: 3,  posicoes: 4,  sla: 52  },
    { mes: 'Fev', vagas: 7,  posicoes: 11, sla: 12  },
    { mes: 'Mar', vagas: 2,  posicoes: 2,  sla: 101 },
    { mes: 'Abr', vagas: 7,  posicoes: 9,  sla: 23  },
    { mes: 'Mai', vagas: 13, posicoes: 23, sla: 40  },
    { mes: 'Jun', vagas: 8,  posicoes: 10, sla: 18  },
    { mes: 'Jul', vagas: 4,  posicoes: 7,  sla: 35  },
    { mes: 'Ago', vagas: 6,  posicoes: 7,  sla: 16  },
    { mes: 'Set', vagas: 13, posicoes: 18, sla: 38  },
    { mes: 'Out', vagas: 29, posicoes: 55, sla: 12  },
    { mes: 'Nov', vagas: 13, posicoes: 14, sla: 25  },
    { mes: 'Dez', vagas: 13, posicoes: 13, sla: 15  },
  ],
};

export interface RecrutadorItem {
  nome: string;
  vagas: number;
  slaMedio: number;
  posicoes: number;
  vagasMed?: number;
  posicoesMed?: number;
  ranking?: number;
}

interface RecrutadoresRadarProps {
  data: RecrutadorItem[];
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface border border-border rounded-xl p-3 shadow-xl text-xs">
        <p className="font-bold text-foreground mb-1">{payload[0]?.payload?.nome}</p>
        {payload.map((p: any, i: number) => (
          <div key={i} className="flex gap-2 py-0.5">
            <span className="text-muted-foreground">{p.name}:</span>
            <span className="font-semibold text-foreground">{p.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const ModalTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-surface border border-border rounded-xl p-3 shadow-xl text-xs">
      <p className="font-bold text-foreground mb-1">{label}</p>
      {payload.map((p: any, i: number) => (
        <div key={i} className="flex items-center gap-2 py-0.5">
          <span className="w-2 h-2 rounded-full" style={{ background: p.color || p.fill }} />
          <span className="text-muted-foreground">{p.name}:</span>
          <span className="font-semibold text-foreground">{p.value}{p.name === 'SLA' ? 'd' : ''}</span>
        </div>
      ))}
    </div>
  );
};

function RecrutadorModal({ recrutador, onClose }: { recrutador: RecrutadorItem; onClose: () => void }) {
  const nome = recrutador.nome;
  const mensal = recrutadorMensal[nome] ?? [];
  const avgSla = mensal.filter(m => m.sla > 0).reduce((a, b, _, arr) => a + b.sla / arr.length, 0);
  const totalVagas = mensal.reduce((a, b) => a + b.vagas, 0);
  const bestMonth = [...mensal].filter(m => m.sla > 0).sort((a, b) => a.sla - b.sla)[0];
  const worstMonth = [...mensal].filter(m => m.sla > 0).sort((a, b) => b.sla - a.sla)[0];

  const slaColor = avgSla <= 15 ? 'text-success' : avgSla <= 25 ? 'text-warning' : 'text-danger';

  return (
    <DialogContent className="max-w-3xl bg-surface border-border text-foreground p-0 overflow-hidden">
      <DialogHeader className="px-6 pt-6 pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center">
            <span className="text-base font-bold text-primary">{nome[0]}</span>
          </div>
          <div>
            <DialogTitle className="text-lg font-bold font-display text-foreground">{nome}</DialogTitle>
            <p className="text-xs text-muted-foreground">Recrutador(a) • 2025 • Histórico mensal completo</p>
          </div>
        </div>
      </DialogHeader>

      <div className="p-6 space-y-5 overflow-y-auto max-h-[70vh]">
        {/* Summary KPIs */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: 'Total Vagas', value: totalVagas, icon: Target, color: 'text-info' },
            { label: 'Total Posições', value: recrutador.posicoes, icon: Award, color: 'text-success' },
            { label: 'SLA Médio', value: `${Math.round(avgSla)}d`, icon: TrendingUp, color: slaColor },
            { label: 'Meta SLA', value: '15d', icon: Target, color: 'text-muted-foreground' },
          ].map((k, i) => (
            <div key={i} className="p-3 rounded-xl bg-surface-2 border border-border text-center">
              <p className={`text-xl font-bold font-display ${k.color}`}>{k.value}</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide mt-0.5">{k.label}</p>
            </div>
          ))}
        </div>

        {/* SLA + Vagas Combined Chart */}
        <div>
          <h4 className="text-sm font-semibold font-display text-foreground mb-3">Evolução Mensal — SLA & Volume de Vagas</h4>
          <ResponsiveContainer width="100%" height={200}>
            <ComposedChart data={mensal} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(215,20%,14%)" vertical={false} />
              <XAxis dataKey="mes" tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="vagas" tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="sla" orientation="right" tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip content={<ModalTooltip />} />
              <Legend wrapperStyle={{ fontSize: '11px', color: 'hsl(215,20%,55%)' }} />
              <Bar yAxisId="vagas" dataKey="vagas" name="Vagas" fill="hsl(199,89%,48%)" fillOpacity={0.8} radius={[3, 3, 0, 0]} />
              <Line yAxisId="sla" type="monotone" dataKey="sla" name="SLA" stroke="hsl(348,85%,50%)" strokeWidth={2.5}
                dot={{ fill: 'hsl(348,85%,50%)', r: 3 }} activeDot={{ r: 5 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly table */}
        <div>
          <h4 className="text-sm font-semibold font-display text-foreground mb-3">Tabela Mensal Detalhada</h4>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border bg-surface-2">
                  <th className="text-left px-3 py-2 text-muted-foreground font-semibold">Mês</th>
                  <th className="text-center px-3 py-2 text-muted-foreground font-semibold">Vagas</th>
                  <th className="text-center px-3 py-2 text-muted-foreground font-semibold">Posições</th>
                  <th className="text-center px-3 py-2 text-muted-foreground font-semibold">SLA (dias)</th>
                  <th className="text-center px-3 py-2 text-muted-foreground font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {mensal.map((m, i) => {
                  const slaStatus = m.sla === 0 ? 'N/A' : m.sla <= 15 ? 'ok' : m.sla <= 25 ? 'warn' : 'bad';
                  return (
                    <tr key={i} className={cn("border-b border-border/40 transition-colors hover:bg-surface-2", m.vagas === 0 && "opacity-40")}>
                      <td className="px-3 py-2 font-medium text-foreground">{m.mes}</td>
                      <td className="px-3 py-2 text-center text-info font-semibold">{m.vagas || '—'}</td>
                      <td className="px-3 py-2 text-center text-success font-semibold">{m.posicoes || '—'}</td>
                      <td className="px-3 py-2 text-center font-semibold">
                        {m.sla > 0 ? `${m.sla}d` : '—'}
                      </td>
                      <td className="px-3 py-2 text-center">
                        {slaStatus === 'N/A' ? <span className="text-subtle text-[10px]">—</span>
                          : slaStatus === 'ok' ? <span className="badge-success text-[10px] px-1.5 py-0.5 rounded-full font-semibold">✓ Meta</span>
                          : slaStatus === 'warn' ? <span className="badge-warning text-[10px] px-1.5 py-0.5 rounded-full font-semibold">⚠ Atenção</span>
                          : <span className="badge-danger text-[10px] px-1.5 py-0.5 rounded-full font-semibold">✗ Crítico</span>
                        }
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Highlights */}
        {(bestMonth || worstMonth) && (
          <div className="grid grid-cols-2 gap-3">
            {bestMonth && (
              <div className="p-3 rounded-xl bg-success/8 border border-success/20">
                <p className="text-[10px] uppercase font-semibold text-success mb-1">🏆 Melhor Mês</p>
                <p className="text-sm font-bold text-foreground">{bestMonth.mes} — {bestMonth.sla} dias</p>
                <p className="text-[11px] text-muted-foreground">{bestMonth.vagas} vagas conduzidas</p>
              </div>
            )}
            {worstMonth && (
              <div className="p-3 rounded-xl bg-danger/8 border border-danger/20">
                <p className="text-[10px] uppercase font-semibold text-danger mb-1">⚠ Mês mais lento</p>
                <p className="text-sm font-bold text-foreground">{worstMonth.mes} — {worstMonth.sla} dias</p>
                <p className="text-[11px] text-muted-foreground">{worstMonth.vagas} vagas conduzidas</p>
              </div>
            )}
          </div>
        )}
      </div>
    </DialogContent>
  );
}

import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

export function RecrutadoresRadar({ data }: RecrutadoresRadarProps) {
  const [selectedRecrutador, setSelectedRecrutador] = useState<RecrutadorItem | null>(null);

  const maxVagas = Math.max(...data.map(d => d.vagas));
  const maxSla = Math.max(...data.map(d => d.slaMedio));

  const radarData = data.slice(0, 6).map(d => ({
    nome: d.nome,
    'Vagas (norm)': Math.round((d.vagas / maxVagas) * 100),
    'Velocidade (inv SLA)': Math.round(((maxSla - d.slaMedio) / maxSla) * 100),
  }));

  return (
    <>
      <div className="card-surface p-5 animate-fade-in" style={{ animationDelay: '200ms' }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold font-display text-foreground">Radar de Recrutadores</h3>
            <p className="text-xs text-muted-foreground">Top performers: Volume vs Velocidade</p>
          </div>
          <span className="text-[10px] text-muted-foreground bg-surface-2 px-2 py-1 rounded-lg border border-border">
            Clique em uma linha para ver detalhes →
          </span>
        </div>
        <div className="flex gap-4">
          <ResponsiveContainer width="55%" height={220}>
            <RadarChart data={radarData} outerRadius="75%">
              <PolarGrid stroke="hsl(215,20%,14%)" />
              <PolarAngleAxis dataKey="nome" tick={{ fill: 'hsl(215,20%,55%)', fontSize: 10 }} />
              <PolarRadiusAxis tick={false} axisLine={false} domain={[0, 100]} />
              <Tooltip content={<CustomTooltip />} />
              <Radar name="Volume" dataKey="Vagas (norm)" stroke="hsl(160,84%,39%)" fill="hsl(160,84%,39%)" fillOpacity={0.2} strokeWidth={2} />
              <Radar name="Velocidade" dataKey="Velocidade (inv SLA)" stroke="hsl(199,89%,48%)" fill="hsl(199,89%,48%)" fillOpacity={0.15} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>

          {/* Clickable table */}
          <div className="flex-1 overflow-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left pb-2 text-muted-foreground font-semibold">Recrutador</th>
                  <th className="text-center pb-2 text-muted-foreground font-semibold">Vagas</th>
                  <th className="text-center pb-2 text-muted-foreground font-semibold">SLA Médio</th>
                </tr>
              </thead>
              <tbody>
                {data.map((r, i) => {
                  const slaOk = r.slaMedio <= 15;
                  const hasMonthly = !!recrutadorMensal[r.nome];
                  return (
                    <tr
                      key={i}
                      onClick={() => hasMonthly && setSelectedRecrutador(r)}
                      className={cn(
                        "border-b border-border/50 transition-all",
                        hasMonthly
                          ? "cursor-pointer hover:bg-primary/8 hover:border-primary/20 group"
                          : "opacity-60"
                      )}
                    >
                      <td className="py-2 font-medium text-foreground flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-surface-2 flex items-center justify-center text-[9px] font-bold text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                          {r.nome[0]}
                        </span>
                        <span className="group-hover:text-primary transition-colors">{r.nome}</span>
                      </td>
                      <td className="py-2 text-center text-info font-semibold">{r.vagas}</td>
                      <td className="py-2 text-center">
                        <span className={cn(
                          "px-1.5 py-0.5 rounded font-semibold",
                          slaOk ? 'text-success' : r.slaMedio <= 25 ? 'text-warning' : 'text-danger'
                        )}>
                          {r.slaMedio}d
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedRecrutador} onOpenChange={() => setSelectedRecrutador(null)}>
        {selectedRecrutador && (
          <RecrutadorModal
            recrutador={selectedRecrutador}
            onClose={() => setSelectedRecrutador(null)}
          />
        )}
      </Dialog>
    </>
  );
}
