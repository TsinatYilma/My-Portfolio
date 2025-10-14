import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollWidthBox({img}) {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(imgRef.current, {
      width: "100%", // target width
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 100%", // when image enters viewport
        end: "top 10%",
        scrub: true, // syncs animation with scroll
        markers: true, // optional: shows start/end markers
      },
    });
  }, []);

  return (
    <div className="thumb flex justify-end ">
      <img
        ref={imgRef}
        src={img}
        alt="image"
        style={{ width: "35%" }}
      />
    </div>
  );
}
