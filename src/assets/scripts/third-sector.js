const playButton = document.querySelector('.play-button-wrapper')
const closeYouTubeButton = document.querySelector(".close-youtube-button")
const youtubeVideo = document.querySelector('iframe')
const youtubeWrapper = document.querySelector('.third-sector-youtube-wrapper')

playButton.addEventListener('click', () => {
 youtubeWrapper.style.opacity = 1
 youtubeWrapper.style.visibility = 'visible'
})

closeYouTubeButton.addEventListener('click', () => {
  youtubeWrapper.style.opacity = 0
  youtubeWrapper.style.visibility = 'hidden'
  //video has to reset every time user closes modal
  youtubeVideo.src = ''
  youtubeVideo.src = "https://www.youtube.com/embed/tgbNymZ7vqY"
})

