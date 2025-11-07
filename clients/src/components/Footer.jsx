import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaUserTie, FaPhone, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-gradient-to-br from-slate-900 to-slate-800 border-t border-blue-500/20 pt-16 overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
            
            {/* Top border effect */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back to top button */}
                <button 
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    className="absolute -top-6 right-4 sm:right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30"
                >
                    <FaArrowUp />
                </button>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="md:col-span-2 lg:col-span-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                            AAIRO
                        </h3>
                        <p className="text-slate-400 italic mb-4">Automation with Artificial Intelligence and Robotics</p>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                            Inspiring the future through cutting-edge AI and robotics research, fostering innovation and technological advancement in the academic community.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a 
                                href="https://www.instagram.com/aairo_adgips/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Instagram"
                                className="w-12 h-12 flex items-center justify-center bg-blue-500/10 border-2 border-blue-500/30 rounded-xl text-blue-500 text-xl transition-all duration-300 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"></div>
                                <FaInstagram />
                            </a>
                            <a 
                                href="https://www.linkedin.com/company/108359386/admin/dashboard/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="LinkedIn"
                                className="w-12 h-12 flex items-center justify-center bg-blue-500/10 border-2 border-blue-500/30 rounded-xl text-blue-500 text-xl transition-all duration-300 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"></div>
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="text-center md:text-left">
  <h4 className="text-xl font-semibold text-slate-100 mb-6 relative inline-block">
    Quick Links
    <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
  </h4>

  <ul className="grid grid-cols-2 md:grid-cols-1 gap-3">
    {['about', 'Projects', 'Blog', 'calendar', 'Gallery', 'Membership'].map((item) => (
      <li key={item} className="transition-all duration-300 hover:translate-x-1">
        <a
          href={item}
          className="text-slate-400 flex items-center justify-center md:justify-start gap-2 py-2 transition-all duration-300 hover:text-blue-500 hover:pl-2 rounded-md group"
        >
          <span className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-3"></span>
          {item}
        </a>
      </li>
    ))}
  </ul>
</div>

                    {/* Resources */}


                 <div className="text-center md:text-left">
  <h4 className="text-xl font-semibold text-slate-100 mb-6 relative inline-block">
    Resources
    <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
  </h4>

  <ul className="grid grid-cols-2 md:grid-cols-1 gap-3">
    {['Research Papers', 'Tutorials', 'Documentation', 'News & Updates', 'Community'].map((item) => (
      <li key={item} className="transition-all duration-300 hover:translate-x-1">
        <a
          href={item}
          className="text-slate-400 flex items-center justify-center md:justify-start gap-2 py-2 transition-all duration-300 hover:text-blue-500 hover:pl-2 rounded-md group"
        >
          <span className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-3"></span>
          {item}
        </a>
      </li>
    ))}
  </ul>
</div>

                    
                  
                    
                    {/* Contact */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold text-slate-100 mb-6 relative inline-block">
                            Contact
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 p-4 bg-blue-500/5 rounded-xl border-l-4 border-blue-500/30 transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-500 hover:translate-x-1">
                                <FaEnvelope className="text-blue-500 mt-1 flex-shrink-0" />
                                <span className="text-slate-300 text-sm">aairosociety@gmail.com</span>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-blue-500/5 rounded-xl border-l-4 border-blue-500/30 transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-500 hover:translate-x-1">
                                <FaMapMarkerAlt className="text-blue-500 mt-1 flex-shrink-0" />
                                <span className="text-slate-300 text-sm">Dr. Akhilesh Das Gupta Institute of Professional Studies, Shastri Park, New Delhi – 110053</span>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-blue-500/5 rounded-xl border-l-4 border-blue-500/30 transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-500 hover:translate-x-1">
                                <FaUserTie className="text-blue-500 mt-1 flex-shrink-0" />
                                <span className="text-slate-300 text-sm">Faculty Coordinator:<br/>Yashpal Chopra<br/>yashpalchopra@adgips.ac.in</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Footer Bottom */}
                <div className="border-t border-blue-500/20 py-8 text-center bg-slate-900/50 rounded-lg">
                    <p className="text-slate-500 text-sm">
                        &copy; 2025 AAIRO - Robotics & AI Society. All rights reserved. | Made with ❤️ for Innovation
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;