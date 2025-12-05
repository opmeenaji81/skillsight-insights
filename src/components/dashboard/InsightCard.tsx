import { LucideIcon, ArrowRight, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface InsightItem {
  label: string;
  value: string;
  badge?: string;
}

interface InsightCardProps {
  title: string;
  icon: LucideIcon;
  items: InsightItem[];
  variant?: "default" | "highlight";
}

export function InsightCard({ title, icon: Icon, items, variant = "default" }: InsightCardProps) {
  return (
    <div className={cn(
      "insight-card",
      variant === "highlight" && "border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5"
    )}>
      <div className="flex items-center gap-3 mb-4">
        <div className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center",
          variant === "highlight" ? "bg-primary/20" : "bg-accent/10"
        )}>
          <Icon className={cn(
            "w-5 h-5",
            variant === "highlight" ? "text-primary" : "text-accent"
          )} />
        </div>
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
            <span className="text-sm text-muted-foreground">{item.label}</span>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">{item.value}</span>
              {item.badge && (
                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-accent/20 text-accent">
                  {item.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
