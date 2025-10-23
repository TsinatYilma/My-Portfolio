'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Smoother() {
    useGSAP(() => {
        gsap.timeline({
          scrollTrigger: {
            trigger: '#content',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }).to('.imgy', {
          y: -100,
          scale: 1.1,
          ease: 'none',
        });
      });
      

  return (
    <div  id="content " className='relative overflow-hidden  h-[80vh] max-h-[500px] border my-48'>
                <img
                  src="/imgs/image-7.webp"
                  alt="image"
                  className="imgy absolute w-full h-[160%] object-cover bottom-0 border"
                  data-speed="0.1"
                />
    </div>
  );
}


