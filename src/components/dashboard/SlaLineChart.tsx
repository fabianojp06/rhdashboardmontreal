import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, ReferenceLine, Area, AreaChart
} from 'recharts';

interface SlaChartProps {
  data: { mes: string; sla: number | null; meta: number }[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface border border-border rounded-xl p-3 shadow-xl text-xs">
        <p className="font-bold text-foreground mb-2">{label}</p>
        {payload.map((p: any, i: number) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
            <span className="text-muted-foreground">{p.name}:</span>
            <span className="font-semibold text-foreground">{p.value} dias</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function SlaLineChart({ data }: SlaChartProps) {
  const validData = data.filter(d => d.sla !== null);

  return (
    <div className="card-surface p-5 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-bold font-display text-foreground">Evolução do SLA</h3>
          <p className="text-xs text-muted-foreground">Real vs Meta (15 dias)</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-danger rounded-full inline-block" />
            <span className="text-muted-foreground">SLA Real</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-success rounded-full inline-block" style={{ borderStyle: 'dashed', borderTop: '2px dashed' }} />
            <span className="text-muted-foreground">Meta</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={validData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="slaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(348,85%,50%)" stopOpacity={0.25} />
              <stop offset="95%" stopColor="hsl(348,85%,50%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(215,20%,14%)" vertical={false} />
          <XAxis dataKey="mes" tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 35]} />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine y={15} stroke="hsl(160,84%,39%)" strokeDasharray="6 3" strokeWidth={1.5} label={{ value: 'Meta 15d', fill: 'hsl(160,84%,39%)', fontSize: 10, position: 'right' }} />
          <Area
            type="monotone"
            dataKey="sla"
            name="SLA Real"
            stroke="hsl(348,85%,50%)"
            fill="url(#slaGrad)"
            strokeWidth={2.5}
            dot={{ fill: 'hsl(348,85%,50%)', r: 4, strokeWidth: 0 }}
            activeDot={{ r: 6, fill: 'hsl(348,85%,50%)', stroke: 'hsl(222,47%,4%)', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
