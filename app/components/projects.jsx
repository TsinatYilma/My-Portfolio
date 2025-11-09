import React from 'react'
import { useInView } from 'react-intersection-observer';
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
              duration: 2,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                end: "bottom top",
                toggleActions: "play reverse play reverse",
              },
            }
          );
         
        });
        gsap.from(".work-area-work-page",{
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".work-area-work-page",
            start: "top 60%",
            end: "bottom top",
          },
        }
      );
      });
  return (
  <section className="work-area-work-page ">
          <div className="work-area-work-page-inner">
            <div className="container large  text-center min-w-full">
              <div className="section-header fade-anim ">
                <div className="section-title-wrapper ">
                  <div className="subtitle-wrapper">
                    <span className="section-subtitle text-lg sm:text-[1.5vw]">Recent work</span>
                  </div>
                  <div className="title-wrapper text-[1.3vw]">
                    <h2 className="section-title  text-start font-instRegular text-sm sm:text-[4vw] leading-none  w-full">Creative works
                      with awsome output.</h2>
                  </div>
                </div>
              </div>
              <div className="section-content-wrapper fade-anim text-[1.3vw] text-gray-500">
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
                    <p className="text text-[1.3vw]">We take a comprehensive approach to the creation and development of brands. We
                      help local companies and services enter the market, and well-known brands expand an audience.
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div className="works-wrapper-box    flex-col sm:flex justify-center ">
              <div className="container large  min-w-full">
                <div className="works-wrapper-8  ">
                  <div className="work-box " data-cursor-text="View Project" onClick={() => window.open("https://github.com/TsinatYilma/book-store", "_blank")}>
                    <div className="thumb  " >
                      <div className="image "> 
                        <a href=""><img className='h-40 sm:h-[25vw]  scale' src="/imgs/book-store.png" alt="image"/></a>
                      </div>
                    </div>
                    <div className="content  sm:px-[4.5vw]">
                      <h3 className="title"><a href="portfolio-details.html">Book Store</a></h3>
                      <div className="meta">
                        <span className="date">2025</span>
                        <span className="tag">service</span>
                      </div>
                    </div>
                  </div>
                  <div className="work-box " data-cursor-text="View Project"  onClick={() => window.open("https://gsap-cpr.vercel.app/", "_blank")}>
                    <div className="thumb  ">
                      <div className="image  " >
                        <a href=""><img className='h-40 sm:h-[25vw] scale' src="/imgs/mojito.png" alt="image"/></a>
                      </div>
                    </div>
                    <div className="content">
                      <h3 className="title"><a href="">MOJITO</a></h3>
                      <div className="meta">
                        <span className="date">2025</span>
                        <span className="tag">Client App</span>
                      </div>
                    </div>
                  </div>
                  <div className="work-box " data-cursor-text="View Project"  onClick={() => window.open("https://better-auth.farmui.com", "_blank")}>
                    <div className="thumb  ">
                      <div className="image  " >
                        <a href=""><img className='h-40 sm:h-[25vw] scale' src="/imgs/betterauth-ui.png" alt="image"/></a>
                      </div>
                    </div>
                    <div className="content sm:px-[4.5vw]">
                      <h3 className="title"><a href="portfolio-details.html">BetterAuth-UI</a></h3>
                      <div className="meta">
                        <span className="date">2025</span>
                        <span className="tag">frontend</span>
                      </div>
                    </div>
                  </div>
                  <div className="work-box" data-cursor-text="View Project">
                    <div className="thumb">
                      <div className="image  " >
                        <a href="portfolio-details.html"><img className='h-40 sm:h-[25vw] scale' src="/imgs/image-5.webp" alt="image"/></a>
                      </div>
                    </div>
                    <div className="content ">
                      <h3 className="title"><a href="portfolio-details.html">Blog-It</a></h3>
                      <div className="meta">
                        <span className="date">2010</span>
                        <span className="tag">Marketing</span>
                      </div>
                    </div>
                  </div>
                  <div className="work-box" data-cursor-text="View Project" onClick={() => window.open("https://abiye-wedase.vercel.app/", "_blank")}>
                    <div className="thumb">
                      <div className="image " >
                        <a href=""><img className='h-40 sm:h-[25vw] scale' src="/imgs/wedaseMariam.png" alt="image"/></a>
                      </div>
                    </div>
                    <div className="content sm:px-[4.5vw]">
                      <h3 className="title"><a href="">Wedase Mariam Zema</a></h3>
                      <div className="meta">
                        <span className="date">2024</span>
                        <span className="tag">Spritual</span>
                      </div>
                    </div>
                  </div>
                  <div className="work-box" data-cursor-text="View Project" onClick={() => window.open("https://github.com/TsinatYilma/BookStoreApp", "_blank")}>
                    <div className="thumb">
                      <div className="image " > 
                        <a href=""><img className='h-40 sm:h-[25vw] scale' src="/imgs/bookstoreapp.png" alt="image"/></a>
                      </div>
                    </div>
                    <div className="content ">
                      <h3 className="title"><a href="https://github.com/TsinatYilma/BookStoreApp">BookStore-App</a></h3>
                      <div className="meta">
                        <span className="date">2025</span>
                        <span className="tag">mobile app</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
      
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