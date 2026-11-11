import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { basicInfo } from '../data/companyData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300">
      
      {/* Top Banner - Call to Action (Optional design asset) */}
      <div className="border-b border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Looking for custom bulk orders or sourcing agreements?</h3>
            <p className="text-slate-400 mt-1 text-sm">Get tailored solutions matching your technical and financial specifications.</p>
          </div>
          <Link 
            to="/contact" 
            className="flex items-center gap-2 bg-accent-gold hover:bg-accent-goldHover text-slate-950 font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-accent-gold/20 transform hover:-translate-y-0.5 transition-all duration-200 text-sm"
          >
            <span>Request Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer Links & Info Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Company Profile */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-corporate-blue flex items-center justify-center rounded-lg shadow-inner">
              <span className="text-white font-extrabold text-lg">B</span>
            </div>
            <div>
              <span className="text-lg font-bold text-white block">Balaji Pvt. Ltd.</span>
              <span className="text-xs font-semibold text-accent-gold block -mt-1 uppercase tracking-wider">Trading & Distribution</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed pt-2">
            Quality products, reliable logistics, and ethical corporate trade. Bridging the gap between global manufacturers and regional market consumers since 2001.
          </p>
          <div className="flex items-center gap-3 pt-4">
            <a href={basicInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-corporate-mid transition-all" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href={basicInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-corporate-mid transition-all" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href={basicInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-corporate-mid transition-all" aria-label="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href={basicInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-corporate-mid transition-all" aria-label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h4 className="text-white font-bold text-base tracking-wide border-l-4 border-accent-gold pl-3 mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition-colors inline-flex items-center gap-1.5 hover:translate-x-1 transition-transform">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors inline-flex items-center gap-1.5 hover:translate-x-1 transition-transform">
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white transition-colors inline-flex items-center gap-1.5 hover:translate-x-1 transition-transform">
                <span>Products Catalog</span>
              </Link>
            </li>
            <li>
              <Link to="/manufacturing" className="hover:text-white transition-colors inline-flex items-center gap-1.5 hover:translate-x-1 transition-transform">
                <span>Manufacturing Process</span>
              </Link>
            </li>
            <li>
              <Link to="/quality" className="hover:text-white transition-colors inline-flex items-center gap-1.5 hover:translate-x-1 transition-transform">
                <span>Quality Standards</span>
              </Link>
            </li>
            <li>
              <Link to="/branches" className="hover:text-white transition-colors inline-flex items-center gap-1.5 hover:translate-x-1 transition-transform">
                <span>Our Branches</span>
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-white transition-colors inline-flex items-center gap-1.5 hover:translate-x-1 transition-transform">
                <span>Media Gallery</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors inline-flex items-center gap-1.5 hover:translate-x-1 transition-transform">
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Product Portfolio */}
        <div>
          <h4 className="text-white font-bold text-base tracking-wide border-l-4 border-accent-gold pl-3 mb-6">Product Range</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/products?category=Sunflower%20Oil" className="hover:text-white transition-colors inline-flex items-center gap-1.5 hover:translate-x-1 transition-transform">
                <span>Sunflower Oil</span>
              </Link>
            </li>
            <li>
              <Link to="/products?category=Groundnut%20Oil" className="hover:text-white transition-colors inline-flex items-center gap-1.5 hover:translate-x-1 transition-transform">
                <span>Groundnut Oil</span>
              </Link>
            </li>
            <li>
              <Link to="/products?category=Soybean%20Oil" className="hover:text-white transition-colors inline-flex items-center gap-1.5 hover:translate-x-1 transition-transform">
                <span>Soybean Oil</span>
              </Link>
            </li>
            <li>
              <Link to="/products?category=Palmolein%20Oil" className="hover:text-white transition-colors inline-flex items-center gap-1.5 hover:translate-x-1 transition-transform">
                <span>Palmolein Oil</span>
              </Link>
            </li>
            <li>
              <Link to="/products?category=Pooja%20Oil" className="hover:text-white transition-colors inline-flex items-center gap-1.5 hover:translate-x-1 transition-transform">
                <span>Gomatha Pooja Oil</span>
              </Link>
            </li>
            <li>
              <Link to="/products?category=Pooja%20Oil" className="hover:text-white transition-colors inline-flex items-center gap-1.5 hover:translate-x-1 transition-transform">
                <span>Pooja Oil</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Address & Office hours */}
        <div className="space-y-4 text-sm">
          <h4 className="text-white font-bold text-base tracking-wide border-l-4 border-accent-gold pl-3 mb-6">Corporate Office</h4>
          <div className="flex gap-3">
            <MapPin className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
            <p className="text-slate-400 leading-relaxed text-sm">
              {basicInfo.officeAddress}
            </p>
          </div>
          <div className="flex gap-3 items-center pt-1">
            <Phone className="w-4 h-4 text-accent-gold shrink-0" />
            <a href={`tel:${basicInfo.phone}`} className="hover:text-white transition-colors">{basicInfo.phone}</a>
          </div>
          <div className="flex gap-3 items-center">
            <Mail className="w-4 h-4 text-accent-gold shrink-0" />
            <a href={`mailto:${basicInfo.email}`} className="hover:text-white transition-colors">{basicInfo.email}</a>
          </div>
          <div className="flex gap-3 items-start pt-1">
            <Clock className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
            <span className="text-slate-400 text-xs leading-normal">{basicInfo.businessHours}</span>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800 py-6 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {currentYear} Balaji Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
