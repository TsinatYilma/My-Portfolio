import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollWidthBox from '../ScrollEffect'
import SmoothScroll from '../scrollSmother'
import { useGSAP } from '@gsap/react';
import Script from 'next/script';
import gsap, {ScrollTrigger} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const projects = () => {
   
    
      const { ref: projectsRef, inView: inViewProjects } = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });
      

      useGSAP(() => {
        gsap.utils.toArray(".scale").forEach((el) => {
          gsap.fromTo(el,
            { scale: 1 },
            {
              scale: 1.2,
              duration: 1.6,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        });
      });
  return (
  <section className="work-area-work-page border">
          <div className="work-area-work-page-inner">
            <div className="container large">
              <div className="section-header fade-anim">
                <div className="section-title-wrapper">
                  <div className="subtitle-wrapper">
                    <span className="section-subtitle">Recent work</span>
                  </div>
                  <div className="title-wrapper">
                    <h2 className="section-title font-sequelsans-romanbody">Creative works
                      with our incredible
                      people.</h2>
                  </div>
                </div>
              </div>
              <div className="section-content-wrapper fade-anim">
                <div className="info-list">
                  <ul>
                    <li>design</li>
                    <li>Development</li>
                    <li>Marketing</li>
                    <li>Writing</li>
                  </ul>
                </div>
                <div className="section-content">
                  <div className="text-wrapper" data-direction="right">
                    <p className="text">We take a comprehensive approach to the creation and development of brands. We
                      help local companies and services enter the market, and well-known brands expand an audience.
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div className="works-wrapper-box">
              <div className="container large">
                <div className="works-wrapper-8">
                  <div className="work-box border">
                    <div className="thumb border">
                      <div className="image " data-cursor-text="View Project">
                        <a href=""><img className='h-[350px]  scale' src="/imgs/book-store.png" alt="image"/></a>
                      </div>
                    </div>
                    <div className="content border px-14">
                      <h3 className="title"><a href="portfolio-details.html">Book Store</a></h3>
                      <div className="meta">
                        <span className="date">2025</span>
                        <span className="tag">service</span>
                      </div>
                    </div>
                  </div>
                  <div className="work-box">
                    <div className="thumb  border">
                      <div className="image  border" data-cursor-text="View Project">
                        <a href="portfolio-details.html"><img className='h-[350px] scale' src="/imgs/betterauth-ui.png" alt="image"/></a>
                      </div>
                    </div>
                    <div className="content">
                      <h3 className="title"><a href="portfolio-details.html">BetterAuth-UI</a></h3>
                      <div className="meta">
                        <span className="date">2025</span>
                        <span className="tag">frontend</span>
                      </div>
                    </div>
                  </div>
                  <div className="work-box">
                    <div className="thumb">
                      <div className="image  border" data-cursor-text="View Project">
                        <a href="portfolio-details.html"><img className='h-[350px] scale' src="/imgs/image-5.webp" alt="image"/></a>
                      </div>
                    </div>
                    <div className="content px-14">
                      <h3 className="title"><a href="portfolio-details.html"></a></h3>
                      <div className="meta">
                        <span className="date">2010</span>
                        <span className="tag">Marketing</span>
                      </div>
                    </div>
                  </div>
                  <div className="work-box">
                    <div className="thumb">
                      <div className="image " data-cursor-text="View Project">
                        <a href="portfolio-details.html"><img className='h-[350px] scale' src="/imgs/wedaseMariam.png" alt="image"/></a>
                      </div>
                    </div>
                    <div className="content">
                      <h3 className="title"><a href="portfolio-details.html">Wedase Mariam Zema</a></h3>
                      <div className="meta">
                        <span className="date">2024</span>
                        <span className="tag">Spritual</span>
                      </div>
                    </div>
                  </div>
                  <div className="work-box">
                    <div className="thumb">
                      <div className="image " data-cursor-text="View Project"> 
                        <a href="portfolio-details.html"><img className='h-[350px] scale' src="/imgs/image-3.webp" alt="image"/></a>
                      </div>
                    </div>
                    <div className="content px-14">
                      <h3 className="title"><a href="portfolio-details.html">BookStore-App</a></h3>
                      <div className="meta">
                        <span className="date">2025</span>
                        <span className="tag">mobile app</span>
                      </div>
                    </div>
                  </div>
                  <div className="work-box">
                    <div className="thumb">
                      <div className="image " data-cursor-text="View Project">
                        <a href="portfolio-details.html"><img className='h-[350px] scale' src="/imgs/weather.png" alt="image"/></a>
                      </div>
                    </div>
                    <div className="content">
                      <h3 className="title"><a href="portfolio-details.html">Weather site</a></h3>
                      <div className="meta">
                        <span className="date">2024</span>
                        <span className="tag">better-ui</span>
                      </div>
                    </div>
                  </div>
                </div>
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
      
        </section>
  
  )
}

export default projects

{/* <motion.div    
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
                        <ScrollWidthBox img={"book-store.png"}/>
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
                        <ScrollWidthBox img={"wedaseMariam.png"}/>             
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
                         <ScrollWidthBox img={"betterauth-ui.png"}/>
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
                         <ScrollWidthBox img={"weather.png"}/>
                        </div>      
                      </div>
                    </div>
    </motion.div>*/}