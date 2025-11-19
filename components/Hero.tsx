import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { ArrowRight, CheckCircle, TrendingUp, Layout, Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 opacity-10 transform translate-x-1/3 -translate-y-1/4">
         <svg viewBox="0 0 1000 1000" className="w-[800px] h-[800px] text-brand-600 fill-current">
             <circle cx="500" cy="500" r="400" />
         </svg>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-10 transform -translate-x-1/3 translate-y-1/4">
         <svg viewBox="0 0 1000 1000" className="w-[600px] h-[600px] text-indigo-600 fill-current">
             <circle cx="500" cy="500" r="400" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-100 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide uppercase">Available for New Projects</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Build, Rank, & Track <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">High-Performance Sites</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I combine expert <strong>WordPress Development</strong> with <strong>End-to-End SEO</strong> and precision <strong>Analytics</strong>. Get a website that looks great, ranks high, and converts.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-brand-600 rounded-full hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600"
              >
                Start Growing
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </a>
              <a 
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Google Partner</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>SEO Specialist</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>100% Job Success</span>
                </div>
            </div>
          </div>

          <div className="relative lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 aspect-[4/3] group">
                <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                    alt="Analytics Dashboard and Code" 
                    className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent flex flex-col justify-end p-8">
                    <div className="text-white">
                        <div className="flex gap-3 mb-2">
                            <span className="px-2 py-1 bg-blue-500/20 border border-blue-400/30 rounded text-xs font-semibold text-blue-200">WordPress</span>
                            <span className="px-2 py-1 bg-purple-500/20 border border-purple-400/30 rounded text-xs font-semibold text-purple-200">SEO</span>
                            <span className="px-2 py-1 bg-green-500/20 border border-green-400/30 rounded text-xs font-semibold text-green-200">Analytics</span>
                        </div>
                        <p className="font-bold text-2xl">Hamza Sarwar</p>
                        <p className="text-slate-300 font-medium">Full-Stack Growth Partner</p>
                    </div>
                </div>
            </div>
            
            {/* Floating Card 1: SEO */}
            <div className="absolute top-8 -left-4 lg:-left-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden sm:block animate-bounce-slow z-10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600">
                        <Search size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500">SEO Status</p>
                        <p className="font-bold text-slate-900">Ranking Top 3</p>
                    </div>
                </div>
            </div>

            {/* Floating Card 2: Analytics */}
            <div className="absolute -bottom-6 -right-4 lg:bottom-8 lg:-right-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden sm:block z-10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                        <TrendingUp size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500">ROI Tracking</p>
                        <p className="font-bold text-slate-900">100% Accurate</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;