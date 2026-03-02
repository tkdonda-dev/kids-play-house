// useDecoParallax.js
// Applies random Y-axis parallax scroll animations to all .deco__item elements using GSAP ScrollTrigger.

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useDecoParallax = () => {
    useEffect(() => {
        const decoItems = document.querySelectorAll('.deco__item');
        const triggers = [];

        decoItems.forEach((item) => {
            const randomY = Math.random() * 100 - 50;

            const tween = gsap.to(item, {
                yPercent: randomY,
                scrollTrigger: {
                    trigger: item,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            if (tween.scrollTrigger) {
                triggers.push(tween.scrollTrigger);
            }
        });

        return () => {
            triggers.forEach((t) => t.kill());
        };
    }, []);
};

export default useDecoParallax;
