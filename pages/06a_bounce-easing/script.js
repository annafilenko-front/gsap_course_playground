import gsap from "gsap";

const box = document.querySelector('.box')

gsap.fromTo(
  box,
  { x: 0, opacity: 1 },
  {
    x: 200,
    duration: 1.5,
    ease: "bounce.out",
    repeat: 2,
    repeatDelay: 0.4,
    yoyo: true,
  }
);