"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Smoother() {
  useEffect(() => {
    console.log("ScrollTrigger initialized");

    gsap.from(".imgy", {
      y: 100, // adjust for stronger or subtler parallax
      ease: "none",
      scrollTrigger: {
        trigger: ".image_cont",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        // pin: true, // optional: only if you want to pin the container
      },
    });
  }, []);

  return (
    <section className="border-2 border-amber-400">
      <div className="image_cont h-[80vh] overflow-hidden relative">
        <img
          className="imgy absolute w-full h-[160%] object-cover bottom-0"
          src="/imgs/image-7.webp"
          alt=""
        />
      </div>
    </section>
  );
}
