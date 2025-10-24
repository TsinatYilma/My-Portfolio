import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollWidthBox from '../ScrollEffect'
import SmoothScroll from '../scrollSmother'
import { useGSAP } from '@gsap/react';

const projects = () => {
   
    
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
              transition={{ duration: 1, ease: 'easeOut' }} className="services-wrapper-box fade-anim px-10">
                    <div className="services-wrapper-1" >
                        <h1 className="text-5xl my-16 ">Recent Projects</h1>
                      <div className="service-box fade-anim  " >
                        <div className="count " >
                          <span className="number">(01)</span>
                        </div>

                        <div className="content" >
                          <h3 className="title"><a href="service-details.html">Book-Store</a></h3>
                          <p className="font-instRegular text-lg mt-10 pr-24">This book-store website is your go-to destination for exploring everything about a book — from detailed descriptions and author info to genre tags and reader reviews. You can easily filter titles by genre, discover personalized recommendations, and dive into community ratings to find your next great read.</p>
                        </div>
                        <ScrollWidthBox img={"/imgs/book-store.png"}/>
                      </div>
                      <div className="service-box fade-anim">
                        <div className="count">
                          <span className="number">(02)</span>
                        </div>

                        <div className="content ">
                          <h3 className="title"><a href="service-details.html">Wedase Mariam Zema</a></h3>
                          <p className="text-lg"></p>
                        </div>
                        <div className="thumb ">
                        <ScrollWidthBox img={"/imgs/wedaseMariam.png"}/>             
                        </div>
                      </div>
                      <div className="service-box fade-anim">
                        <div className="count">
                          <span className="number">(03)</span>
                        </div>

                        <div className="content">
                          <h3 className="title"><a href="service-details.html">Better-Auth UI</a></h3>
                          <p className="text-lg font-instRegular mt-10 pr-24">This site showcases a clean and secure authentication flow, built to demonstrate better login and session handling. I contributed to the UI development, helping bring the design and interactions to life with a focus on clarity and usability..</p>
                        </div>
                        <div className="thumb">
                         <ScrollWidthBox img={"/imgs/betterauth-ui.png"}/>
                        </div>
                      </div>
                      <div className="service-box fade-anim">
                        <div className="count">
                          <span className="number">(04)</span>
                        </div>
                        <div className="content">
                          <h3 className="title"><a href="service-details.html">Weather App</a></h3>
                          <p className="text-lg font-instRegular mt-10 pr-24">This is a beautifully crafted weather app I built during my early learning stage. It features a clean, responsive design and delivers real-time weather data with intuitive visuals. Building it helped me grasp core concepts like API integration, dynamic UI updates, and layout structuring.</p>
                        </div>
                        
                        <div className="thumb">
                         <ScrollWidthBox img={"/imgs/weather.png"}/>
                        </div>      
                      </div>
                    </div>
            </motion.div>
  )
}

export default projects