// BlogSection.jsx
const posts = [
    {
        tag: 'Parenting Tips',
        tagClass: 'blog-tag-orange',
        date: 'Feb 15, 2026',
        title: 'Supporting Your Toddler\'s Language Development At Home',
        excerpt: 'Simple everyday activities that can dramatically boost your child\'s vocabulary and communication skills.',
        author: 'Bhavna D.',
        authorEmoji: '👩‍🏫',
        imageEmoji: '📖',
        imageBg: 'var(--orange-light)',
    },
    {
        tag: 'Learning & Play',
        tagClass: 'blog-tag-blue',
        date: 'Feb 08, 2026',
        title: 'The Big Benefits Of Sensory Play For Young Children',
        excerpt: 'How sand, water, and texture-based play builds neural connections and develops fine motor skills.',
        author: 'Priya P.',
        authorEmoji: '👩‍🔬',
        imageEmoji: '🎭',
        imageBg: 'var(--blue-light)',
    },
    {
        tag: 'Nutrition',
        tagClass: 'blog-tag-green',
        date: 'Jan 30, 2026',
        title: 'Healthy Snack Ideas Kids Actually Love To Eat',
        excerpt: 'Tasty, nutritious snack recipes that are easy to prepare and keep kids energized all day long.',
        author: 'Neha S.',
        authorEmoji: '🧑‍🍳',
        imageEmoji: '🥗',
        imageBg: 'var(--green-light)',
    },
];

const BlogSection = () => {
    return (
        <section className="blog-section">
            <div className="container">
                <div className="text-center gsap-reveal">
                    <span className="section-tag">📝 Blog</span>
                    <h2 className="section-title">Explore Blogs And News!</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Resources, tips, and inspiration to support your child&apos;s growth and learning journey.
                    </p>
                </div>
            </div>

            <div className="blog-grid gsap-stagger">
                {posts.map((post, i) => (
                    <div key={i} className="blog-card">
                        <div className="blog-card-image" style={{ background: post.imageBg }}>
                            {post.imageEmoji}
                        </div>
                        <div className="blog-card-body">
                            <span className={`blog-card-tag ${post.tagClass}`}>{post.tag}</span>
                            <div className="blog-card-date">📅 {post.date}</div>
                            <div className="blog-card-title">{post.title}</div>
                            <div className="blog-card-excerpt">{post.excerpt}</div>
                            <div className="blog-card-footer">
                                <div className="blog-card-author">
                                    <span className="blog-card-author-avatar">{post.authorEmoji}</span>
                                    {post.author}
                                </div>
                                <a href="#" className="blog-read-more">Read More →</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;
