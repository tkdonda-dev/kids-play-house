// useFilterAnimations.js
// Initializes all scroll-triggered SVG filter animations for each text element
// that has data-filter and data-script attributes.

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── Filter Animation Runners ─────────────────────────────────────────────────

function runFilter1(text) {
    const filterId = text.getAttribute('data-filter');
    const feBlur = document.querySelector(`#${filterId} feGaussianBlur`);
    if (!feBlur) return;

    text.style.filter = `url(#${filterId})`;
    gsap.set(text, { opacity: 0 });

    let primitiveValues = { stdDeviation: 0 };

    const tl = gsap.timeline({
        defaults: { duration: 2, ease: 'expo' },
        onUpdate: () => feBlur.setAttribute('stdDeviation', primitiveValues.stdDeviation),
        scrollTrigger: { trigger: text, start: 'center bottom' },
    })
        .to(primitiveValues, { startAt: { stdDeviation: 50 }, stdDeviation: 0 }, 0)
        .to(text, { startAt: { opacity: 0 }, opacity: 1 }, 0);

    const btn = text.nextElementSibling;
    if (btn?.classList.contains('replay')) btn.addEventListener('click', () => tl.restart());
    return tl;
}

function runFilter2(text) {
    const filterId = text.getAttribute('data-filter');
    const feBlur = document.querySelector(`#${filterId} feGaussianBlur`);
    const feTurbulence = document.querySelector(`#${filterId} feTurbulence`);
    const feDisplacementMap = document.querySelector(`#${filterId} feDisplacementMap`);
    if (!feBlur || !feDisplacementMap) return;

    text.style.filter = `url(#${filterId})`;
    gsap.set(text, { opacity: 0 });

    let primitiveValues = { stdDeviation: 0, scale: 0, baseFrequency: 0 };

    const tl = gsap.timeline({
        defaults: { duration: 2, ease: 'expo' },
        onUpdate: () => {
            feBlur.setAttribute('stdDeviation', primitiveValues.stdDeviation);
            feDisplacementMap.setAttribute('scale', primitiveValues.scale);
            feTurbulence.setAttribute('baseFrequency', primitiveValues.baseFrequency);
        },
        scrollTrigger: { trigger: text, start: 'center bottom' },
    })
        .to(primitiveValues, {
            startAt: { stdDeviation: 20, scale: 100, baseFrequency: 0.1 },
            stdDeviation: 0, scale: 0, baseFrequency: 0.05,
        }, 0)
        .to(text, { startAt: { opacity: 0 }, opacity: 1 }, 0);

    const btn = text.nextElementSibling;
    if (btn?.classList.contains('replay')) btn.addEventListener('click', () => tl.restart());
    return tl;
}

function runFilter3(text) {
    const filterId = text.getAttribute('data-filter');
    const feBlur = document.querySelector(`#${filterId} feGaussianBlur`);
    const feDisplacementMap = document.querySelector(`#${filterId} feDisplacementMap`);
    if (!feBlur || !feDisplacementMap) return;

    text.style.filter = `url(#${filterId})`;
    gsap.set(text, { opacity: 0 });

    let primitiveValues = { stdDeviation: 0, scale: 0 };

    const tl = gsap.timeline({
        defaults: { duration: 2, ease: 'power4' },
        onUpdate: () => {
            feBlur.setAttribute('stdDeviation', primitiveValues.stdDeviation);
            feDisplacementMap.setAttribute('scale', primitiveValues.scale);
        },
        scrollTrigger: { trigger: text, start: 'center bottom' },
    })
        .to(primitiveValues, {
            startAt: { stdDeviation: 40, scale: 150 },
            stdDeviation: 0, scale: 0,
        }, 0)
        .to(text, { startAt: { opacity: 0, scale: 0.9 }, opacity: 1, scale: 1 }, 0);

    const btn = text.nextElementSibling;
    if (btn?.classList.contains('replay')) btn.addEventListener('click', () => tl.restart());
    return tl;
}

function runFilter4(text) {
    const filterId = text.getAttribute('data-filter');
    const feBlur = document.querySelector(`#${filterId} feGaussianBlur`);
    const feDisplacementMap = document.querySelector(`#${filterId} feDisplacementMap`);
    if (!feBlur || !feDisplacementMap) return;

    text.style.filter = `url(#${filterId})`;
    gsap.set(text, { opacity: 0 });

    let primitiveValues = { stdDeviation: 0, scale: 0 };

    const tl = gsap.timeline({
        defaults: { duration: 2, ease: 'expo' },
        onUpdate: () => {
            feBlur.setAttribute('stdDeviation', primitiveValues.stdDeviation);
            feDisplacementMap.setAttribute('scale', primitiveValues.scale);
        },
        scrollTrigger: { trigger: text, start: 'center bottom' },
    })
        .to(primitiveValues, {
            startAt: { stdDeviation: 70, scale: 200 },
            stdDeviation: 0, scale: 0,
        }, 0)
        .to(text, { startAt: { opacity: 0 }, opacity: 1 }, 0);

    const btn = text.nextElementSibling;
    if (btn?.classList.contains('replay')) btn.addEventListener('click', () => tl.restart());
    return tl;
}

function runFilter5(text) {
    const filterId = text.getAttribute('data-filter');
    const feBlur = document.querySelector(`#${filterId} feGaussianBlur`);
    const feDisplacementMap = document.querySelector(`#${filterId} feDisplacementMap`);
    if (!feBlur || !feDisplacementMap) return;

    text.style.filter = `url(#${filterId})`;
    gsap.set(text, { opacity: 0 });

    let primitiveValues = { stdDeviation: 0, scale: 0 };

    const tl = gsap.timeline({
        defaults: { duration: 1.7, ease: 'expo' },
        onUpdate: () => {
            feBlur.setAttribute('stdDeviation', primitiveValues.stdDeviation);
            feDisplacementMap.setAttribute('scale', primitiveValues.scale);
        },
        scrollTrigger: { trigger: text, start: 'center bottom' },
    })
        .to(primitiveValues, {
            startAt: { stdDeviation: 40, scale: 100 },
            stdDeviation: 0, scale: 0,
        }, 0)
        .to(text, { startAt: { opacity: 0, scale: 0.6 }, opacity: 1, scale: 1 }, 0);

    const btn = text.nextElementSibling;
    if (btn?.classList.contains('replay')) btn.addEventListener('click', () => tl.restart());
    return tl;
}

function runFilter6(text) {
    const filterId = text.getAttribute('data-filter');
    const feBlur = document.querySelector(`#${filterId} feGaussianBlur`);
    const feTurbulence = document.querySelector(`#${filterId} feTurbulence`);
    const feDisplacementMap = document.querySelector(`#${filterId} feDisplacementMap`);
    if (!feBlur || !feDisplacementMap) return;

    text.style.filter = `url(#${filterId})`;
    gsap.set(text, { opacity: 0 });

    let primitiveValues = { stdDeviation: 0, scale: 0, baseFrequency: 0 };

    const tl = gsap.timeline({
        defaults: { duration: 2, ease: 'expo' },
        onUpdate: () => {
            feBlur.setAttribute('stdDeviation', primitiveValues.stdDeviation);
            feDisplacementMap.setAttribute('scale', primitiveValues.scale);
            feTurbulence.setAttribute('baseFrequency', primitiveValues.baseFrequency);
        },
        scrollTrigger: { trigger: text, start: 'center bottom' },
    })
        .to(primitiveValues, {
            startAt: { stdDeviation: 90, scale: 300, baseFrequency: 0.1 },
            stdDeviation: 0, scale: 0, baseFrequency: 0.01,
        }, 0)
        .to(text, { startAt: { opacity: 0, scaleX: 2.4 }, opacity: 1, scaleX: 1 }, 0);

    const btn = text.nextElementSibling;
    if (btn?.classList.contains('replay')) btn.addEventListener('click', () => tl.restart());
    return tl;
}

function runFilter7(text) {
    const filterId = text.getAttribute('data-filter');
    const feBlur = document.querySelector(`#${filterId} feGaussianBlur`);
    const feDisplacementMap = document.querySelector(`#${filterId} feDisplacementMap`);
    if (!feBlur || !feDisplacementMap) return;

    text.style.filter = `url(#${filterId})`;
    gsap.set(text, { opacity: 0 });

    let primitiveValues = { stdDeviation: 0, scale: 0 };

    const tl = gsap.timeline({
        defaults: { duration: 1.6, ease: 'expo' },
        onUpdate: () => {
            feBlur.setAttribute('stdDeviation', primitiveValues.stdDeviation);
            feDisplacementMap.setAttribute('scale', primitiveValues.scale);
        },
        scrollTrigger: { trigger: text, start: 'center bottom' },
    })
        .to(primitiveValues, {
            startAt: { stdDeviation: 35, scale: 250 },
            stdDeviation: 0, scale: 0,
        }, 0)
        .to(text, {
            duration: 1.3,
            startAt: { opacity: 0, scale: 0.8, yPercent: 20 },
            opacity: 1, scale: 1, yPercent: 0,
        }, 0);

    const btn = text.nextElementSibling;
    if (btn?.classList.contains('replay')) btn.addEventListener('click', () => tl.restart());
    return tl;
}

// ─── Map script name → runner ─────────────────────────────────────────────────

const filterRunners = {
    filter1: runFilter1,
    filter2: runFilter2,
    filter3: runFilter3,
    filter4: runFilter4,
    filter5: runFilter5,
    filter6: runFilter6,
    filter7: runFilter7,
};

// ─── Hook ─────────────────────────────────────────────────────────────────────

const useFilterAnimations = () => {
    useEffect(() => {
        const elements = [...document.querySelectorAll('[data-filter]')];
        const timelines = [];

        elements.forEach((el) => {
            const scriptName = el.getAttribute('data-script');
            const runner = filterRunners[scriptName];
            if (runner) {
                const tl = runner(el);
                if (tl) timelines.push(tl);
            }
        });

        return () => {
            timelines.forEach((tl) => {
                tl.scrollTrigger?.kill();
                tl.kill();
            });
        };
    }, []);
};

export default useFilterAnimations;
