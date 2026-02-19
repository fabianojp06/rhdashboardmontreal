import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { InsightsPanel } from "@/components/dashboard/InsightsPanel";
import { OverviewSection } from "@/components/dashboard/sections/OverviewSection";
import { RecrutamentoSection } from "@/components/dashboard/sections/RecrutamentoSection";
import { DiversidadeSection } from "@/components/dashboard/sections/DiversidadeSection";
import { EnpsSection } from "@/components/dashboard/sections/EnpsSection";
import { FinanceiroSection } from "@/components/dashboard/sections/FinanceiroSection";
import { YoYSection } from "@/components/dashboard/sections/YoYSection";
import { RegionalSection } from "@/components/dashboard/sections/RegionalSection";
import { generateInsights } from "@/data/hrData";

const Index = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [ano, setAno] = useState(2025);
  const [mes, setMes] = useState<string | null>(null);
  const [regional, setRegional] = useState<string | null>(null);

  const insights = generateInsights(ano, mes);

  const renderSection = () => {
    switch (activeSection) {
      case "overview":     return <OverviewSection ano={ano} mes={mes} regional={regional} />;
      case "recrutamento": return <RecrutamentoSection ano={ano} mes={mes} regional={regional} />;
      case "diversidade":  return <DiversidadeSection ano={ano} mes={mes} regional={regional} />;
      case "enps":         return <EnpsSection ano={ano} mes={mes} />;
      case "financeiro":   return <FinanceiroSection ano={ano} mes={mes} />;
      case "yoy":          return <YoYSection />;
      case "regional":     return <RegionalSection />;
      default:             return <OverviewSection ano={ano} mes={mes} regional={regional} />;
    }
  };

  // YoY and Regional don't use year/month/regional filters
  const showFilters = !['yoy', 'regional'].includes(activeSection);

  return (
    <div className="flex min-h-screen w-full bg-background">
      <DashboardSidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(p => !p)}
      />

      <div className="flex flex-col flex-1 min-w-0">
        <DashboardHeader
          ano={ano}
          mes={mes}
          regional={regional}
          onAnoChange={setAno}
          onMesChange={setMes}
          onRegionalChange={setRegional}
          activeSection={activeSection}
          showFilters={showFilters}
        />

        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 overflow-y-auto p-6">
            {renderSection()}
          </main>

          <aside className="w-72 flex-shrink-0 border-l border-border overflow-y-auto">
            <InsightsPanel insights={insights} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Index;
