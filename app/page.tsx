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
            <div id="Home" className="flex flex-col justify-center  items-center min-h-screen">
             <IntroText />
            </div>
            <Projects />
            <Skills/>
            <ExpandingCircle/> 
        </div>

      

    </div>
   
  )
}
