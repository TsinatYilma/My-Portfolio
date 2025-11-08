import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollWidthBox from '../ScrollEffect'
import SmoothScroll from '../scrollSmother'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import { SplitText } from 'gsap/all';
import Script from 'next/script';

const Skills = () => {
   const { ref: sectionRef, inView } = useInView({
          triggerOnce: true,
          threshold: 0.2,
        });
  useGSAP(()=>{
    const paraSplit = new SplitText('.section-title', {type: 'lines'})

    gsap.from(paraSplit.lines,{
      opacity: 0,
      yPercent: 50,
      scale: 1.5,
      ease: "power3.inOut",
      stagger: 0.06,
    })
    })
  return (
    <motion.div    
              ref={sectionRef}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="rounded shadow  mt-[20vw]  px-[6vw]">
                  
                  <section className="client-area-service-page   ">
                  
                        <div className="container large  mx-auto ">
                        <div className="title-wrapper  px-[1vw] ">
                          <h2 className="section-title font-instrumentsans-medium word-anim text-[4vw] leading-none font-instRegular"><span className='text-[#000]'>In Tech</span>, the tools you choose shape the solutions you build.</h2>
                        </div>
                          <div className="client-area-inner section-spacing-top border-r border-l border-dashed linear-gradient(to right, black 80%, transparent 100%)">
                            <div className="section-content fade-anim">
                              <div className="section-title-wrapper">
                              </div>
                            </div> 
                            <div className="client-capsule-wrapper-box fade-animation" data-t-throwable-scene="false">
                              <div className="client-capsule-wrapper ">
                              <p data-t-throwable-el="">
                                <span className="client-box px-2 py-1.5 sm:px-4 md:px-8  ">
                                <Image src="/imgs/vscode.png" alt="VS Code" className="w-6 h-6 sm:w-6 sm:h-8 md:w-10 md:h-10   rounded-lg hover:scale-110 appear" width="40" height="40" />
                                </span>
                              </p>
                              <p data-t-throwable-el="">
                                <span className="client-box px-2 py-1.5 sm:px-4 md:px-8  ">
                                  <Image src="/imgs/css.png" alt="CSS" className="w-6 h-6 sm:w-6 sm:h-8 md:w-10 md:h-10  rounded-lg hover:scale-110 appear" width="40" height="40" />
                                </span>
                              </p>
                              <p data-t-throwable-el="">
                                <span className="client-box px-2 py-1.5 sm:px-4 md:px-8 ">
                                <Image src="/imgs/js.png" alt="JavaScript" className="w-6 h-6 sm:w-6 sm:h-8 md:w-10 md:h-10  rounded-lg hover:scale-110 appear" width="40" height="40" />
                                </span>
                              </p>
                              <p data-t-throwable-el="">
                                <span className="client-box px-2 py-1.5 sm:px-4 md:px-8 ">
                                <Image src="/imgs/bootstrap.png" alt="Bootstrap" className="w-6 h-6 sm:w-6 sm:h-8 md:w-10 md:h-10  rounded-lg hover:scale-110 appear" width="40" height="40" />
                                </span>
                              </p>
                              <p data-t-throwable-el="">
                                <span className="client-box px-2 py-1.5 sm:px-4 md:px-8 ">
                                <Image src="/imgs/tailwindcss.png" alt="Tailwind CSS" className="w-6 h-6 sm:w-6 sm:h-8 md:w-10 md:h-10  rounded-lg hover:scale-110 appear" width="40" height="40" />
                                </span>
                              </p>
                              <p data-t-throwable-el="">
                                <span className="client-box px-2 py-1.5 sm:px-4 md:px-8 ">
                                <Image src="/imgs/python.png" alt="Python" className="w-6 h-6 sm:w-6 sm:h-8 md:w-10 md:h-10  rounded-lg hover:scale-110 appear" width="40" height="40" />
                                </span>
                              </p>
                              <p data-t-throwable-el="">
                                <span className="client-box px-2 py-1.5 sm:px-4 md:px-8 ">
                                <Image src="/imgs/github-sign.png" alt="GitHub" className="w-6 h-6 sm:w-6 sm:h-8 md:w-10 md:h-10  rounded-lg hover:scale-110 appear" width="40" height="40" />
                                </span>
                              </p>
                              <p data-t-throwable-el="">
                                <span className="client-box px-2 py-1.5 sm:px-4 md:px-8 ">
                                <Image src="/imgs/html.png" alt="HTML" className="w-6 h-6 sm:w-6 sm:h-8 md:w-10 md:h-10  rounded-lg hover:scale-110 appear" width="40" height="40" />
                                </span>
                              </p>
                              <p data-t-throwable-el="">
                                <span className="client-box px-2 py-1.5 sm:px-4 md:px-8 ">
                                <Image src="/imgs/nextjs.png" alt="HTML" className="w-6 h-6 sm:w-6 sm:h-8 md:w-10 md:h-10  rounded-lg hover:scale-110 appear" width="40" height="40" />
                                </span>
                              </p>
                              <p data-t-throwable-el="">
                                <span className="client-box px-2 py-1.5 sm:px-4 md:px-8 ">
                                <Image src="/imgs/react.png" alt="HTML" className="w-6 h-6 sm:w-6 sm:h-8 md:w-10 md:h-10  rounded-lg hover:scale-110 appear" width="40" height="40" />
                                </span>
                              </p>
                              <p data-t-throwable-el="">
                                <span className="client-box px-2 py-1.5 sm:px-4 md:px-8 ">
                                <Image src="/imgs/typescript.png" alt="HTML" className="w-6 h-6 sm:w-6 sm:h-8 md:w-10 md:h-10  rounded-lg hover:scale-110 appear" width="40" height="40" />
                                </span>
                              </p>
                              <p data-t-throwable-el="">
                                <span className="client-box px-2 py-1.5 sm:px-4 md:px-8 ">
                                  <Image src="/imgs/shadcn.png" alt="HTML" className="w-6 h-6 sm:w-6 sm:h-8 md:w-10 md:h-10  rounded-lg hover:scale-110 appear" width="40" height="40" />
                                </span>
                              </p>
                            </div>
                            </div>
                            <div className="lines-wrapper">
                              {Array.from({ length: 8 }).map((_, i) => (
                                <div key={i} className="line"></div>
                              ))}
                            </div>
                          </div>
                        </div>
                  </section>
                  
          
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
      <Script src="/assets/vendor/matter.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/throwable.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/imageObserver.js" strategy="beforeInteractive" />

      {/* Custom Scripts */}
            </motion.div>
  )
}

export default Skills