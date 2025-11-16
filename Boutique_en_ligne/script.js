// ==================== MISE À JOUR DE L'ANNÉE DANS LE FOOTER ====================

// On récupère l'élément <span id="year"> dans le footer
const yearSpan = document.getElementById("year");

// Si l'élément existe, on y met l'année courante
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ==================== GESTION DU MENU BURGER (NAVIGATION MOBILE) ====================

// On récupère le bouton du menu burger et le header
const navToggle = document.querySelector(".nav-toggle");
const header = document.querySelector(".site-header");

// Si le bouton existe, on ajoute un écouteur de clic
if (navToggle && header) {
  navToggle.addEventListener("click", () => {
    // On ajoute / enlève la classe .nav-open sur le header
    header.classList.toggle("nav-open");
  });
}
