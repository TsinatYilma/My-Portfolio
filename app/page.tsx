"use client"
import '@/app/globals.css'
import Image from 'next/image';
import Script from "next/script";
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollWidthBox from './ScrollEffect'
import IntroText from './components/IntroText'
 import SmoothScroll from './scrollSmother'
 import ExpandingCircle from './components/scrollCircular'
import Projects from './components/projects'
import Skills from './components/skills'
 
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
            <IntroText />
            </div>
            
            <Projects />
            <Skills/>
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
