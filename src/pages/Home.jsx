import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, ArrowUpRight, Flame, Heart } from 'lucide-react';
import { companyStats, products, clientLogos } from '../data/companyData';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import ProductEnquiryModal from '../components/ProductEnquiryModal';

// Animated Stat Counter Component
function CountUpStat({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  // Parse the numeric part and any suffix (like +, M, etc.)
  const numberPart = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = numberPart;
    if (start === end) return;

    const duration = 1.6; // seconds
    const totalFrames = 50;
    const frameDuration = (duration * 1000) / totalFrames;
    const increment = Math.ceil(end / totalFrames);

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [isInView, numberPart]);

  return (
    <div ref={ref} className="p-4 md:first:pl-0 md:last:pr-0">
      <span className="text-4xl sm:text-5xl font-black text-corporate-blue block font-sans">
        {isInView ? `${count}${suffix}` : `0${suffix}`}
      </span>
      <span className="text-slate-500 font-semibold text-sm tracking-wide block mt-2">
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { scrollY } = useScroll();
  
  // Hero Parallax effect
  const heroBgY = useTransform(scrollY, [0, 600], [0, 120]);

  // Take the first 3 cooking oil products as "Featured"
  const featuredProducts = products.slice(0, 3);

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: "100% Hygienic Sourcing",
      desc: "Our seeds undergo intense vibratory cleaning and dust extraction before entering expellers to guarantee contaminant-free oil."
    },
    {
      icon: Flame,
      title: "High Smoke Point Oils",
      desc: "Vacuum steam refining ensures high smoke points, allowing safe, healthy deep frying without chemical breakdown."
    },
    {
      icon: Heart,
      title: "Fortified with Vitamins",
      desc: "Enriched with Vitamins A, D, & E, our oils support heart health, vision, and immunity in every daily meal."
    },
    {
      icon: Award,
      title: "No Added Preservatives",
      desc: "Pure edible oils, completely free from mineral oils, synthetic colorants, argemone extracts, or preservatives."
    }
  ];

  return (
    <div className="w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center justify-center bg-gradient-corporate text-white overflow-hidden pt-20">
        
        {/* Background Image Overlay with Parallax scroll */}
        <motion.div 
          style={{ y: heroBgY }}
          className="absolute inset-0 z-0 opacity-30"
        >
          <img 
            src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=1920" 
            alt="Cooking oil pouring into skillet" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Dark radial and linear gradients for text overlay legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent z-0" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

        {/* Floating brand decorative items */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: 360 }}
          transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
          className="absolute top-36 left-[10%] w-12 h-12 border-2 border-accent-gold/20 rounded-xl pointer-events-none hidden md:block"
        />
        <motion.div
          animate={{ y: [0, 16, 0], scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute bottom-32 right-[12%] w-28 h-28 rounded-full bg-corporate-blue/5 filter blur-xl pointer-events-none hidden md:block"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block text-xs font-bold uppercase tracking-widest text-accent-gold bg-amber-500/10 border border-amber-500/25 px-4 py-1.5 rounded-full"
            >
              Premium Cooking Oil Manufacturer & Supplier
            </motion.span>
            
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="inline-block text-xs font-extrabold uppercase tracking-wider bg-corporate-blue text-white border border-corporate-mid px-4 py-1.5 rounded-full shadow-md shadow-red-950/20"
            >
              Trusted Since 2017
            </motion.span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-white max-w-5xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              “Pure Quality. Trusted Taste. Every Day.”
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-slate-350 max-w-3xl mx-auto leading-relaxed font-light"
          >
            We manufacture and distribute pure, healthy, and quality-controlled Sunflower, Groundnut, Soybean, and Palmolein cooking oils, trusted by millions of kitchens and snack makers.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link
              to="/products"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent-gold hover:bg-accent-goldHover text-slate-950 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-accent-gold/25 transform hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-200"
            >
              <span>Explore Our Oils</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-corporate-dark text-white font-bold px-8 py-4 rounded-xl transform hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-200"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

      </section>

      {/* 2. STATS SECTION */}
      <section className="relative z-20 -mt-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 divide-y md:divide-y-0 md:divide-x divide-slate-100 text-center">
          {companyStats.map((stat, idx) => (
            <CountUpStat key={idx} value={stat.value} label={stat.label} />
          ))}
        </div>
      </section>

      {/* 3. FEATURED COOKING OILS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Edible Oil Range" 
          subtitle="Featured Cooking Oils" 
          center={true} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
              onEnquire={(p) => setSelectedProduct(p)} 
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-corporate-blue hover:text-slate-800 font-bold border-b-2 border-corporate-blue hover:border-slate-800 pb-1 text-base transition-colors"
          >
            <span>View All Oil Varieties & Pack Sizes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* 4. WHY CHOOSE BALAJI SECTION */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950 via-slate-900 to-slate-950 opacity-80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-gold bg-amber-500/10 border border-amber-500/25 px-3.5 py-1.5 rounded-full">
              Why Choose Balaji
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
              Uncompromising Taste & Hygiene
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              From continuous quality control labs to double-deodorized purification expellers, our refinery is designed to safeguard your family's health and enhance food flavors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5 }}
                  className="bg-slate-800 bg-opacity-35 border border-slate-800 p-6 rounded-xl hover:border-slate-700 hover:bg-opacity-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 text-accent-gold rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. QUALITY & HYGIENE PROFILE */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-6"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-corporate-blue bg-corporate-light px-3.5 py-1.5 rounded-full border border-red-100">
            Laboratory Verified
          </span>
          <h2 className="text-3xl font-extrabold text-corporate-dark tracking-tight leading-tight">
            FSSAI & HACCP Certified Oil Refining
          </h2>
          <p className="text-slate-650 text-sm sm:text-base leading-relaxed">
            At Balaji Oil & Fats Private Limited, we monitor every step of the edible oil lifecycle. Raw seeds are checked for mold and moisture; expellers are cleaned daily; and refined oils undergo acid titrations, fatty acid profiling, and seal pressure tests before dispatch.
          </p>
          <div className="space-y-4 pt-2">
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                ✓
              </div>
              <div>
                <h4 className="text-slate-850 font-bold text-sm">Hygienic Blow-Mold Filling Lines</h4>
                <p className="text-slate-500 text-xs mt-0.5">Bottles are blown and capped touchless in sterile positive-pressure clean rooms.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                ✓
              </div>
              <div>
                <h4 className="text-slate-850 font-bold text-sm">Double Deodorized Neutral Aroma</h4>
                <p className="text-slate-550 text-xs mt-0.5">Locks food flavor codes instead of transferring chemical seed odours.</p>
              </div>
            </div>
          </div>
          <div className="pt-2">
            <Link
              to="/quality"
              className="inline-flex items-center gap-1.5 text-corporate-blue font-bold hover:text-slate-850 transition-colors"
            >
              <span>Explore Quality Protocols</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Highlights images layout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 relative"
        >
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none" />
          <div className="absolute -bottom-10 right-0 w-80 h-80 bg-accent-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none" />
          
          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md group">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600" 
                  alt="Automated sterile bottling machine" 
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md group">
                <img 
                  src="https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?auto=format&fit=crop&q=80&w=600" 
                  alt="Refinery laboratory chemists" 
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-md group">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600" 
                  alt="Corporate quality committee meeting" 
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md group">
                <img 
                  src="https://images.unsplash.com/photo-1518152006812-cdab29b069a8?auto=format&fit=crop&q=80&w=600" 
                  alt="Refining steel piping loops" 
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </motion.div>

      </section>

      {/* 6. MANUFACTURING OVERVIEW BANNER */}
      <section className="bg-corporate-light border-y border-slate-150 py-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6"
        >
          <span className="text-xs font-bold text-accent-gold uppercase tracking-wider block">Production Insights</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-corporate-dark tracking-tight">Our Edible Oil Refining Workflow</h3>
          <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto">
            Curious about how we crush seed pods, filter phosphatides, neutralise acidity levels, deodorize, and pack bottles touchless? Read our complete step-by-step manufacturing lifecycle.
          </p>
          <div className="pt-2">
            <Link 
              to="/manufacturing"
              className="inline-flex items-center gap-2 bg-corporate-blue hover:bg-corporate-mid text-white font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-200 transform hover:-translate-y-0.5 hover:scale-[1.02] text-sm"
            >
              <span>View Refining Process</span>
              <ArrowRight className="w-4 h-4 text-accent-gold" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 7. PARTNERS & DISTRIBUTORS LOGOS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 font-bold uppercase tracking-wider text-xs mb-8">
            Supplying Bulk Cooking Oil to Leading Brands
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-10 sm:gap-16 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
          >
            {clientLogos.map((client, idx) => (
              <div key={idx} className="text-2xl font-extrabold tracking-wider text-slate-405 font-serif select-none hover:text-corporate-blue transition-colors duration-300">
                {client.logoText}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. FINAL CALL-TO-ACTION */}
      <section className="bg-gradient-corporate text-white py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
            alt="Corporate office towers" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-slate-900 bg-opacity-80" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Partner with Balaji Oils & Fats
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Interested in booking bulk refined oil tankers, enrolling as a regional distributor, or requesting custom pack branding quotes? Contact our commercial sales desk today.
          </p>
          <div className="pt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-goldHover text-slate-950 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-accent-gold/25 transform hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-200 text-base"
            >
              <span>Wholesale & Distributor Enquiries</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Enquiry Modal overlay */}
      {selectedProduct && (
        <ProductEnquiryModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}

    </div>
  );
}
