import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
                Hamza<span className="text-brand-400">.dev</span>
            </a>
            <p className="text-slate-400 mt-2 text-sm">
                Elementor Designer & WordPress Expert
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Hamza Sarwar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;