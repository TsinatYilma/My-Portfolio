"use client"
import '@/app/globals.css'
import Image from 'next/image';
import Script from "next/script";
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollWidthBox from './ScrollEffect'
 import SmoothScroll from './scrollSmother'
 import ExpandingCircle from './scrollCircular'
export default function Home() {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: projectsRef, inView: inViewProjects } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  return (
    <div className="bg-black relative text-white border">
           {/* Vendor Scripts */}
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

     
         
        <div className="main px-6 ">
            <div id="Home" className="flex flex-col justify-center  items-center min-h-screen border border-amber-500"
            >
                <div className="intro mt-20  ">
                  <hr className="w-32 mb-5" />
                  <div className="flex flex-col items-center text-center max-w-[1000px] ">
                    <p className="text-6xl font-bold text-transparent "
                    style={{
                        background: 'linear-gradient(to right, #238E8E 0%, #FFFFFF 30%, #FFFFFF 70%, #238E8E 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                      }}>
                        <span className='text-7xl '>Shalom!</span>, I'm The Developer  Your Are Looking For.</p>
                    <br />
                    <p className="max-w-[600px] ">I am a junior web developer who loves to work on client-based web applications and looks forward to solving human problems through the web.</p>
                  </div>
                  <a href="#wait">
                    <Image className="m-5 mt-10" src="/imgs/chevron-double-down.png" alt="Scroll down" width="40" height="40" />
                  </a>
                </div>
            </div>
            <div className="mb--1">
            <div className="circular-shape-wrapper  bg-white">
              <div className="shape-thumb  ">
                <img src="imgs/shape-8.svg" alt="image"/>
              </div>
            </div>
          </div>
            <motion.div    
              ref={projectsRef}
              initial={{ opacity: 0, y: 50 }}
              animate={inViewProjects ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 2, ease: 'easeOut' }} className="services-wrapper-box fade-anim ">
                    <div className="services-wrapper-1" >
                      <div className="service-box fade-anim  " >
                        <div className="count " >
                          <span className="number">(01)</span>
                        </div>

                        <div className="content" >
                          <h3 className="title"><a href="service-details.html">Branding</a></h3>
                          <ul className="service-list">
                            <li><a href="service-details.html">Creative Direction</a></li>
                            <li><a href="service-details.html">Brand Identity</a></li>
                            <li><a href="service-details.html">Branding Strategy</a></li>
                            <li><a href="service-details.html">Graphic Design</a></li>
                            <li><a href="service-details.html">Startup</a></li>
                          </ul>
                        </div>
                        <ScrollWidthBox img={"/imgs/image-3.webp"}/>
                      </div>
                      <div className="service-box fade-anim">
                        <div className="count">
                          <span className="number">(02)</span>
                        </div>

                        <div className="content ">
                          <h3 className="title"><a href="service-details.html">UI-UX Design</a></h3>
                          <ul className="service-list">
                            <li><a href="service-details.html">UI UX Consulting</a></li>
                            <li><a href="service-details.html">UX Research</a></li>
                            <li><a href="service-details.html">Usability Testing</a></li>
                            <li><a href="service-details.html">Wireframing</a></li>
                            <li><a href="service-details.html">Prototyping</a></li>
                          </ul>
                        </div>
                        <div className="thumb ">
                        <ScrollWidthBox img={"/imgs/image-4.webp"}/>             
                        </div>
                      </div>
                      <div className="service-box fade-anim">
                        <div className="count">
                          <span className="number">(03)</span>
                        </div>

                        <div className="content">
                          <h3 className="title"><a href="service-details.html">Development</a></h3>
                          <ul className="service-list">
                            <li><a href="service-details.html">WordPress</a></li>
                            <li><a href="service-details.html">Webflow</a></li>
                            <li><a href="service-details.html">Laravel Framework</a></li>
                            <li><a href="service-details.html">React & Flutter</a></li>
                            <li><a href="service-details.html">Design System</a></li>
                          </ul>
                        </div>
                        <div className="thumb">
                         <ScrollWidthBox img={"/imgs/image-6.webp"}/>
                        </div>
                      </div>
                      <div className="service-box fade-anim">
                        <div className="count">
                          <span className="number">(04)</span>
                        </div>

                        <div className="content">
                          <h3 className="title"><a href="service-details.html">Digital Marketing</a></h3>
                          <ul className="service-list">
                            <li><a href="service-details.html">Online Marketing</a></li>
                            <li><a href="service-details.html">SEO-Marketing</a></li>
                            <li><a href="service-details.html">Strategy</a></li>
                            <li><a href="service-details.html">Market Research</a></li>
                            <li><a href="service-details.html">Social Reform</a></li>
                          </ul>
                        </div>
                        
                          <ScrollWidthBox img={"/imgs/image-5.webp"}/>               
                        
                      </div>
                    </div>
            </motion.div>
            
            <motion.div    
              ref={sectionRef}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="rounded shadow  min-h-screen ">
                  <h2 className="flex font-bold mb-8 text-2xl lefty">
                    <Image src="/imgs/slash.png" alt="Slash icon" width="30" height="30" />
                    Skills and Tools
                  </h2>
                  <section className="client-area-service-page   ">
                        <div className="container large">
                          <div className="client-area-inner section-spacing-top">
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
            </motion.div>
            <section className="team-area border">
                <div className="container large">
                  <div className="team-area-inner section-spacing">
                    <div className="ceo-spotlight fade-anim">
                      <div className="ceo-container">
                        <div className="ceo-image-wrapper">
                          <div className="ceo-thumb">
                            <a href="team-details.html"><img src="imgs/Kirubel-habtamu.webp" alt="Kirubel Habtamu"/></a>
                          </div>
                        </div>
                        <div className="ceo-content">
                          <div className="ceo-info">
                            <h2 className="ceo-name"><a href="team-details.html">Kirubel Habtamu</a></h2>
                            <span className="ceo-position">CEO / Co-Founder</span>
                            <div className="ceo-description">
                              <p>Leading ENZIRA PRODUCTION with a vision to revolutionize digital experiences through innovative design and cutting-edge technology solutions. With extensive experience in creative direction and business strategy.</p>
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
            <div className="p-relative overflow-hidden">
          <ExpandingCircle/>
        </div>
            <div className="footer m-5 mt-32 border-b-[1px] border-white lefty" id="contact">
                <hr className="border-2 w-32 mb-5" />
                <p className="font-bold">
                    interested in working together <br /> Let's talk!
                </p>
                <form action="/submit" method="POST" className="mt-8 flex flex-col gap-10 sm:w-1/2">
                    <input
                    className="border-b-4 border-white bg-transparent font-bold"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    />
                    <input
                    className="border-b-4 border-white bg-transparent font-bold"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    />
                    <textarea
                    className="border-b-4 border-white bg-transparent font-bold"
                    id="message"
                    name="message"
                    rows={5}
                    cols={30}
                    placeholder="Describe your project"
                    required
                    ></textarea>
                    <button className="font-bold flex gap-2 items-center" type="submit">
                    Send <img src="/imgs/submit.png" alt="" className="w-4 h-4" /> </button>
          
                    </form>
                    <div className="flex gap-8 mt-14 items-center righty">
                        <img src="/imgs/kinpe.jpg" alt="" className="w-20 h-20 rounded-full" />
                        <p className="text-purp font-bold">
                        <span className="font-bold text-white text-2xl">Tsinat Yilma</span>
                        <br />
                        Junior Front-end web Developer.
                        </p>
                    </div>
                    <div className="social flex flex-wrap gap-5 mt-6 m-5 mb-14">
                        <a href="">
                        <img src="/imgs/logos/facebook.png" alt="" className="w-6 h-6" />
                        </a>
                        <a href="">
                        <img src="/imgs/logos/telegram.png" alt="" className="w-6 h-6" />
                        </a>
                        <a href="">
                        <img src="/imgs/logos/twitter.png" alt="" className="w-6 h-6" />
                        </a>
                        <a href="">
                        <img src="/imgs/logos/instagram.png" alt="" className="w-6 h-6" />
                        </a>
                        <a href="">
                        <img src="/imgs/github-sign.png" alt="" className="w-6 h-6" />
                        </a>
                    </div>
                    </div>
                <div className="flex justify-center text-[16px] font-bold text-purp  gap-4 md:text-xl md:gap-7 ">
                    <a className="hover:text-white" href="">Home</a><a className="hover:text-white" href="">About</a>
                    <a className="hover:text-white" href="">Projects</a><a className="hover:text-white" href="">contact</a>
                </div>
        </div>
      
    </div>
   
  )
}
