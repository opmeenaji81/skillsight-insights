import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  FileText, 
  Download, 
  Calendar, 
  TrendingUp,
  IndianRupee,
  Code,
  Clock,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";

const reports = [
  {
    id: 1,
    title: "Weekly Market Report",
    subtitle: "Nov 25 - Dec 1, 2025",
    description: "Comprehensive analysis of job market trends, new openings, and skill demand shifts from the past week.",
    type: "Weekly",
    pages: 12,
    icon: Calendar,
    highlights: [
      "1,247 new job postings analyzed",
      "Python demand up 8%",
      "Bangalore leads hiring",
    ],
  },
  {
    id: 2,
    title: "Skills Intelligence Summary",
    subtitle: "Q4 2025",
    description: "Deep-dive into the most in-demand technical skills, emerging technologies, and skill gap analysis.",
    type: "Quarterly",
    pages: 24,
    icon: Code,
    highlights: [
      "Top 50 skills ranked",
      "Generative AI skill surge",
      "Certification recommendations",
    ],
  },
  {
    id: 3,
    title: "Salary Benchmark Report",
    subtitle: "2025 Annual Edition",
    description: "Comprehensive salary analysis across roles, experience levels, cities, and company types.",
    type: "Annual",
    pages: 36,
    icon: IndianRupee,
    highlights: [
      "Role-wise salary bands",
      "City cost-of-living adjustments",
      "Negotiation insights",
    ],
  },
  {
    id: 4,
    title: "Tech Hiring Trends",
    subtitle: "December 2025",
    description: "Analysis of hiring patterns, company-wise openings, and industry sector performance.",
    type: "Monthly",
    pages: 18,
    icon: TrendingUp,
    highlights: [
      "Top hiring companies",
      "Sector-wise breakdown",
      "Remote work trends",
    ],
  },
];

export default function Reports() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-16">
        {/* Header */}
        <section className="py-16 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                <FileText className="w-4 h-4" />
                <span className="text-sm font-medium">Research & Reports</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Market{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Reports
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Download comprehensive reports with actionable insights for career planning 
                and institutional decision-making.
              </p>
            </div>
          </div>
        </section>

        {/* Reports Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {reports.map((report) => (
                <div key={report.id} className="bg-card rounded-2xl border border-border overflow-hidden card-hover">
                  {/* Report Preview Header */}
                  <div className="bg-gradient-to-br from-slate to-slate-light p-8 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 border border-slate-muted/20 rounded-lg" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 border border-slate-muted/20 rounded" />
                    
                    {/* PDF Icon */}
                    <div className="relative z-10 flex items-start justify-between">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium mb-4">
                          <Clock className="w-3 h-3" />
                          {report.type}
                        </div>
                        <h3 className="text-xl font-bold text-primary-foreground mb-1">{report.title}</h3>
                        <p className="text-slate-muted text-sm">{report.subtitle}</p>
                      </div>
                      <div className="w-16 h-20 bg-card rounded shadow-lg flex flex-col items-center justify-center">
                        <FileText className="w-8 h-8 text-destructive" />
                        <span className="text-xs text-muted-foreground mt-1">PDF</span>
                      </div>
                    </div>

                    {/* Preview Lines */}
                    <div className="mt-6 space-y-2 opacity-40">
                      <div className="h-2 bg-slate-muted/30 rounded w-full" />
                      <div className="h-2 bg-slate-muted/30 rounded w-4/5" />
                      <div className="h-2 bg-slate-muted/30 rounded w-3/5" />
                    </div>
                  </div>

                  {/* Report Details */}
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">{report.description}</p>
                    
                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {report.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{report.pages} pages</span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                        <Button variant="hero" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Report CTA */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-secondary rounded-2xl p-8 md:p-12">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Need a Custom Report?
                </h2>
                <p className="text-muted-foreground mb-6">
                  We can generate tailored reports for specific roles, cities, skill sets, 
                  or time periods. Contact us for institutional or bulk requirements.
                </p>
                <Button variant="hero">
                  Request Custom Report
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
