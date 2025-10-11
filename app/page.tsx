
import '@/app/globals.css'
import Script from "next/script";

export default function Home() {
  
  return (
   <>
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

      {/* Custom Scripts */}
      <Script src="/assets/js/magiccursor.js" strategy="afterInteractive" />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />

     <div className="bg-black relative text-white ">
        <div className="header text-white flex justify-between m-4 mt-0 pt-4">
        <div className="leftHeader flex items-center gap-5">
          <img src="/imgs/code.png" alt="Code icon" width="40" height="40" />
          <p className="whatRU sm:text-xl">Web-Developer</p>
        </div>
        <div className="rightHeader">
          <div className="menuOverlay absolute top-0 left-0 w-full h-screen bg-burgandy flex justify-center items-center clip">
            <div className="absolute top-4 left-3 right-3 header text-white flex justify-between">
              <div className="leftHeader flex items-center gap-5">
                <img src="/imgs/code.png" alt="Code icon" width="40" height="40" />
                <p className="whatRU sm:text-xl">Web-Developer</p>
              </div>
              <div className="rightHeader flex justify-center items-center">
                <button className="menuButton">
                  <img src="/imgs/cross-mark.png" alt="Close menu" width="30" height="30" />
                </button>
              </div>
            </div>
            <ul className="nav flex flex-col justify-center items-center gap-4 text-white text-3xl font-bold">
              <li><a href="#Home">Home</a></li>
              <li><a href="#Home">About</a></li> {/* Consider changing href to #about if that's the intended section */}
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <button className="menuButton">
            <img src="/imgs/menu.png" alt="Open menu" width="40" height="40" />
          </button>
        </div>
        </div>
        <div className="main md:ml-16 md:mr-16">
        <div
        id="Home"
        className="top m-5 flex flex-col justify-center gap-10 md:h-screen md:items-center mb-20 md:flex-row md:justify-between md:gap-24 lg:gap-64 bg-none md:bg-profile bg-no-repeat bg-center md:m-0 md:-ml-14 md:-mr-14"
        >
        <div className="intro mt-20">
          <hr className="border-2 w-32 mb-5" />
          <p className="who text-start">
            <span className="text-4xl font-bold">Shalom!, I'm Tsinat</span>
            <br />
            I am a junior web developer who loves to work on client-based web applications and looks forward to solving human problems through the web.
          </p>
          <a href="#wait">
            <img className="m-5 mt-10" src="/imgs/chevron-double-down.png" alt="Scroll down" width="40" height="40" />
          </a>
        </div>
        <div className="flex flex-col gap-10">
            <div className="aboutnav">
                <p className="text-start mb-5">
                <span className="font-bold text-2xl">About Me</span>
                <br />
                <br />
                My name is Tsinat Yilma. I'm a 21-year-old software engineering student at Addis Ababa University. I started my programming journey when I{" "}
                <a href="#" className="text-[12px]">. . . more</a>
                </p>
                <a href="#wait">
                <button className="flex gap-5 items-center">
                    MORE <img src="/imgs/down.png" alt="More about me" width="20" height="20" />
                </button>
                </a>
            </div>
            <div className="aboutnav">
                <p className="text-start mb-5">
                <span className="font-bold text-2xl">My Work</span>
                <br />
                <br />
                You can see some of my recent projects. Navigate to the projects section using the link below.
                </p>
                <a href="#projects">
                <button className="flex gap-5 items-center">
                    MORE <img src="/imgs/down.png" alt="See projects" width="20" height="20" />
                </button>
                </a>
            </div>
            </div>
        </div>
        <div className="m-5 mb-20" id="wait">
            <h2 className="flex font-bold mb-8 text-2xl lefty">
            <img src="/imgs/slash.png" alt="Slash icon" width="30" height="30" />
            Skills and Tools
        </h2>
        <section className="client-area-service-page border-2 border-white">
              <div className="container large">
                <div className="client-area-inner section-spacing-top">
                  <div className="section-content fade-anim">
                    <div className="section-title-wrapper">
                      <div className="title-wrapper">
                        <h2 className="section-title font-sequelsans-romanbody">
                          <span>Client:</span> Helping brands to grow and say their success stories to the world.
                        </h2>
                      </div>
                    </div>
                    <div className="text-wrapper">
                      <p className="text">
                        We’re a great team of creatives with a strongest capabilities to helping progressive fields achieve their goals. With the best talent on every project done successfully
                      </p>
                    </div>
                  </div>
                  <div className="client-capsule-wrapper-box fade-animation" data-t-throwable-scene="false">
                    <div className="client-capsule-wrapper ">
                    <p data-t-throwable-el="">
                      <span className="client-box ">
                        <img src="assets/imgs/client/client-9.webp"  alt="img"/>
                      </span>
                    </p>
                    <p data-t-throwable-el="">
                      <span className="client-box">
                        <img src="assets/imgs/client/client-10.webp"  alt="img"/>
                      </span>
                    </p>
                    <p data-t-throwable-el="">
                      <span className="client-box">
                        <img src="assets/imgs/client/client-11.webp"  alt="img"/>
                      </span>
                    </p>
                    <p data-t-throwable-el="">
                      <span className="client-box">
                        <img src="assets/imgs/client/client-12.webp"  alt="img"/>
                      </span>
                    </p>
                    <p data-t-throwable-el="">
                      <span className="client-box">
                        <img src="assets/imgs/client/client-13.webp"  alt="img"/>
                      </span>
                    </p>
                    <p data-t-throwable-el="">
                      <span className="client-box">
                        <img src="assets/imgs/client/client-14.webp"  alt="img"/>
                      </span>
                    </p>
                    <p data-t-throwable-el="">
                      <span className="client-box">
                        <img src="assets/imgs/client/client-15.webp"  alt="img"/>
                      </span>
                    </p>
                    <p data-t-throwable-el="">
                      <span className="client-box">
                        <img src="assets/imgs/client/client-16.webp"  alt="img"/>
                      </span>
                    </p>
                    <p data-t-throwable-el="">
                      <span className="client-box">
                        <img src="assets/imgs/client/client-17.webp"  alt="img"/>
                      </span>
                    </p>
                    <p data-t-throwable-el="">
                      <span className="client-box">
                        <img src="assets/imgs/client/client-18.webp"  alt="img"/>
                      </span>
                    </p>
                    <p data-t-throwable-el="">
                      <span className="client-box">
                        <img src="assets/imgs/client/client-19.webp"  alt="img"/>
                      </span>
                    </p>
                    <p data-t-throwable-el="">
                      <span className="client-box">
                        <img src="assets/imgs/client/client-20.webp"  alt="img"/>
                      </span>
                    </p>
                    <p data-t-throwable-el="">
                      <span className="client-box">
                        <img src="assets/imgs/client/client-21.webp"  alt="img"/>
                      </span>
                    </p>
                    <p data-t-throwable-el="">
                      <span className="client-box ">
                        <img src="assets/imgs/client/client-22.webp"  alt="img"/>
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
            </div>
            <div className="m-5" id="projects">
        <h2 className="flex font-bold mb-8 text-2xl">
        <img src="/imgs/slash.png" alt="Slash icon" width="30" height="30" />
        My Works
        </h2>
      
        <div className="projects rounded flex flex-col sm:grid sm:grid-cols-2 gap-14">
        {/* Project 1 */}
        <div className="flex flex-col righty">
          <div className="flex flex-col justify-around bg-burgandy">
            <div className="flex items-center justify-center gap-2">
              <img src="/imgs/startup.png" alt="Startup icon" className="w-6 h-6" />
              <p className="font-bold text-xl">Space X</p>
            </div>
            <div className="m-5">
              <img src="/imgs/spaceX.png" alt="SpaceX project" className="rounded" />
            </div>
          </div>
          <div className="description">
            <h3 className="mb-5 mt-5 text-xl">Space Tourism Website</h3>
            <p className="text-start">
              I successfully built the multi-page space tourism website. It’s fully responsive, allows seamless toggling between tabs, and includes hover states for all interactive elements.
            </p>
            <div className="flex gap-7 mt-5">
              <div className="flex items-center text-[20px]">
                <a className="hover:border-b-[1px] border-white" href="">Live</a>
                <a href=""><img src="/imgs/diagonal-arrow.png" className="w-5 h-5 ml-1" alt="Live arrow" /></a>
              </div>
              <div className="flex items-center text-[20px]">
                <a className="hover:border-b-[1px] border-white" href="">Github</a>
                <a href=""><img src="/imgs/diagonal-arrow.png" className="w-5 h-5 ml-1" alt="GitHub arrow" /></a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="flex flex-col lefty">
          <div className="flex flex-col justify-around bg-burgandy">
            <div className="flex items-center justify-center gap-2">
              <img src="/imgs/sneakers.png" alt="Sneaker icon" className="w-6 h-6" />
              <p className="font-bold text-xl">Sneaker Market</p>
            </div>
            <div className="m-5">
              <img src="/imgs/sneakerpic.png" alt="Sneaker project" className="rounded" />
            </div>
          </div>
          <div className="description">
            <h3 className="mb-5 mt-5 text-xl">Online Sneaker Market</h3>
            <p className="text-start">
              I efficiently built the multi-page sneaker market website. It’s fully responsive, allows seamless toggling between tabs, and includes hover states for all interactive elements.
            </p>
            <div className="flex gap-7 mt-5">
              <div className="flex items-center text-[20px]">
                <a className="hover:border-b-[1px] border-white" href="">Live</a>
                <a href=""><img src="/imgs/diagonal-arrow.png" className="w-5 h-5 ml-1" alt="Live arrow" /></a>
              </div>
              <div className="flex items-center text-[20px]">
                <a className="hover:border-b-[1px] border-white" href="">Github</a>
                <a href=""><img src="/imgs/diagonal-arrow.png" className="w-5 h-5 ml-1" alt="GitHub arrow" /></a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className="flex flex-col lefty md:righty">
          <div className="flex flex-col justify-around bg-burgandy">
            <div className="flex items-center justify-center gap-2">
              <img src="/imgs/weathericon.png" alt="Weather icon" className="w-6 h-6" />
              <p className="font-bold text-xl">Weather Boy</p>
            </div>
            <div className="m-5">
              <img src="/imgs/weather.png" alt="Weather project" className="rounded" />
            </div>
          </div>
          <div className="description">
            <h3 className="mb-5 mt-5 text-xl">Weather App</h3>
            <p className="text-start">
              I skillfully built a web page that fetches weather data from a weather API, based on either the user's location or a user-inputted location. The page displays current weather conditions, temperature, and other key details clearly and interactively.
            </p>
            <div className="flex gap-7 mt-5">
              <div className="flex items-center text-[20px]">
                <a className="hover:border-b-[1px] border-white" href="">Live</a>
                <a href=""><img src="/imgs/diagonal-arrow.png" className="w-5 h-5 ml-1" alt="Live arrow" /></a>
              </div>
              <div className="flex items-center text-[20px]">
                <a className="hover:border-b-[1px] border-white" href="">Github</a>
                <a href=""><img src="/imgs/diagonal-arrow.png" className="w-5 h-5 ml-1" alt="GitHub arrow" /></a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 4 */}
        <div className="flex flex-col righty md:lefty">
          <div className="flex flex-col justify-around bg-burgandy">
            <div className="flex items-center justify-center gap-2">
              <img src="/imgs/stopW.png" alt="Stopwatch icon" className="w-6 h-6" />
              <p className="font-bold text-xl">Stop Watch</p>
            </div>
            <div className="m-5">
              <img src="/imgs/stopwatch.png" alt="Stopwatch project" className="rounded" />
            </div>
          </div>
          <div className="description anime">
            <h3 className="mb-5 mt-5 text-xl">Stop Watch Web Application</h3>
            <p className="text-start">
              I efficiently built a stopwatch web application using HTML, CSS, and JavaScript. It includes functionalities for starting, pausing, resetting, and tracking lap times, allowing users to measure and record time intervals with ease. The result is an interactive, intuitive, and user-friendly tool.
            </p>
            <div className="flex gap-7 mt-5">
              <div className="flex items-center text-[20px]">
                <a className="hover:border-b-[1px] border-white" href="">Live</a>
                <a href=""><img src="/imgs/diagonal-arrow.png" className="w-5 h-5 ml-1" alt="Live arrow" /></a>
              </div>
              <div className="flex items-center text-[20px]">
                <a className="hover:border-b-[1px] border-white" href="">Github</a>
                <a href=""><img src="/imgs/diagonal-arrow.png" className="w-5 h-5 ml-1" alt="GitHub arrow" /></a>
              </div>
            </div>
          </div>
        </div>
        </div>
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
   </>
  )
}
