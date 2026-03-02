// Contact.jsx — Contact Us page
import { useState } from 'react';
import PromoBannerSection from '../components/sections/PromoBannerSection';
import useScrollAnimations from '../hooks/useScrollAnimations';
import useSmoothScroll from '../hooks/useSmoothScroll';

const contactDetails = [
    {
        emoji: '📍',
        bg: 'var(--orange-light)',
        title: 'Visit Our School',
        info: 'Mota Varachha, Surat\nGujarat-394101, India',
    },
    {
        emoji: '📞',
        bg: 'var(--blue-light)',
        title: 'Call Us Anytime',
        info: '+91 9924107219\nWhatsApp Available',
    },
    {
        emoji: '✉️',
        bg: 'var(--green-light)',
        title: 'Send An Email',
        info: 'kidsplayhouse@gmail.com\nAdmissions Inquiry',
    },
    {
        emoji: '🕐',
        bg: 'var(--yellow-light)',
        title: 'Opening Hours',
        info: 'Mon – Sat: 8:00am – 4:00pm\nSunday Closed',
    },
];

const Contact = () => {
    useSmoothScroll();
    useScrollAnimations();

    return (
        <>
            {/* Page Header */}
            <div className="page-header">
                <h1 className="gsap-reveal">Contact Us</h1>
                <p className="page-header-breadcrumb">
                    Home / <span>Contact Us</span>
                </p>
            </div>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="contact-inner" style={{ gridTemplateColumns: '1fr 1.2fr' }}>
                    {/* Left: Contact Details */}
                    <div className="gsap-reveal">
                        <span className="section-tag">✉️ Get In Touch</span>
                        <h2 className="section-title" style={{ marginBottom: 28 }}>We&apos;d Love To Hear From You</h2>

                        <div className="contact-details gsap-stagger">
                            {contactDetails.map((d, i) => (
                                <div key={i} className="contact-detail-card">
                                    <div className="contact-detail-icon" style={{ background: d.bg }}>
                                        <span style={{ fontSize: '1.4rem' }}>{d.emoji}</span>
                                    </div>
                                    <div className="contact-detail-text">
                                        <h4>{d.title}</h4>
                                        {d.info.split('\n').map((line, j) => (
                                            <p key={j}>{line}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: 32 }}>
                            <a
                                href="https://api.whatsapp.com/send?phone=919924107219"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-green"
                                style={{ width: '100%', justifyContent: 'center', fontSize: '1.05rem', padding: '16px 28px' }}
                            >
                                WhatsApp Us 💬
                            </a>
                        </div>
                    </div>

                    {/* Right: Big Map Preview */}
                    <div className="contact-map-card gsap-reveal" style={{ height: '100%', minHeight: 450, position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '4px solid #fff' }}>
                        <iframe
                            src="https://maps.google.com/maps?q=Mota+Varachha,+Surat,+Gujarat&t=&z=14&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: 450, display: 'block' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Kid's Play House Map"
                        ></iframe>
                        {/* Overlay link to open exact URL */}
                        <div style={{ position: 'absolute', bottom: 20, right: 20 }}>
                            <a
                                href="https://maps.app.goo.gl/799AP1tHzHYGTgxE9"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-orange"
                                style={{ padding: '10px 20px', fontSize: '0.9rem', boxShadow: 'var(--shadow-lg)' }}
                            >
                                Open in Google Maps 📍
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <PromoBannerSection />
        </>
    );
};

export default Contact;
