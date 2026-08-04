import gsap from "gsap";

const cards = document.querySelectorAll(".card");
const detailPage = document.querySelector(".detail-page");
const detailContent = document.querySelector("#detailContent");
const closeBtn = document.querySelector("#closeBtn");

const tl = gsap.timeline()
tl.fromTo(cards, { 
  y: 300, 
  opacity: 0, 
  scale: 0.85, 
  transition: false },
  { y: 0, 
    opacity: 1, 
    stagger: 0.2, 
    scale: 1, 
    duration: 0.8, 
    ease: 'expo.out' 
  })

function openDetails() {
    const tl = gsap.timeline({
        defaults: {
            ease: "expo.out"
        }
    });

    tl.set(detailPage, {
        display: "flex"
    });

    tl.fromTo(
        detailPage,
        {
            y: 60,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease:'sine.out'
        }
    );

    tl.fromTo(
        detailContent,
        {
            y: 35,
            opacity: 0,
            scale: 0.98
        },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.45
        },
        "-=0.1"
    );
}

function closeDetails() {
    const tl = gsap.timeline({
        defaults: {
            ease: "power2.in"
        },
        onComplete() {
            gsap.set(detailPage, {
                display: "none"
            });
        }
    });

    tl.to(detailContent, {
        opacity: 0,
        scale: 0.98,
        duration: 0.2
    });

    tl.to(
        detailPage,
        {
            y: 60,
            opacity: 0,
            duration: 0.3
        },
        "-=0.05"
    );
}

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, {
           scale: 1.05 , 
           duration: 0.15, 
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
           scale: 1, 
           duration: 0.1, 
        });
    });

    card.addEventListener("click", openDetails);
});

closeBtn.addEventListener("click", closeDetails);