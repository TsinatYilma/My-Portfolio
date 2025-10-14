import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

// Optional: Smooth scroll setup
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Circle expand animation
gsap.timeline({
  scrollTrigger: {
    trigger: ".area-bg",
    start: "top center",
    end: "bottom center",
    scrub: true,
  }
})
.to(".area-bg", {
  scale: 50, // Adjust to fully cover screen
  duration: 1,
  ease: "power2.inOut"
});
