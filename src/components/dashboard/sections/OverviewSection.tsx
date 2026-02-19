import {
  Clock, Users, Heart, DollarSign, TrendingUp, TrendingDown,
  CheckCircle2, Target, Award, UserCheck
} from 'lucide-react';
import { KpiCard } from '../KpiCard';
import { SlaLineChart } from '../SlaLineChart';
import { VagasBarChart } from '../VagasBarChart';
import { DiversidadeDonut } from '../DiversidadeDonut';
import { EnpsChart } from '../EnpsChart';
import {
  getSlaData, getVagasData, getDiversidadeData, getEnpsData,
  calcSlaMedia, calcTotalContratacoes, calcTotalInvestimento,
  getFilteredData, SLA_META
} from '@/data/hrData';

interface OverviewSectionProps {
  ano: number;
  mes: string | null;
}

export function OverviewSection({ ano, mes }: OverviewSectionProps) {
  const slaData = getFilteredData(getSlaData(ano), mes);
  const vagasData = getFilteredData(getVagasData(ano), mes);
  const divData = getFilteredData(getDiversidadeData(ano), mes);
  const enpsData = getFilteredData(getEnpsData(ano), mes);

  const slaMedia = calcSlaMedia(slaData);
  const totalContratacoes = calcTotalContratacoes(divData);
  const totalInvestimento = calcTotalInvestimento(ano);
  const lastEnps = enpsData.filter(d => d.valor !== null).at(-1);
  const lastDiv = divData.filter(d => d.apurado !== null).at(-1);
  const totalPcds = divData.filter(d => d.pcds).reduce((a, b) => a + (b.pcds ?? 0), 0);
  const totalMulheres = divData.filter(d => d.mulheres).reduce((a, b) => a + (b.mulheres ?? 0), 0);

  const slaStatus = slaMedia === 0 ? 'neutral' : slaMedia <= SLA_META ? 'success' : slaMedia <= SLA_META + 5 ? 'warning' : 'danger';
  const slaTrend = slaMedia > SLA_META ? 'up' : 'down';

  return (
    <div className="space-y-6">
      {/* KPIs Bento Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title="SLA Médio"
          value={slaMedia > 0 ? `${slaMedia}d` : 'N/A'}
          subtitle={slaMedia > SLA_META ? `${slaMedia - SLA_META}d acima da meta` : `Dentro da meta (${SLA_META}d)`}
          icon={Clock}
          trend={slaMedia > 0 ? slaTrend : undefined}
          trendValue={slaMedia > 0 ? `${Math.abs(Math.round(((slaMedia - SLA_META) / SLA_META) * 100))}%` : undefined}
          status={slaStatus}
          delay={0}
        />
        <KpiCard
          title="Total Contratações"
          value={totalContratacoes}
          subtitle={`${ano} • Meta anual: ${ano === 2025 ? '2.205' : '2.388'}`}
          icon={UserCheck}
          trend="up"
          trendValue="Real"
          status="info"
          delay={100}
        />
        <KpiCard
          title="eNPS Score"
          value={lastEnps?.valor ?? 'N/A'}
          subtitle={lastEnps ? `Meta: ${lastEnps.meta} • ${(lastEnps.valor ?? 0) >= lastEnps.meta ? '✓ Atingido' : '↓ Abaixo'}` : 'Sem dados'}
          icon={Heart}
          trend={lastEnps && lastEnps.valor ? ((lastEnps.valor as number) >= lastEnps.meta ? 'up' : 'down') : undefined}
          trendValue={lastEnps?.valor ? `Meta ${lastEnps.meta}` : undefined}
          status={lastEnps && lastEnps.valor ? ((lastEnps.valor as number) >= lastEnps.meta ? 'success' : 'warning') : 'neutral'}
          delay={200}
        />
        <KpiCard
          title="Investimento R&S"
          value={`R$ ${(totalInvestimento / 1000).toFixed(0)}k`}
          subtitle="Consultores + Plataformas"
          icon={DollarSign}
          status="warning"
          delay={300}
        />
      </div>

      {/* Secondary KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title="Diversidade %"
          value={lastDiv?.apurado !== null && lastDiv?.apurado !== undefined ? `${lastDiv.apurado}%` : 'N/A'}
          subtitle="Meta: 60% contratações diversas"
          icon={Users}
          status={lastDiv?.apurado !== null && lastDiv?.apurado !== undefined ? (lastDiv.apurado >= 60 ? 'success' : 'warning') : 'neutral'}
          delay={0}
        />
        <KpiCard
          title="PCDs Contratados"
          value={totalPcds}
          subtitle="Pessoas com Deficiência"
          icon={Award}
          status="info"
          delay={100}
        />
        <KpiCard
          title="Mulheres Contratadas"
          value={totalMulheres}
          subtitle="No período selecionado"
          icon={Users}
          status="success"
          delay={200}
        />
        <KpiCard
          title="Meta SLA Atingida"
          value={`${slaData.filter(d => d.sla !== null && (d.sla as number) <= SLA_META).length}/${slaData.filter(d => d.sla !== null).length} meses`}
          subtitle="Meses dentro do SLA"
          icon={CheckCircle2}
          status={slaData.filter(d => d.sla !== null && (d.sla as number) <= SLA_META).length > 0 ? 'success' : 'neutral'}
          delay={300}
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SlaLineChart data={slaData} />
        <VagasBarChart data={vagasData} />
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {lastDiv && lastDiv.apurado !== null && (
          <DiversidadeDonut
            apurado={lastDiv.apurado as number}
            meta={60}
            totalContratados={totalContratacoes}
            totalPcds={totalPcds}
            totalMulheres={totalMulheres}
            pctMulheres={lastDiv.pctMulheres ?? 0}
          />
        )}
        <EnpsChart data={enpsData} />
      </div>
    </div>
  );
}
