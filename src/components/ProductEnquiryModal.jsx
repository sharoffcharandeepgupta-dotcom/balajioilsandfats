import React, { useState, useEffect } from 'react';
import { X, Send, AlertCircle } from 'lucide-react';
import { submitProductEnquiry } from '../services/api';
import { useToast } from '../context/ToastContext';

export default function ProductEnquiryModal({ product, onClose }) {
  const { showToast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '',
    unit: 'Tons',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Disable background page scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!product) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when editing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Enter a valid email address';
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        newErrors.phone = 'Enter a valid phone number';
      }
    }

    if (!formData.quantity.trim()) {
      newErrors.quantity = 'Quantity is required';
    } else if (isNaN(formData.quantity) || parseFloat(formData.quantity) <= 0) {
      newErrors.quantity = 'Quantity must be a positive number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const res = await submitProductEnquiry(product.id, formData);
      if (res.success) {
        showToast(res.message, 'success');
        onClose();
      }
    } catch (err) {
      showToast(err.message || 'Submission failed. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Semi-transparent Background Overlay */}
      <div 
        className="absolute inset-0 bg-slate-900 bg-opacity-60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden relative z-10 animate-scale-up max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 bg-corporate-dark text-white flex justify-between items-center">
          <div>
            <span className="text-xs font-semibold text-accent-gold uppercase tracking-wider block">Product Enquiry</span>
            <h3 className="text-lg font-bold truncate pr-6 mt-1">{product.name}</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-slate-800"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 flex-1">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="modal-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                id="modal-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className={`w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors ${
                  errors.name ? 'border-red-400 focus:ring-red-300' : 'border-slate-200'
                }`}
              />
              {errors.name && (
                <span className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                </span>
              )}
            </div>

            {/* Corporate Email */}
            <div>
              <label htmlFor="modal-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="modal-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. john@company.com"
                className={`w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors ${
                  errors.email ? 'border-red-400 focus:ring-red-300' : 'border-slate-200'
                }`}
              />
              {errors.email && (
                <span className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone Number */}
            <div>
              <label htmlFor="modal-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                id="modal-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 96182 84831"
                className={`w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors ${
                  errors.phone ? 'border-red-400 focus:ring-red-300' : 'border-slate-200'
                }`}
              />
              {errors.phone && (
                <span className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                </span>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="modal-company" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                Company Name
              </label>
              <input
                id="modal-company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Acme Polymers Ltd."
                className="w-full px-4 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Quantity & Unit Selection */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <label htmlFor="modal-quantity" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                Required Quantity <span className="text-red-500">*</span>
              </label>
              <input
                id="modal-quantity"
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g. 25"
                className={`w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors ${
                  errors.quantity ? 'border-red-400 focus:ring-red-300' : 'border-slate-200'
                }`}
                min="0.1"
                step="any"
              />
              {errors.quantity && (
                <span className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.quantity}
                </span>
              )}
            </div>
            
            <div>
              <label htmlFor="modal-unit" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                Unit
              </label>
              <select
                id="modal-unit"
                name="unit"
                value={formData.unit}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
              >
                <option value="Tons">Metric Tons</option>
                <option value="Bags">Bags (25/50kg)</option>
                <option value="Drums">Drums</option>
                <option value="Carboys">Carboys</option>
                <option value="Liters">Liters</option>
              </select>
            </div>
          </div>

          {/* Enquiry message */}
          <div>
            <label htmlFor="modal-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
              Enquiry Details / Specific Requirements
            </label>
            <textarea
              id="modal-message"
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder="Detail your quality grades, delivery timeline or target ports..."
              className="w-full px-4 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 border border-slate-200 text-slate-700 font-bold rounded-lg text-sm hover:bg-slate-50 transition-colors focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 bg-corporate-blue hover:bg-slate-800 text-white font-bold rounded-lg text-sm transition-colors flex items-center justify-center gap-1.5 shadow-sm hover:shadow focus:outline-none"
            >
              {isSubmitting ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 text-accent-gold" />
                  <span>Send Enquiry</span>
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
