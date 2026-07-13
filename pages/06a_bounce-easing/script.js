import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const tennisBall = document.querySelector('.tennis-ball');
const demo = document.querySelector('.demo');

gsap.registerPlugin(Draggable);

Draggable.create(tennisBall, {
  type: 'x,y',
  bounds: demo,
  edgeResistance: 0.65,
  inertia: true,
  cursor: 'grab',
  activeCursor: 'grabbing',
  onPress() {
    if (this.dropTween) {
      this.dropTween.kill();
    }
  },
  onRelease() {
    this.dropTween = gsap.to(this.target, {
      duration: 1.2,
      ease: 'bounce.out',
      y: 300,
      x: this.x,
      overwrite: true
    });
  }
});