// ─────────────────────────────────────────────────────────────
//  articles.ts — Manually maintained blog
//
//  This is a static blog. Add or edit articles here; each one
//  gets its own page at /blog/<slug>. The `body` field is HTML
//  and is rendered as-is, so keep it valid and self-contained.
//
//  The two starter articles below are real technical notes on
//  topics from the projects — edit or replace them freely.
// ─────────────────────────────────────────────────────────────

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date string
  readingTime: string;
  tags: string[];
  body: string;
}

export const articles: Article[] = [
  {
    slug: "linux-boot-process",
    title: "Understanding the Linux Boot Process",
    excerpt:
      "From the firmware handoff to init, a practical walkthrough of what actually happens when a Linux machine starts up.",
    date: "2026-10-12",
    readingTime: "6 min read",
    tags: ["Linux", "Operating Systems", "Systems"],
    body: `
<p>The Linux boot process is a sequence of small, well-defined stages that hand control from one component to the next until userspace is ready. Understanding it is foundational for systems work — debugging boot failures, writing daemons, or building a minimal OS all depend on knowing where you are in this sequence.</p>

<h2>1. Firmware: BIOS or UEFI</h2>
<p>Power-on hands control to the firmware. Legacy BIOS performs POST, then reads the first sector (the MBR) of the boot device. UEFI is more capable: it reads an EFI System Partition and launches a bootloader listed in the boot entries. UEFI also provides runtime services the kernel can use later.</p>

<h2>2. The bootloader</h2>
<p>GRUB is the common choice on desktop distributions. Its job is to load the kernel image and an initial RAM filesystem into memory, then jump to the kernel entry point. GRUB also lets you pass kernel command-line parameters and choose between installed kernels.</p>

<h2>3. Kernel and initramfs</h2>
<p>The kernel initialises hardware, sets up memory management, and mounts an initial RAM filesystem (initramfs) that contains the drivers and tools needed to find and mount the real root filesystem. Once the root filesystem is mounted, the kernel executes the init system.</p>

<h2>4. Init and the service graph</h2>
<p>On almost every modern distribution, init is systemd. It brings up services in a dependency-ordered graph — mounting filesystems, networking, then application services. A daemon like Bluetooth Autoconnect slots in here as a systemd unit, which is exactly why it can reconnect devices at boot before any user logs in.</p>

<h2>Why it matters</h2>
<p>Each stage is a checkpoint where things can go wrong, and each stage exposes a different debugging surface. Knowing whether a failure is firmware, bootloader, kernel, or init changes how you investigate it — and it's the mental model behind building any low-level system that starts itself.</p>
`,
  },
  {
    slug: "bluetooth-bluez-dbus-daemon",
    title: "Building a Bluetooth Auto-Reconnect Daemon with BlueZ and D-Bus",
    excerpt:
      "How a small Python daemon talks to the BlueZ stack over D-Bus to reconnect trusted Bluetooth devices automatically — without a desktop environment.",
    date: "2026-11-02",
    readingTime: "8 min read",
    tags: ["Python", "Linux", "Bluetooth", "D-Bus", "systemd"],
    body: `
<p>Most Bluetooth utilities assume a desktop session. But on a headless Linux box, a media server, or a minimal install, there's no desktop — yet you still want your trusted devices to reconnect automatically. That's the problem Bluetooth Autoconnect solves by talking to BlueZ directly.</p>

<h2>BlueZ and D-Bus</h2>
<p>BlueZ is the Linux Bluetooth stack. It doesn't expose a traditional library API; instead it publishes objects on the system D-Bus. Adapters, devices, and the daemon itself all show up as D-Bus objects with properties, methods, and signals. To automate Bluetooth you subscribe to those signals and call those methods.</p>

<h2>Listening for the right signal</h2>
<p>When a trusted device comes into range, BlueZ emits signals. The daemon watches adapter state, matches devices marked <em>trusted</em>, and calls <code>org.bluez.Device1.Connect</code> when a target appears. Because it reacts to signals rather than polling, it stays efficient and reconnects promptly.</p>

<h2>Retries and backoff</h2>
<p>Connections fail — a device might be momentarily unreachable or a previous connection might not have torn down cleanly. A naive loop that hammers <code>Connect</code> can wedge the adapter. The daemon uses a configurable retry interval with backoff, giving BlueZ time to settle between attempts.</p>

<h2>Running as a systemd unit</h2>
<p>The daemon ships as a systemd service, which gives it three things for free: it starts at boot, it restarts on failure, and it logs through journald. This is what lets reconnection happen before any user logs in, which is the whole point of running it at the system level.</p>

<h2>Why D-Bus instead of a shell script</h2>
<p>You <em>could</em> script <code>bluetoothctl</code>, but that's a CLI tool wrapping the same D-Bus interface — you'd be parsing text output of a tool that wasn't designed to be scripted at that granularity. Going straight to D-Bus is more robust, more testable, and doesn't depend on <code>bluetoothctl</code>'s output format staying stable.</p>
`,
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export const sortedArticles = [...articles].sort((a, b) =>
  b.date.localeCompare(a.date),
);
