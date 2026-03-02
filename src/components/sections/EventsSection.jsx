// EventsSection.jsx
const events = [
    {
        day: '15', month: 'Aug',
        category: 'Cultural Event',
        title: 'Independence Day Celebration',
        desc: 'Children learn about our great nation through music, dance, and cultural activities in traditional attire.',
        time: 'Aug 15 • 9:00 AM',
        image: '🇮🇳',
        bg: 'var(--orange-light)',
    },
    {
        day: '20', month: 'Nov',
        category: 'Sports Day',
        title: 'Annual Sports Meet',
        desc: 'Fun relay races, obstacle courses, and team-building games for holistic physical growth.',
        time: 'Nov 20 • 8:30 AM',
        image: '🏃',
        bg: 'var(--blue-light)',
    },
    {
        day: '10', month: 'Feb',
        category: 'Annual Gathering',
        title: 'Grand Annual Day',
        desc: 'A magnificent stage performance showcasing acts of our talented little stars to parents.',
        time: 'Feb 10 • 5:00 PM',
        image: '🎭',
        bg: 'var(--green-light)',
    },
];

const EventsSection = () => {
    return (
        <section className="events-section">
            <div className="container">
                <div className="text-center gsap-reveal">
                    <span className="section-tag">📅 Upcoming</span>
                    <h2 className="section-title">Ongoing Events!</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Exciting activities and events that make every day memorable at Kid&apos;s Play House.
                    </p>
                </div>
            </div>

            <div className="events-grid gsap-stagger">
                {events.map((ev, i) => (
                    <div key={i} className="event-card">
                        <div className="event-card-image" style={{ background: ev.bg }}>
                            <span style={{ fontSize: 72 }}>{ev.image}</span>
                            <div className="event-date-badge">
                                <span className="event-date-day">{ev.day}</span>
                                <span className="event-date-month">{ev.month}</span>
                            </div>
                        </div>
                        <div className="event-card-body">
                            <div className="event-card-category">{ev.category}</div>
                            <div className="event-card-title">{ev.title}</div>
                            <div className="event-card-desc">{ev.desc}</div>
                            <div className="event-card-meta">
                                <span>🕐 {ev.time}</span>
                                <a href="#">Read More →</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EventsSection;
