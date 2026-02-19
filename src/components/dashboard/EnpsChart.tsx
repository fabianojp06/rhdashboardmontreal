import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

interface EnpsChartProps {
  data: { mes: string; valor: number | null; meta: number; respondentes: number | null }[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const v = payload[0]?.value;
    const cat = v >= 75 ? 'Excelente' : v >= 50 ? 'Bom' : v >= 0 ? 'Regular' : 'Crítico';
    return (
      <div className="bg-surface border border-border rounded-xl p-3 shadow-xl text-xs">
        <p className="font-bold text-foreground mb-1">{label}</p>
        <p className="text-muted-foreground">eNPS: <span className="font-semibold text-foreground">{v}</span></p>
        <p className="text-muted-foreground">Categoria: <span className="font-semibold text-info">{cat}</span></p>
        <p className="text-muted-foreground">Respondentes: <span className="font-semibold text-foreground">{payload[0]?.payload?.respondentes}</span></p>
      </div>
    );
  }
  return null;
};

export function EnpsChart({ data }: EnpsChartProps) {
  const validData = data.filter(d => d.valor !== null);
  const lastEnps = validData[validData.length - 1];

  const getEnpsCategory = (v: number) => {
    if (v >= 75) return { label: 'Excelente', color: 'text-success' };
    if (v >= 50) return { label: 'Bom', color: 'text-info' };
    if (v >= 0) return { label: 'Regular', color: 'text-warning' };
    return { label: 'Crítico', color: 'text-danger' };
  };

  const cat = lastEnps ? getEnpsCategory(lastEnps.valor as number) : null;

  return (
    <div className="card-surface p-5 animate-fade-in" style={{ animationDelay: '100ms' }}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-bold font-display text-foreground">Score eNPS</h3>
          <p className="text-xs text-muted-foreground">Employee Net Promoter Score</p>
        </div>
        {cat && lastEnps && (
          <div className="text-right">
            <p className={`text-2xl font-bold font-display ${cat.color}`}>{lastEnps.valor}</p>
            <p className={`text-xs font-semibold ${cat.color}`}>{cat.label}</p>
          </div>
        )}
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={validData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="enpsGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(199,89%,48%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(199,89%,48%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(215,20%,14%)" vertical={false} />
          <XAxis dataKey="mes" tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 100]} />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine y={validData[0]?.meta ?? 50} stroke="hsl(38,92%,50%)" strokeDasharray="6 3" strokeWidth={1.5} />
          <Area
            type="monotone"
            dataKey="valor"
            name="eNPS"
            stroke="hsl(199,89%,48%)"
            fill="url(#enpsGrad)"
            strokeWidth={2.5}
            dot={{ fill: 'hsl(199,89%,48%)', r: 4, strokeWidth: 0 }}
            activeDot={{ r: 6, fill: 'hsl(199,89%,48%)', stroke: 'hsl(222,47%,4%)', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
