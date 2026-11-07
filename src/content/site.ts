// ─────────────────────────────────────────────────────────────
//  site.ts — Site-wide metadata and navigation + content barrel
//  Re-exports all editable content so components can import
//  everything from a single path: `../content/site`.
// ─────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export const SITE = {
  title: "Bikram Das — Software Engineer",
  shortTitle: "Bikram Das",
  description:
    "Bikram Kumar Das — Software Engineer focused on systems programming, Linux, and backend engineering. Projects, experience, and writing.",
  url: "https://bikramkumardas.com.np",
  author: "Bikram Kumar Das",
  locale: "en",
  twitter: "@Zero-day-Exploit-np",
  ogImage: "/assets/images/og.png",
  themeColor: "#0a0a0b",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// Mobile navigation (slightly trimmed ordering)
export const mobileNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// ── Content re-exports (barrel) ────────────────────────────────
export { profile } from "./profile";
export type { Profile } from "./profile";

export { skillCategories } from "./skills";
export type { SkillCategory } from "./skills";

export { projects, featuredProjects, getProject } from "./projects";
export type { Project } from "./projects";

export { experiences } from "./experience";
export type { Experience } from "./experience";

export { education } from "./education";
export type { Education } from "./education";

export { certifications } from "./certifications";
export type { Certification } from "./certifications";

export { articles, getArticle, sortedArticles } from "./articles";
export type { Article } from "./articles";
