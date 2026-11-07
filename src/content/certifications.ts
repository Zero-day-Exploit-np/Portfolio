// ─────────────────────────────────────────────────────────────
//  certifications.ts — Achievements & learning
//  All entries below are backed by real, verifiable repositories
//  or published packages. Add real certificates and awards here.
// ─────────────────────────────────────────────────────────────

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  description: string;
  link: string;
  type: "Open Source" | "Course" | "Certification" | "Achievement";
}

export const certifications: Certification[] = [
  {
    title: "Published bluetooth-autoconnect to PyPI",
    issuer: "Python Package Index (PyPI)",
    year: "2026",
    description:
      "Authored and published a Linux Bluetooth auto-reconnect daemon as an installable Python package, usable across major Linux distributions.",
    link: "https://pypi.org/project/bluetooth-autoconnect/",
    type: "Open Source",
  },
  {
    title: "GitHub Skills — Introduction to CodeQL",
    issuer: "GitHub",
    year: "2026",
    description:
      "Completed GitHub's hands-on course on CodeQL semantic code analysis for finding security vulnerabilities.",
    link: "https://github.com/Zero-day-Exploit-np/skills-introduction-to-codeql",
    type: "Course",
  },
  {
    title: "GitHub Skills — Migrate Azure DevOps to GitHub",
    issuer: "GitHub",
    year: "2026",
    description:
      "Completed the GitHub Skills exercise for migrating Azure DevOps repositories to GitHub.",
    link: "https://github.com/Zero-day-Exploit-np/skills-migrate-ado-repository",
    type: "Course",
  },
  {
    title: "GitHub Skills — Workflow Artifacts",
    issuer: "GitHub",
    year: "2026",
    description:
      "Completed GitHub Actions coursework on creating, managing, and publishing workflow artifacts.",
    link: "https://github.com/Zero-day-Exploit-np/skills-workflow-artifacts",
    type: "Course",
  },
];
