import gsap from "gsap";

const button = document.querySelector('.btn')
const closeToastButton = document.querySelector('.close-btn')

const btnAnimation = gsap.to('.btn', {
  opacity: 1,
  duration: 1,
  y: 24,
  ease: 'bounce.out'
})

const toastAnimation = gsap.to('.toast',{
  opacity: 1,
  y: -24,
  ease:'power1.out',
  paused: true,
})

const cardAnimation = gsap.to('.card',{
  opacity: 1,
  scale: 1.25,
  duretion: 2,
  boxShadow: '0px 0px 40px rgba(149, 29, 209, 0.7)',
  ease:'power4.inOut',
  paused: true
})

button.addEventListener('click', () => {
  btnAnimation.reverse()

  btnAnimation.eventCallback('onReverseComplete', () => {
    toastAnimation.play();
  });
})

closeToastButton.addEventListener('click', () => {
  toastAnimation.reverse()

  toastAnimation.eventCallback('onReverseComplete', () => {
    cardAnimation.play();
  });
})