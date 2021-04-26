console.log('Witam')

const firstDot = document.querySelector('.dot')
const secondDot = firstDot.nextElementSibling
const thirdDot = secondDot.nextElementSibling
const fourthDot = thirdDot.nextElementSibling

firstDot.style.backgroundColor = '#ffcd19'

const btn = document.querySelector('button')

btn.addEventListener('click', () => {
  gsap.to('.first-slider-image', { duration: 1, opacity: 0, display: 'none'});
  gsap.to('.second-slider-image', { duration: 1, opacity: 1, display: 'block'});
  firstDot.style.backgroundColor = 'white'
  secondDot.style.backgroundColor = '#ffcd19'
})