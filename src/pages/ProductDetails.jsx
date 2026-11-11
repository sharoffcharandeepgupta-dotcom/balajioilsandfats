import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Send, Check, Package, Layers, Info } from 'lucide-react';
import { getProductById, getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import ProductEnquiryModal from '../components/ProductEnquiryModal';

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  // Load product when param changes
  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const prod = await getProductById(id);
        setProduct(prod);

        // Fetch related products (same category, exclude current)
        const allProds = await getProducts(prod.category);
        setRelatedProducts(allProds.filter(p => p.id !== prod.id).slice(0, 3));
      } catch (err) {
        setError(err.message || 'Product not found');
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
    // Scroll to top of details page when mounting/navigating
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  const handleOpenEnquiry = (prod) => {
    setModalProduct(prod);
    setShowEnquiryModal(true);
  };

  if (loading) {
    return (
      <div className="w-full min-h-[70vh] flex flex-col justify-center items-center py-20">
        {/* Modern clean loading spinner */}
        <div className="w-12 h-12 border-4 border-slate-200 border-t-corporate-blue rounded-full animate-spin" />
        <span className="text-sm font-semibold text-slate-500 mt-4 tracking-wider">Loading product specs...</span>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-6">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <Info className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900">Oops! Product Not Found</h2>
        <p className="text-slate-500 text-sm">
          {error || 'The product you are trying to view does not exist or has been removed from our catalog.'}
        </p>
        <div className="pt-2">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-corporate-blue hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-lg transition-colors text-sm shadow"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Products Catalog</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pt-24 bg-slate-50">
      
      {/* Back link breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link 
          to="/products" 
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-600 hover:text-corporate-blue transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Products Catalog</span>
        </Link>
      </div>

      {/* Main product details board */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-2xl border border-slate-150 shadow-sm p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Block: Image frame */}
          <div className="lg:col-span-6 space-y-4">
            <div className="aspect-[4/3] w-full rounded-2xl border border-slate-100 overflow-hidden bg-slate-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="bg-corporate-light/50 p-4 rounded-xl border border-accent-goldLight/50 flex gap-3 text-xs text-corporate-blue">
              <Package className="w-5 h-5 shrink-0 text-accent-gold" />
              <span>Bulk orders only. Sourcing is compliant with safety guidelines and features manufacturer test certifications (COA) with each batch load.</span>
            </div>
          </div>

          {/* Right Block: Product Info panel */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-gold bg-accent-goldLight px-3 py-1 rounded-full">
                {product.category}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-corporate-dark mt-3 tracking-tight leading-snug">
                {product.name}
              </h1>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
              {product.description}
            </p>

            {/* Packaging variants lists */}
            {product.variants && product.variants.length > 0 && (
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
                  <Package className="w-4 h-4 text-corporate-blue" />
                  <span>Available Packaging Configurations</span>
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {product.variants.map((v, idx) => (
                    <span 
                      key={idx} 
                      className="px-3.5 py-1.5 rounded-lg border border-slate-200 text-slate-600 text-xs font-bold bg-slate-55 shadow-sm"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Lead trigger action */}
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => handleOpenEnquiry(product)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-corporate-blue hover:bg-slate-800 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transform transition-all duration-200"
              >
                <Send className="w-4 h-4 text-accent-gold" />
                <span>Submit Sourcing Enquiry</span>
              </button>
            </div>

          </div>

        </div>

        {/* Dynamic Detail tabs: Features & Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          
          {/* Features Column */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-150 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Layers className="w-5 h-5 text-corporate-blue" />
              <span>Key Features & Properties</span>
            </h3>
            
            <ul className="space-y-3.5">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-slate-600 text-sm leading-normal">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications Table Column */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-150 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Info className="w-5 h-5 text-corporate-blue" />
              <span>Technical Specifications</span>
            </h3>
            
            <div className="overflow-hidden border border-slate-200 rounded-xl">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Property Parameters</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Specifications Value</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100">
                  {product.specifications.map((spec, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 font-semibold text-slate-700 text-xs sm:text-sm">{spec.key}</td>
                      <td className="px-4 py-3 text-slate-500 text-xs sm:text-sm font-mono">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Related Products Recommendation Panel */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 space-y-8">
            <div className="flex justify-between items-center border-b border-slate-200 pb-4">
              <h3 className="text-xl font-bold text-slate-900">Related Products in Sourcing</h3>
              <Link 
                to={`/products?category=${product.category}`} 
                className="text-sm font-semibold text-corporate-blue hover:underline"
              >
                View all items
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard 
                  key={p.id} 
                  product={p} 
                  onEnquire={handleOpenEnquiry} 
                />
              ))}
            </div>
          </div>
        )}

      </section>

      {/* Enquiry Modal overlay rendering */}
      {showEnquiryModal && modalProduct && (
        <ProductEnquiryModal
          product={modalProduct}
          onClose={() => {
            setShowEnquiryModal(false);
            setModalProduct(null);
          }}
        />
      )}

    </div>
  );
}
