// DecoGrid.jsx
// Renders the decorative background image grid with parallax applied via GSAP.

const decoImages = [
    'img/12.jpg', 'img/9.jpg', 'img/3.jpg', 'img/1.jpg', 'img/5.jpg',
    'img/4.jpg', 'img/6.jpg', 'img/7.jpg', 'img/2.jpg', 'img/8.jpg',
    'img/11.jpg', 'img/10.jpg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg',
    'img/16.jpg', 'img/17.jpg', 'img/18.jpg', 'img/19.jpg', 'img/20.jpg',
    'img/21.jpg', 'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg',
    'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg',
    'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg',
    'img/15.jpg', 'img/16.jpg', 'img/17.jpg', 'img/18.jpg', 'img/19.jpg',
    'img/20.jpg', 'img/21.jpg',
];

const DecoGrid = () => {
    return (
        <div className="deco">
            {decoImages.map((src, i) => (
                <div
                    key={i}
                    className="deco__item"
                    style={{ backgroundImage: `url(${src})` }}
                />
            ))}
        </div>
    );
};

export default DecoGrid;
