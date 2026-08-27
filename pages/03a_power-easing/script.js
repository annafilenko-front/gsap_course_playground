import gsap from "gsap";

const button = document.querySelector('.btn')
const toast = document.querySelector('.toast')
const closeToastButton = document.querySelector('.close-btn')
const card = document.querySelector('.card')

const buttonAnimation = gsap.to(button, {
  opacity: 1,
  y: -20,
  duration: 0.4,
  ease: 'power4.out'
})

const toastAnimation = gsap.to(toast, {
  opacity: 1,
  y: -30,
  duration: 1.2,
  ease: 'power2.out',
  paused: true
})

const cardAnimation = gsap.to(card, {
  opacity: 1,
  y: -40,
  scale: 1.5,
  duration: 1,
  ease: 'power3.inOut',
  paused: true
})

button.addEventListener('click', () => {
  buttonAnimation.reverse().then(() => toastAnimation.play())
})

closeToastButton.addEventListener('click', () => {
  toastAnimation.reverse().then(() => cardAnimation.play())
})


