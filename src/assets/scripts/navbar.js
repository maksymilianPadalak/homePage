//mobile menu handler

const mobileMenuIcon = document.querySelector(".mobile-menu-icon-wrapper");
const closeMobileMenuButton = document.querySelector(
  ".close-mobile-menu-wrapper"
);

mobileMenuIcon.addEventListener("click", () => {
  gsap.to(".mobile-menu-wrapper", {
    duration: 1,
    display: "grid",
    y: 300,
  });
  gsap.to(mobileMenuIcon, {
    display: "none",
    opacity: 0
  });
});

closeMobileMenuButton.addEventListener("click", () => {
  gsap.to(".mobile-menu-wrapper", {
    duration: 1,
    display: "none",
    y: -300,
  });
  gsap.to(mobileMenuIcon, {
    display: "block",
    opacity: 1
  });
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
const navbar = document.getElementById("navbar");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
