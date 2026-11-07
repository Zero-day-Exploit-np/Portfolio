// ─────────────────────────────────────────────────────────────
//  experience.ts — Verified experience only
//  Adjust the period field to your real internship dates.
// ─────────────────────────────────────────────────────────────

export interface Experience {
  role: string;
  organization: string;
  type: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  link?: string;
}

export const experiences: Experience[] = [
  {
    role: "Software Engineering Intern",
    organization: "Sikkim IT Department",
    type: "Internship",
    period: "2025 — Present", // TODO: confirm exact start/end dates
    location: "Gangtok, Sikkim",
    summary:
      "Built and maintained government software systems, including a role-based file-tracking platform that manages inter-department file movement across the organisation.",
    highlights: [
      "Developed a government file-tracking system with role-based access control and a linked-list movement timeline",
      "Implemented instant inter-department file transfers and hierarchical impersonation",
      "Worked across the full stack with Laravel, MySQL, and server-side rendering",
    ],
    link: "https://github.com/Zero-day-Exploit-np/file-tracking-system",
  },
];
