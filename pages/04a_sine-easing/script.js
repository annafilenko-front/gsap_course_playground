import gsap from "gsap";

const scrollToTopButton = document.querySelector('.scroll-to-top')

let isFloating = false

window.addEventListener('scroll', () => {
  if(window.scrollY > 100){
    scrollToTopButton.classList.add('show')

    if(!isFloating){
      gsap.to(scrollToTopButton, {
        y: -10,
        yoyo: true,
        repeat: -1,
        duration: 1.2,
        ease: 'sine.out'
      })

      isFloating = true
    }
  }else {
    scrollToTopButton.classList.remove('show')
  }
})

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo(0, 0)
})

scrollToTopButton.addEventListener('mouseenter', () => {
  gsap.to(scrollToTopButton, {
    scale: 1.1,
    duration: 0.2,

  })
})

scrollToTopButton.addEventListener('mouseleave', () => {
  gsap.to(scrollToTopButton, {
    scale: 1,
    duration: 0.2
  })
})

