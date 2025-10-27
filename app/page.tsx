"use client"
import '@/app/globals.css'
import Image from 'next/image';
import Script from "next/script";
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollWidthBox from './ScrollEffect'
import IntroText from './components/IntroText'
 import SmoothScroll from './scrollSmother'
 import ExpandingCircle from './components/scrollCircular'
import Projects from './components/projects'
import Skills from './components/skills'
import gsap, { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { Content } from 'next/font/google';
import Smoother from './components/smoothScroll'

 
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
    <div className="bg-black  text-white ">
           {/* Vendor Scripts */}

     
         
        <div className="main ">
            <div id="Home" className="flex flex-col justify-center  items-center min-h-screen  "
            >
            <IntroText />
            </div>
            
            <Projects />
            <Skills/>
            
            <div className=" overflow-hidden">
              <ExpandingCircle/>
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
      

    </div>
   
  )
}
