import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { basicInfo } from '../data/companyData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Quality', path: '/quality' },
    { name: 'Branches', path: '/branches' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-40 transition-all duration-300">
      {/* Top Bar for Contact Info (Hidden on mobile for cleaner layout) */}
      <div className="bg-corporate-dark text-slate-350 text-xs py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center border-b border-slate-800/80">
        <div className="flex items-center gap-4">
          <a href={`mailto:${basicInfo.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5 text-accent-gold" />
            <span className="hidden sm:inline">{basicInfo.email}</span>
          </a>
          <a href={`tel:${basicInfo.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-accent-gold" />
            <span>{basicInfo.phone}</span>
          </a>
        </div>
        <div className="hidden md:flex items-center gap-1.5 text-slate-400">
          <MapPin className="w-3.5 h-3.5 text-accent-gold" />
          <span>Kurnool, Andhra Pradesh, India</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white shadow-md py-3' 
            : 'bg-transparent py-5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo Brand */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 bg-corporate-blue flex items-center justify-center rounded-lg shadow-md group-hover:bg-opacity-90 transition-colors">
              <span className="text-white font-extrabold text-xl tracking-wider">B</span>
            </div>
            <div>
              <span className={`text-xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-corporate-dark group-hover:text-corporate-blue' : 'text-white group-hover:text-accent-gold'
              }`}>
                Balaji
              </span>
              <span className="text-xs font-semibold text-accent-gold block -mt-1 tracking-wider uppercase">
                Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-smooth py-1 animated-underline ${
                    scrolled 
                      ? isActive
                        ? 'text-corporate-blue font-bold'
                        : 'text-slate-650 hover:text-corporate-blue'
                      : isActive
                        ? 'text-accent-gold font-bold'
                        : 'text-white/90 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className={`font-bold py-2 px-5 rounded-lg shadow transform hover:-translate-y-0.5 transition-all duration-205 text-sm ${
                scrolled 
                  ? 'bg-corporate-blue text-white hover:bg-slate-800 hover:shadow-lg' 
                  : 'bg-white hover:bg-amber-500 hover:text-slate-950 text-corporate-dark hover:shadow-lg'
              }`}
            >
              Enquiry
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none p-1.5 transition-colors duration-305 ${
                scrolled ? 'text-slate-700 hover:text-corporate-blue' : 'text-white hover:text-accent-gold'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 animate-fade-in" /> : <Menu className="w-6 h-6 animate-fade-in" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Framer Motion Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden absolute left-0 w-full bg-white border-t border-slate-100 shadow-xl overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-1.5 flex flex-col">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                        isActive
                          ? 'text-corporate-blue bg-blue-50/70 font-bold'
                          : 'text-slate-600 hover:text-corporate-blue hover:bg-slate-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <div className="pt-4 border-t border-slate-100 px-3">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center bg-corporate-blue hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-lg block shadow transition-colors"
                  >
                    Enquiry
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
