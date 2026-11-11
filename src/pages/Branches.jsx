import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Building, ArrowUpRight } from 'lucide-react';
import { branches } from '../data/companyData';
import SectionTitle from '../components/SectionTitle';

export default function Branches() {
  return (
    <div className="w-full">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-corporate text-white py-20 pt-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1920" 
            alt="Logistics warehouse dispatch center" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-slate-900 bg-opacity-80" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-gold bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full">
            Our Network
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">
            Our Branches
          </h1>
          <p className="text-slate-350 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Serving our customers across South India with trusted cooking oil products.
          </p>
        </div>
      </section>

      {/* 2. Branches Responsive Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle 
          title="Regional Offices & Centers" 
          subtitle="Locations" 
          center={true} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {branches.map((branch, idx) => {
            return (
              <motion.div 
                key={branch.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className={`bg-white rounded-2xl p-6 shadow-sm border transition-all duration-300 flex flex-col justify-between hover:shadow-xl group ${
                  branch.isHeadOffice 
                    ? 'border-corporate-blue ring-4 ring-red-100/50 shadow-md relative' 
                    : 'border-slate-150'
                }`}
              >
                {branch.isHeadOffice && (
                  <span className="absolute -top-3.5 left-6 text-[10px] font-extrabold uppercase tracking-widest bg-corporate-blue text-white px-3.5 py-1 rounded-full shadow-md animate-pulse">
                    Headquarters
                  </span>
                )}

                <div className="space-y-4">
                  {/* Icon Block */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                    branch.isHeadOffice 
                      ? 'bg-corporate-blue text-white shadow-md shadow-red-500/10' 
                      : 'bg-corporate-light text-corporate-blue'
                  }`}>
                    {branch.isHeadOffice ? <Building2 className="w-5 h-5" /> : <Building className="w-5 h-5" />}
                  </div>

                  {/* Details */}
                  <div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                      branch.isHeadOffice ? 'text-corporate-blue' : 'text-slate-400'
                    }`}>
                      {branch.label}
                    </span>
                    {branch.address && (
                      <span className="text-slate-900 text-xs sm:text-sm font-bold block mt-1 leading-snug">
                        {branch.address}
                      </span>
                    )}
                    {branch.address ? (
                      <span className="text-slate-700 text-xs font-bold block mt-0.5">
                        {branch.city}, {branch.state}, {branch.country}
                      </span>
                    ) : (
                      <>
                        <h3 className="text-xl font-bold text-slate-900 mt-1">
                          {branch.city}
                        </h3>
                        <span className="text-slate-500 text-xs font-semibold block mt-0.5">
                          {branch.state}, {branch.country}
                        </span>
                      </>
                    )}
                  </div>

                  <p className="text-slate-655 text-xs sm:text-sm leading-relaxed pt-2 font-light">
                    {branch.description}
                  </p>
                </div>

                {/* Bottom Action (Open in Google Maps) */}
                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    {branch.country} Region
                  </span>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      branch.address 
                        ? `${branch.address}, ${branch.city}, ${branch.state}, ${branch.country}`
                        : `${branch.city}, ${branch.state}, ${branch.country}`
                    )}`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-corporate-blue hover:text-slate-800 flex items-center gap-1 text-xs font-bold transition-colors group-link"
                  >
                    <span>View Map</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </section>

      {/* 3. Interactive Maps Grid Section */}
      <section className="py-20 bg-corporate-light border-y border-slate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-blue bg-red-50 px-3 py-1 rounded-full border border-red-100">
              Interactive Grid
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-corporate-dark mt-3 tracking-tight">
              Find Us Across South India
            </h2>
            <p className="text-slate-500 text-sm mt-2 max-w-lg mx-auto leading-relaxed font-light">
              Locate our primary refining facilities, distribution depots, and commercial branches.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl border border-slate-150 overflow-hidden shadow-md aspect-[21/9] min-h-[350px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7697475.250493392!2d76.50000000000001!3d14.50000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBellary+Chowrastha%2C+Kurnool%2C+behind+D-Mart%2C+Nellore%2C+Hyderabad%2C+Bangalore!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Balaji Oil & Fats South India Branch Grid Map"
            ></iframe>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
