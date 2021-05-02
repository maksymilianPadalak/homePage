//mobile menu handler

const mobileMenuIcon = document.querySelector(".mobile-menu-icon-wrapper");
const mobileMenu = document.querySelector('.mobile-menu-wrapper')
const closeMobileMenuButton = document.querySelector(
  ".close-mobile-menu-wrapper"
);

mobileMenuIcon.addEventListener("click", () => {
  mobileMenu.style.top = 0
  mobileMenu.style.visibility = ('visible')
  mobileMenuIcon.style.visibility = ('hidden')
  mobileMenuIcon.style.opacity = 0
});

closeMobileMenuButton.addEventListener("click", () => {
  mobileMenu.style.top = '-300px'
  mobileMenuIcon.style.visibility = ('visible')
  mobileMenuIcon.style.opacity = 1
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

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);