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

const firstSliderTexts = document.querySelector(".first-slider-texts")
const secondSliderTexts = document.querySelector(".second-slider-texts")
const thirdSliderTexts = document.querySelector(".third-slider-texts")
const fourthSliderTexts = document.querySelector(".fourth-slider-texts")
const sliderTexts = [firstSliderTexts, secondSliderTexts, thirdSliderTexts, fourthSliderTexts]

const firstSliderButtons = document.querySelector(".first-slider-buttons")
const secondSliderButtons = document.querySelector(".second-slider-buttons")
const thirdSliderButtons = document.querySelector(".third-slider-buttons")
const fourthSliderButtons = document.querySelector(".fourth-slider-buttons")
const sliderButtons = [firstSliderButtons, secondSliderButtons, thirdSliderButtons, fourthSliderButtons]
//arrows

const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let currentSliderImg = 1;

firstDot.style.backgroundColor = "#ffcd19";

//function that changes images automatically

let imageTimer = setInterval(() => {
  changeImageToNext();
}, 5000);

const changeImageToNext = () => {
  sliderImages[currentSliderImg - 1].style.opacity = 0;

  sliderTexts[currentSliderImg -1].style.visibility = 'hidden';
  sliderTexts[currentSliderImg - 1].style.opacity = 0;
  sliderTexts[currentSliderImg - 1].style.transform = ('translate(-5%, 0)')

  sliderButtons[currentSliderImg -1].style.visibility = 'hidden';
  sliderButtons[currentSliderImg - 1].style.opacity = 0;

  dots[currentSliderImg - 1].style.backgroundColor = "white";
  if (currentSliderImg === 4) {
    currentSliderImg = 1;
  } else {
    currentSliderImg += 1;
  }
  sliderTexts[currentSliderImg -1].style.visibility = 'visible';
  sliderTexts[currentSliderImg - 1].style.opacity = 1;
  sliderTexts[currentSliderImg - 1].style.transform = ('translate(0, 0)')


  sliderButtons[currentSliderImg -1].style.visibility = 'visible';
  sliderButtons[currentSliderImg - 1].style.opacity = 1;

  dots[currentSliderImg - 1].style.backgroundColor = "#ffcd19";
  sliderImages[currentSliderImg - 1].style.opacity = 1
  };


const changeImageToPrevious = () => {
  sliderImages[currentSliderImg - 1].style.opacity = 0;

  sliderTexts[currentSliderImg - 1].style.visibility = 'hidden';
  sliderTexts[currentSliderImg - 1].style.opacity = 0;
  sliderTexts[currentSliderImg - 1].style.transform = ('translate(-5%, 0)')

  sliderButtons[currentSliderImg -1].style.visibility = 'hidden';
  sliderButtons[currentSliderImg - 1].style.opacity = 0;

  dots[currentSliderImg - 1].style.backgroundColor = "white";
  if (currentSliderImg === 1) {
    currentSliderImg = 4;
  } else {
    currentSliderImg -= 1;
  }
  sliderImages[currentSliderImg - 1].style.opacity = 1;

  sliderButtons[currentSliderImg -1].style.visibility = 'visible';
  sliderButtons[currentSliderImg - 1].style.opacity = 1;

  sliderTexts[currentSliderImg - 1].style.visibility = 'visible'
  sliderTexts[currentSliderImg - 1].style.opacity = 1;
  sliderTexts[currentSliderImg - 1].style.transform = ('translate(0, 0)')

  dots[currentSliderImg - 1].style.backgroundColor = "#ffcd19";
};


//reset the clock so every time user clicks on an arrow interval starts from 0

rightArrow.addEventListener("click", () => {
  clearInterval(imageTimer);
  imageTimer = setInterval(() => {
    changeImageToNext();
  }, 5000);
  changeImageToNext();
});
leftArrow.addEventListener("click",  () => {
  clearInterval(imageTimer);
  imageTimer = setInterval(() => {
    changeImageToPrevious();
  }, 5000);
  changeImageToPrevious();
});

//function to change slider images easly when back-end is ready

const changeSliderImg = (imgNumber, imgSrc) => {
  sliderImages[imgNumber - 1].firstElementChild.src = imgSrc;
};
