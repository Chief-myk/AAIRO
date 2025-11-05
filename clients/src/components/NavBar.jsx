import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-md border-b border-blue-500 border-opacity-20 py-4 transition-all duration-300">
        <div className="max-w-[1500px] mx-auto px-4 w-full">
          <div className="flex items-center justify-between flex-wrap">
            {/* Logo */}
            <div className="flex flex-col z-50">
              <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent tracking-wide">
                <a to="/" className="no-underline text-inherit">
                  AAIRO
                </a>
              </span>
              <span className="text-xs md:text-sm text-slate-400 -mt-1 tracking-wide">
                <a to="/" className="no-underline text-inherit">
                  Robotics & AI Society
                </a>
              </span>
            </div>

            {/* Desktop Navigation as */}
            <div className="hidden md:flex gap-8 items-center">
              <a to="/about" className="text-slate-200 font-medium text-base relative py-2 no-underline hover:text-blue-500 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full">
                About
              </a>
              <a to="/projects" className="text-slate-200 font-medium text-base relative py-2 no-underline hover:text-blue-500 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full">
                Projects
              </a>
              <a to="/blog" className="text-slate-200 font-medium text-base relative py-2 no-underline hover:text-blue-500 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full">
                Blog
              </a>
              <a to="/calendar" className="text-slate-200 font-medium text-base relative py-2 no-underline hover:text-blue-500 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full">
                Calendar
              </a>
              <a to="/accreditations" className="text-slate-200 font-medium text-base relative py-2 no-underline hover:text-blue-500 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full">
                Accreditations
              </a>
              <a to="/membership" className="text-slate-200 font-medium text-base relative py-2 no-underline hover:text-blue-500 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full">
                Membership
              </a>
              <a to="/gallery" className="text-slate-200 font-medium text-base relative py-2 no-underline hover:text-blue-500 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full">
                Gallery
              </a>
              <a to="/contact" className="text-slate-200 font-medium text-base relative py-2 no-underline hover:text-blue-500 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden bg-transparent border-none text-white text-2xl cursor-pointer z-50 transition-transform duration-300 p-2 rounded hover:scale-110 hover:bg-blue-500 hover:bg-opacity-10"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-gray-900 bg-opacity-98 backdrop-blur-lg z-40 pt-24 px-6 pb-6 flex flex-col gap-0 transition-transform duration-400 ease-in-out transform -translate-x-full ${mobileMenuOpen ? 'translate-x-0' : ''} overflow-y-auto`}
      >
        {/* Close Button */}
        <button 
          className="absolute top-5 right-6 bg-transparent border-none text-white text-2xl cursor-pointer p-2 rounded transition-all duration-300 hover:text-blue-500 hover:bg-blue-500 hover:bg-opacity-10 hover:scale-110"
          onClick={closeMobileMenu}
          aria-label="Close mobile menu"
        >
          <FaTimes />
        </button>

        {/* Mobile Navigation as */}
        <a 
          to="/" 
          className="text-slate-200 py-5 border-b border-blue-500 border-opacity-10 text-lg font-medium transition-all duration-300 no-underline hover:text-blue-500 hover:pl-4 hover:bg-blue-500 hover:bg-opacity-5"
          onClick={closeMobileMenu}
        >
          Home
        </a>
        <a 
          to="/about" 
          className="text-slate-200 py-5 border-b border-blue-500 border-opacity-10 text-lg font-medium transition-all duration-300 no-underline hover:text-blue-500 hover:pl-4 hover:bg-blue-500 hover:bg-opacity-5"
          onClick={closeMobileMenu}
        >
          About
        </a>
        <a 
          to="/projects" 
          className="text-slate-200 py-5 border-b border-blue-500 border-opacity-10 text-lg font-medium transition-all duration-300 no-underline hover:text-blue-500 hover:pl-4 hover:bg-blue-500 hover:bg-opacity-5"
          onClick={closeMobileMenu}
        >
          Projects
        </a>
        <a 
          to="/blog" 
          className="text-slate-200 py-5 border-b border-blue-500 border-opacity-10 text-lg font-medium transition-all duration-300 no-underline hover:text-blue-500 hover:pl-4 hover:bg-blue-500 hover:bg-opacity-5"
          onClick={closeMobileMenu}
        >
          Blog
        </a>
        <a 
          to="/calendar" 
          className="text-slate-200 py-5 border-b border-blue-500 border-opacity-10 text-lg font-medium transition-all duration-300 no-underline hover:text-blue-500 hover:pl-4 hover:bg-blue-500 hover:bg-opacity-5"
          onClick={closeMobileMenu}
        >
          Calendar
        </a>
        <a 
          to="/accreditations" 
          className="text-slate-200 py-5 border-b border-blue-500 border-opacity-10 text-lg font-medium transition-all duration-300 no-underline hover:text-blue-500 hover:pl-4 hover:bg-blue-500 hover:bg-opacity-5"
          onClick={closeMobileMenu}
        >
          Accreditations
        </a>
        <a 
          to="/membership" 
          className="text-slate-200 py-5 border-b border-blue-500 border-opacity-10 text-lg font-medium transition-all duration-300 no-underline hover:text-blue-500 hover:pl-4 hover:bg-blue-500 hover:bg-opacity-5"
          onClick={closeMobileMenu}
        >
          Membership
        </a>
        <a 
          to="/gallery" 
          className="text-slate-200 py-5 border-b border-blue-500 border-opacity-10 text-lg font-medium transition-all duration-300 no-underline hover:text-blue-500 hover:pl-4 hover:bg-blue-500 hover:bg-opacity-5"
          onClick={closeMobileMenu}
        >
          Gallery
        </a>
        <a 
          to="/contact" 
          className="text-slate-200 py-5 text-lg font-medium transition-all duration-300 no-underline hover:text-blue-500 hover:pl-4 hover:bg-blue-500 hover:bg-opacity-5"
          onClick={closeMobileMenu}
        >
          Contact
        </a>
      </div>
    </>
  );
};

export default NavBar;