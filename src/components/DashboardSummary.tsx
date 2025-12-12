// src/components/DashboardSummary.tsx
import React, { useEffect, useState } from "react";
import { getSummary } from "../api";

type Summary = { total_jobs?: number; total_skills?: number };

export default function DashboardSummary() {
  const [summary, setSummary] = useState<Summary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    getSummary()
      .then((data) => {
        if (!mounted) return;
        setSummary(data);
      })
      .catch((err) => {
        console.error("Summary fetch error:", err);
        if (mounted) setError("Unable to load summary");
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div>Loading summary...</div>;
  if (error) return <div style={{ color: "crimson" }}>{error}</div>;

  return (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: 8 }}>
      <div style={{ padding: 16, borderRadius: 8, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", background: "#fff" }}>
        <div style={{ fontSize: 12, color: "#666" }}>Total Jobs</div>
        <div style={{ fontSize: 22, fontWeight: 700 }}>{summary?.total_jobs ?? 0}</div>
      </div>

      <div style={{ padding: 16, borderRadius: 8, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", background: "#fff" }}>
        <div style={{ fontSize: 12, color: "#666" }}>Total Skills</div>
        <div style={{ fontSize: 22, fontWeight: 700 }}>{summary?.total_skills ?? 0}</div>
      </div>
    </div>
  );
}
