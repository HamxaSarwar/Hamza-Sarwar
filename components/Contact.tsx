import React, { useState } from 'react';
import { Mail, MapPin, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Since there is no backend, we just alert.
        alert(`Thank you, ${formData.name}! Your message has been received.`);
        setFormData({ name: '', email: '', message: '' });
    };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-2">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Let's Create Something Amazing
            </h3>
            <p className="text-slate-600 text-lg mb-8">
              Ready to improve your online presence? Whether it's a new build, a redesign, or SEO optimization, I'm here to help. I am open to long-term collaborations with individuals and agencies.
            </p>

            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-100 text-brand-600 rounded-lg">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">Email Me</h4>
                        <p className="text-slate-600">{PERSONAL_INFO.email}</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-100 text-brand-600 rounded-lg">
                        <MessageSquare size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">Upwork</h4>
                        <p className="text-slate-600">Top Rated • 100% Job Success</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-100 text-brand-600 rounded-lg">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">Location</h4>
                        <p className="text-slate-600">Remote / Worldwide</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea 
                        id="message" 
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                        placeholder="Tell me about your project..."
                    ></textarea>
                </div>
                <button 
                    type="submit"
                    className="w-full py-4 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/30"
                >
                    Send Message
                </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;