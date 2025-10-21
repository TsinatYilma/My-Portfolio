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
        <div className="flex flex-col items-center text-center max-w-[1000px] ">
            <h2 id='introHead' className="title text-6xl font-bold text-gradient"
            >
                Shalom!, I'm The Developer  Your Are Looking For.</h2>
            <br />
            <p className="subtitle max-w-[600px] ">I am a junior web developer who loves to work on client-based web applications and looks forward to solving human problems through the web.</p>
        </div>
    </div>
  )
}

export default IntroText