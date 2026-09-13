document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});

document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => document.getElementById('nav-links').classList.remove('open'));
});
