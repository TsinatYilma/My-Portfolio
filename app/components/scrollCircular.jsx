"use client"
import  {useEffect}  from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import '@/app/globals.css'

gsap.registerPlugin(ScrollTrigger);

const ExpandingCircle = () => {
  
  useGSAP(()=>{
    const maskTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#art',
            start: 'top top',
            end: '+=2000',
            scrub: 1.5,
            pin: true,
        }
    })
    .to('.circle',{
        scale: 30, opacity: 0.2, maskPosition: 'center', maskSize: '400%', duration: 3, ease: 'power1.inOut', delay: 5,
    })
    .to('.circleText',{
      scale: 30, opacity: 0, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut', 
  })
    .from('.circleIn',{
      opacity: 0,
      y: 100,
      ease: 'power2.out',
    })
})

  return (
    <>
    <div id='art' className=' min-h-screen overflow-hidden border flex'>
          <div className="circle flex justify-center items-center p-10">
            <h1 className="circleText text-5xl font-[var(--font_instrumentsans)]">LET'S WORK</h1>
          </div>
          <div className="circleIn text-center absolute left-1/2 bottom-40 -translate-x-1/2">
            <h1 className="font-[var(--font_instrumentsans)] text-8xl ">
                It’s all about the <br />
                unique <span className="text-gray-600">thinking</span> with <br />
                <span className="text-gray-600">creativity</span> and <span className="text-gray-600">quality</span> for
                complex solution in 
                easy way
            </h1>
          </div>
    </div>
    
    </>
  );
};

export default ExpandingCircle;
