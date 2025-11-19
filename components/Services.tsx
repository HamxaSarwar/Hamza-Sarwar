import React, { useState } from 'react';
import { WEB_SERVICES, ANALYTICS_SERVICES, SEO_SERVICES } from '../constants';
import { Code, BarChart3, Search } from 'lucide-react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'seo' | 'analytics'>('web');

  const getServices = () => {
      switch(activeTab) {
          case 'web': return WEB_SERVICES;
          case 'seo': return SEO_SERVICES;
          case 'analytics': return ANALYTICS_SERVICES;
          default: return WEB_SERVICES;
      }
  }

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-2">Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Digital Solutions
          </h3>
          <p className="text-slate-600 text-lg">
            I don't just build websites; I create ecosystems that rank, convert, and scale. Select a category to view my services.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex justify-center mb-12">
            <div className="bg-white p-1 rounded-full border border-slate-200 shadow-sm flex flex-col sm:flex-row relative">
                <button
                    onClick={() => setActiveTab('web')}
                    className={`relative z-10 flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                        activeTab === 'web' 
                        ? 'text-white bg-brand-600 shadow-md' 
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                >
                    <Code size={18} />
                    Web Dev
                </button>
                 <button
                    onClick={() => setActiveTab('seo')}
                    className={`relative z-10 flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                        activeTab === 'seo' 
                        ? 'text-white bg-brand-600 shadow-md' 
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                >
                    <Search size={18} />
                    SEO Optimization
                </button>
                <button
                    onClick={() => setActiveTab('analytics')}
                    className={`relative z-10 flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                        activeTab === 'analytics' 
                        ? 'text-white bg-brand-600 shadow-md' 
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                >
                    <BarChart3 size={18} />
                    Analytics
                </button>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {getServices().map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={`${activeTab}-${index}`}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-brand-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                    {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
            <p className="text-slate-500 italic">
                Need a holistic strategy? <a href="#contact" className="text-brand-600 font-bold hover:underline">Let's integrate all three.</a>
            </p>
        </div>
      </div>
    </section>
  );
};

export default Services;