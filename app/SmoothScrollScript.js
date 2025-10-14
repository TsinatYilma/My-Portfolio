import gsap from "gsap"
import { ScrollSmoother, ScrollTrigger } from "gsap/all"
let smother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    effects: true
})

gsap.to('.img-smooth', {
    rotate: 360,
    scrollTrigger:{
        trigger: '.img-smooth',
        markers: true,

    }
})