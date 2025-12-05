import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: number;
  subtitle?: string;
  variant?: "default" | "primary" | "accent" | "gradient";
}

export function StatsCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  subtitle,
  variant = "default" 
}: StatsCardProps) {
  const isPositive = trend && trend > 0;
  
  return (
    <div className={cn(
      "stat-card relative overflow-hidden",
      variant === "gradient" && "bg-gradient-to-br from-primary to-accent text-primary-foreground"
    )}>
      {/* Background Decoration */}
      <div className={cn(
        "absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-10",
        variant === "default" && "bg-primary",
        variant === "primary" && "bg-primary",
        variant === "accent" && "bg-accent",
        variant === "gradient" && "bg-primary-foreground"
      )} />
      
      <div className="relative flex items-start justify-between">
        <div className="flex-1">
          <p className={cn(
            "text-sm font-medium mb-1",
            variant === "gradient" ? "text-primary-foreground/80" : "text-muted-foreground"
          )}>
            {title}
          </p>
          <p className={cn(
            "text-3xl font-bold mb-1",
            variant === "gradient" ? "text-primary-foreground" : "text-foreground"
          )}>
            {value}
          </p>
          {(trend !== undefined || subtitle) && (
            <div className="flex items-center gap-2">
              {trend !== undefined && (
                <span className={cn(
                  "inline-flex items-center gap-1 text-sm font-medium",
                  isPositive ? "text-accent" : "text-destructive"
                )}>
                  {isPositive ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  {Math.abs(trend)}%
                </span>
              )}
              {subtitle && (
                <span className={cn(
                  "text-sm",
                  variant === "gradient" ? "text-primary-foreground/70" : "text-muted-foreground"
                )}>
                  {subtitle}
                </span>
              )}
            </div>
          )}
        </div>
        
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center",
          variant === "default" && "bg-primary/10",
          variant === "primary" && "bg-primary/10",
          variant === "accent" && "bg-accent/10",
          variant === "gradient" && "bg-primary-foreground/20"
        )}>
          <Icon className={cn(
            "w-6 h-6",
            variant === "default" && "text-primary",
            variant === "primary" && "text-primary",
            variant === "accent" && "text-accent",
            variant === "gradient" && "text-primary-foreground"
          )} />
        </div>
      </div>
    </div>
  );
}
