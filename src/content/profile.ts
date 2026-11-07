// ─────────────────────────────────────────────────────────────
//  profile.ts — Edit your personal details here
// ─────────────────────────────────────────────────────────────

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  initials: string;
  title: string;
  tagline: string;
  roleLine: string;
  summary: string;
  about: string[];
  focusAreas: string[];
  location: string;
  email: string;
  github: string;
  githubHandle: string;
  linkedin: string | null;
  resume: string;
  availability: string;
}

export const profile: Profile = {
  name: "Bikram Kumar Das",
  firstName: "Bikram",
  lastName: "Das",
  initials: "BD",
  title: "Software Engineer",
  tagline: "Systems & Software Development",
  roleLine: "Software Engineer · Systems & Software Development",
  summary:
    "Computer Science undergraduate focused on building reliable software and understanding how computer systems work beneath the surface. I enjoy systems programming, backend engineering, and solving hard engineering problems with clean, well-structured code.",
  about: [
    "I'm a Computer Science undergraduate at Sikkim Manipal Institute of Technology with a deep interest in systems programming, software architecture, and the internals of operating systems. I like understanding how things work at a low level and building software that is reliable, efficient, and maintainable.",
    "Most of my work sits at the intersection of systems software and backend engineering — from Linux tooling and daemons to API-driven web systems. I write C and C++ for performance-critical problems, Python and Go for tooling and services, and I'm comfortable working in the Linux environment end to end.",
    "Beyond coursework, I build real projects to sharpen my engineering judgement: a Bluetooth auto-reconnect daemon published to PyPI, a government file-tracking system, and a minimal operating system. I treat data structures and fundamentals as a daily practice rather than a checklist.",
  ],
  focusAreas: [
    "Systems Programming",
    "Software Architecture",
    "Linux & Operating Systems",
    "Problem-Solving",
    "Backend Engineering",
    "Open-Source Development",
  ],
  location: "Sikkim, India",
  email: "sonukarn.org@gmail.com",
  github: "https://github.com/Zero-day-Exploit-np",
  githubHandle: "Zero-day-Exploit-np",
  // Set to a real LinkedIn URL to enable the link, or keep null to hide it.
  linkedin: null,
  resume: "/assets/resume.pdf",
  availability: "Open to internships, full-time roles, and collaboration",
};
