import React from 'react'
import gsap from 'gsap/all'
import { SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'

const IntroText = () => {
    
    useGSAP(()=>{
        const paraSplit = new SplitText('.subtitle', {type: 'lines'})

        gsap.from("#introHead", {
            y: 50,
            scale: 0.95,
            duration: 1.5,
            ease: "power3.out"
          });
          

        
        gsap.from(paraSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,
        })

    })
  return (
    <div className="intro mt-20  ">
        <hr className="w-32 mb-5" />
        <div className="flex flex-col items-center text-center min-w-[1000px]  ">
            <h2 id='introHead' className="title  text-[4vw] font-bold text-gradient leading-tight "
            >
                Shalom!, I'm The Developer  You <br /> have been Looking For.</h2>
            <br />
            <p className="subtitle  text-[1vw] w-full">I am a junior web developer who loves to work on client-based <br /> web applications and  looks forward to solving human problems through the web.</p>
        </div>
    </div>
  )
}

export default IntroText