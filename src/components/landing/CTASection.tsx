import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow delay-300" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Start Your Journey Today</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Ready to Unlock{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Job Market Insights?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-slate-muted mb-10 max-w-2xl mx-auto">
            Join students, educators, and professionals who use SkillSight to make 
            data-driven career decisions in India's dynamic tech landscape.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                Explore Dashboard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/insights">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                View Market Insights
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-12 border-t border-slate-light/20">
            <p className="text-slate-muted text-sm mb-4">Trusted by leading institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-slate-muted">
              <span className="text-lg font-semibold opacity-60">RGPV</span>
              <span className="text-lg font-semibold opacity-60">SIT Bhopal</span>
              <span className="text-lg font-semibold opacity-60">Tech Startups</span>
              <span className="text-lg font-semibold opacity-60">Placement Cells</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
