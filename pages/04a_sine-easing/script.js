import gsap from "gsap";

const scrollButton = document.querySelector('.scroll-to-top')

let isFloating = false

window.addEventListener('scroll', () => {
  if(window.scrollY > 500){
    scrollButton.classList.add('show')

    if(!isFloating){
      gsap.to(scrollButton ,{
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.out',
      })
      
      isFloating = true; 
    }
  }else{
    scrollButton.classList.remove('show')
  }
})

scrollButton.addEventListener('mouseenter', () => {
  gsap.to(scrollButton, {
    scale: 1.1,
    duration: 0.2
  })
})

scrollButton.addEventListener('mouseleave', () => {
  gsap.to(scrollButton, {
    scale: 1,
    duration: 0.2
  })
})

scrollButton.addEventListener('click', () => {
  window.scrollTo( 0, 0)
})