import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { galleryItems } from '../data/companyData';
import SectionTitle from '../components/SectionTitle';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'company', label: 'Office & Facilities' },
    { id: 'warehouse', label: 'Warehouses' },
    { id: 'team', label: 'Our Team' },
    { id: 'activities', label: 'Operations' }
  ];

  // Filter items based on selected category
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-corporate text-white py-20 pt-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920" 
            alt="Warehouse inventory stack" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-slate-900 bg-opacity-80" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-gold bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full">
            Media & Operations
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">
            Our Gallery
          </h1>
          <p className="text-slate-350 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Take a visual tour of our corporate building, chemical storage warehouses, distribution fleets, and staff quality operations.
          </p>
        </div>
      </section>

      {/* 2. Gallery Filter & Grid Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle 
          title="Inside Balaji Operations" 
          subtitle="Media Highlights" 
          center={true} 
        />

        {/* Filters Tabs Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 bg-slate-100 p-1.5 rounded-xl max-w-2xl mx-auto border border-slate-200 shadow-sm">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter.id 
                  ? 'bg-corporate-blue text-white shadow-sm font-bold' 
                  : 'text-slate-650 hover:text-corporate-blue hover:bg-white bg-opacity-0'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Image Masonry Grid with Layout Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                key={item.id}
                onClick={() => handleOpenLightbox(idx)}
                className="bg-white rounded-xl overflow-hidden border border-slate-150/60 premium-shadow hover:premium-shadow-hover transition-all duration-350 cursor-pointer group relative"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Hover Eye Overlay decoration */}
                  <div className="absolute inset-0 bg-corporate-dark bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white bg-opacity-95 p-3 rounded-full text-corporate-blue shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-accent-gold uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-800 mt-1 truncate group-hover:text-corporate-blue transition-colors duration-300">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if filter matches nothing */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-400 font-medium font-light">No items found matching the filter.</p>
          </div>
        )}

      </section>

      {/* 3. LIGHTBOX MODAL LAYER with AnimatePresence */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm flex flex-col justify-between p-4 select-none"
          >
            
            {/* Top Bar inside Lightbox */}
            <div className="flex justify-between items-center text-white p-2">
              <span className="text-xs font-bold text-slate-400">
                Image {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <button
                onClick={handleCloseLightbox}
                className="text-slate-300 hover:text-white p-2 rounded-lg bg-slate-900 bg-opacity-65 hover:bg-opacity-80 transition-colors focus:outline-none cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Center Content: Image, Prev and Next Buttons */}
            <div className="flex-1 flex items-center justify-center relative w-full max-w-5xl mx-auto px-4">
              
              {/* Prev Trigger */}
              <button
                onClick={handlePrev}
                className="absolute left-0 text-white p-3 rounded-full bg-slate-900 bg-opacity-60 hover:bg-opacity-80 transition-all z-10 focus:outline-none hover:scale-105 cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-accent-gold" />
              </button>

              {/* Main Lightbox Image with transition on change */}
              <div className="max-h-[70vh] max-w-full flex items-center justify-center overflow-hidden">
                <motion.img 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  key={lightboxIndex}
                  src={filteredItems[lightboxIndex].image} 
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[70vh] max-w-full object-contain rounded shadow-2xl"
                />
              </div>

              {/* Next Trigger */}
              <button
                onClick={handleNext}
                className="absolute right-0 text-white p-3 rounded-full bg-slate-900 bg-opacity-60 hover:bg-opacity-80 transition-all z-10 focus:outline-none hover:scale-105 cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-accent-gold" />
              </button>

            </div>

            {/* Bottom Bar: Title & description details */}
            <div className="text-center text-white max-w-2xl mx-auto p-4 space-y-1">
              <span className="text-[10px] font-bold text-accent-gold uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="text-lg font-bold text-white mt-2">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                {filteredItems[lightboxIndex].description}
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
