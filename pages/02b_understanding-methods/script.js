import gsap from "gsap"

const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const resume = document.querySelector('.resume')
const restart = document.querySelector('.restart')
const repeat = document.querySelector('.repeat')
const reverse = document.querySelector('.reverse')
const kill = document.querySelector('.kill')
const yoyo = document.querySelector('.yoyo')

const animation = gsap.to('.box', {
  opacity: 1,
  rotation: 360,
  borderRadius: '50%',
  scale: 1.25,
  duration: 2,
  ease: 'power2.out',
})

play.addEventListener('click', () => {
  animation.play()
})

pause.addEventListener('click', () => {
  animation.pause()
})

restart.addEventListener('click', () => {
  animation.restart()
})

resume.addEventListener('click', () => {
  animation.resume()
})

yoyo.addEventListener('click', () => {
  animation.yoyo()
})

kill.addEventListener('click', () => {
  animation.kill()
})

reverse.addEventListener('click', () => {
  animation.reverse()
})
repeat.addEventListener('click', () => {
  animation.repeat()
})
