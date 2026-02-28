document.addEventListener('DOMContentLoaded', function() {
  // Set footer year
  var yearElements = document.querySelectorAll('#year, #year-about, #year-services, #year-projects, #year-contact');
  var currentYear = new Date().getFullYear();
  yearElements.forEach(function(el) {
    el.textContent = currentYear;
  });

  // Contact form handler
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you! Your request has been received. We will contact you shortly.');
      form.reset();
    });
  }

  // Mobile navigation toggle
  var mobileToggle = document.getElementById('mobile-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
      var nav = document.querySelector('.nav');
      if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'block';
      } else {
        nav.style.display = 'none';
      }
    });
  }

  // Parallax effect for hero section
  var hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', function() {
      var scrollPosition = window.pageYOffset;
      hero.style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
    });
  }

  // Fade-in animation on scroll for service cards and paragraphs
  var observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all service cards
  var serviceCards = document.querySelectorAll('.service-card, .service-paragraph');
  serviceCards.forEach(function(card, index) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    card.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    card.style.transitionDelay = (index * 0.1) + 's';
    observer.observe(card);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Header scroll effect - add shadow on scroll
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 50) {
        header.style.boxShadow = '0 2px 16px rgba(0, 0, 0, 0.3)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }
});
