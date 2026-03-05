// ========== ADVANCED INTERACTIVE EFFECTS ENGINE ==========

class ParticleEffectEngine {
  constructor() {
    this.particles = [];
    this.maxParticles = 50;
    this.colors = ["#c770f0", "#ff6b9d", "#4ecdc4", "#ffbe0b", "#00d4ff"];
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.createBackgroundParticles();
  }

  setupEventListeners() {
    // Create particles on mouse move
    document.addEventListener("mousemove", (e) => this.createParticleAtMouse(e));
    
    // Create particles on click
    document.addEventListener("click", (e) => this.burstParticles(e));
    
    // Scroll effects
    window.addEventListener("scroll", () => this.handleScrollEffects());
    
    // Resize
    window.addEventListener("resize", () => this.handleResize());
  }

  createBackgroundParticles() {
    // Create initial floating particles
    for (let i = 0; i < 15; i++) {
      this.createRandomParticle();
    }
  }

  createRandomParticle() {
    const particle = document.createElement("div");
    particle.className = "cosmic-dust";
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * 100 + "vh";
    particle.style.background = `radial-gradient(circle, ${this.colors[Math.floor(Math.random() * this.colors.length)]}, ${this.colors[Math.floor(Math.random() * this.colors.length)]})`;
    particle.style.animationDuration = 8 + Math.random() * 12 + "s";
    particle.style.animationDelay = Math.random() * 5 + "s";
    
    document.body.appendChild(particle);
    
    // Remove after animation
    setTimeout(() => {
      particle.remove();
      if (this.particles.length < this.maxParticles) {
        this.createRandomParticle();
      }
    }, (8 + Math.random() * 12) * 1000);
  }

  createParticleAtMouse(e) {
    // Only create particles occasionally (performance)
    if (Math.random() > 0.7) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = e.clientX + "px";
      particle.style.top = e.clientY + "px";
      particle.style.width = "8px";
      particle.style.height = "8px";
      particle.style.backgroundColor = this.colors[Math.floor(Math.random() * this.colors.length)];
      particle.style.borderRadius = "50%";
      particle.style.boxShadow = `0 0 10px ${particle.style.backgroundColor}`;
      
      document.body.appendChild(particle);
      
      setTimeout(() => particle.remove(), 3000);
    }
  }

  burstParticles(e) {
    // Create burst of particles on click
    const burstCount = 12;
    for (let i = 0; i < burstCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = e.clientX + "px";
      particle.style.top = e.clientY + "px";
      particle.style.width = "6px";
      particle.style.height = "6px";
      particle.style.backgroundColor = this.colors[Math.floor(Math.random() * this.colors.length)];
      particle.style.borderRadius = "50%";
      
      const angle = (i / burstCount) * Math.PI * 2;
      const velocity = 5 + Math.random() * 5;
      // tx and ty calculated for potential animation use
      // const tx = Math.cos(angle) * velocity * 20;
      // const ty = Math.sin(angle) * velocity * 20;
      
      particle.style.animation = `none`;
      particle.style.position = "fixed";
      particle.style.pointerEvents = "none";
      
      document.body.appendChild(particle);
      
      // Animate particles
      let x = e.clientX;
      let y = e.clientY;
      let vx = Math.cos(angle) * velocity;
      let vy = Math.sin(angle) * velocity;
      let opacity = 1;
      
      const animate = () => {
        x += vx;
        y += vy;
        vy += 0.1; // gravity
        opacity -= 0.02;
        
        particle.style.left = x + "px";
        particle.style.top = y + "px";
        particle.style.opacity = opacity;
        
        if (opacity > 0) {
          requestAnimationFrame(animate);
        } else {
          particle.remove();
        }
      };
      
      animate();
    }
  }

  handleScrollEffects() {
    // Trigger scroll animations on elements
    const scrollElements = document.querySelectorAll(".scroll-reveal, .fade-in-scale, .slide-up");
    
    scrollElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("active");
      }
    });

    // Parallax effect for elements with parallax-element class
    this.updateParallax();
  }

  updateParallax() {
    const parallaxElements = document.querySelectorAll(".parallax-element");
    const scrollPosition = window.scrollY;
    
    parallaxElements.forEach((element) => {
      const offset = scrollPosition * 0.5;
      element.style.transform = `translateY(${offset}px)`;
    });
  }

  handleResize() {
    // Handle responsive adjustments if needed
    // Viewport dimensions available if needed for future resize handling
    // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    // const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  }

  // Add glow effect to elements on hover
  addGlowEffect(element) {
    element.addEventListener("mouseenter", () => {
      element.style.boxShadow = `0 0 20px ${this.colors[Math.floor(Math.random() * this.colors.length)]}`;
    });
    
    element.addEventListener("mouseleave", () => {
      element.style.boxShadow = "";
    });
  }

  // Animate text with stagger effect
  animateTextStagger(element) {
    const text = element.innerText;
    element.innerHTML = text.split("").map(char => 
      `<span style="display: inline-block; animation: slide-up 0.5s ease forwards;">${char}</span>`
    ).join("");
    
    const spans = element.querySelectorAll("span");
    spans.forEach((span, index) => {
      span.style.animationDelay = (index * 0.05) + "s";
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    window.particleEngine = new ParticleEffectEngine();
  });
} else {
  window.particleEngine = new ParticleEffectEngine();
}

// ========== SMOOTH SCROLL BEHAVIOR ==========
document.documentElement.style.scrollBehavior = "smooth";

// ========== CUSTOM CURSOR EFFECT ==========
class CursorTracker {
  constructor() {
    this.createCustomCursor();
    this.setupTracker();
  }

  createCustomCursor() {
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      border: 2px solid #c770f0;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      box-shadow: 0 0 10px #c770f0;
      display: none;
    `;
    document.body.appendChild(cursor);

    const cursorTrail = document.createElement("div");
    cursorTrail.id = "custom-cursor-trail";
    cursorTrail.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background: radial-gradient(circle, #ff6b9d, #c770f0);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      display: none;
    `;
    document.body.appendChild(cursorTrail);
  }

  setupTracker() {
    const cursor = document.getElementById("custom-cursor");
    const trail = document.getElementById("custom-cursor-trail");
    
    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.display = "block";
      cursor.style.left = mouseX - 10 + "px";
      cursor.style.top = mouseY - 10 + "px";

      // Trail follows with delay
      if (!trail.style.display || trail.style.display === "none") {
        trail.style.display = "block";
      }
      
      trailX += (mouseX - trailX) * 0.3;
      trailY += (mouseY - trailY) * 0.3;
      
      trail.style.left = trailX - 5 + "px";
      trail.style.top = trailY - 5 + "px";
    });

    document.addEventListener("mouseleave", () => {
      cursor.style.display = "none";
      trail.style.display = "none";
    });

    // Hide custom cursor on clickable elements
    document.addEventListener("mouseover", (e) => {
      if (e.target.matches("button, a, input, [role='button']")) {
        cursor.style.borderColor = "#ff6b9d";
        cursor.style.boxShadow = "0 0 15px #ff6b9d";
      } else {
        cursor.style.borderColor = "#c770f0";
        cursor.style.boxShadow = "0 0 10px #c770f0";
      }
    });
  }
}

// Initialize cursor tracker
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    new CursorTracker();
  });
} else {
  new CursorTracker();
}

// ========== MACRO PARALLAX EFFECT ==========
class MacroParallax {
  constructor() {
    this.setupParallax();
  }

  setupParallax() {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll("[data-parallax]");

      parallaxElements.forEach((element) => {
        const speed = element.dataset.parallax || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });
  }
}

// Initialize macro parallax
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    new MacroParallax();
  });
} else {
  new MacroParallax();
}

// ========== INTERSECTION OBSERVER FOR SCROLL TRIGGERS ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      entry.target.style.animation = entry.target.dataset.animation || "fade-in-scale 0.8s ease forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with animation attributes
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-animation]").forEach((element) => {
    observer.observe(element);
  });
});

// ========== MOUSE TRACKING FOR INTERACTIVE ELEMENTS =========
class InteractiveTracker {
  constructor() {
    this.setupTracking();
  }

  setupTracking() {
    const interactiveElements = document.querySelectorAll("[data-interactive]");
    
    interactiveElements.forEach((element) => {
      element.addEventListener("mousemove", (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        element.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(199, 112, 240, 0.3), transparent)`;
      });

      element.addEventListener("mouseleave", () => {
        element.style.background = "";
      });
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    new InteractiveTracker();
  });
} else {
  new InteractiveTracker();
}

export { ParticleEffectEngine, CursorTracker, MacroParallax, InteractiveTracker };
