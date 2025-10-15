"use client"
import  {useEffect}  from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExpandingCircle = () => {
  useEffect(() => {
    gsap.to('.circle', {
      scale: 30, // Adjust to fully cover screen
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.content',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div className="circle" />
      <section className="content">
        <h1>Scroll down to expand the circle</h1>
        <div style={{ height: '200vh' }} />
      </section>
    </>
  );
};

export default ExpandingCircle;
