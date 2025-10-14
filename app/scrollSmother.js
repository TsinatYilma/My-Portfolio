import { useEffect } from "react";
import { ScrollSmoother } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollSmoother);

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1, // adjust smoothness
        effects: true,
      });
    }
  }, []);

  return null;
}
