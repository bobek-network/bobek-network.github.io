// Mobile hamburger menu toggle
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-center');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Auto-close mobile menu on link click
document.querySelectorAll('.nav-center a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
});


// Filter portfolio items
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');


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


/*  Dark Mode Toggle
  This script toggles the dark mode theme on the website.
  It uses local storage to remember the user's preference.
*/

const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = darkModeToggle.querySelector('i');
const body = document.body;

// Function to update icon color
function updateIcon() {
  if (body.classList.contains('dark-theme')) {
    darkModeIcon.classList.remove('fa-moon');
    darkModeIcon.classList.add('fa-sun');
  } else {
    darkModeIcon.classList.remove('fa-sun');
    darkModeIcon.classList.add('fa-moon');
  }
}

// Load saved theme from local storage
if (localStorage.getItem('dark-theme') === 'enabled') {
  body.classList.add('dark-theme');
}

updateIcon(); // initial icon update

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('dark-theme', 'enabled');
  } else {
    localStorage.setItem('dark-theme', 'disabled');
  }

  updateIcon();
});

// Portfolio video hover play functionality (Desktop)
const portfolioVideos = document.querySelectorAll('.portfolio-video');

portfolioVideos.forEach(video => {
  // Desktop hover play
  video.parentElement.addEventListener('mouseenter', () => {
    if(window.innerWidth > 768) {
      video.play();
    }
  });

  video.parentElement.addEventListener('mouseleave', () => {
    if(window.innerWidth > 768) {
      video.pause();
      video.currentTime = 0; // reset video to start
    }
  });

  // Mobile click-to-play/pause functionality
  video.parentElement.addEventListener('click', () => {
    if(window.innerWidth <= 768) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const loadMoreBtn = document.getElementById("load-more-btn");
  const portfolioItems = Array.from(document.querySelectorAll(".portfolio-item"));
  const filterButtons = document.querySelectorAll(".filter-btn");
  
  let itemsPerRow = window.innerWidth <= 768 ? 1 : 3;
  let visibleRows = 2;
  let currentFilter = 'all';
  

  // Initial setup
  function showItems() {
    let shownCount = 0;
  
    const filteredItems = portfolioItems.filter(item =>
      currentFilter === 'all' || item.dataset.category === currentFilter
    );
  
    portfolioItems.forEach(item => {
      const shouldShow = filteredItems.includes(item) && shownCount < itemsPerRow * visibleRows;
  
      if (shouldShow) {
        item.classList.add("visible");
        shownCount++;
      } else {
        item.classList.remove("visible");
      }
    });
  
    loadMoreBtn.style.display = shownCount >= filteredItems.length ? "none" : "inline-block";
  }
  
  
  

  // Filter buttons handler
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  
      currentFilter = button.getAttribute('data-filter');
      visibleRows = 2;
      showItems();
    });
  });
  
  loadMoreBtn.addEventListener("click", () => {
    visibleRows++;
    showItems();
  });
  
  window.addEventListener("resize", () => {
    itemsPerRow = window.innerWidth <= 768 ? 1 : 3;
    showItems();
  });
  
  showItems();
});