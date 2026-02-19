import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

interface RecrutadoresRadarProps {
  data: { nome: string; vagas: number; slaMedio: number; posicoes: number }[];
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

export function RecrutadoresRadar({ data }: RecrutadoresRadarProps) {
  // Normalize for radar (0-100)
  const maxVagas = Math.max(...data.map(d => d.vagas));
  const maxSla = Math.max(...data.map(d => d.slaMedio));

  const radarData = data.slice(0, 6).map(d => ({
    nome: d.nome,
    'Vagas (norm)': Math.round((d.vagas / maxVagas) * 100),
    'Velocidade (inv SLA)': Math.round(((maxSla - d.slaMedio) / maxSla) * 100),
  }));

  return (
    <div className="card-surface p-5 animate-fade-in" style={{ animationDelay: '200ms' }}>
      <div className="mb-4">
        <h3 className="text-sm font-bold font-display text-foreground">Radar de Recrutadores</h3>
        <p className="text-xs text-muted-foreground">Top performers: Volume vs Velocidade</p>
      </div>
      <div className="flex gap-4">
        <ResponsiveContainer width="60%" height={200}>
          <RadarChart data={radarData} outerRadius="75%">
            <PolarGrid stroke="hsl(215,20%,14%)" />
            <PolarAngleAxis dataKey="nome" tick={{ fill: 'hsl(215,20%,55%)', fontSize: 10 }} />
            <PolarRadiusAxis tick={false} axisLine={false} domain={[0, 100]} />
            <Tooltip content={<CustomTooltip />} />
            <Radar name="Volume" dataKey="Vagas (norm)" stroke="hsl(160,84%,39%)" fill="hsl(160,84%,39%)" fillOpacity={0.2} strokeWidth={2} />
            <Radar name="Velocidade" dataKey="Velocidade (inv SLA)" stroke="hsl(199,89%,48%)" fill="hsl(199,89%,48%)" fillOpacity={0.15} strokeWidth={2} />
          </RadarChart>
        </ResponsiveContainer>

        {/* Table */}
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
                return (
                  <tr key={i} className="border-b border-border/50 hover:bg-surface-2 transition-colors">
                    <td className="py-1.5 font-medium text-foreground">{r.nome}</td>
                    <td className="py-1.5 text-center text-info font-semibold">{r.vagas}</td>
                    <td className="py-1.5 text-center">
                      <span className={`px-1.5 py-0.5 rounded font-semibold ${slaOk ? 'text-success' : 'text-warning'}`}>
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
  );
}
