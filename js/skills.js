// Skills Radar Chart
class SkillsChart {
    constructor() {
        this.canvas = document.getElementById('skillsCanvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.skills = CONFIG.skills;
        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Initial draw
        setTimeout(() => this.draw(), 100);
    }

    resize() {
        const container = this.canvas.parentElement;
        this.canvas.width = container.offsetWidth;
        this.canvas.height = container.offsetHeight;
    }

    draw() {
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const maxRadius = Math.min(centerX, centerY) - 100;
        
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        const angleStep = (Math.PI * 2) / this.skills.length;
        
        // Draw grid circles
        this.drawGrid(centerX, centerY, maxRadius);
        
        // Draw axes
        this.drawAxes(centerX, centerY, maxRadius, angleStep);
        
        // Draw skill polygon
        this.drawPolygon(centerX, centerY, maxRadius, angleStep);
        
        // Draw skill points and labels
        this.drawPointsAndLabels(centerX, centerY, maxRadius, angleStep);
    }

    drawGrid(centerX, centerY, maxRadius) {
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        this.ctx.lineWidth = 1;
        
        for (let i = 1; i <= 5; i++) {
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, (maxRadius / 5) * i, 0, Math.PI * 2);
            this.ctx.stroke();
        }
    }

    drawAxes(centerX, centerY, maxRadius, angleStep) {
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        
        this.skills.forEach((_, index) => {
            const angle = angleStep * index - Math.PI / 2;
            const x = centerX + Math.cos(angle) * maxRadius;
            const y = centerY + Math.sin(angle) * maxRadius;
            
            this.ctx.beginPath();
            this.ctx.moveTo(centerX, centerY);
            this.ctx.lineTo(x, y);
            this.ctx.stroke();
        });
    }

    drawPolygon(centerX, centerY, maxRadius, angleStep) {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'rgba(255, 107, 53, 0.3)';
        this.ctx.strokeStyle = '#ff6b35';
        this.ctx.lineWidth = 3;
        
        this.skills.forEach((skill, index) => {
            const angle = angleStep * index - Math.PI / 2;
            const radius = maxRadius * skill.value;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            
            if (index === 0) {
                this.ctx.moveTo(x, y);
            } else {
                this.ctx.lineTo(x, y);
            }
        });
        
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
    }

    drawPointsAndLabels(centerX, centerY, maxRadius, angleStep) {
        this.skills.forEach((skill, index) => {
            const angle = angleStep * index - Math.PI / 2;
            const radius = maxRadius * skill.value;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            
            // Draw point
            this.ctx.beginPath();
            this.ctx.fillStyle = '#ff6b35';
            this.ctx.arc(x, y, 6, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Draw label
            const labelRadius = maxRadius + 40;
            const labelX = centerX + Math.cos(angle) * labelRadius;
            const labelY = centerY + Math.sin(angle) * labelRadius;
            
            this.ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text-primary');
            this.ctx.font = '20px "Bebas Neue"';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(skill.name, labelX, labelY);
            
            // Draw percentage
            this.ctx.font = '14px "Archivo"';
            this.ctx.fillStyle = '#ff6b35';
            this.ctx.fillText(Math.round(skill.value * 100) + '%', labelX, labelY + 20);
        });
    }
}

// Initialize skills chart
window.addEventListener('load', () => {
    window.skillsChart = new SkillsChart();
});
