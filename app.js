const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".links ul");
const body = document.querySelector("body");

hamburger.addEventListener("click", openSidebar);

function openSidebar() {
  sidebar.classList.toggle("active");
  body.classList.toggle("no-scroll");
}

const scrollbarContainer = document.querySelector(".scrollbar-container");
const content = document.querySelector(".content");
new SimpleBar(content, { autoHide: true });

function checkScreenSize() {
  let mediaQuery = window.matchMedia("(min-width: 768px)");

  if (mediaQuery.matches) {
    sidebar.classList.remove("active");
    body.classList.remove("no-scroll");
  }
}

// Aggiungi un listener per rilevare i cambiamenti di dimensioni dello schermo
window.addEventListener("resize", checkScreenSize);

// Inizializza la sidebar allo stato iniziale
checkScreenSize();
