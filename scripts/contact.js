//functions that reveals small text when something is typed

const nameInput = document.getElementById('name-input')
const surnameInput = document.getElementById('surname-input')
const emailInput = document.getElementById('email-input')
const messageInput = document.getElementById('message-input')


nameInput.addEventListener("input", () => {
  if(nameInput.value.length === 0){
    gsap.to('.name-while-input', {display: 'none'})
  } else{
    gsap.to('.name-while-input', {display: 'block'})
  }
});

surnameInput.addEventListener("input", () => {
  if(surnameInput.value.length === 0){
    gsap.to('.surname-while-input', {display: 'none'})
  } else{
    gsap.to('.surname-while-input', {display: 'block'})
  }
});

emailInput.addEventListener("input", () => {
  if(emailInput.value.length === 0){
    gsap.to('.email-while-input', {display: 'none'})
  } else{
    gsap.to('.email-while-input', {display: 'block'})
  }
});

messageInput.addEventListener("input", () => {
  if(messageInput.value.length === 0){
    gsap.to('.message-while-input', {display: 'none'})
  } else{
    gsap.to('.message-while-input', {display: 'block'})
  }
});
