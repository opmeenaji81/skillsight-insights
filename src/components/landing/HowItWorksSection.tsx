import { Database, Cpu, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Collect",
    subtitle: "Automated Data Acquisition",
    description: "Our scrapers continuously monitor major job portals and company career pages, collecting thousands of job listings daily using Selenium and BeautifulSoup.",
    highlights: ["Naukri.com", "LinkedIn", "Company Careers", "Indeed"],
  },
  {
    number: "02",
    icon: Cpu,
    title: "Process",
    subtitle: "NLP & Feature Extraction",
    description: "Raw job data is cleaned, normalized, and processed using advanced NLP techniques to extract skills, qualifications, salary information, and location data.",
    highlights: ["Skill Extraction", "Salary Parsing", "Role Classification", "Location Mapping"],
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Visualize",
    subtitle: "Interactive Analytics",
    description: "Processed insights are displayed through an intuitive dashboard with interactive charts, filters, and downloadable reports for informed decision-making.",
    highlights: ["Live Dashboard", "Custom Reports", "Trend Analysis", "Export Options"],
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden" id="how-it-works">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Cpu className="w-4 h-4" />
            <span className="text-sm font-medium">Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              SkillSight
            </span>{" "}
            Works
          </h2>
          <p className="text-lg text-muted-foreground">
            A fully automated pipeline that transforms raw job listings into actionable market intelligence.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className="bg-card rounded-2xl border border-border p-8 card-hover relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-accent font-medium mb-4">{step.subtitle}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {step.highlights.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center shadow-md">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Banner */}
        <div className="mt-16 p-8 bg-card rounded-2xl border border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-2">
                Built with Modern Technology
              </h4>
              <p className="text-muted-foreground">
                Enterprise-grade stack ensuring reliability, scalability, and performance.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {["Python", "Flask", "PostgreSQL", "Selenium", "NLP", "Plotly"].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium text-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
