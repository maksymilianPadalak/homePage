gsap.registerPlugin(ScrollTrigger)

gsap.to('.second-sector-text-wrapper h1', {
  scrollTrigger: { trigger: ".second-sector-text-wrapper h1", toggleActions: "play complete reverse reset"}, opacity: 1, duration: 2 })

gsap.to('.second-sector-text-wrapper p', {
  scrollTrigger: { trigger: ".second-sector-text-wrapper p", toggleActions: "play complete reverse reset"}, opacity: 1, duration: 2, delay: 1})  
  
