import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  Users, 
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  Database,
  Code,
  BarChart3,
  Cpu
} from "lucide-react";

const teamMembers = [
  {
    name: "Omprakash",
    enrollment: "0002CD231045",
    role: "Data Analyst & NLP",
    description: "Leads the natural language processing pipeline and skill extraction algorithms.",
    icon: Cpu,
    color: "from-primary to-indigo-light",
  },
  {
    name: "Sarthak Kabra",
    enrollment: "0002CD231067",
    role: "Backend & Integration",
    description: "Develops Flask APIs, manages database architecture, and system integration.",
    icon: Code,
    color: "from-accent to-teal-light",
  },
  {
    name: "Manoj Patel",
    enrollment: "0002CD231039",
    role: "Web Scraping & Database",
    description: "Implements automated data collection and PostgreSQL database management.",
    icon: Database,
    color: "from-indigo to-primary",
  },
  {
    name: "Ayush Soni",
    enrollment: "0002CD231017",
    role: "Frontend & Visualization",
    description: "Creates interactive dashboards and data visualizations with Plotly.",
    icon: BarChart3,
    color: "from-teal to-accent",
  },
];

const guides = [
  {
    name: "Mr. Vivek Sharma",
    designation: "Professor",
    role: "Project Guide",
    description: "Provides strategic guidance and technical mentorship throughout the project lifecycle.",
  },
  {
    name: "Ms. Rachna Nagdev",
    designation: "Assistant Professor",
    role: "Co-Guide",
    description: "Supports technical implementation and research methodology.",
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">Our Team</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Meet the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Team
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                The talented individuals behind SkillSight from RGPV, Bhopal
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground text-center mb-12">Development Team</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, i) => (
                <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden card-hover group">
                  {/* Profile Header */}
                  <div className={`h-32 bg-gradient-to-br ${member.color} relative overflow-hidden`}>
                    {/* Decorative Circles */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-foreground/10 rounded-full" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary-foreground/10 rounded-full" />
                    
                    {/* Avatar Placeholder */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                      <div className="w-20 h-20 rounded-full bg-card border-4 border-card flex items-center justify-center shadow-lg">
                        <member.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Profile Content */}
                  <div className="pt-12 pb-6 px-6 text-center">
                    <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-accent font-medium mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground mb-4">{member.enrollment}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
                    
                    {/* Social Links */}
                    <div className="flex justify-center gap-3">
                      <a href="https://github.com/opmeenaji81" className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <Github className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                      </a>
                      <a href="https://www.linkedin.com/in/opmeenaji/" className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <Linkedin className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                      </a>
                      <a href="opmeenaji81@gmail.com" className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <Mail className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Guides */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent mb-4">
                <GraduationCap className="w-4 h-4" />
                <span className="text-sm font-medium">Mentorship</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground">Faculty Guides</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {guides.map((guide, i) => (
                <div key={i} className="bg-card rounded-2xl border border-border p-8 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{guide.name}</h3>
                      <p className="text-accent font-medium mb-1">{guide.designation}</p>
                      <p className="text-sm text-primary font-medium mb-3">{guide.role}</p>
                      <p className="text-muted-foreground text-sm">{guide.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Institution */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate to-slate-light rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl font-bold text-primary-foreground mb-4">
                School of Information Technology
              </h2>
              <h3 className="text-xl text-accent mb-6">
                Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal
              </h3>
              <p className="text-slate-muted max-w-2xl mx-auto mb-8">
                This project is submitted in partial fulfillment of the requirements for the 
                award of the degree of Bachelor of Technology in Computer Science & Engineering 
                (Data Science).
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 bg-slate-light/50 rounded-lg">
                  <p className="text-xs text-slate-muted">Program</p>
                  <p className="text-primary-foreground font-medium">B.Tech CSE (Data Science)</p>
                </div>
                <div className="px-6 py-3 bg-slate-light/50 rounded-lg">
                  <p className="text-xs text-slate-muted">Project</p>
                  <p className="text-primary-foreground font-medium">Minor Project II</p>
                </div>
                <div className="px-6 py-3 bg-slate-light/50 rounded-lg">
                  <p className="text-xs text-slate-muted">Year</p>
                  <p className="text-primary-foreground font-medium">2025</p>
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
