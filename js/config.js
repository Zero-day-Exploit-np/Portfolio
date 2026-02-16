// Site Configuration
const CONFIG = {
    // Personal Information
    name: "Your Name",
    title: "CREATIVE TECHNOLOGIST",
    
    // About Information
    aboutFront: {
        title: "WHO AM I?",
        paragraphs: [
            "I'm a passionate software developer who believes in creating experiences, not just applications. My work sits at the intersection of design and technology.",
            "With 5+ years of experience, I've helped startups and enterprises build products that users love."
        ]
    },
    
    aboutBack: {
        title: "WHAT I DO",
        paragraphs: [
            "Full-stack development with a focus on creating memorable user experiences. I specialize in React, Node.js, and modern web technologies.",
            "When I'm not coding, I'm exploring new design trends, experimenting with creative code, or contributing to open source."
        ]
    },
    
    // Skills for Radar Chart
    skills: [
        { name: 'Frontend', value: 0.95 },
        { name: 'Backend', value: 0.88 },
        { name: 'DevOps', value: 0.75 },
        { name: 'Design', value: 0.82 },
        { name: 'Database', value: 0.85 },
        { name: 'Mobile', value: 0.70 }
    ],
    
    // Contact Information
    contact: {
        email: "your.email@example.com",
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername"
    },
    
    // Feature Flags
    features: {
        particles: true,
        soundEffects: false, // Set to true when you add sound files
        analytics: false
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
