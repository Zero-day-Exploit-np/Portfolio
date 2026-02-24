// Site Configuration
const CONFIG = {
  // Personal Information
  name: "Bikram Kumar Das",
  title: "CREATIVE TECHNOLOGIST",

  // About Information
  aboutFront: {
    title: "WHO AM I?",
    paragraphs: [
      "I'm a passionate Computer Science student who believes in building real-world solutions, not just academic projects. My work focuses on problem-solving through DSA, web development, and practical software applications.",
      "I actively develop projects to strengthen my skills and prepare for internship opportunities in the tech industry.",
    ],
  },

  aboutBack: {
    title: "WHAT I DO",
    paragraphs: [
      "I create responsive and user-focused web applications using modern development practices. My work emphasizes performance, clean UI, and strong logical foundations through DSA.",
      "Outside of projects, I explore new technologies and continuously level up my development skills.",
    ],
  },

  // Skills for Radar Chart
  skills: [
    { name: "Frontend", value: 0.95 },
    { name: "Backend", value: 0.88 },
    { name: "DevOps", value: 0.75 },
    { name: "Design", value: 0.82 },
    { name: "Database", value: 0.85 },
    { name: "Mobile", value: 0.7 },
  ],

  // Contact Information
  contact: {
    email: "sonukarn.org@gmail.com",
    github: "https://github.com/Zero-day-Exploit-np",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },

  // Feature Flags
  features: {
    particles: true,
    soundEffects: false, // Set to true when you add sound files
    analytics: false,
  },
};

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
