import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { topCompaniesData } from "@/data/mockData";
import { TrendingUp, TrendingDown } from "lucide-react";

export function TopCompaniesChart() {
  return (
    <div className="chart-container">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Top Hiring Companies</h3>
          <p className="text-sm text-muted-foreground">Companies with most job openings</p>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={topCompaniesData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="company" 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-lg)',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
              formatter={(value: number, name: string, props: any) => {
                const growth = props.payload.growth;
                return [
                  <span key="value">
                    {value} jobs 
                    <span className={`ml-2 ${growth >= 0 ? 'text-accent' : 'text-destructive'}`}>
                      ({growth >= 0 ? '+' : ''}{growth}%)
                    </span>
                  </span>,
                  'Openings'
                ];
              }}
            />
            <Bar 
              dataKey="jobs" 
              radius={[4, 4, 0, 0]}
            >
              {topCompaniesData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.growth >= 0 ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
