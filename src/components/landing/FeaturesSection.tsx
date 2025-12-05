import { 
  Database, 
  Brain, 
  TrendingUp, 
  MapPin, 
  FileText, 
  LayoutDashboard,
  Sparkles,
  Zap
} from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Automated Data Collection",
    description: "Continuous scraping from major job portals and company career pages using Selenium and BeautifulSoup.",
    color: "from-primary to-indigo-light",
  },
  {
    icon: Brain,
    title: "NLP Skill Extraction",
    description: "Advanced natural language processing to identify and categorize in-demand technical skills from job descriptions.",
    color: "from-accent to-teal-light",
  },
  {
    icon: TrendingUp,
    title: "Salary Trend Analytics",
    description: "Comprehensive salary distribution analysis across roles, experience levels, and locations.",
    color: "from-primary to-accent",
  },
  {
    icon: MapPin,
    title: "Location-Based Insights",
    description: "City-wise hiring heatmaps and regional market analysis for strategic career planning.",
    color: "from-indigo to-primary",
  },
  {
    icon: FileText,
    title: "Weekly Market Reports",
    description: "Automated PDF reports with key insights, emerging trends, and actionable recommendations.",
    color: "from-teal to-accent",
  },
  {
    icon: LayoutDashboard,
    title: "Interactive Dashboard",
    description: "Enterprise-grade analytics interface with filters, charts, and real-time data visualization.",
    color: "from-accent to-primary",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="features">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Powerful Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Job Market Intelligence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete analytics platform designed to transform raw job data into actionable career insights.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl border border-border p-8 card-hover overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-border/50 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary border border-border">
            <Zap className="w-5 h-5 text-accent" />
            <span className="text-foreground font-medium">
              Processing <span className="text-primary font-bold">1,000+</span> new jobs daily
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
