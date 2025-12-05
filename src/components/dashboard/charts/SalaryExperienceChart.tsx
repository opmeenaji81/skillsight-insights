import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis, Legend, Line, ComposedChart, Area } from "recharts";
import { salaryByExperienceData } from "@/data/mockData";

export function SalaryExperienceChart() {
  return (
    <div className="chart-container">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Salary vs Experience</h3>
          <p className="text-sm text-muted-foreground">Expected salary growth with experience (LPA)</p>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={salaryByExperienceData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <defs>
              <linearGradient id="rangeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="experience" 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              label={{ value: 'Years of Experience', position: 'insideBottom', offset: -5, fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              label={{ value: 'Salary (LPA)', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-lg)',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
              formatter={(value: number, name: string) => {
                const labels: Record<string, string> = {
                  avgSalary: 'Average',
                  minSalary: 'Min',
                  maxSalary: 'Max',
                };
                return [`₹${value}L`, labels[name] || name];
              }}
              labelFormatter={(value) => `${value} years experience`}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="maxSalary"
              name="Max Range"
              fill="url(#rangeGradient)"
              stroke="none"
            />
            <Line
              type="monotone"
              dataKey="avgSalary"
              name="Average Salary"
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="minSalary"
              name="Min Range"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth={1}
              strokeDasharray="5 5"
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
