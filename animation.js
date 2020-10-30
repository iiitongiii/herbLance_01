
gsap.registerPlugin(ScrollTrigger)

gsap.from(".aboutUs_inner", {
    x:"-100vw",
    opacity:0,
    duration:2, 
    scrollTrigger: {
        trigger:".aboutUs_inner",
        start: "top 90%",
        end: "+=100",
        toggleActions: "play play play reverse",
        // markers:true,
    }
})

gsap.from(".img_handAndPlant, .img_makingHerb" , {
    x:"100vw",
    opacity:0,
    duration:3, 
    scrollTrigger: {
        trigger:".aboutUs_inner",
        start: "top 70%",
        end: "+=100",
        toggleActions: "play play play reverse",
        // pin:true,
        // pinSpacing:false
    }
})