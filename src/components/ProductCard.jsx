import React from 'react';
import { Link } from 'react-router-dom';
import { Info, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { productCategories } from '../data/companyData';

export default function ProductCard({ product, onEnquire, index = 0 }) {
  const { id, name, category, shortDescription, image } = product;

  // Get human-readable category name
  const catName = productCategories.find(c => c.id === category)?.name || category;

  // Category-specific badge styling
  const getBadgeClass = (cat) => {
    switch (cat) {
      case 'refined':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'sunflower':
        return 'bg-yellow-100 text-yellow-800 border-yellow-250';
      case 'groundnut':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'palmolein':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'soybean':
        return 'bg-emerald-100 text-emerald-800 border-emerald-250';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-xl premium-shadow hover:premium-shadow-hover border border-slate-150/60 overflow-hidden transition-all duration-350 flex flex-col h-full group"
    >
      
      {/* Product Image Section with Zoom Effect */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wider border ${getBadgeClass(category)}`}>
            {catName}
          </span>
        </div>
      </div>

      {/* Product Information Card Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-corporate-blue transition-colors duration-300 line-clamp-1">
          {name}
        </h3>
        
        <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed flex-1 line-clamp-3">
          {shortDescription}
        </p>

        {/* Action Button Strip */}
        <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-slate-100">
          <Link
            to={`/products/${id}`}
            className="flex items-center justify-center gap-1.5 border border-slate-200 hover:border-corporate-blue hover:text-corporate-blue hover:bg-slate-50/50 text-slate-700 text-xs font-bold py-2.5 px-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none"
          >
            <Info className="w-3.5 h-3.5" />
            <span>View Details</span>
          </Link>
          
          <button
            onClick={() => onEnquire && onEnquire(product)}
            className="flex items-center justify-center gap-1.5 bg-corporate-blue hover:bg-slate-800 text-white text-xs font-bold py-2.5 px-3 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:scale-[1.02] focus:outline-none shadow-md hover:shadow-lg hover:shadow-red-500/10"
          >
            <Send className="w-3.5 h-3.5 text-accent-gold" />
            <span>Enquire Now</span>
          </button>
        </div>
      </div>

    </motion.div>
  );
}
