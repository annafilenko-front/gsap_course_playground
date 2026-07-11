import gsap from "gsap";

const repeat = document.querySelector('.repeat')

const animation = gsap.to('.box',{
  duration: 2,
  scale: 1,
  borderRadius: '50%',
  rotationX: 180,
  ease: 'bounce.inOut',
  repeat: 1,
  yoyo: true
})

repeat.addEventListener('click', () => {
  animation.restart()
})