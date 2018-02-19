const navToggle = document.getElementById('toggle-nav');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', function() {
  nav.classList.toggle('nav-open');
});
