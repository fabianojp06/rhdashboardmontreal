import { cn } from "@/lib/utils";
import { LucideIcon, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  status?: 'success' | 'danger' | 'warning' | 'info' | 'neutral';
  delay?: number;
}

const statusStyles = {
  success: {
    border: 'border-success/25',
    iconBg: 'bg-success/15',
    iconColor: 'text-success',
    glow: 'hover:glow-emerald',
  },
  danger: {
    border: 'border-danger/25',
    iconBg: 'bg-danger/15',
    iconColor: 'text-danger',
    glow: 'hover:glow-crimson',
  },
  warning: {
    border: 'border-warning/25',
    iconBg: 'bg-warning/15',
    iconColor: 'text-warning',
    glow: 'hover:glow-amber',
  },
  info: {
    border: 'border-info/25',
    iconBg: 'bg-info/15',
    iconColor: 'text-info',
    glow: '',
  },
  neutral: {
    border: 'border-border',
    iconBg: 'bg-surface-2',
    iconColor: 'text-muted-foreground',
    glow: '',
  },
};

export function KpiCard({ title, value, subtitle, icon: Icon, trend, trendValue, status = 'neutral', delay = 0 }: KpiCardProps) {
  const styles = statusStyles[status];
  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;
  const trendColor = trend === 'up' ? 'text-danger' : trend === 'down' ? 'text-success' : 'text-muted-foreground';

  return (
    <div
      className={cn(
        "card-surface card-hover p-5 animate-fade-in",
        styles.border,
        styles.glow
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", styles.iconBg)}>
          <Icon className={cn("w-5 h-5", styles.iconColor)} />
        </div>
        {trend && trendValue && (
          <div className={cn("flex items-center gap-1 text-xs font-semibold", trendColor)}>
            <TrendIcon className="w-3 h-3" />
            <span>{trendValue}</span>
          </div>
        )}
      </div>

      <div className="space-y-1">
        <p className="text-2xl font-bold font-display text-foreground leading-none">{value}</p>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{title}</p>
        {subtitle && (
          <p className="text-[11px] text-subtle pt-0.5">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
