// Main Application Controller
class App {
  constructor() {
    this.themeToggle = document.getElementById("themeToggle");
    this.soundToggle = document.getElementById("soundToggle");
    this.loadingScreen = document.querySelector(".loading-screen");
    this.soundEnabled = true;
    this.init();
  }

  init() {
    this.initTheme();
    this.initSound();
    this.initLoading();
  }

  initTheme() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light-mode");
    }

    // Theme toggle click handler
    this.themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");

      // Save preference
      const theme = document.body.classList.contains("light-mode")
        ? "light"
        : "dark";
      localStorage.setItem("theme", theme);

      // Redraw skills chart with new colors
      if (window.skillsChart) {
        setTimeout(() => window.skillsChart.draw(), 100);
      }
    });
  }

  initSound() {
    this.sounds = {
      click: new Audio("assets/sounds/click.mp3"),
      hover: new Audio("assets/sounds/hover.mp3"),
      transition: new Audio("assets/sounds/transition.mp3"),
    };
    this.soundToggle.addEventListener("click", () => {
      this.soundEnabled = !this.soundEnabled;
      this.soundToggle.classList.toggle("muted");
      this.soundToggle.textContent = this.soundEnabled ? "🔊" : "🔇";

      // Here you would control actual sound effects if implemented
      if (this.soundEnabled) {
        this.playSound("click");
      }
    });
  }
  playSound(soundName) {
    if (this.soundEnabled && this.sounds[soundName]) {
      this.sounds[soundName].currentTime = 0;
      this.sounds[soundName].play();
    }
  }

  initLoading() {
    window.addEventListener("load", () => {
      setTimeout(() => {
        this.loadingScreen.classList.add("hidden");
      }, 2500);
    });
  }
}

// Utility Functions
const utils = {
  // Smooth scroll to element
  scrollToElement(element, offset = 0) {
    const top = element.offsetTop - offset;
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  },

  // Get random number in range
  random(min, max) {
    return Math.random() * (max - min) + min;
  },

  // Debounce function
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Check if element is in viewport
  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },
};

// Initialize app
window.addEventListener("DOMContentLoaded", () => {
  window.app = new App();
});

// Export utilities
window.utils = utils;

// Console message
console.log(
  "%c🚀 Developer Portfolio",
  "font-size: 24px; font-weight: bold; color: #ff6b35;",
);
console.log(
  "%cWant to see the code? Check out the GitHub repo!",
  "font-size: 14px; color: #f7931e;",
);
console.log(
  "%chttps://github.com/yourusername/portfolio",
  "font-size: 12px; color: #004e89;",
);
// PWA Service Worker Registration
// Add this to the bottom of js/main.js

// Register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log(
          "✅ Service Worker registered successfully:",
          registration.scope,
        );

        // Check for updates
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;

          newWorker.addEventListener("statechange", () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              // New service worker available, show update notification
              showUpdateNotification();
            }
          });
        });
      })
      .catch((error) => {
        console.log("❌ Service Worker registration failed:", error);
      });
  });
}

// Show update notification
function showUpdateNotification() {
  const updateBanner = document.createElement("div");
  updateBanner.className = "update-banner";
  updateBanner.innerHTML = `
    <div class="update-content">
      <span>🎉 New version available!</span>
      <button onclick="updateApp()" class="update-btn">Update Now</button>
      <button onclick="this.parentElement.parentElement.remove()" class="dismiss-btn">×</button>
    </div>
  `;
  document.body.appendChild(updateBanner);
}

// Update app
function updateApp() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistration().then((registration) => {
      if (registration && registration.waiting) {
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
        window.location.reload();
      }
    });
  }
}

// Install prompt
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent the mini-infobar from appearing
  e.preventDefault();
  deferredPrompt = e;

  // Show install button
  showInstallButton();
});

function showInstallButton() {
  const installBanner = document.createElement("div");
  installBanner.className = "install-banner";
  installBanner.innerHTML = `
    <div class="install-content">
      <span>📱 Install this app for a better experience!</span>
      <button onclick="installApp()" class="install-btn">Install</button>
      <button onclick="this.parentElement.parentElement.remove()" class="dismiss-btn">×</button>
    </div>
  `;
  document.body.appendChild(installBanner);
}

function installApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("✅ User accepted the install prompt");
      }
      deferredPrompt = null;
      document.querySelector(".install-banner")?.remove();
    });
  }
}

// Detect if app is installed
window.addEventListener("appinstalled", () => {
  console.log("✅ App installed successfully");
  document.querySelector(".install-banner")?.remove();
});

// Detect if running as PWA
function isPWA() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

if (isPWA()) {
  console.log("🚀 Running as PWA");
  document.body.classList.add("pwa-mode");
}
