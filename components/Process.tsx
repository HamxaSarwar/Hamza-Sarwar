import React from 'react';
import { PROCESS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-2">Workflow</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
            How I Work
          </h3>
        </div>

        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS.map((step, index) => (
              <div key={index} className="relative bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto lg:mx-0 shadow-lg shadow-brand-500/40">
                    {step.stepNumber}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 text-center lg:text-left">
                    {step.title}
                </h4>
                <p className="text-slate-600 text-sm text-center lg:text-left">
                    {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;