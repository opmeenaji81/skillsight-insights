import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Users, MapPin, IndianRupee } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-200" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Qzk5OTkiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 animate-slide-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-sm font-medium">Live Job Market Data</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up delay-100">
              Real-Time Job Market{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Intelligence
              </span>{" "}
              for India's Tech Workforce
            </h1>

            <p className="text-lg sm:text-xl text-slate-muted mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-slide-up delay-200">
              NLP-powered analytics revealing top skills, salary ranges, hiring trends, 
              and city-wise opportunities across the Indian technology sector.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up delay-300">
              <Link to="/dashboard">
                <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                  Open Dashboard
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/insights">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto group">
                  <Play className="w-5 h-5" />
                  See Insights
                </Button>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 animate-slide-up delay-400">
              {[
                { icon: TrendingUp, label: "Jobs Analyzed", value: "10,000+" },
                { icon: Users, label: "Skills Tracked", value: "500+" },
                { icon: MapPin, label: "Cities Covered", value: "50+" },
                { icon: IndianRupee, label: "Salary Points", value: "1M+" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-slate-light/30 backdrop-blur-sm border border-slate-light/20">
                  <stat.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                  <p className="text-2xl font-bold text-primary-foreground">{stat.value}</p>
                  <p className="text-xs text-slate-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative animate-slide-up delay-300 hidden lg:block">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              
              {/* Dashboard Mockup */}
              <div className="relative bg-card rounded-2xl shadow-2xl overflow-hidden border border-border/50">
                {/* Header Bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/80" />
                    <div className="w-3 h-3 rounded-full bg-accent/80" />
                    <div className="w-3 h-3 rounded-full bg-primary/80" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-6 w-48 bg-muted rounded-md mx-auto" />
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 space-y-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { label: "Total Jobs", value: "1,247", color: "bg-primary" },
                      { label: "Top Skill", value: "Python", color: "bg-accent" },
                      { label: "Top City", value: "Bangalore", color: "bg-indigo" },
                      { label: "Avg Salary", value: "₹5.8L", color: "bg-teal" },
                    ].map((stat, i) => (
                      <div key={i} className="p-3 bg-secondary/50 rounded-lg">
                        <div className={`w-2 h-2 rounded-full ${stat.color} mb-2`} />
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                        <p className="text-sm font-semibold text-foreground">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chart Placeholder */}
                  <div className="h-32 bg-secondary/30 rounded-lg flex items-end justify-around px-4 pb-3">
                    {[60, 80, 45, 90, 70, 55, 85, 65].map((h, i) => (
                      <div
                        key={i}
                        className="w-6 rounded-t-md bg-gradient-to-t from-primary to-accent"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>

                  {/* Mini Charts Row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 bg-secondary/30 rounded-lg p-3">
                      <div className="h-2 w-16 bg-muted rounded mb-2" />
                      <div className="h-10 flex items-end gap-1">
                        {[30, 50, 40, 60, 45, 70].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t bg-accent/60" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                    <div className="h-20 bg-secondary/30 rounded-lg p-3">
                      <div className="h-2 w-16 bg-muted rounded mb-2" />
                      <div className="relative h-10">
                        <svg viewBox="0 0 100 40" className="w-full h-full">
                          <path
                            d="M0,35 Q25,20 50,25 T100,15"
                            fill="none"
                            stroke="hsl(var(--primary))"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 p-3 bg-card rounded-xl shadow-lg border border-border animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Growth</p>
                    <p className="text-sm font-semibold text-accent">+24%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 p-3 bg-card rounded-xl shadow-lg border border-border animate-float delay-300">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Active Users</p>
                    <p className="text-sm font-semibold text-primary">2,847</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-slate-muted/50 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-slate-muted/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
