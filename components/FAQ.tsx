import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-2">FAQ</h2>
                    <h3 className="text-3xl font-bold text-slate-900">Common Questions</h3>
                </div>
                
                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div 
                            key={index} 
                            className="border border-slate-200 rounded-xl overflow-hidden hover:border-brand-200 transition-colors"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-5 text-left bg-slate-50 hover:bg-white transition-colors focus:outline-none"
                            >
                                <span className="font-bold text-slate-800">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="text-brand-600 flex-shrink-0" size={20} />
                                ) : (
                                    <Plus className="text-slate-400 flex-shrink-0" size={20} />
                                )}
                            </button>
                            <div 
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                    openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="p-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-white">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;