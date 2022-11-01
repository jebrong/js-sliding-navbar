const menuBar = document.querySelector("#nav-icon");
const navBar = document.querySelector(".navbar");

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("open");
  navBar.classList.toggle("open");
  navBar.classList.toggle("close");
});
