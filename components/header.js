// header.js - Navigation component for Spin A Wheel website

(function renderHeader() {
  const navLinks = [
    { href: '#wheel-app', label: 'Spin Wheel' },
    { href: '#wheel-types', label: 'Wheel Types' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#features', label: 'Features' },
    { href: '#faq', label: 'FAQ' },
  ];
  
  const header = document.getElementById('site-header');
  if (!header) return;
  
  header.innerHTML = `
    <a href="/" class="header-logo">
      <div class="logo-icon"></div>
      <span>Spin<span>A</span>Wheel</span>
    </a>
    <nav class="header-nav">
      ${navLinks.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
    </nav>
    <a href="#wheel-app" class="header-cta">Spin Now</a>
    <button class="hamburger" id="hamburger" onclick="window.toggleMobileNav && window.toggleMobileNav()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  `;
  
  const mobileNav = document.getElementById('mobile-nav');
  if (mobileNav) {
    mobileNav.innerHTML = navLinks.map(l => `<a href="${l.href}" onclick="window.closeMobileNav && window.closeMobileNav()">${l.label}</a>`).join('') +
      `<a href="#wheel-app" class="btn-primary" style="text-align:center" onclick="window.closeMobileNav && window.closeMobileNav()">Spin Now</a>`;
  }

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
})();

// Mobile navigation functions
window.toggleMobileNav = function() {
  const mobileNav = document.getElementById('mobile-nav');
  if (mobileNav) mobileNav.classList.toggle('open');
};

window.closeMobileNav = function() {
  const mobileNav = document.getElementById('mobile-nav');
  if (mobileNav) mobileNav.classList.remove('open');
};
