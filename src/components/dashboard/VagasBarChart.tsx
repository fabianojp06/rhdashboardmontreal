import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer, Cell
} from 'recharts';

interface VagasBarChartProps {
  data: { mes: string; encerradas: number; publicadas: number; congeladas: number; canceladas: number }[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const total = payload.reduce((a: number, p: any) => a + (p.value || 0), 0);
    return (
      <div className="bg-surface border border-border rounded-xl p-3 shadow-xl text-xs">
        <p className="font-bold text-foreground mb-2">{label} — Total: {total}</p>
        {payload.map((p: any, i: number) => p.value > 0 && (
          <div key={i} className="flex items-center gap-2 py-0.5">
            <span className="w-2 h-2 rounded-sm" style={{ background: p.fill }} />
            <span className="text-muted-foreground">{p.name}:</span>
            <span className="font-semibold text-foreground">{p.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function VagasBarChart({ data }: VagasBarChartProps) {
  const filtered = data.filter(d => d.encerradas > 0 || d.publicadas > 0);

  return (
    <div className="card-surface p-5 animate-fade-in" style={{ animationDelay: '100ms' }}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-bold font-display text-foreground">Funil de Vagas por Status</h3>
          <p className="text-xs text-muted-foreground">Volume mensal por categoria</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs">
          {[
            { color: 'hsl(160,84%,39%)', label: 'Encerradas' },
            { color: 'hsl(199,89%,48%)', label: 'Publicadas' },
            { color: 'hsl(38,92%,50%)',  label: 'Congeladas' },
            { color: 'hsl(348,85%,50%)', label: 'Canceladas' },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm" style={{ background: color }} />
              <span className="text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={filtered} margin={{ top: 5, right: 10, left: -10, bottom: 0 }} barCategoryGap="30%">
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(215,20%,14%)" vertical={false} />
          <XAxis dataKey="mes" tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'hsl(215,20%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="encerradas" name="Encerradas" stackId="a" fill="hsl(160,84%,39%)" radius={[0,0,0,0]} />
          <Bar dataKey="publicadas"  name="Publicadas"  stackId="a" fill="hsl(199,89%,48%)" />
          <Bar dataKey="congeladas"  name="Congeladas"  stackId="a" fill="hsl(38,92%,50%)" />
          <Bar dataKey="canceladas"  name="Canceladas"  stackId="a" fill="hsl(348,85%,50%)" radius={[4,4,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
