// ─────────────────────────────────────────────────────────────
//  skills.ts — Organised technical skills
//  Only technologies genuinely supported by real experience are
//  listed. Add or remove items as your experience grows.
// ─────────────────────────────────────────────────────────────

export interface SkillCategory {
  name: string;
  description: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    description: "Primary languages used across systems, tooling, and backend work.",
    items: ["C", "C++", "Python", "Go", "JavaScript"],
  },
  {
    name: "Systems & Tools",
    description: "Day-to-day environment for systems programming and automation.",
    items: ["Linux", "Git", "GitHub", "Bash", "Assembly"],
  },
  {
    name: "Backend & Database",
    description: "Server-side development and data persistence.",
    items: ["PHP", "Laravel", "MySQL", "REST APIs"],
  },
  {
    name: "CS Foundations",
    description: "Core computer science coursework and self-study.",
    items: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];
