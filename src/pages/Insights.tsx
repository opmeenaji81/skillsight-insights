import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  TrendingUp, 
  IndianRupee, 
  MapPin, 
  Cpu,
  ArrowRight,
  Sparkles,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LineChart, Line, PieChart, Pie } from "recharts";
import { skillFrequencyData, salaryDistributionData, cityHiringData, emergingSkillsData } from "@/data/mockData";

const insightSections = [
  {
    id: "skill-demand",
    title: "Skill Demand Trends",
    subtitle: "Understanding what the market needs",
    icon: TrendingUp,
    color: "primary",
    description: "Our NLP engine analyzes thousands of job descriptions to identify the most sought-after technical skills. Python leads the pack, followed by JavaScript and React for frontend development.",
    keyInsights: [
      "Python dominates with 847 mentions across tech roles",
      "Cloud skills (AWS, Docker) showing 40% YoY growth",
      "Full-stack capabilities are increasingly valued",
      "Generative AI skills seeing explosive 245% growth"
    ],
  },
  {
    id: "salary-intelligence",
    title: "Salary Intelligence",
    subtitle: "Data-driven compensation insights",
    icon: IndianRupee,
    color: "accent",
    description: "Comprehensive salary analysis across roles, experience levels, and locations. The tech sector shows healthy salary growth with significant premiums for specialized skills.",
    keyInsights: [
      "Average tech salary stands at ₹5.8 LPA",
      "ML Engineers command highest premiums (₹24.5L avg)",
      "8+ years experience yields 5x fresher salary",
      "Generative AI skills add 45% salary premium"
    ],
  },
  {
    id: "location-analytics",
    title: "Location Analytics",
    subtitle: "Where the opportunities are",
    icon: MapPin,
    color: "indigo",
    description: "Geographic distribution of tech opportunities across India. Bangalore remains the tech capital, but Tier-2 cities are showing remarkable growth.",
    keyInsights: [
      "Bangalore accounts for 32% of all tech jobs",
      "Hyderabad growing fastest at 28% YoY",
      "Remote work options up 60% post-pandemic",
      "Pune emerging as preferred startup hub"
    ],
  },
  {
    id: "emerging-tech",
    title: "Emerging Technologies",
    subtitle: "The skills of tomorrow",
    icon: Cpu,
    color: "teal",
    description: "Tracking the rise of new technologies and skills entering the job market. AI/ML and cloud-native technologies are transforming hiring patterns.",
    keyInsights: [
      "Generative AI mentions up 245% in 6 months",
      "LangChain and vector databases gaining traction",
      "Rust adoption growing in systems programming",
      "Kubernetes becoming baseline requirement"
    ],
  },
];

export default function Insights() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Market Intelligence</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Job Market{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Insights
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Deep-dive analytics into skill demands, salary patterns, and hiring trends 
                across India's technology sector.
              </p>
              <Link to="/dashboard">
                <Button variant="hero" size="lg">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Full Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Insight Sections */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {insightSections.map((section, index) => (
            <section key={section.id} id={section.id} className="py-16 border-b border-border last:border-0">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-${section.color}/10 text-${section.color} mb-4`}>
                    <section.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{section.subtitle}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{section.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{section.description}</p>
                  
                  <div className="space-y-3">
                    {section.keyInsights.map((insight, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ArrowRight className="w-3 h-3 text-accent" />
                        </div>
                        <p className="text-foreground">{insight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chart */}
                <div className={`chart-container ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="h-80">
                    {section.id === "skill-demand" && (
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={skillFrequencyData.slice(0, 6)} layout="vertical">
                          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                          <XAxis type="number" />
                          <YAxis dataKey="skill" type="category" width={80} tick={{ fontSize: 12 }} />
                          <Tooltip />
                          <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                            {skillFrequencyData.slice(0, 6).map((entry, i) => (
                              <Cell key={i} fill={i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--accent))'} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    )}
                    {section.id === "salary-intelligence" && (
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={salaryDistributionData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="range" tick={{ fontSize: 12 }} />
                          <YAxis tick={{ fontSize: 12 }} />
                          <Tooltip />
                          <Bar dataKey="count" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    )}
                    {section.id === "location-analytics" && (
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={cityHiringData.slice(0, 6)}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={90}
                            dataKey="jobs"
                            nameKey="city"
                            label={({ city, percentage }) => `${city}: ${percentage}%`}
                          >
                            {cityHiringData.slice(0, 6).map((entry, i) => (
                              <Cell key={i} fill={['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--indigo))', 'hsl(var(--teal))', 'hsl(var(--primary) / 0.7)', 'hsl(var(--accent) / 0.7)'][i]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    )}
                    {section.id === "emerging-tech" && (
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={emergingSkillsData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="skill" tick={{ fontSize: 11 }} angle={-20} textAnchor="end" height={60} />
                          <YAxis tick={{ fontSize: 12 }} label={{ value: 'Growth %', angle: -90, position: 'insideLeft' }} />
                          <Tooltip formatter={(value) => [`+${value}%`, 'Growth']} />
                          <Bar dataKey="growth" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">
                Want Deeper Analysis?
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                Explore our interactive dashboard for real-time filters, custom date ranges, 
                and exportable reports.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/dashboard">
                  <Button variant="secondary" size="lg">
                    Open Dashboard
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/reports">
                  <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    View Reports
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
