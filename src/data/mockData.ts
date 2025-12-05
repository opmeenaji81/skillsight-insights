// Mock data for SkillSight Dashboard

export const skillFrequencyData = [
  { skill: "Python", count: 847, color: "hsl(var(--primary))" },
  { skill: "JavaScript", count: 723, color: "hsl(var(--accent))" },
  { skill: "React", count: 612, color: "hsl(var(--indigo))" },
  { skill: "SQL", count: 589, color: "hsl(var(--teal))" },
  { skill: "AWS", count: 478, color: "hsl(var(--primary))" },
  { skill: "Java", count: 456, color: "hsl(var(--accent))" },
  { skill: "Node.js", count: 398, color: "hsl(var(--indigo))" },
  { skill: "Docker", count: 367, color: "hsl(var(--teal))" },
  { skill: "Machine Learning", count: 334, color: "hsl(var(--primary))" },
  { skill: "TypeScript", count: 312, color: "hsl(var(--accent))" },
];

export const salaryDistributionData = [
  { range: "0-3L", count: 145 },
  { range: "3-6L", count: 312 },
  { range: "6-10L", count: 478 },
  { range: "10-15L", count: 356 },
  { range: "15-20L", count: 189 },
  { range: "20-30L", count: 98 },
  { range: "30L+", count: 45 },
];

export const hiringTrendData = [
  { month: "Jul", jobs: 820, lastYear: 650 },
  { month: "Aug", jobs: 890, lastYear: 720 },
  { month: "Sep", jobs: 950, lastYear: 780 },
  { month: "Oct", jobs: 1020, lastYear: 850 },
  { month: "Nov", jobs: 1150, lastYear: 920 },
  { month: "Dec", jobs: 980, lastYear: 870 },
  { month: "Jan", jobs: 1080, lastYear: 890 },
  { month: "Feb", jobs: 1200, lastYear: 960 },
  { month: "Mar", jobs: 1350, lastYear: 1050 },
  { month: "Apr", jobs: 1280, lastYear: 1020 },
  { month: "May", jobs: 1420, lastYear: 1100 },
  { month: "Jun", jobs: 1380, lastYear: 1080 },
];

export const cityHiringData = [
  { city: "Bangalore", jobs: 3245, percentage: 32 },
  { city: "Hyderabad", jobs: 1876, percentage: 19 },
  { city: "Pune", jobs: 1432, percentage: 14 },
  { city: "Chennai", jobs: 1123, percentage: 11 },
  { city: "Mumbai", jobs: 987, percentage: 10 },
  { city: "Delhi NCR", jobs: 856, percentage: 9 },
  { city: "Kolkata", jobs: 312, percentage: 3 },
  { city: "Others", jobs: 198, percentage: 2 },
];

export const topCompaniesData = [
  { company: "TCS", jobs: 456, growth: 12 },
  { company: "Infosys", jobs: 389, growth: 8 },
  { company: "Wipro", jobs: 312, growth: -3 },
  { company: "HCL", jobs: 287, growth: 15 },
  { company: "Cognizant", jobs: 256, growth: 6 },
  { company: "Tech Mahindra", jobs: 198, growth: 10 },
  { company: "Accenture", jobs: 167, growth: 22 },
  { company: "Capgemini", jobs: 145, growth: 18 },
];

export const salaryByExperienceData = [
  { experience: 0, avgSalary: 3.5, minSalary: 2.5, maxSalary: 5 },
  { experience: 1, avgSalary: 4.2, minSalary: 3, maxSalary: 6 },
  { experience: 2, avgSalary: 5.5, minSalary: 4, maxSalary: 8 },
  { experience: 3, avgSalary: 7.2, minSalary: 5.5, maxSalary: 10 },
  { experience: 4, avgSalary: 9, minSalary: 7, maxSalary: 12 },
  { experience: 5, avgSalary: 11.5, minSalary: 8, maxSalary: 16 },
  { experience: 6, avgSalary: 14, minSalary: 10, maxSalary: 20 },
  { experience: 7, avgSalary: 17, minSalary: 12, maxSalary: 25 },
  { experience: 8, avgSalary: 20, minSalary: 15, maxSalary: 30 },
  { experience: 10, avgSalary: 25, minSalary: 18, maxSalary: 40 },
];

export const emergingSkillsData = [
  { skill: "Generative AI", growth: 245, trend: "up" },
  { skill: "LangChain", growth: 189, trend: "up" },
  { skill: "Rust", growth: 156, trend: "up" },
  { skill: "Kubernetes", growth: 134, trend: "up" },
  { skill: "GraphQL", growth: 98, trend: "up" },
];

export const highPayingRolesData = [
  { role: "ML Engineer", avgSalary: 24.5, range: "15-40L" },
  { role: "Cloud Architect", avgSalary: 28, range: "18-45L" },
  { role: "DevOps Lead", avgSalary: 22, range: "14-35L" },
  { role: "Data Scientist", avgSalary: 18.5, range: "12-30L" },
  { role: "Backend Lead", avgSalary: 21, range: "13-32L" },
];

export const fastGrowingCitiesData = [
  { city: "Hyderabad", growth: 28, newJobs: 540 },
  { city: "Pune", growth: 24, newJobs: 420 },
  { city: "Bangalore", growth: 18, newJobs: 680 },
  { city: "Chennai", growth: 15, newJobs: 280 },
  { city: "Noida", growth: 22, newJobs: 320 },
];

export const skillPremiumData = [
  { skill: "Generative AI", premium: 45, avgSalary: 22 },
  { skill: "System Design", premium: 38, avgSalary: 25 },
  { skill: "Kubernetes", premium: 32, avgSalary: 20 },
  { skill: "Rust", premium: 28, avgSalary: 18 },
  { skill: "Go", premium: 25, avgSalary: 17 },
];

export const dashboardStats = {
  totalJobs: 10247,
  topSkill: "Python",
  topCity: "Bangalore",
  avgSalary: "₹5.8 LPA",
  weeklyGrowth: 12.4,
  newJobsToday: 247,
  companiesHiring: 856,
  skillsTracked: 523,
};

export const roleCategories = [
  "All Roles",
  "Software Engineer",
  "Data Scientist",
  "DevOps Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "ML Engineer",
  "Cloud Engineer",
  "QA Engineer",
];

export const experienceLevels = [
  "All Experience",
  "Fresher (0-1 years)",
  "Junior (1-3 years)",
  "Mid-Level (3-5 years)",
  "Senior (5-8 years)",
  "Lead (8+ years)",
];

export const cities = [
  "All Cities",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Mumbai",
  "Delhi NCR",
  "Kolkata",
  "Noida",
  "Gurgaon",
];

export const skills = [
  "All Skills",
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "Java",
  "SQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "Machine Learning",
];

export const timeRanges = [
  "Last 7 Days",
  "Last 30 Days",
  "Last 3 Months",
  "Last 6 Months",
  "Last Year",
];
