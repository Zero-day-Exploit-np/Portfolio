// Custom Cursor - Optimized for Smooth Performance
class CustomCursor {
  constructor() {
    this.cursor = document.querySelector(".cursor");
    this.follower = document.querySelector(".cursor-follower");

    // Position tracking
    this.cursorPos = { x: 0, y: 0 };
    this.followerPos = { x: 0, y: 0 };
    this.targetPos = { x: 0, y: 0 };

    // 🔒 hover sound control
    this.hoverSoundLocked = false;

    this.init();
  }

  init() {
    // Check if device supports hover (not touch device)
    if (window.matchMedia("(hover: hover)").matches) {
      this.addEventListeners();
      this.startAnimation();
    }
  }

  addEventListeners() {
    // Mouse move - only update target position
    document.addEventListener("mousemove", (e) => {
      this.targetPos.x = e.clientX;
      this.targetPos.y = e.clientY;
    });

    // Expand cursor on interactive elements
    const interactiveElements = document.querySelectorAll(
      "button, a, .project-card, .sphere-item, .indicator-dot, .flip-btn, input, textarea",
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        this.expandCursor();
        this.playHoverSound(); // 🔊 optimized sound
      });

      el.addEventListener("mouseleave", () => this.shrinkCursor());
    });
  }

  startAnimation() {
    // Use requestAnimationFrame for smooth 60fps animation
    const animate = () => {
      // Main cursor follows mouse instantly
      this.cursorPos.x = this.targetPos.x;
      this.cursorPos.y = this.targetPos.y;

      // Follower cursor with smooth easing
      this.followerPos.x += (this.targetPos.x - this.followerPos.x) * 0.15;
      this.followerPos.y += (this.targetPos.y - this.followerPos.y) * 0.15;

      // Apply transforms (more performant than left/top)
      this.cursor.style.transform = `translate(${this.cursorPos.x}px, ${this.cursorPos.y}px)`;
      this.follower.style.transform = `translate(${this.followerPos.x}px, ${this.followerPos.y}px)`;

      requestAnimationFrame(animate);
    };

    animate();
  }

  expandCursor() {
    this.cursor.classList.add("expand");
  }

  shrinkCursor() {
    this.cursor.classList.remove("expand");
  }

  // 🔊 Hover sound with throttle
  playHoverSound() {
    if (this.hoverSoundLocked) return;

    if (window.app) window.app.playSound("hover");

    this.hoverSoundLocked = true;

    // ⏱ Adjust delay for faster/slower repeat
    setTimeout(() => {
      this.hoverSoundLocked = false;
    }, 120);
  }
}

// Initialize custom cursor
window.addEventListener("load", () => {
  new CustomCursor();
});
