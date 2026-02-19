import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface DiversidadeDonutProps {
  apurado: number;
  meta: number;
  totalContratados: number;
  totalPcds: number;
  totalMulheres: number;
  pctMulheres: number;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface border border-border rounded-xl p-3 shadow-xl text-xs">
        <p className="font-semibold text-foreground">{payload[0].name}: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export function DiversidadeDonut({ apurado, meta, totalContratados, totalPcds, totalMulheres, pctMulheres }: DiversidadeDonutProps) {
  const acimaMeta = apurado > meta;
  const diff = apurado - meta;

  const donutData = [
    { name: 'Diversas', value: apurado },
    { name: 'Restante', value: 100 - apurado },
  ];

  const donutColors = [
    acimaMeta ? 'hsl(160,84%,39%)' : 'hsl(38,92%,50%)',
    'hsl(215,20%,18%)',
  ];

  return (
    <div className="card-surface p-5 animate-fade-in" style={{ animationDelay: '300ms' }}>
      <div className="mb-4">
        <h3 className="text-sm font-bold font-display text-foreground">Diversidade nas Contratações</h3>
        <p className="text-xs text-muted-foreground">Meta: {meta}% de contratações diversas</p>
      </div>

      <div className="flex items-center gap-6">
        {/* Donut */}
        <div className="relative w-36 h-36 flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={donutData}
                cx="50%"
                cy="50%"
                innerRadius={42}
                outerRadius={62}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                strokeWidth={0}
              >
                {donutData.map((_, i) => (
                  <Cell key={i} fill={donutColors[i]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className={`text-2xl font-bold font-display ${acimaMeta ? 'text-success' : 'text-warning'}`}>
              {apurado}%
            </span>
            <span className="text-[9px] text-muted-foreground uppercase tracking-wide">diversidade</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex-1 space-y-3">
          <div className="p-2.5 rounded-lg bg-surface-2 border border-border">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5">vs Meta</p>
            <p className={`text-base font-bold font-display ${acimaMeta ? 'text-success' : 'text-warning'}`}>
              {acimaMeta ? '+' : ''}{diff}pp
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 rounded-lg bg-surface-2 border border-border text-center">
              <p className="text-xs font-bold text-info">{totalPcds}</p>
              <p className="text-[9px] text-muted-foreground">PCDs</p>
            </div>
            <div className="p-2 rounded-lg bg-surface-2 border border-border text-center">
              <p className="text-xs font-bold text-primary-glow">{pctMulheres}%</p>
              <p className="text-[9px] text-muted-foreground">Mulheres</p>
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground">
            {totalContratados} contratações no período
          </p>
        </div>
      </div>
    </div>
  );
}
