// Récupération du bouton hamburger et du menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('header nav ul');

// Au clic sur le hamburger, bascule la classe 'show' sur le menu
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Optionnel : fermer le menu si on clique sur un lien (pratique sur mobile)
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});