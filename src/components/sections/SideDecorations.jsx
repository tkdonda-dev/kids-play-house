import React from 'react';

const decorations = [
    { id: 1, side: 'right', top: '10%', src: '/img/SideDecorations/black-cat-right.png', alt: 'Cat Right', width: 280 },
    { id: 1, side: 'left', top: '41%', src: '/img/SideDecorations/tree-doth-left.png', alt: 'Tree Left', width: 280 },
    { id: 2, side: 'right', top: '74%', src: '/img/SideDecorations/monkey-right.png', alt: 'Monkey Right', width: 280 },
    { id: 3, side: 'left', top: '56%', src: '/img/SideDecorations/bear-in-tree-left.png', alt: 'Bear Left', width: 280 },
    { id: 5, side: 'right', top: '89%', src: '/img/SideDecorations/snake-right.png', alt: 'Snake Right', width: 280 },
];

const SideDecorations = () => {
    return (
        <div className="side-decorations-container">
            {decorations.map((deco) => (
                <div
                    key={deco.id}
                    className={`side-deco-item deco-${deco.side} gsap-reveal`}
                    style={{
                        top: deco.top,
                        left: deco.side === 'left' ? '0px' : 'auto',
                        right: deco.side === 'right' ? '0px' : 'auto',
                    }}
                >
                    <img
                        src={deco.src}
                        alt={deco.alt}
                        className="side-animal-img"
                        style={{ width: deco.width, height: 'auto', display: 'block' }}
                    />
                </div>
            ))}
        </div>
    );
};

export default SideDecorations;
