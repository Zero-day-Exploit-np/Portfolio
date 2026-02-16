// Navigation System
class Navigation {
    constructor() {
        this.scrollContainer = document.getElementById('scrollContainer');
        this.scenes = document.querySelectorAll('.scene');
        this.indicators = document.querySelectorAll('.indicator-dot');
        this.progressBar = document.getElementById('progressBar');
        this.currentScene = 0;
        this.init();
    }

    init() {
        this.addScrollListener();
        this.addNavigationListeners();
        this.addKeyboardNavigation();
        this.addParallax();
    }

    addScrollListener() {
        this.scrollContainer.addEventListener('scroll', () => {
            this.updateProgress();
            this.updateCurrentScene();
        });
    }

    updateProgress() {
        const scrollWidth = this.scrollContainer.scrollWidth - this.scrollContainer.clientWidth;
        const scrolled = this.scrollContainer.scrollLeft;
        const progress = (scrolled / scrollWidth) * 100;
        this.progressBar.style.width = progress + '%';
    }

    updateCurrentScene() {
        const scrollPos = this.scrollContainer.scrollLeft + this.scrollContainer.clientWidth / 2;
        
        this.scenes.forEach((scene, index) => {
            const sceneLeft = scene.offsetLeft;
            const sceneRight = sceneLeft + scene.offsetWidth;
            
            if (scrollPos >= sceneLeft && scrollPos < sceneRight) {
                if (this.currentScene !== index) {
                    this.currentScene = index;
                    this.updateIndicators();
                    
                    // Trigger skills chart animation when visible
                    if (index === 3 && window.skillsChart) {
                        setTimeout(() => window.skillsChart.draw(), 300);
                    }
                }
            }
        });
    }

    updateIndicators() {
        this.indicators.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentScene);
        });
    }

    addNavigationListeners() {
        // Sphere navigation
        document.querySelectorAll('.sphere-item').forEach(item => {
            item.addEventListener('click', () => {
                const sceneIndex = parseInt(item.dataset.scene);
                this.scrollToScene(sceneIndex);
            });
        });

        // Indicator navigation
        this.indicators.forEach(dot => {
            dot.addEventListener('click', () => {
                const sceneIndex = parseInt(dot.dataset.scene);
                this.scrollToScene(sceneIndex);
            });
        });
    }

    addKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                this.scrollToScene((this.currentScene + 1) % this.scenes.length);
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                this.scrollToScene((this.currentScene - 1 + this.scenes.length) % this.scenes.length);
            }
        });
    }

    addParallax() {
        this.scrollContainer.addEventListener('scroll', () => {
            const scrollLeft = this.scrollContainer.scrollLeft;
            document.querySelectorAll('.parallax-bg').forEach(el => {
                const speed = 0.5;
                el.style.transform = `translateX(${scrollLeft * speed}px)`;
            });
        });
    }

    scrollToScene(index) {
        if (index < 0 || index >= this.scenes.length) return;
        
        const targetScene = this.scenes[index];
        this.scrollContainer.scrollTo({
            left: targetScene.offsetLeft,
            behavior: 'smooth'
        });
        
        this.currentScene = index;
        this.updateIndicators();
    }
}

// Card flip function
function flipCard() {
    document.getElementById('cardContainer').classList.toggle('flipped');
}

// Global scroll to scene function for CTA buttons
function scrollToScene(index) {
    if (window.navigation) {
        window.navigation.scrollToScene(index);
    }
}

// Initialize navigation
window.addEventListener('load', () => {
    window.navigation = new Navigation();
});
