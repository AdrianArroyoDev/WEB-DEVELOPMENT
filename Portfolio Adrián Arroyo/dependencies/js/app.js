// Scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// Function for swapping between dark and light modes.

function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}


//Function for waiting without doing hover until  you unhover the button
const modoBoton = document.getElementById("modoBoton");

modoBoton.addEventListener("mousedown", function() {
  modoBoton.classList.add("active");
});

modoBoton.addEventListener("mouseleave", function() {
  modoBoton.classList.remove("active");
});