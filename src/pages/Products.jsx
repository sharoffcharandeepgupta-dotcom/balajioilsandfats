import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, RefreshCw } from 'lucide-react';
import { products, productCategories } from '../data/companyData';
import ProductCard from '../components/ProductCard';
import ProductEnquiryModal from '../components/ProductEnquiryModal';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Sourcing initial category filter from URL query param if present
  const categoryParam = searchParams.get('category') || 'all';
  const searchParam = searchParams.get('search') || '';

  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState(searchParam);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sync state if search params change (e.g. clicking links in footer)
  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    setSearchQuery(searchParam);
  }, [searchParam]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setSearchParams(prev => {
      if (catId === 'all') {
        prev.delete('category');
      } else {
        prev.set('category', catId);
      }
      return prev;
    });
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    setSearchParams(prev => {
      if (!val.trim()) {
        prev.delete('search');
      } else {
        prev.set('search', val);
      }
      return prev;
    });
  };

  const handleClearFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setSearchParams({});
  };

  // Filter products locally (backend prep already mocks fetch delays in service/api,
  // but for immediate responsive filtering we process catalog data dynamically)
  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-corporate text-white py-20 pt-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&q=80&w=1920" 
            alt="Sunflower seed crop field" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-slate-900 bg-opacity-80" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-gold bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full">
            Our Oil Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">
            Our Cooking Oils
          </h1>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Browse our range of pure, double-refined, and vitamin-fortified cooking oils. Available in pouches, bottles, jars, and wholesale canisters.
          </p>
        </div>
      </section>

      {/* 2. Interactive Search, Filters and Cards Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls Toolbar Grid */}
        <div className="bg-white p-6 rounded-2xl border border-slate-150 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
          
          {/* Search box */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-3 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search catalog by product name, properties..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-11 pr-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-corporate-blue focus:border-corporate-blue focus:outline-none transition-colors"
            />
          </div>

          {/* Inline filters details summary */}
          <div className="flex items-center gap-4 text-sm text-slate-500 shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-slate-400" />
            <span>Showing <b>{filteredProducts.length}</b> products</span>
            
            {(activeCategory !== 'all' || searchQuery) && (
              <button
                onClick={handleClearFilters}
                className="flex items-center gap-1 text-corporate-blue hover:text-slate-800 font-bold transition-colors text-xs border border-accent-goldLight hover:border-slate-300 px-3 py-1.5 rounded-lg bg-corporate-light hover:bg-slate-50"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

        </div>

        {/* Categories Tab Selector Grid */}
        <div className="flex flex-wrap gap-2.5 justify-center items-center mb-10">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-corporate-blue border-corporate-blue text-white shadow font-bold'
                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEnquire={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>

        {/* Empty Search State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-500 text-lg font-semibold">No products found matching your criteria.</p>
            <p className="text-slate-400 text-sm mt-1">Try resetting the filters or broadening your search keywords.</p>
            <button
              onClick={handleClearFilters}
              className="mt-6 inline-flex items-center gap-2 bg-corporate-blue hover:bg-slate-800 text-white font-bold py-2.5 px-6 rounded-lg shadow text-sm transition-colors"
            >
              <RefreshCw className="w-4 h-4 text-accent-gold" />
              <span>Clear Search Filters</span>
            </button>
          </div>
        )}

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
