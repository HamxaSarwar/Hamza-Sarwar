import React from 'react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <div className="bg-slate-900 rounded-2xl p-8 shadow-xl text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/3">
                <h4 className="text-white text-2xl font-bold mb-2">Certified Professional</h4>
                <p className="text-slate-400 text-sm">Validated expertise by industry leaders.</p>
            </div>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                {CERTIFICATIONS.map((cert, idx) => {
                    const Icon = cert.icon;
                    return (
                        <div key={idx} className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex flex-col items-center justify-center text-center hover:bg-slate-800 transition-colors">
                            <Icon className="w-8 h-8 text-brand-400 mb-2" />
                            <p className="text-white font-bold text-xs">{cert.title}</p>
                            <p className="text-slate-500 text-[10px] uppercase tracking-wider mt-1">{cert.issuer}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  );
};

export default Certifications;