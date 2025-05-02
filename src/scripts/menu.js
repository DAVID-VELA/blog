document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("expanded");
});
// obtener main y cerrar el menu
document.querySelector("main").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.remove("expanded");
});
