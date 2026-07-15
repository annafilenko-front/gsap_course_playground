import gsap from "gsap";

const reactions = document.querySelectorAll('.reactions button');

const animateClick = (target) => {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.textContent = target.dataset.emoji;

  const rect = target.getBoundingClientRect();
  bubble.style.position = 'fixed';
  bubble.style.left = `${rect.left}px`;
  bubble.style.top = `${rect.top}px`;

  document.body.appendChild(bubble);

  gsap.fromTo(
    bubble,
    {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
    },
    {
      y: -60,
      scale: 1.4,
      rotate: 360,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      onComplete: () => bubble.remove(),
    }
  );
};

reactions.forEach((reaction) => {
  reaction.addEventListener('click', () => {
    animateClick(reaction);
  });
});