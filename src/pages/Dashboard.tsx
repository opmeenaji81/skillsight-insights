import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { FilterPanel } from "@/components/dashboard/FilterPanel";
import { InsightCard } from "@/components/dashboard/InsightCard";
import { SkillFrequencyChart } from "@/components/dashboard/charts/SkillFrequencyChart";
import { SalaryDistributionChart } from "@/components/dashboard/charts/SalaryDistributionChart";
import { HiringTrendChart } from "@/components/dashboard/charts/HiringTrendChart";
import { CityHiringChart } from "@/components/dashboard/charts/CityHiringChart";
import { TopCompaniesChart } from "@/components/dashboard/charts/TopCompaniesChart";
import { SalaryExperienceChart } from "@/components/dashboard/charts/SalaryExperienceChart";
import { 
  dashboardStats, 
  emergingSkillsData, 
  highPayingRolesData,
  fastGrowingCitiesData,
  skillPremiumData 
} from "@/data/mockData";
import { 
  Briefcase, 
  Code, 
  MapPin, 
  IndianRupee,
  TrendingUp,
  Zap,
  Building2,
  Award,
  RefreshCw,
  Download,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const [lastUpdated] = useState(new Date().toLocaleString());

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Real-time insights from {dashboardStats.totalJobs.toLocaleString()}+ job postings
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Updated: {lastUpdated}</span>
              </div>
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button variant="hero" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Sidebar - Filters */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <FilterPanel />
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard
                  title="Total Jobs Analyzed"
                  value={dashboardStats.totalJobs.toLocaleString()}
                  icon={Briefcase}
                  trend={dashboardStats.weeklyGrowth}
                  subtitle="vs last week"
                />
                <StatsCard
                  title="Most In-Demand Skill"
                  value={dashboardStats.topSkill}
                  icon={Code}
                  variant="primary"
                />
                <StatsCard
                  title="Highest Hiring City"
                  value={dashboardStats.topCity}
                  icon={MapPin}
                  variant="accent"
                />
                <StatsCard
                  title="Avg Tech Salary"
                  value={dashboardStats.avgSalary}
                  icon={IndianRupee}
                  trend={8.5}
                  subtitle="YoY growth"
                  variant="gradient"
                />
              </div>

              {/* Charts Grid - Row 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <SkillFrequencyChart />
                <SalaryDistributionChart />
              </div>

              {/* Charts Grid - Row 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <HiringTrendChart />
                <CityHiringChart />
              </div>

              {/* Charts Grid - Row 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TopCompaniesChart />
                <SalaryExperienceChart />
              </div>

              {/* Insight Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <InsightCard
                  title="Emerging Skills 2025"
                  icon={TrendingUp}
                  variant="highlight"
                  items={emergingSkillsData.slice(0, 4).map(s => ({
                    label: s.skill,
                    value: `+${s.growth}%`,
                    badge: "Hot"
                  }))}
                />
                <InsightCard
                  title="Highest Paying Roles"
                  icon={Award}
                  items={highPayingRolesData.slice(0, 4).map(r => ({
                    label: r.role,
                    value: `₹${r.avgSalary}L`,
                  }))}
                />
                <InsightCard
                  title="Fastest Growing Cities"
                  icon={Building2}
                  items={fastGrowingCitiesData.slice(0, 4).map(c => ({
                    label: c.city,
                    value: `+${c.growth}%`,
                  }))}
                />
                <InsightCard
                  title="Skills With Premium"
                  icon={Zap}
                  items={skillPremiumData.slice(0, 4).map(s => ({
                    label: s.skill,
                    value: `+${s.premium}%`,
                    badge: "Premium"
                  }))}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
