// src/api/index.ts
const API_BASE = "http://127.0.0.1:8000/api";

export async function getSummary() {
  const res = await fetch(`${API_BASE}/summary/`);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}

export async function getJobs() {
  const res = await fetch(`${API_BASE}/jobs/`);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}

export async function getSkills() {
  const res = await fetch(`${API_BASE}/skills/`);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}
