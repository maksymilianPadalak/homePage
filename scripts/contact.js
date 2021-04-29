const nameInput = document.querySelector(".contact-input-wrapper");

console.log(nameInput)

nameInput.addEventListener("input", () => {

    gsap.to('.name-while-input', {display: 'block'})

});

nameInput.addEventListener('blur', () => {
  if(nameInput.Value === ''){
    gsap.to('.name-while-input', {display: 'none'})
  }
})