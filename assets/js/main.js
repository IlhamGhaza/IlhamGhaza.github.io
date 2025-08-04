/**
 * Modern Portfolio Website JavaScript
 * Enhanced with modern animations and interactivity
 */

(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);

    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Smooth scroll to element
   */
  const scrollto = (el) => {
    const element = select(el);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /**
   * Mobile nav toggle
   */
  const initMobileNav = () => {
    const mobileNavToggle = select(".mobile-nav-toggle");
    const navMenu = select(".nav-menu");
    const body = document.body;

    if (mobileNavToggle) {
      mobileNavToggle.addEventListener("click", function (e) {
        e.preventDefault();
        navMenu.classList.toggle("nav-menu-mobile");
        this.classList.toggle("bi-list");
        this.classList.toggle("bi-x");

        // Toggle body scroll when menu is open
        if (navMenu.classList.contains("nav-menu-mobile")) {
          body.style.overflow = "hidden";
        } else {
          body.style.overflow = "";
        }
      });

      // Close mobile menu when clicking on nav links
      const navLinks = select(".nav-menu a", true);
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          if (navMenu.classList.contains("nav-menu-mobile")) {
            navMenu.classList.remove("nav-menu-mobile");
            mobileNavToggle.classList.remove("bi-x");
            mobileNavToggle.classList.add("bi-list");
            body.style.overflow = "";
          }
        });
      });

      // Close menu when clicking outside
      document.addEventListener("click", (e) => {
        if (
          !navMenu.contains(e.target) &&
          !mobileNavToggle.contains(e.target)
        ) {
          if (navMenu.classList.contains("nav-menu-mobile")) {
            navMenu.classList.remove("nav-menu-mobile");
            mobileNavToggle.classList.remove("bi-x");
            mobileNavToggle.classList.add("bi-list");
            body.style.overflow = "";
          }
        }
      });
    }
  };

  /**
   * Smooth scroll on navigation links
   */
  on(
    "click",
    "#navbar .nav-link",
    function (e) {
      let section = select(this.hash);
      if (section) {
        e.preventDefault();

        let navbar = select("#navbar");
        let navlinks = select("#navbar .nav-link", true);

        navlinks.forEach((item) => {
          item.classList.remove("active");
        });

        this.classList.add("active");

        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }

        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Typing animation for hero text
   */
  const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = "";

    const timer = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  };

  /**
   * Initialize typing animation
   */
  const initTypingAnimation = () => {
    const typingElements = select(".typing-text", true);
    const texts = ["I'm a passionate ", " from Indonesia"];

    typingElements.forEach((element, index) => {
      if (index < texts.length) {
        setTimeout(() => {
          typeWriter(element, texts[index], 50);
        }, index * 1000);
      }
    });
  };

  /**
   * Parallax effect for header
   */
  const initParallax = () => {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const header = select(".modern-header");
      if (header) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    });
  };

  /**
   * Animate elements on scroll
   */
  const animateOnScroll = () => {
    const elements = select("[data-aos]", true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });
  };

  /**
   * Skills animation with progress bars
   */
  const animateSkills = () => {
    const skillBars = select(".progress-bar", true);
    skillBars.forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = "0%";
      setTimeout(() => {
        bar.style.width = width;
      }, 500);
    });
  };

  /**
   * Portfolio filter with smooth transitions and empty state handling
   */
  const initPortfolioFilter = () => {
    const portfolioContainer = select(".portfolio-grid");
    if (!portfolioContainer) return;

    // Create empty state element
    // const emptyState = document.createElement("div");
    // emptyState.className = "portfolio-empty-state";
    // emptyState.innerHTML = `
    //   <i class="ri-inbox-line"></i>
    //   <h3>No Projects Found</h3>
    //   <p>There are no projects in this category at the moment. Please check back later or view other categories.</p>
    //   <button class="btn btn-outline" onclick="document.querySelector('#portfolio-flters li[data-filter=\"*\"]').click()">
    //     <i class="ri-refresh-line"></i>
    //     View All Projects
    //   </button>
    // `;

    // Insert empty state after portfolio container
    portfolioContainer.parentNode.insertBefore(
      emptyState,
      portfolioContainer.nextSibling
    );

    // Get all portfolio items
    const portfolioItems = select(".portfolio-item", true);

    // Function to check and handle empty state
    const checkEmptyState = (filterValue) => {
      let visibleItems = 0;

      // Process all items
      portfolioItems.forEach((item) => {
        let shouldShow = false;

        if (filterValue === "*") {
          shouldShow = true;
        } else {
          const filterClass = filterValue.replace(".", "");
          // Check if item has the specific filter class
          shouldShow = item.classList.contains(filterClass);
        }

        if (shouldShow) {
          item.style.display = "block";
          item.style.opacity = "1";
          visibleItems++;
        } else {
          item.style.display = "none";
          item.style.opacity = "0";
        }
      });

      // Handle empty state
      if (visibleItems === 0) {
        portfolioContainer.style.display = "none";
        emptyState.style.display = "block";
      } else {
        emptyState.style.display = "none";
        portfolioContainer.style.display = "grid";
      }
    };

    // Filter items on button click
    const filterButtons = select("#portfolio-flters li", true);
    on(
      "click",
      "#portfolio-flters li",
      function (e) {
        e.preventDefault();

        // Update active button
        filterButtons.forEach((el) => {
          el.classList.remove("filter-active");
        });
        this.classList.add("filter-active");

        // Get filter value and apply filtering
        const filterValue = this.getAttribute("data-filter");
        checkEmptyState(filterValue);
      },
      true
    );

    // Initial check for empty state
    checkEmptyState("*");
  };

  /**
   * Portfolio lightbox
   */
  const initPortfolioLightbox = () => {
    const portfolioLightbox = GLightbox({
      selector: ".portfolio-lightbox",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });

    const portfolioDetailsLightbox = GLightbox({
      selector: ".portfolio-details-lightbox",
      width: "90%",
      height: "90vh",
    });
  };

  /**
   * Smooth reveal animations
   */
  const initRevealAnimations = () => {
    const revealElements = select(".reveal", true);

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  };

  /**
   * Hover effects for cards
   */
  const initHoverEffects = () => {
    const cards = select(
      ".service-card, .portfolio-card, .certification-item",
      true
    );

    cards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-10px) scale(1.02)";
      });

      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) scale(1)";
      });
    });
  };

  /**
   * Smooth counter animation
   */
  const animateCounters = () => {
    const counters = select("[data-count]", true);

    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-count"));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        counter.textContent = Math.floor(current);
      }, 16);
    });
  };

  /**
   * Scroll to top functionality
   */
  const initScrollToTop = () => {
    const scrollBtn = document.createElement("button");
    scrollBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    scrollBtn.className = "scroll-to-top";
    scrollBtn.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(45deg, #18d26e, #35e888);
      color: white;
      border: none;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 1000;
      font-size: 20px;
    `;

    document.body.appendChild(scrollBtn);

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        scrollBtn.style.opacity = "1";
        scrollBtn.style.visibility = "visible";
      } else {
        scrollBtn.style.opacity = "0";
        scrollBtn.style.visibility = "hidden";
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  /**
   * Particle background effect
   */
  const initParticleBackground = () => {
    const canvas = document.createElement("canvas");
    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
      opacity: 0.3;
    `;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.fillStyle = "#18d26e";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  };

  /**
   * Initialize all features
   */
  window.addEventListener("load", () => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    // Initialize Pure Counter
    new PureCounter();

    // Initialize typing animation
    setTimeout(initTypingAnimation, 1000);

    // Initialize parallax
    initParallax();

    // Initialize animations
    animateOnScroll();
    initRevealAnimations();
    initHoverEffects();
    initScrollToTop();
    initParticleBackground();

    // Initialize portfolio features
    initPortfolioFilter();
    initPortfolioLightbox();

    // Initialize mobile navigation
    initMobileNav();

    // Initialize skills animation
    const skillsSection = select(".modern-skills");
    if (skillsSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
          }
        });
      });
      observer.observe(skillsSection);
    }

    // Initialize counters
    const countersSection = select(".counters-section");
    if (countersSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      });
      observer.observe(countersSection);
    }
  });

  /**
   * Handle window resize
   */
  window.addEventListener("resize", () => {
    // Reinitialize isotope on resize
    const portfolioContainer = select(".portfolio-grid");
    if (portfolioContainer && window.Isotope) {
      const iso = Isotope.data(portfolioContainer);
      if (iso) {
        iso.layout();
      }
    }
  });

  /**
   * Smooth scroll for anchor links
   */
  on("click", 'a[href^="#"]', function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      scrollto(href);
    }
  });

  /**
   * Add loading animation
   */
  const addLoadingAnimation = () => {
    const loader = document.createElement("div");
    loader.className = "page-loader";
    loader.innerHTML = `
      <div class="loader-content">
        <div class="spinner"></div>
        <p>Loading...</p>
      </div>
    `;
    loader.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      transition: opacity 0.5s ease;
    `;

    const loaderContent = loader.querySelector(".loader-content");
    loaderContent.style.cssText = `
      text-align: center;
      color: white;
    `;

    const spinner = loader.querySelector(".spinner");
    spinner.style.cssText = `
      width: 50px;
      height: 50px;
      border: 3px solid rgba(24, 210, 110, 0.3);
      border-top: 3px solid #18d26e;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 20px;
    `;

    const spinKeyframes = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;

    const style = document.createElement("style");
    style.textContent = spinKeyframes;
    document.head.appendChild(style);

    document.body.appendChild(loader);

    // Remove loader after page loads
    window.addEventListener("load", () => {
      setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
          loader.remove();
        }, 500);
      }, 1000);
    });
  };

  // Add loading animation
  addLoadingAnimation();
})();
