const firstDot = document.querySelector(".dot");
const secondDot = firstDot.nextElementSibling;
const thirdDot = secondDot.nextElementSibling;
const fourthDot = thirdDot.nextElementSibling;
const dots = [firstDot, secondDot, thirdDot, fourthDot]


const firstSliderImg = document.querySelector('.first-slider-image')
const secondSliderImg = document.querySelector('.second-slider-image')
const thirdSliderImg = document.querySelector('.third-slider-image')
const fourthSliderImg = document.querySelector('.fourth-slider-image')
const sliderImages = [firstSliderImg, secondSliderImg, thirdSliderImg, fourthSliderImg]


//arrows

const leftArrow = document.querySelector('.arrow-left')
const rightArrow = document.querySelector('.arrow-right')
let currentSliderImg = 1

firstDot.style.backgroundColor = '#ffcd19'

rightArrow.addEventListener('click', () => {
  gsap.to(sliderImages[currentSliderImg-1], { duration: 1, opacity: 0, display: 'none'});
  dots[currentSliderImg-1].style.backgroundColor = 'white';
  if (currentSliderImg === 4){
    currentSliderImg = 1
  } else {
    currentSliderImg += 1
  }
  gsap.to(sliderImages[currentSliderImg-1], { duration: 1, opacity: 1, display: 'block'});
  dots[currentSliderImg-1].style.backgroundColor = '#ffcd19'
})

leftArrow.addEventListener('click', () => {
  gsap.to(sliderImages[currentSliderImg-1], { duration: 1, opacity: 0, display: 'none'});
  dots[currentSliderImg-1].style.backgroundColor = 'white';
  if (currentSliderImg === 1){
    currentSliderImg = 4
  } else {
    currentSliderImg -= 1
  }
  gsap.to(sliderImages[currentSliderImg-1], { duration: 1, opacity: 1, display: 'block'});
  dots[currentSliderImg-1].style.backgroundColor = '#ffcd19'
})

//function to change images easly when back-end is ready

const changeSliderImg = (imgNumber, imgSrc) => {
  sliderImages[imgNumber-1].firstElementChild.src = imgSrc
}

//mobile menu handler

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
