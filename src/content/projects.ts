// ─────────────────────────────────────────────────────────────
//  projects.ts — Project showcase
//
//  Featured projects (featured: true) appear on the homepage and
//  are ordered by the `order` field. All other projects appear on
//  the Projects page. Each project gets its own detail page at
//  /projects/<slug>.
//
//  No fabricated metrics are used. Only add live demo links that
//  actually work.
// ─────────────────────────────────────────────────────────────

export interface Project {
  slug: string;
  title: string;
  category: "Systems" | "Backend" | "Embedded" | "Web" | "DSA";
  tagline: string;
  description: string;
  featured: boolean;
  order: number;
  technologies: string[];
  highlights: string[];
  github: string;
  demo?: string;
  content?: string;
}

export const projects: Project[] = [
  // ── Featured ──────────────────────────────────────────────
  {
    slug: "bluetooth-autoconnect",
    title: "Bluetooth Autoconnect",
    category: "Systems",
    tagline: "Linux Bluetooth auto-reconnect daemon",
    description:
      "A system-level daemon that automatically reconnects trusted Bluetooth devices on Linux using the BlueZ D-Bus API. It supports multiple adapters, systemd integration, daemon mode, and automatic retries across major Linux distributions.",
    featured: true,
    order: 1,
    technologies: ["Python", "BlueZ", "D-Bus", "systemd", "Linux"],
    highlights: [
      "D-Bus integration with the BlueZ stack for trusted-device monitoring",
      "systemd service unit enabling boot-time auto-reconnect",
      "Daemon mode with configurable retry intervals",
      "Published to PyPI as an installable package",
      "Cross-distro support: Arch, Debian, Fedora, Ubuntu, Kali",
    ],
    github: "https://github.com/Zero-day-Exploit-np/bluetooth-autoconnect",
    demo: "https://pypi.org/project/bluetooth-autoconnect/",
    content:
      "Bluetooth Autoconnect is a system-level Linux daemon that reconnects trusted Bluetooth devices automatically. Rather than relying on a desktop environment, it talks directly to BlueZ over D-Bus, which means it runs before any user logs in and works across headless servers and minimal installs. The daemon monitors adapter state, matches trusted devices, and issues connection attempts with a configurable retry backoff. It ships as a systemd unit so reconnection starts at boot, and it is packaged on PyPI so installation is a single command.",
  },
  {
    slug: "minios",
    title: "MiniOS",
    category: "Systems",
    tagline: "Minimal operating system kernel",
    description:
      "A small operating system kernel built from scratch to learn low-level systems programming — bootstrapping, memory management, interrupt handling, and kernel architecture on x86.",
    featured: true,
    order: 2,
    technologies: ["C", "Assembly", "x86", "Make", "QEMU"],
    highlights: [
      "Custom bootloader and boot sequence",
      "Interrupt descriptor tables and interrupt service routines",
      "Basic memory management and segmentation",
      "Direct hardware interaction through I/O ports",
    ],
    // TODO: replace with the exact repository URL
    github: "https://github.com/Zero-day-Exploit-np",
    content:
      "MiniOS is a learning-focused operating system kernel written in C and x86 Assembly. The project starts from the earliest boot stages — the bootloader handing control to a minimal kernel — and progressively adds the primitives a real OS needs: a Global Descriptor Table, Interrupt Descriptor Table, interrupt service routines, and a simple frame for memory management. The goal is not a production OS, but a clear, readable codebase that makes the leap from 'code that runs' to 'code that the hardware boots and runs' tangible.",
  },
  {
    slug: "file-tracking-system",
    title: "File Tracking System",
    category: "Backend",
    tagline: "Government file-tracking platform",
    description:
      "A Laravel 12 government file-tracking system with role-based access control, instant file transfers, hierarchical impersonation, and a linked-list-based movement timeline.",
    featured: true,
    order: 3,
    technologies: ["PHP", "Laravel", "MySQL", "Blade", "Bootstrap", "REST"],
    highlights: [
      "Role-based access control and hierarchical impersonation",
      "Linked-list timeline tracking the movement of every file",
      "Instant inter-department file transfers",
      "Relational MySQL schema modelling the file movement graph",
    ],
    github: "https://github.com/Zero-day-Exploit-np/file-tracking-system",
    content:
      "The File Tracking System is a government file-tracking platform built with Laravel 12. Files move between departments and users, and every movement is recorded as a node in a linked-list timeline, giving a complete, auditable history of where a file has been and who handled it. Access is enforced through role-based access control, with hierarchical impersonation so senior officers can act on behalf of subordinates. The backend uses a relational MySQL schema and Laravel's Eloquent ORM, with Blade templates for server-side rendering.",
  },
  {
    slug: "environment-sensor-rover",
    title: "Environment Sensor Rover",
    category: "Embedded",
    tagline: "Autonomous environmental monitoring rover",
    description:
      "An autonomous rover that monitors environmental parameters using onboard sensors, collecting temperature, humidity, and air-quality data with real-time readings and remote control.",
    featured: true,
    order: 4,
    technologies: ["C/C++", "Arduino", "Embedded", "Sensors", "Serial"],
    highlights: [
      "Real-time sensor data acquisition (temperature, humidity, air quality)",
      "Motor control and navigation logic",
      "Serial/wireless telemetry to a dashboard",
      "Sensor fusion for environmental monitoring",
    ],
    // TODO: replace with the exact repository URL
    github: "https://github.com/Zero-day-Exploit-np",
    content:
      "The Environment Sensor Rover is an embedded system that moves through a space while sampling environmental conditions. An on-board microcontroller reads from a set of sensors — temperature, humidity, and air quality — and streams the readings over a serial/wireless link to a control dashboard. Motor control logic lets the rover navigate either autonomously or under remote direction. The project ties together low-level embedded programming, sensor calibration, and a simple telemetry protocol.",
  },

  // ── More projects ────────────────────────────────────────
  {
    slug: "dsa",
    title: "DSA Practice",
    category: "DSA",
    tagline: "Data structures & algorithms in C",
    description:
      "A curated set of data-structure and algorithm implementations and problems practiced in C, organised by topic.",
    featured: false,
    order: 5,
    technologies: ["C", "DSA", "Algorithms"],
    highlights: [
      "Implementations of core data structures and algorithms",
      "Problem sets organised by topic and pattern",
      "Focused on writing correct, readable C",
    ],
    github: "https://github.com/Zero-day-Exploit-np/DSA",
    demo: "https://dsa-eight-red.vercel.app",
  },
  {
    slug: "leetcode-problems",
    title: "LeetCode Solutions",
    category: "DSA",
    tagline: "Competitive programming in C",
    description:
      "Competitive programming solutions in C, organised by problem and solving pattern.",
    featured: false,
    order: 6,
    technologies: ["C", "DSA", "Algorithms"],
    highlights: [
      "Solutions organised by problem and pattern",
      "Emphasis on time and space complexity",
      "Daily competitive programming practice",
    ],
    github: "https://github.com/Zero-day-Exploit-np/leetcode-problems",
  },
  {
    slug: "finger-count",
    title: "Finger Count",
    category: "Web",
    tagline: "Real-time hand & finger counting",
    description:
      "A real-time finger-counting application that detects hands using MediaPipe and counts raised fingers through hand-landmark analysis.",
    featured: false,
    order: 7,
    technologies: ["Python", "MediaPipe", "OpenCV", "Computer Vision"],
    highlights: [
      "Real-time hand detection with MediaPipe",
      "Landmark-based finger-counting logic",
      "Low-latency webcam pipeline",
    ],
    github: "https://github.com/Zero-day-Exploit-np/finger_count-main",
  },
  {
    slug: "shortest-path-finder",
    title: "Shortest Path Finder",
    category: "Web",
    tagline: "DSA shortest-path visualiser",
    description:
      "A DSA-driven web app that calculates the shortest route between two locations using graph algorithms and live map data.",
    featured: false,
    order: 8,
    technologies: ["JavaScript", "Python", "HTML", "CSS"],
    highlights: [
      "Graph-based shortest-path computation",
      "Interactive map interface",
      "Frontend visualisation of the algorithm",
    ],
    github: "https://github.com/Zero-day-Exploit-np/Shortest-Path",
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.order - b.order);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
