# 🚀 Quick Start Guide

Welcome to your new portfolio website! Here's how to get started:

## Step 1: Customize Your Information

### 1. Update `js/config.js`
```javascript
const CONFIG = {
    name: "Your Name",  // Change this!
    title: "Your Title",  // e.g., "Full Stack Developer"
    
    skills: [
        { name: 'Frontend', value: 0.95 },  // Adjust values 0-1
        // Add/remove/modify skills
    ],
    
    contact: {
        email: "your.email@example.com",  // Your email
        github: "https://github.com/yourusername",  // Your links
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername"
    }
};
```

### 2. Add Your Projects in `js/projects.js`
```javascript
const PROJECTS = [
    {
        id: 1,
        title: "Your Project Name",
        description: "What does it do?",
        tags: ["React", "Node.js", "MongoDB"],  // Technologies used
        links: {
            demo: "https://your-project.com",  // Live demo
            github: "https://github.com/you/project"  // Source code
        }
    },
    // Add more projects...
];
```

### 3. Update `index.html`
- Line 8: Change "Your Name" in the title
- Lines 67-69: Update the About section text
- Lines 75-78: Update the What I Do section text

## Step 2: Test Locally

### Option 1: Simple
Just double-click `index.html` to open in your browser!

### Option 2: Local Server (Recommended)
```bash
# If you have Python installed:
python -m http.server 8000

# Then visit: http://localhost:8000
```

## Step 3: Upload to GitHub

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

## Step 4: Deploy to GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be live at: `https://yourusername.github.io/portfolio`

## 🎨 Customize Colors

Edit `css/variables.css`:
```css
:root {
    --primary: #ff6b35;    /* Orange - main accent */
    --secondary: #f7931e;  /* Yellow-orange - secondary accent */
    --accent: #004e89;     /* Blue - tertiary accent */
}
```

## 🐛 Common Issues

### Light mode makes text disappear
✅ **Fixed!** The text color now properly changes with theme.

### Particles not showing
Check `js/config.js` and make sure:
```javascript
features: {
    particles: true,  // Make sure this is true
}
```

### Projects not displaying
Make sure you've added projects to `js/projects.js` and they have all required fields.

### Navigation not working
Check browser console (F12) for errors. Make sure all JavaScript files are loading.

## 📱 Test On Different Devices

- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

Use browser DevTools (F12) → Device Toolbar to test responsive design.

## 🎯 Next Steps

1. ✅ Add your information
2. ✅ Add your projects
3. ✅ Test locally
4. ✅ Push to GitHub
5. ✅ Enable GitHub Pages
6. 📸 Take a screenshot for your README
7. 📱 Test on mobile
8. 🔗 Share your portfolio link!

## 💡 Pro Tips

- Use high-quality project screenshots
- Keep descriptions concise but informative
- Update regularly with new projects
- Test in multiple browsers
- Add Google Analytics if you want visitor stats
- Consider adding a blog section later

## 🆘 Need Help?

- Check the main README.md for more details
- Search for issues on GitHub
- Ask questions in the Discussions tab

---

**Ready to showcase your work? Let's go! 🚀**
