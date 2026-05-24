// footer.js - Footer component for Spin A Wheel website

(function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;
  
  footer.innerHTML = `
    <div class="footer-top">
      <div class="footer-brand">
        <div class="brand-logo-icon"></div>
        <div class="brand-name">SpinAWheel</div>
        <p>The free online random wheel spinner for decisions, classrooms, games, and everything in between.</p>
      </div>
      <div class="footer-col">
        <h4>Wheel Types</h4>
        <ul>
          <li><a href="/#wheel-app">Decision Wheel</a></li>
          <li><a href="/#wheel-app">Classroom Spinner</a></li>
          <li><a href="/#wheel-app">Yes / No Wheel</a></li>
          <li><a href="/#wheel-app">Mystery Wheel</a></li>
          <li><a href="/#wheel-app">Number Wheel</a></li>
          <li><a href="/#wheel-app">Color Wheel</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Use Cases</h4>
        <ul>
          <li><a href="/#use-cases">For Teachers</a></li>
          <li><a href="/#use-cases">For Games</a></li>
          <li><a href="/#use-cases">For Work</a></li>
          <li><a href="#use-cases">For Streamers</a></li>
          <li><a href="/#use-cases">For Decisions</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Pages</h4>
        <ul>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Use</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} SpinAWheel.github.io — Free Online Wheel Spinner</p>
      <div class="footer-keywords">
        <span>spin wheel</span><span>random wheel</span><span>wheel spinner</span>
        <span>classroom spinner</span><span>deciding wheel</span><span>mystery wheel</span>
      </div>
    </div>
  `;
})();
