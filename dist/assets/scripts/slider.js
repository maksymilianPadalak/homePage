const firstDot = document.querySelector(".dot");
const secondDot = firstDot.nextElementSibling;
const thirdDot = secondDot.nextElementSibling;
const fourthDot = thirdDot.nextElementSibling;
const dots = [firstDot, secondDot, thirdDot, fourthDot];

const firstSliderImg = document.querySelector(".first-slider-image");
const secondSliderImg = document.querySelector(".second-slider-image");
const thirdSliderImg = document.querySelector(".third-slider-image");
const fourthSliderImg = document.querySelector(".fourth-slider-image");
const sliderImages = [
  firstSliderImg,
  secondSliderImg,
  thirdSliderImg,
  fourthSliderImg,
];

//arrows

const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let currentSliderImg = 1;

firstDot.style.backgroundColor = "#ffcd19";

const changeImageToNext = () => {
  gsap.to(sliderImages[currentSliderImg - 1], {
    duration: 1.5,
    opacity: 0,
    display: "none",
  });
  dots[currentSliderImg - 1].style.backgroundColor = "white";
  if (currentSliderImg === 4) {
    currentSliderImg = 1;
  } else {
    currentSliderImg += 1;
  }
  gsap.to(sliderImages[currentSliderImg - 1], {
    duration: 1.5,
    opacity: 1,
    display: "block",
  });
  dots[currentSliderImg - 1].style.backgroundColor = "#ffcd19";
};

const changeImageToPrevious = () => {
  gsap.to(sliderImages[currentSliderImg - 1], {
    duration: 1.5,
    opacity: 0,
    display: "none",
  });
  dots[currentSliderImg - 1].style.backgroundColor = "white";
  if (currentSliderImg === 1) {
    currentSliderImg = 4;
  } else {
    currentSliderImg -= 1;
  }
  gsap.to(sliderImages[currentSliderImg - 1], {
    duration: 1.5,
    opacity: 1,
    display: "block",
  });
  dots[currentSliderImg - 1].style.backgroundColor = "#ffcd19";
};

rightArrow.addEventListener("click", changeImageToNext);
leftArrow.addEventListener("click", changeImageToPrevious);

//function that changes images automatically

setInterval(() => {
  changeImageToNext();
}, 5000);

//function to change slider images easly when back-end is ready

const changeSliderImg = (imgNumber, imgSrc) => {
  sliderImages[imgNumber - 1].firstElementChild.src = imgSrc;
};
