import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-soft-orange py-16 text-center">
        <h1 className="text-5xl font-display font-bold text-slate-900">Contact Us</h1>
        <p className="text-slate-600 mt-4 text-lg">We'd love to hear from you!</p>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-bold text-slate-900">Get In Touch</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Have questions about our programs or admissions? Feel free to reach out to us. We are here to help you and your child start this amazing journey.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-soft-blue rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Our Location</h4>
                  <p className="text-slate-600">Germany — 785 15th Street, Office 478 Berlin, De 81566</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-soft-green rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Phone Number</h4>
                  <a href="tel:+919924107219" className="text-slate-600 hover:text-primary transition">+91 99241 07219</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-soft-orange rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Email Address</h4>
                  <p className="text-slate-600">kidden@example.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-4xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-bold mb-2 text-sm">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-2 text-sm">Your Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-700 font-bold mb-2 text-sm">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  placeholder="Inquiry about admission"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-bold mb-2 text-sm">Message</label>
                <textarea 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-primary/30 transition flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
