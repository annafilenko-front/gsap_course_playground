import gsap from "gsap";

gsap.to('.box',{
  duration: 2,
  scale: 1,
  borderRadius: '50%',
  rotationX: 180,
  ease: 'bounce.inOut',
  repeat: 1,
  yoyo: true
})