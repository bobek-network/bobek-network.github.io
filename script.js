// Mobile hamburger menu toggle
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-center');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Filter portfolio items
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    // Remove 'active' class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    portfolioItems.forEach(item => {
      const category = item.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Back-to-top button visibility
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

// Smooth scroll to top
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
