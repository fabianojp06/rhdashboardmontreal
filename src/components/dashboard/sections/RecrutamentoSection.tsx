import { Clock, Target, AlertTriangle, CheckCircle2, TrendingUp } from 'lucide-react';
import { KpiCard } from '../KpiCard';
import { SlaLineChart } from '../SlaLineChart';
import { VagasBarChart } from '../VagasBarChart';
import { RecrutadoresRadar } from '../RecrutadoresRadar';
import {
  getSlaData, getVagasData, getRecrutadoresData, getFilteredData,
  calcSlaMedia, SLA_META
} from '@/data/hrData';

interface RecrutamentoSectionProps {
  ano: number;
  mes: string | null;
}

export function RecrutamentoSection({ ano, mes }: RecrutamentoSectionProps) {
  const slaData = getFilteredData(getSlaData(ano), mes);
  const vagasData = getFilteredData(getVagasData(ano), mes);
  const recData = getRecrutadoresData(ano);

  const slaMedia = calcSlaMedia(slaData);
  const mesesAcimaMeta = slaData.filter(d => d.sla !== null && (d.sla as number) > SLA_META).length;
  const mesesDentroMeta = slaData.filter(d => d.sla !== null && (d.sla as number) <= SLA_META).length;
  const totalVagas = vagasData.reduce((a, b) => a + b.encerradas + b.publicadas, 0);
  const maxSla = slaData.filter(d => d.sla).reduce((max, d) => Math.max(max, d.sla as number), 0);

  const slaStatus = slaMedia === 0 ? 'neutral' : slaMedia <= SLA_META ? 'success' : slaMedia <= SLA_META + 5 ? 'warning' : 'danger';

  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title="SLA Médio"
          value={slaMedia > 0 ? `${slaMedia} dias` : 'N/A'}
          subtitle={`Meta: ${SLA_META} dias`}
          icon={Clock}
          trend={slaMedia > SLA_META ? 'up' : 'down'}
          trendValue={`${Math.abs(slaMedia - SLA_META)}d da meta`}
          status={slaStatus}
          delay={0}
        />
        <KpiCard
          title="Meses Acima da Meta"
          value={`${mesesAcimaMeta} meses`}
          subtitle="SLA > 15 dias"
          icon={AlertTriangle}
          status={mesesAcimaMeta > 3 ? 'danger' : mesesAcimaMeta > 0 ? 'warning' : 'success'}
          delay={100}
        />
        <KpiCard
          title="Meses na Meta"
          value={`${mesesDentroMeta} meses`}
          subtitle="SLA ≤ 15 dias"
          icon={CheckCircle2}
          status={mesesDentroMeta > 0 ? 'success' : 'neutral'}
          delay={200}
        />
        <KpiCard
          title="Pico de SLA"
          value={maxSla > 0 ? `${maxSla} dias` : 'N/A'}
          subtitle="Maior SLA registrado"
          icon={TrendingUp}
          status={maxSla > 30 ? 'danger' : 'warning'}
          delay={300}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SlaLineChart data={slaData} />
        <VagasBarChart data={vagasData} />
      </div>

      <RecrutadoresRadar data={recData} />
    </div>
  );
}
