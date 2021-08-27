'use script';

const mainNav = document.getElementById('js-menu');
const toggleNav = document.getElementById('js-navbar-toggle');

toggleNav.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});
