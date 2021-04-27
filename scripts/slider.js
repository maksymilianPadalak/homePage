const firstDot = document.querySelector(".dot");
const secondDot = firstDot.nextElementSibling;
const thirdDot = secondDot.nextElementSibling;
const fourthDot = thirdDot.nextElementSibling;

firstDot.style.backgroundColor = "#ffcd19";

// const btn = document.querySelector('button')

// btn.addEventListener('click', () => {
//   gsap.to('.first-slider-image', { duration: 1, opacity: 0, display: 'none'});
//   gsap.to('.second-slider-image', { duration: 1, opacity: 1, display: 'block'});
//   firstDot.style.backgroundColor = 'white'
//   secondDot.style.backgroundColor = '#ffcd19'
// })

const mobileMenuIcon = document.querySelector(".mobile-menu-icon-wrapper");
let mobileMenuStatus = "closed";

mobileMenuIcon.addEventListener("click", () => {
  if ((mobileMenuStatus === "closed")) {
    gsap.to(".mobile-menu-wrapper", {
      duration: 1,
      opacity: 1,
      x: 20,
      display: "flex",
    });
    mobileMenuStatus = "opened";
  } else {
    gsap.to(".mobile-menu-wrapper", {
      duration: 1,
      opacity: 0,
      x: -20,
      display: "none",
    });
    mobileMenuStatus = "closed"
  }
});
