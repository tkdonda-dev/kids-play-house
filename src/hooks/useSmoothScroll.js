// useSmoothScroll.js
// Initializes Lenis smooth scroll and connects it with GSAP/ScrollTrigger.

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useSmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.2 });

        // Sync ScrollTrigger with Lenis scroll updates
        lenis.on('scroll', ScrollTrigger.update);

        // Add Lenis raf to GSAP ticker
        const tickerCallback = (time) => {
            lenis.raf(time * 1000);
        };
        gsap.ticker.add(tickerCallback);

        // Disable GSAP lag smoothing to avoid conflicts with Lenis
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(tickerCallback);
            lenis.destroy();
        };
    }, []);
};

export default useSmoothScroll;
