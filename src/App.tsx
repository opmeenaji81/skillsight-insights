// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import Dashboard from "./pages/Dashboard";
// import Insights from "./pages/Insights";
// import Reports from "./pages/Reports";
// import About from "./pages/About";
// import Team from "./pages/Team";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/insights" element={<Insights />} />
//           <Route path="/reports" element={<Reports />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/team" element={<Team />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;



// src/App.tsx
import React from "react";
import DashboardSummary from "./components/DashboardSummary";

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Inter, Arial" }}>
      <h1>SkillSight</h1>
      <DashboardSummary />
      <hr />
      <p style={{ color: "#666" }}>This dashboard is connected to the Django backend.</p>
    </div>
  );
}
