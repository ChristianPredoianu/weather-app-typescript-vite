import gsap from 'gsap';

const tl = gsap.timeline({ defaults: { duration: 0.4 } });

export function animateApp() {
  if (!tl.isActive()) {
    tl.from('#location', { x: 100, opacity: 0 });
    tl.from('#weather-icon', { opacity: 0 });
    tl.from('#degrees-div', { opacity: 0 });
    tl.from('#additional-weather-info', { y: 100, opacity: 0 });
    tl.from('.info-card', { y: 100, stagger: 0.1, opacity: 0, rotate: 10 });
  }
}
