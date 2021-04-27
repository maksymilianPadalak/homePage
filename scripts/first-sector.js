gsap.registerPlugin(ScrollTrigger)

gsap.to('.first-sector-text-wrapper h1', {
  scrollTrigger: { trigger: ".first-sector-text-wrapper h1", toggleActions: "restart pause none none"}, x: 300})

gsap.to('.first-sector-description-wrapper', {
  scrollTrigger: { trigger: ".first-sector-description-wrapper", toggleActions: "restart pause none none"}, display: "block", opacity: 1, duration: 3})

gsap.to('.first-sector-requirements-wrapper', {
  scrollTrigger: { trigger: ".first-sector-requirements-wrapper", start: "top center", toggleActions: "restart none none none"}, x: 1000})