"use client"
import  {useEffect}  from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Script from 'next/script';
import '@/app/globals.css'

gsap.registerPlugin(ScrollTrigger);

const ExpandingCircle = () => {
  
  useGSAP(()=>{
    gsap.timeline({
        scrollTrigger: {
            trigger: '#art',
            start: 'top top',
            end: '+=1000',
            scrub: 0.2,
            pin: true,
        }
    })
    .to('.circle',{
        scale: 30, opacity: 0.1, maskPosition: 'center', maskSize: '400%', duration: 3, ease: 'power1.inOut', 
    })
    .to('.circleText',{
      scale: 30, opacity: 0, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut', 
  })
    .from('.circleIn',{
      opacity: 0,
      y: 100,
      ease: 'power2.out',
    }) .to('.circleIn', {
      opacity: 0,
      y: -100,
      duration: 1,
      ease: 'power2.in',
    }).from('.nextSection', {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power2.out',
    })
})

  return (
    <>
    <div id="art" className="min-h-screen w-full overflow-hidden flex ">
      {/* Hero Circle Section */}
      <div className="circle flex justify-center items-center p-[2%] bg-[#A53B2F] ">
        <h1 className="circleText text-[2vw] font-instBold tracking-tighter ">LET'S WORK</h1>
      </div>

      {/* Headline Section */}
      <div className="circleIn w-full text-center relative bottom-0 ">
        <h1 className="font-[var(--font_instrumentsans)] text-[4vw] absolute bottom-[10vw] leading-tight  w-full px-[5%]">
          It’s all about the <br />
          unique <span className="text-gray-600">thinking</span> with <br />
          <span className="text-gray-600">creativity</span> and <span className="text-gray-600">quality</span> <br />
          for complex solution <br /> in easy way
        </h1>
      </div>

      {/* Team Section */}
      <div className="nextSection w-full justify-center absolute bottom-0 ">
        <section className="team-area  relative ">
          <div className="container px-[5%] absolute bottom-0 ">
            <div className="team-area-inner py-[5%] "> 
              <div className="ceo-spotlight fade-anim  relative bottom-0 ">
                <div className="ceo-container absolute bottom-0">
                  <div className="ceo-image-wrapper">
                    <div className="ceo-thumb">
                      <a href="team-details.html">
                        <img src="/imgs/me-pn.jpg" alt="Kirubel Habtamu" className=" max-h-[35vw] rounded " />
                      </a>
                    </div>
                  </div>
                  <div className="ceo-content">
                    <div className="ceo-info font-instRegular">
                      <h2 className="ceo-name text-[2vw] font-bold">
                        <a href="team-details.html">Tsinat Yilma</a>
                      </h2>
                      <span className="ceo-position text-[1.4vw]">Software Developer</span>
                      <div className="ceo-description text-[1.2vw] max-w-[60ch] mx-auto">
                        <p>
                          I'm Tsinat Yilma, a front-end developer focused on building fast, responsive interfaces with React and Next.js. I love crafting smooth animations, clean layouts, and immersive user experiences.
                        </p>
                      </div>
                      <div className="ceo-social flex gap-[2vw] justify-start mt-[2vw] ">
                        <a href="https://t.me/dvlinz" target="_blank" rel="noopener noreferrer" className="socialLink text-[1.2vw]"><button>Telegram</button></a>
                        <a href="#" className="socialLink text-[1.2vw] transition-all z-50 duration-300 hover:bg-[#A53B2F] hover:border-[#A53B2F] hover:-translate-y-0.5 hover:underline ">LinkedIn</a>
                        <a href="#" className="socialLink text-[1.2vw]">Twitter</a>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    
      
    </>
  );
};

export default ExpandingCircle;
