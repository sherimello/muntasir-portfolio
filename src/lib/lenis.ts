import Lenis from "@studio-freight/lenis";

let lenisInstance: Lenis | null = null;

export const initLenis = () => {
  if (typeof window === "undefined") return;
  
  lenisInstance = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time: number) {
    lenisInstance?.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return lenisInstance;
};

export const getLenis = () => lenisInstance;

export const scrollTo = (target: string | number | HTMLElement) => {
  lenisInstance?.scrollTo(target);
};
