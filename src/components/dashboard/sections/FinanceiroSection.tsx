import { DollarSign, TrendingDown, CreditCard, BarChart3 } from 'lucide-react';
import { KpiCard } from '../KpiCard';
import { FinanceiroChart } from '../FinanceiroChart';
import { financeiroData2025, plataformasCusto2025, calcTotalInvestimento } from '@/data/hrData';

interface FinanceiroSectionProps {
  ano: number;
  mes: string | null;
}

export function FinanceiroSection({ ano, mes }: FinanceiroSectionProps) {
  const totalConsultores = financeiroData2025.reduce((a, b) => a + b.consultores, 0);
  const totalPlataformas = plataformasCusto2025.reduce((a, b) => a + b.valor, 0);
  const totalGeral = calcTotalInvestimento(ano);
  const avgMensal = totalConsultores / financeiroData2025.filter(d => d.total > 0).length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title="Investimento Total"
          value={`R$ ${(totalGeral / 1000).toFixed(0)}k`}
          subtitle="Consultores + Plataformas"
          icon={DollarSign}
          status="warning"
          delay={0}
        />
        <KpiCard
          title="Consultores R&S"
          value={`R$ ${(totalConsultores / 1000).toFixed(0)}k`}
          subtitle="Horas trabalhadas no período"
          icon={BarChart3}
          status="info"
          delay={100}
        />
        <KpiCard
          title="Plataformas"
          value={`R$ ${(totalPlataformas / 1000).toFixed(0)}k`}
          subtitle="LinkedIn, GUPY, Deficiente Online"
          icon={CreditCard}
          status="danger"
          delay={200}
        />
        <KpiCard
          title="Custo Médio Mensal"
          value={`R$ ${(avgMensal / 1000).toFixed(0)}k`}
          subtitle="Média consultores/mês"
          icon={TrendingDown}
          status="neutral"
          delay={300}
        />
      </div>

      <FinanceiroChart data={financeiroData2025} plataformas={plataformasCusto2025} />

      {/* Consultores breakdown */}
      <div className="card-surface p-5 animate-fade-in">
        <h3 className="text-sm font-bold font-display text-foreground mb-4">Detalhamento: Consultores 2025 — Janeiro</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { nome: 'Mariane Castellano',     horas: '191h',     valor: 'R$ 12.415,00', taxa: 'R$ 65/h' },
            { nome: 'Miriam Regina da Silva', horas: '200h35',   valor: 'R$ 9.015,75',  taxa: 'R$ 45/h' },
            { nome: 'Vinícius Consultor',     horas: '122h',     valor: 'R$ 14.640,00', taxa: 'R$ 120/h' },
            { nome: 'Mayara Oliveira',        horas: '213h35',   valor: 'R$ 12.801,00', taxa: 'R$ 60/h' },
          ].map((c, i) => (
            <div key={i} className="p-3 rounded-xl bg-surface-2 border border-border flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-primary">{c.nome[0]}</span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-foreground">{c.nome}</p>
                <p className="text-[10px] text-muted-foreground">{c.horas} × {c.taxa}</p>
              </div>
              <span className="text-xs font-bold text-warning">{c.valor}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 p-3 rounded-xl bg-warning/8 border border-warning/20 flex items-center justify-between">
          <span className="text-xs font-semibold text-foreground">Total Consultores (Jan/2026)</span>
          <span className="text-sm font-bold text-warning">R$ 20.921,00</span>
        </div>
      </div>
    </div>
  );
}
