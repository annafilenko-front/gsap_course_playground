import gsap from "gsap";

gsap.to('.box', {
  opacity: 1,
  rotation: 360,
  background: '#f77d56',
  borderRadius: '50%',
  scale: 1.25,
  duration: 2,
  ease: 'bounce',
  repeat: -1,
  yoyo: true,
  repeatDelay: 2
})