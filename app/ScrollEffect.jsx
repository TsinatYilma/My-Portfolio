import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollWidthBox({img}) {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(imgRef.current, {
      width: "100%", // target width
      ease: "power2.out", 
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 100%", // when image enters viewport
        end: "top 10%",
        scrub: 3, // syncs animation with scroll // optional: shows start/end markers
      },
    });
  }, []);

  return (
    <div className="thumb flex justify-end " data-lag='2'>
      <img
        ref={imgRef}
        src={img}
        alt="image"
        style={{ width: "35%",   }}
      />
    </div>
  );
}