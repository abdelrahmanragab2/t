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

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateCounters() {
  const counters = [
    { id: "counter1", end: 100, duration: 2000 },
    { id: "counter2", end: 92, duration: 2000 },
    { id: "counter3", end: 4.9, duration: 2000 },
  ];

  counters.forEach((counter) => {
    const element = document.getElementById(counter.id);
    let start = 0;
    const increment = counter.end / (counter.duration / 10);
    const interval = setInterval(() => {
      start += increment;
      if (start >= counter.end) {
        element.textContent = counter.end;
        clearInterval(interval);
      } else {
        element.textContent = Math.floor(start);
      }
    }, 10);
  });
}

document.addEventListener("scroll", function onScroll() {
  const section = document.querySelector(".stats");
  if (isElementInViewport(section)) {
    animateCounters();
    document.removeEventListener("scroll", onScroll);
  }
});
