import gsap from "gsap";

const toastOne = document.querySelector('.toast.one')
const toastTwo = document.querySelector('.toast.two')

const showToastsLoop = (toast, anotherToast) => {
  gsap.to(toast, {
    y: -120,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: 'back.out',
    onComplete: () => {
      gsap.to(toast, {
        delay: 2.5,
        y: 0,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: 'power1.in',
        onComplete: () => {
          showToastsLoop(anotherToast, toast)
          
        }
      })
    }
  })
}

showToastsLoop(toastOne, toastTwo)