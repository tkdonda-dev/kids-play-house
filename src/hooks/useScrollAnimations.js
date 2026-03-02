// useScrollAnimations.js
// GSAP ScrollTrigger reveal animations for the nursery school website.
// Soft fade + slide-up with gentle bounce easing.

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimations = () => {
    useEffect(() => {
        // Small delay to ensure DOM is painted after React render
        const timer = setTimeout(() => {
            // ── Reveal elements ────────────────────────────────────
            const revealEls = gsap.utils.toArray('.gsap-reveal');

            revealEls.forEach((el) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 50, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1.2,
                        ease: 'elastic.out(1, 0.75)',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 88%',
                            once: true,
                        },
                    }
                );
            });

            // ── Stagger children ───────────────────────────────────
            const staggerContainers = gsap.utils.toArray('.gsap-stagger');

            staggerContainers.forEach((container) => {
                const children = container.children;
                gsap.fromTo(
                    children,
                    { opacity: 0, y: 40, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1.0,
                        ease: 'elastic.out(1, 0.8)',
                        stagger: 0.12,
                        scrollTrigger: {
                            trigger: container,
                            start: 'top 85%',
                            once: true,
                        },
                    }
                );
            });

            // ── Hero elements (immediate, no scroll) ───────────────
            gsap.fromTo(
                '.hero-text-anim',
                { opacity: 0, y: 30, scale: 0.98 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: 'back.out(1.4)',
                    stagger: 0.15,
                }
            );

            // ── Hero visual parallax ───────────────────────────────
            const heroVisual = document.querySelector('.hero-visual');
            if (heroVisual) {
                gsap.to(heroVisual, {
                    yPercent: -15,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.hero',
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1,
                    },
                });
            }

            // ── Progress bars (animated on scroll) ─────────────────
            const progressFills = document.querySelectorAll('.progress-fill');
            progressFills.forEach((fill) => {
                const target = fill.dataset.width || '80%';
                gsap.fromTo(
                    fill,
                    { width: '0%' },
                    {
                        width: target,
                        duration: 1.5,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: fill,
                            start: 'top 90%',
                            once: true,
                        },
                    }
                );
            });
        }, 100);

        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);
};

export default useScrollAnimations;
