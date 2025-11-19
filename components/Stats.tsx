import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-10 bg-brand-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center justify-center text-white p-4 rounded-lg hover:bg-white/10 transition-colors duration-300">
                <Icon className="w-8 h-8 mb-3 text-brand-200 opacity-80" />
                <p className="text-3xl md:text-4xl font-bold tracking-tight">{stat.value}</p>
                <p className="text-brand-100 text-sm md:text-base font-medium mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;