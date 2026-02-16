# Assets Guide

## 📁 Folder Structure

```
assets/
├── images/
│   ├── favicon.ico
│   ├── icon-192.png
│   ├── icon-512.png
│   └── projects/
│       ├── project1.jpg
│       ├── project2.jpg
│       └── ...
├── sounds/
│   ├── click.mp3
│   ├── hover.mp3
│   └── transition.mp3
└── resume.pdf
```

## 🎨 Images You Need

### 1. Favicon (Required)
- **File:** `favicon.ico`
- **Size:** 16x16 or 32x32 pixels
- **Tool:** https://favicon.io

### 2. PWA Icons (Required)
- **Files:** `icon-72.png` through `icon-512.png`
- **Sizes:** 72, 96, 128, 144, 152, 192, 384, 512 pixels
- **Easy way:** Upload one 512x512 image to https://realfavicongenerator.net
- It generates all sizes automatically!

### 3. Project Screenshots (Optional)
- **Folder:** `images/projects/`
- **Format:** JPG or PNG
- **Size:** 1200x800 pixels recommended
- **Names:** project1.jpg, project2.jpg, etc.

### 4. Resume (Optional)
- **File:** `resume.pdf`
- **Location:** Root of assets folder

## 🔊 Sound Files (Optional)

If you want sound effects:

### Where to Get Sounds:
- https://freesound.org (best for UI sounds)
- https://zapsplat.com
- https://mixkit.co

### What You Need:
1. **click.mp3** - Short "pop" or "tick" (0.1-0.2 sec)
2. **hover.mp3** - Subtle "whoosh" (0.05-0.1 sec)
3. **transition.mp3** - Smooth slide (0.3-0.5 sec)

### Tips:
- Keep files small (under 50KB each)
- Use MP3 format
- Low volume is better

## 🎯 Quick Setup

### Step 1: Icons (5 minutes)
1. Create a 512x512 PNG of your logo/initial
2. Go to https://realfavicongenerator.net
3. Upload your image
4. Download the package
5. Copy all icons to `assets/images/`

### Step 2: Projects (Optional)
1. Take screenshots of your projects
2. Resize to 1200x800
3. Save as `project1.jpg`, `project2.jpg`, etc.
4. Place in `assets/images/projects/`

### Step 3: Resume (Optional)
1. Export your resume as PDF
2. Name it `resume.pdf`
3. Place in `assets/` folder

### Step 4: Sounds (Optional)
1. Download free UI sounds
2. Convert to MP3 if needed
3. Place in `assets/sounds/`

## ✅ Done!

Your assets are ready. Now update the file paths in your code if needed!
