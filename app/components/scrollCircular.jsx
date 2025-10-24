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
            end: '+=4000',
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
    <div id='art' className='h-screen min-w-full overflow-hidden flex'>
          <div className="circle flex justify-center items-center p-10 bg-[#A53B2F]">
            <h1 className="circleText text-5xl  font-instBold">LET'S WORK</h1>
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
          <div className="nextSection  w-full justify-center absolute bottom-0">
          <section className="team-area ">
                <div className="container large">
                  <div className="team-area-inner section-spacing">
                    <div className="ceo-spotlight fade-anim">
                      <div className="ceo-container">
                        <div className="ceo-image-wrapper">
                          <div className="ceo-thumb">
                            <a href="team-details.html"><img src="/imgs/me-pn.jpg" alt="Kirubel Habtamu"/></a>
                          </div>
                        </div>
                        <div className="ceo-content">
                          <div className="ceo-info font-instRegular">
                            <h2 className="ceo-name"><a href="team-details.html">Tsinat Yilma</a></h2>
                            <span className="ceo-position">Software Developer</span>
                            <div className="ceo-description">
                              <p>I'm Tsinat Yilma, a front-end developer focused on building fast, responsive interfaces with React and Next.js.. I love crafting smooth animations, clean layouts, and immersive user experiences.</p>
                            </div>
                            <div className="ceo-social">
                              <a href="#" className="social-link">LinkedIn</a>
                              <a href="#" className="social-link">Twitter</a>
                              <a href="https://instagram.com/kinfish_." className="social-link">Instagram</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
            <div className="flex justify-center text-[16px] font-bold text-purp  gap-4 md:text-xl md:gap-7 ">
                    <a className="hover:text-white" href="">Home</a><a className="hover:text-white" href="">About</a>
                    <a className="hover:text-white" href="">Projects</a><a className="hover:text-white" href="">contact</a>
            </div>
          </div>
    </div>
    <Script src="/assets/vendor/jquery-3.7.1.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/jquery.magnific-popup.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/swiper-bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/ScrollSmoother.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/ScrollToPlugin.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/SplitText.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/TextPlugin.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/customEase.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/Flip.min.js" strategy="beforeInteractive" /> 
      <Script src="/assets/vendor/jquery.meanmenu.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/backToTop.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/matter.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/throwable.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/imageObserver.js" strategy="beforeInteractive" />

      {/* Custom Scripts */}
      <Script src="/assets/js/magiccursor.js" strategy="afterInteractive" />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
      
    </>
  );
};

export default ExpandingCircle;
