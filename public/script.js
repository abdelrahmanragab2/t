const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menuIcon");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  if (menu.classList.contains("hidden")) {
    menuIcon.classList.replace("fa-x", "fa-bars");
  } else {
    menuIcon.classList.replace("fa-bars", "fa-x");
  }
});

menu.addEventListener("click", () => {
  menu.classList.add("hidden");
  menuIcon.classList.remove("fa-x");
  menuIcon.classList.add("fa-bars");
});
