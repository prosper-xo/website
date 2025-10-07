// Hamburger menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const secondaryNav = document.querySelector(".secondary-nav");
  const body = document.body;

  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    secondaryNav.classList.toggle("nav-open");
    hamburger.classList.toggle("active");

    // Prevent body scroll when menu is open
    if (secondaryNav.classList.contains("nav-open")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  });

  // Close menu when clicking on a link or close button
  secondaryNav.addEventListener("click", function (e) {
    if (e.target.tagName === "A" || e.target === secondaryNav) {
      secondaryNav.classList.remove("nav-open");
      hamburger.classList.remove("active");
      body.style.overflow = "";
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !secondaryNav.contains(e.target)) {
      secondaryNav.classList.remove("nav-open");
      hamburger.classList.remove("active");
      body.style.overflow = "";
    }
  });

  // Close menu on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && secondaryNav.classList.contains("nav-open")) {
      secondaryNav.classList.remove("nav-open");
      hamburger.classList.remove("active");
      body.style.overflow = "";
    }
  });
});
