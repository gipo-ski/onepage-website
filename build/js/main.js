const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerBtn.classList.toggle("toggle-btn");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};
document.addEventListener("DOMContentLoaded", initApp);

// copyright year dynamic update script:
// Get the current date
let today = new Date();
// Get the current year let
currentYear = today.getFullYear();
// Select the span element by its id let
dateElement = document.getElementById("year");
// Set the content of the span element to current year
dateElement.innerHTML = currentYear;
