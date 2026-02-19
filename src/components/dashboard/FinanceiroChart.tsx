import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface FinanceiroChartProps {
  data: { mes: string; consultores: number; total: number }[];
  plataformas: { nome: string; valor: number }[];
}

const formatCurrency = (v: number) =>
  v >= 1000 ? `R$ ${(v / 1000).toFixed(0)}k` : `R$ ${v}`;

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface border border-border rounded-xl p-3 shadow-xl text-xs">
        <p className="font-bold text-foreground mb-1">{label}</p>
        {payload.map((p: any, i: number) => (
          <div key={i} className="flex gap-2 py-0.5">
            <span className="text-muted-foreground">{p.name}:</span>
            <span className="font-semibold text-foreground">R$ {p.value.toLocaleString('pt-BR')}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function FinanceiroChart({ data, plataformas }: FinanceiroChartProps) {
  const filtered = data.filter(d => d.total > 0);
  const totalGeral = filtered.reduce((a, b) => a + b.total, 0);
  const totalPlataformas = plataformas.reduce((a, b) => a + b.valor, 0);

  return (
    <div className="space-y-4">
      {/* Custo consultores */}
      <div className="card-surface p-5 animate-fade-in">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold font-display text-foreground">Custo de Consultores R&S</h3>
            <p className="text-xs text-muted-foreground">Horas trabalhadas × Valor hora</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-warning font-display">R$ {totalGeral.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</p>
            <p className="text-[10px] text-muted-foreground">Total período</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={filtered} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(215,20%,14%)" vertical={false} />
            <XAxis dataKey="mes" tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={formatCurrency} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="total" name="Total" radius={[4, 4, 0, 0]}>
              {filtered.map((_, i) => (
                <Cell key={i} fill={`hsl(38,92%,${35 + i * 3}%)`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Plataformas */}
      <div className="card-surface p-5 animate-fade-in" style={{ animationDelay: '100ms' }}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold font-display text-foreground">Custo de Plataformas</h3>
          <span className="text-sm font-bold text-danger">R$ {totalPlataformas.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</span>
        </div>
        <div className="space-y-2">
          {plataformas.map((p, i) => {
            const pct = Math.round((p.valor / totalPlataformas) * 100);
            return (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground w-36 truncate">{p.nome}</span>
                <div className="flex-1 h-2 bg-surface-2 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-danger to-primary-glow transition-all duration-700"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-foreground w-20 text-right">
                  R$ {(p.valor / 1000).toFixed(0)}k
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
