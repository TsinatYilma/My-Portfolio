import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollWidthBox from '../ScrollEffect'
import SmoothScroll from '../scrollSmother'
import { useGSAP } from '@gsap/react';

const Skills = () => {
   const { ref: sectionRef, inView } = useInView({
          triggerOnce: true,
          threshold: 0.2,
        });
  return (
    <motion.div    
              ref={sectionRef}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="rounded shadow  min-h-screen mt-32 border">
                  <div class="title-wrapper  px-44 ">
                    <h2 class="section-title font-instrumentsans-medium word-anim text-7xl font-instBold"><span className='text-[#A53B2F]'>Client:</span> Helping brands
                      to grow
                      and say their success stories to
                      the world.</h2>
                  </div>
                  <section className="client-area-service-page border  ">
                        <div className="container large  mx-auto border">
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
  )
}

export default Skills