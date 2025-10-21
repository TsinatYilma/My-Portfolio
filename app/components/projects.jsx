import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollWidthBox from '../ScrollEffect'
import SmoothScroll from '../scrollSmother'
import { useGSAP } from '@gsap/react';

const projects = () => {
    const { ref: sectionRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });
    
      const { ref: projectsRef, inView: inViewProjects } = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });
      useGSAP(()=>{
        
        
      })
  return (
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
  )
}

export default projects