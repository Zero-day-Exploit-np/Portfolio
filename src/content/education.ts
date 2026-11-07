// ─────────────────────────────────────────────────────────────
//  education.ts — Verified education history only
// ─────────────────────────────────────────────────────────────

export interface Education {
  degree: string;
  institution: string;
  period: string;
  expectedGraduation: string;
  status: string;
  location: string;
  description: string;
}

export const education: Education[] = [
  {
    degree: "BSc Computer Science",
    institution: "Sikkim Manipal Institute of Technology",
    period: "2024 — 2027",
    expectedGraduation: "May 2027",
    status: "Undergraduate",
    location: "Sikkim, India",
    description:
      "Undergraduate studies in Computer Science with a focus on systems programming, algorithms, operating systems, and software engineering.",
  },
];
