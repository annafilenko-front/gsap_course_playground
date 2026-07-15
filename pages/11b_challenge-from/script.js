import gsap from 'gsap'

const card = document.querySelector('#card') 

const flip = gsap.from(card, {
  rotateY: 180,
  duration: 0.7,
  ease: 'power2.inOut',
  paused: true
})

card.addEventListener('mouseover',() => {
  flip.play()
})

card.addEventListener('mouseout', () => {
  flip.reverse()
})