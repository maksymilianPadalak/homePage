gsap.to(".third-sector-text-wrapper", {
  scrollTrigger: {
    trigger: ".third-sector-text-wrapper",
    start: "90% 90%",
    toggleActions: "play none none none",
  },
  opacity: 1,
  duration: 2.5,
  ease: "bounce.out",
  x: 1000,
});

const playButton = document.querySelector('.play-button')
const closeYouTubeButton = document.querySelector(".close-youtube-button")
const youtubeVideo = document.querySelector('iframe')

playButton.addEventListener('click', () => {
  gsap.to(".third-sector-youtube-wrapper", {display: "flex", duration: 1, opacity: 1})
})

closeYouTubeButton.addEventListener('click', () => {
  gsap.to(".third-sector-youtube-wrapper", {display: "none", duration: 1, opacity: 0})
  //video has to reset every time user closes modal
  youtubeVideo.src = ''
  youtubeVideo.src = "https://www.youtube.com/embed/tgbNymZ7vqY"
})


