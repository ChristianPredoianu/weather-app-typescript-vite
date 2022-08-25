import gsap from 'gsap';

export function animateApp() {
  const tl = gsap.timeline({ duration: 0.1 });
  tl.from('#location', { x: 100, opacity: 0 });
  tl.from('#weather-icon', { opacity: 0 });
  tl.from('#degrees-div', { opacity: 0 });
  tl.from('#additional-weather-info', { y: 100, opacity: 0 });
  tl.from('.info-card', { y: 100, stagger: 0.5, opacity: 0, rotate: 10 });
}
