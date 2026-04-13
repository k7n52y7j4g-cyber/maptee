// ============================================
// Navigation Toggle (Burger Menu)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  // Set year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Create burger menu button if it doesn't exist
  const header = document.querySelector('.header-inner');
  if (!document.querySelector('.nav-toggle')) {
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '☰';
    navToggle.id = 'navToggle';
    navToggle.onclick = toggleNav;
    header.appendChild(navToggle);
  }
});

function toggleNav() {
  const nav = document.getElementById('primary-nav');
  const toggle = document.getElementById('navToggle');
  
  if (nav.classList.contains('open')) {
    nav.classList.remove('open');
    toggle.classList.remove('active');
  } else {
    nav.classList.add('open');
    toggle.classList.add('active');
  }
}

// Close nav when a link is clicked
document.addEventListener('click', function(event) {
  const nav = document.getElementById('primary-nav');
  const toggle = document.getElementById('navToggle');
  
  if (nav && nav.contains(event.target) && event.target.tagName === 'A') {
    nav.classList.remove('open');
    if (toggle) toggle.classList.remove('active');
  }
  
  // Close nav if clicking outside
  if (!event.target.closest('.site-header') && nav && nav.classList.contains('open')) {
    nav.classList.remove('open');
    if (toggle) toggle.classList.remove('active');
  }
});

// ============================================
// Smooth Scrolling for Navigation Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// Responsive adjustments
// ============================================
window.addEventListener('resize', function() {
  const nav = document.getElementById('primary-nav');
  const toggle = document.getElementById('navToggle');
  
  if (window.innerWidth > 768) {
    if (nav) nav.classList.remove('open');
    if (toggle) toggle.classList.remove('active');
  }
});

// ============================================
// Goal Modal Functions
// ============================================
function openGoalModal(type, title, description, features) {
  const modal = document.getElementById('goalModal');
  const goalIcon = document.getElementById('goalIcon');
  const goalTitle = document.getElementById('goalTitle');
  const goalDesc = document.getElementById('goalDescription');
  const goalList = document.getElementById('goalList');
  
  // Set icon based on type
  const icons = {
    'تسويقية': '📊',
    'ريادية': '🚀',
    'Personal Branding': '👤'
  };
  
  goalIcon.textContent = icons[type] || '✨';
  goalTitle.textContent = title;
  goalDesc.textContent = description;
  
  // Clear and populate list
  goalList.innerHTML = '';
  features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    goalList.appendChild(li);
  });
  
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeGoalModal() {
  const modal = document.getElementById('goalModal');
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
}

// ============================================
// Team Modal Functions
// ============================================
function openTeamModal(element) {
  const modal = document.getElementById('teamModal');
  const img = element.querySelector('img');
  const name = element.querySelector('h3').textContent;
  const role = element.querySelector('.role').textContent;
  const bio = element.querySelector('.bio').textContent;
  
  document.getElementById('teamModalImg').src = img.src;
  document.getElementById('teamModalImg').alt = img.alt;
  document.getElementById('teamModalName').textContent = name;
  document.getElementById('teamModalRole').textContent = role;
  document.getElementById('teamModalBio').textContent = bio;
  
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeTeamModal() {
  const modal = document.getElementById('teamModal');
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
  const goalModal = document.getElementById('goalModal');
  const teamModal = document.getElementById('teamModal');
  
  if (event.target === goalModal) {
    closeGoalModal();
  }
  if (event.target === teamModal) {
    closeTeamModal();
  }
});

// Close modals with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeGoalModal();
    closeTeamModal();
  }
});
