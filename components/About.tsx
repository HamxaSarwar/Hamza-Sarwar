import React from 'react';
import { SKILLS } from '../constants';
import { Star, CheckCircle2 } from 'lucide-react';
import Certifications from './Certifications';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Certifications Bar */}
        <div className="mb-20">
           <Certifications />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-200 to-indigo-100 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
             <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Star className="text-yellow-500 fill-current" />
                    Technical Expertise
                </h3>
                <div className="space-y-8">
                    {SKILLS.map((skillGroup, idx) => (
                        <div key={idx}>
                            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                {skillGroup.category}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill, sIdx) => (
                                    <span 
                                        key={sIdx} 
                                        className="px-3 py-1 bg-white border border-slate-200 rounded-md text-slate-700 text-sm font-medium shadow-sm hover:border-brand-300 hover:text-brand-600 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
             </div>
          </div>

          <div>
            <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Design + SEO + Data = Results
            </h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                    I am a rare find in the freelance world: a <strong>Full-Stack Marketer & Developer</strong>. I don't just build stunning WordPress sites; I ensure they are technically sound to rank on Google (SEO) and configured to track every penny of revenue (Analytics).
                </p>
                <p>
                    With over <strong>6+ years</strong> in development and <strong>4+ years</strong> in data tracking and SEO, I bridge the gap between coding and marketing. Whether you need Local SEO to dominate your area or Global SEO for international expansion, I have the toolkit to make it happen.
                </p>
                <ul className="space-y-2 mt-4">
                    <li className="flex items-center gap-2 text-slate-700 font-medium">
                        <CheckCircle2 className="text-brand-500 w-5 h-5" />
                        Google Ads & Analytics Partner
                    </li>
                    <li className="flex items-center gap-2 text-slate-700 font-medium">
                        <CheckCircle2 className="text-brand-500 w-5 h-5" />
                        End-to-End SEO Specialist (Local & Global)
                    </li>
                    <li className="flex items-center gap-2 text-slate-700 font-medium">
                        <CheckCircle2 className="text-brand-500 w-5 h-5" />
                        Top Rated Plus on Upwork
                    </li>
                </ul>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
                <div>
                    <span className="block text-2xl font-bold text-slate-900">Fast</span>
                    <span className="text-slate-500 text-sm">Turnaround & Delivery</span>
                </div>
                 <div>
                    <span className="block text-2xl font-bold text-slate-900">Proven</span>
                    <span className="text-slate-500 text-sm">Ranking Strategies</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;