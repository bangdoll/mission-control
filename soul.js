let coreColor;
let particles = [];
let pulse = 0;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('soul-container');
    coreColor = color(0, 255, 255); // Cyan default
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    clear(); // Transparent background

    // Smooth pulse animation
    pulse = sin(frameCount * 0.05) * 5;

    // Core Orb
    noStroke();
    fill(red(coreColor), green(coreColor), blue(coreColor), 100);
    ellipse(width / 2, height / 2, 60 + pulse, 60 + pulse);

    fill(red(coreColor), green(coreColor), blue(coreColor), 200);
    ellipse(width / 2, height / 2, 30, 30);

    // Particles
    particles.forEach(p => {
        p.update();
        p.display();
    });
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = width / 2;
        this.y = height / 2;
        this.angle = random(TWO_PI);
        this.speed = random(0.5, 2);
        this.life = 255;
        this.size = random(2, 5);
        this.offset = random(100);
    }

    update() {
        let n = noise(this.x * 0.01, this.y * 0.01, frameCount * 0.01 + this.offset);
        this.angle += map(n, 0, 1, -0.1, 0.1);

        this.x += cos(this.angle) * this.speed;
        this.y += sin(this.angle) * this.speed;

        this.life -= 2;
        if (this.life <= 0 || this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
            this.reset();
        }
    }

    display() {
        noStroke();
        fill(red(coreColor), green(coreColor), blue(coreColor), this.life);
        ellipse(this.x, this.y, this.size, this.size);
    }
}

// Function to update Soul state from main script
function updateSoulState(state) {
    if (state === 'thinking') {
        coreColor = color(255, 200, 0); // Orange
    } else if (state === 'evolving') {
        coreColor = color(100, 255, 100); // Green
    } else if (state === 'error') {
        coreColor = color(255, 50, 50); // Red
    } else {
        coreColor = color(0, 255, 255); // Cyan (Idle)
    }
}
