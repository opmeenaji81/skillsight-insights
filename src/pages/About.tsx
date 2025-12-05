import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  Target, 
  Lightbulb, 
  Database, 
  Cpu, 
  BarChart3,
  ArrowRight,
  Server,
  Code,
  Workflow
} from "lucide-react";

const techStack = [
  { name: "Python Flask", description: "Backend API framework", icon: Server },
  { name: "PostgreSQL", description: "Scalable database", icon: Database },
  { name: "Selenium", description: "Dynamic web scraping", icon: Code },
  { name: "BeautifulSoup", description: "HTML parsing", icon: Code },
  { name: "NLP Libraries", description: "Skill extraction", icon: Cpu },
  { name: "Plotly", description: "Interactive charts", icon: BarChart3 },
];

const pipelineSteps = [
  { step: 1, title: "Data Collection", description: "Selenium & BeautifulSoup scrape job portals" },
  { step: 2, title: "Data Cleaning", description: "Remove duplicates, normalize formats" },
  { step: 3, title: "NLP Processing", description: "Extract skills, salaries, locations" },
  { step: 4, title: "Feature Engineering", description: "Create analytical features" },
  { step: 5, title: "Database Storage", description: "PostgreSQL with indexing" },
  { step: 6, title: "Visualization", description: "Interactive Plotly dashboards" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  SkillSight
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                See the Skills That Shape the Future
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary mb-4">
                  <Target className="w-4 h-4" />
                  <span className="text-sm font-medium">Our Mission</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Bridging the Gap Between Academia and Industry
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The Indian technology sector has experienced remarkable growth, generating thousands 
                  of new opportunities. However, job seekers often lack clear, real-time information 
                  on which technical skills are most in demand, what salary ranges they can expect, 
                  and which companies are actively hiring.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  SkillSight is designed to bridge this critical information gap. By aggregating data 
                  from job portals and company career pages, the platform converts raw job postings 
                  into meaningful insights that support informed career planning and institutional 
                  decision-making.
                </p>
              </div>
              <div className="bg-card rounded-2xl border border-border p-8">
                <div className="space-y-6">
                  {[
                    { icon: Lightbulb, title: "For Students", text: "Prioritize in-demand skills for career success" },
                    { icon: Target, title: "For Institutions", text: "Align curriculum with market requirements" },
                    { icon: BarChart3, title: "For Professionals", text: "Evaluate career transitions with data" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What We Do</h2>
              <p className="text-muted-foreground">
                Our automated data analytics pipeline continuously monitors the job market, 
                collecting postings, extracting skills through NLP, and presenting insights 
                through an intuitive dashboard.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Collect", desc: "Scrape major job portals and career pages", icon: Database },
                { title: "Process", desc: "Apply NLP to extract skills and metadata", icon: Cpu },
                { title: "Visualize", desc: "Present through interactive dashboards", icon: BarChart3 },
              ].map((item, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-6 text-center card-hover">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent mb-4">
                <Code className="w-4 h-4" />
                <span className="text-sm font-medium">Technology</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Technology Stack</h2>
              <p className="text-muted-foreground">
                Built on a modern, reliable stack ensuring scalability and performance.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {techStack.map((tech, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-4 text-center card-hover">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-3">
                    <tech.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{tech.name}</h4>
                  <p className="text-xs text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Pipeline */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary mb-4">
                <Workflow className="w-4 h-4" />
                <span className="text-sm font-medium">Architecture</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Data Pipeline</h2>
              <p className="text-muted-foreground">
                End-to-end automated workflow from data collection to visualization.
              </p>
            </div>

            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {pipelineSteps.map((step, i) => (
                  <div key={i} className="relative">
                    <div className="bg-card rounded-xl border border-border p-4 text-center relative z-10">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-3 text-primary-foreground font-bold">
                        {step.step}
                      </div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">{step.title}</h4>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </div>
                    {i < pipelineSteps.length - 1 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-2 z-20">
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Academic Context */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate to-slate-light rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl font-bold text-primary-foreground mb-4">
                A Minor Project Initiative
              </h2>
              <p className="text-slate-muted max-w-2xl mx-auto mb-6">
                SkillSight is developed as part of the Minor Project II curriculum at 
                Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal, under the 
                School of Information Technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 bg-slate-light rounded-lg">
                  <p className="text-xs text-slate-muted">Department</p>
                  <p className="text-primary-foreground font-medium">Computer Science & Engineering (Data Science)</p>
                </div>
                <div className="px-6 py-3 bg-slate-light rounded-lg">
                  <p className="text-xs text-slate-muted">Session</p>
                  <p className="text-primary-foreground font-medium">November - December 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
