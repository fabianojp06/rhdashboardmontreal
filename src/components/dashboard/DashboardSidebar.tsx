import { cn } from "@/lib/utils";
import {
  LayoutDashboard, Users, Target, Heart, DollarSign,
  ChevronLeft, ChevronRight, TrendingUp, GitCompare, MapPin
} from "lucide-react";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  collapsed: boolean;
  onToggle: () => void;
}

const navGroups = [
  {
    label: 'Principal',
    items: [
      { id: 'overview',      label: 'Visão Geral',           icon: LayoutDashboard },
      { id: 'recrutamento',  label: 'Recrutamento',           icon: Target },
      { id: 'diversidade',   label: 'Diversidade & Inclusão', icon: Users },
      { id: 'enps',          label: 'eNPS & Engajamento',     icon: Heart },
      { id: 'financeiro',    label: 'Financeiro (ROI)',       icon: DollarSign },
    ],
  },
  {
    label: 'Análises',
    items: [
      { id: 'yoy',           label: 'Comparativo YoY',        icon: GitCompare },
      { id: 'regional',      label: 'Performance Regional',   icon: MapPin },
    ],
  },
];

export function DashboardSidebar({ activeSection, onSectionChange, collapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className={cn(
        "relative flex flex-col border-r border-border transition-all duration-300 ease-in-out",
        "bg-sidebar min-h-screen",
        collapsed ? "w-16" : "w-60"
      )}
    >
      {/* Logo */}
      <div className={cn(
        "flex items-center gap-3 px-4 py-5 border-b border-sidebar-border",
        collapsed && "justify-center px-2"
      )}>
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 glow-crimson">
          <TrendingUp className="w-4 h-4 text-primary-foreground" />
        </div>
        {!collapsed && (
          <div>
            <p className="text-sm font-bold font-display text-foreground leading-tight">HR Analytics</p>
            <p className="text-[10px] text-muted-foreground">Ingrid • Gestão RH</p>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-2 space-y-4 overflow-y-auto">
        {navGroups.map((group) => (
          <div key={group.label}>
            {!collapsed && (
              <p className="text-[10px] uppercase tracking-widest text-subtle px-2 mb-2 font-semibold">{group.label}</p>
            )}
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSectionChange(item.id)}
                    className={cn(
                      "w-full flex items-center gap-3 rounded-lg transition-all duration-200",
                      "text-left text-sm font-medium",
                      collapsed ? "justify-center p-2" : "px-3 py-2.5",
                      isActive
                        ? "bg-primary/15 text-primary border border-primary/25 glow-crimson"
                        : "text-muted-foreground hover:text-foreground hover:bg-surface-2"
                    )}
                    title={collapsed ? item.label : undefined}
                  >
                    <Icon className={cn("flex-shrink-0", collapsed ? "w-5 h-5" : "w-4 h-4")} />
                    {!collapsed && <span>{item.label}</span>}
                    {isActive && !collapsed && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary pulse-dot" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
              <span className="text-xs font-bold text-primary">I</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Ingrid</p>
              <p className="text-[10px] text-muted-foreground">Lead HR Manager</p>
            </div>
          </div>
        </div>
      )}

      {/* Collapse button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-6 w-6 h-6 rounded-full bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
      >
        {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
      </button>
    </aside>
  );
}
