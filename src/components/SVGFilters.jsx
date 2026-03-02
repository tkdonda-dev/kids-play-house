// SVGFilters.jsx
// Contains all 7 SVG filter definitions for the goo/distortion effects.
// These must be rendered in the DOM for the CSS filter references to work.

const SVGFilters = () => {
    return (
        <svg className="hidden" aria-hidden="true">
            <defs>
                <filter id="goo-1">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
                    <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  1 0 1 0 0  0 0 0 13 -6"
                        result="goo"
                    />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>

                <filter id="goo-2">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
                    <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  1 0 1 0 0  0 0 0 12 -4"
                        result="goo"
                    />
                    <feTurbulence type="turbulence" baseFrequency="1" numOctaves="1" seed="2" result="noise" />
                    <feDisplacementMap in="goo" in2="noise" scale="0" result="displacement" />
                    <feComposite in="SourceGraphic" in2="displacement" operator="atop" />
                </filter>

                <filter id="goo-3">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
                    <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  1 0 1 0 0  0 0 0 15 -8"
                        result="goo"
                    />
                    <feTurbulence type="fractalNoise" baseFrequency="0.1 0.5" numOctaves="5" seed="2" result="noise" />
                    <feDisplacementMap in="goo" in2="noise" scale="0" result="displacement" />
                    <feComposite in="SourceGraphic" in2="displacement" operator="atop" />
                </filter>

                <filter id="goo-4">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
                    <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                        result="goo"
                    />
                    <feTurbulence type="fractalNoise" baseFrequency="1 0.01" numOctaves="1" seed="1" result="noise" />
                    <feDisplacementMap in="goo" in2="noise" scale="0" result="displacement" />
                    <feComposite in="SourceGraphic" in2="displacement" operator="atop" />
                </filter>

                <filter id="goo-5">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
                    <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 14 -1"
                        result="goo"
                    />
                    <feTurbulence type="fractalNoise" baseFrequency="0.009 1" numOctaves="1" seed="1" result="noise" />
                    <feDisplacementMap in="goo" in2="noise" scale="0" result="displacement" />
                    <feComposite in="SourceGraphic" in2="displacement" operator="atop" />
                </filter>

                <filter id="goo-6">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
                    <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  1 0 1 0 0  0 0 0 12 -8"
                        result="goo"
                    />
                    <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="1" seed="1" result="noise" />
                    <feDisplacementMap in="goo" in2="noise" scale="0" result="displacement" />
                    <feComposite in="SourceGraphic" in2="displacement" operator="atop" />
                </filter>

                <filter id="goo-7">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
                    <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -5"
                        result="goo"
                    />
                    <feTurbulence type="fractalNoise" baseFrequency="0.07 0.3" numOctaves="1" seed="1" result="noise" />
                    <feDisplacementMap in="goo" in2="noise" scale="0" result="displacement" />
                    <feComposite in="SourceGraphic" in2="displacement" operator="atop" />
                </filter>
            </defs>
        </svg>
    );
};

export default SVGFilters;
