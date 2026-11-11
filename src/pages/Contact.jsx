import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, AlertCircle, Sparkles } from 'lucide-react';
import { basicInfo } from '../data/companyData';
import { submitContactEnquiry } from '../services/api';
import { useToast } from '../context/ToastContext';

export default function Contact() {
  const { showToast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
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

    if (!formData.message.trim()) {
      newErrors.message = 'Please type your enquiry message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      showToast("Please correct the errors in the form before submitting.", "error");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await submitContactEnquiry(formData);
      if (res.success) {
        showToast(res.message, 'success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'General Enquiry',
          message: ''
        });
      }
    } catch (err) {
      showToast(err.message || 'Submission failed. Please check your inputs.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-corporate text-white py-20 pt-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&q=80&w=1920" 
            alt="Sunflower fields and oil mill" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-slate-900 bg-opacity-80" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-gold bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full">
            Commercial Support
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">
            Contact Our Sales Team
          </h1>
          <p className="text-slate-355 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Have questions about bulk oil availability, wholesale pricing sheets, packaging variants, or regional distribution? Get in touch with our sales team.
          </p>
        </div>
      </section>

      {/* 2. Form and Info Cards Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Info list and Map */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-corporate-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Reach Us Directly
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-corporate-dark tracking-tight">
                Corporate Headquarters & Contacts
              </h2>
            </div>

            {/* Structured contacts list */}
            <div className="space-y-6">
              
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-corporate-blue flex items-center justify-center shrink-0 shadow-sm border border-blue-100 group-hover:scale-105 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-corporate-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Office Location</h4>
                  <p className="text-slate-650 text-xs sm:text-sm mt-1 leading-relaxed font-light">
                    {basicInfo.officeAddress}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-corporate-blue flex items-center justify-center shrink-0 shadow-sm border border-blue-100 group-hover:scale-105 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-corporate-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Central Warehouse Location</h4>
                  <p className="text-slate-655 text-xs sm:text-sm mt-1 leading-relaxed font-light">
                    {basicInfo.warehouseAddress}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-corporate-blue flex items-center justify-center shrink-0 shadow-sm border border-blue-100 group-hover:scale-105 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-corporate-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Hotlines & Phones</h4>
                  <div className="text-slate-655 text-xs sm:text-sm mt-1 space-y-1 font-light">
                    <p>Primary Desk: <a href={`tel:${basicInfo.phone}`} className="hover:text-corporate-blue transition-colors font-semibold">{basicInfo.phone}</a></p>
                    <p>Sales Hotline: <a href={`tel:${basicInfo.altPhone}`} className="hover:text-corporate-blue transition-colors font-semibold">{basicInfo.altPhone}</a></p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-corporate-blue flex items-center justify-center shrink-0 shadow-sm border border-blue-100 group-hover:scale-105 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-corporate-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Support Emails</h4>
                  <div className="text-slate-655 text-xs sm:text-sm mt-1 space-y-1 font-light">
                    <p>General Queries: <a href={`mailto:${basicInfo.email}`} className="hover:text-corporate-blue transition-colors font-semibold">{basicInfo.email}</a></p>
                    <p>Sales Desk: <a href={`mailto:${basicInfo.salesEmail}`} className="hover:text-corporate-blue transition-colors font-semibold">{basicInfo.salesEmail}</a></p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-corporate-blue flex items-center justify-center shrink-0 shadow-sm border border-blue-100 group-hover:scale-105 transition-transform duration-300">
                  <Clock className="w-5 h-5 text-corporate-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Corporate Business Hours</h4>
                  <p className="text-slate-650 text-xs sm:text-sm mt-1 font-light">
                    {basicInfo.businessHours}
                  </p>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Right Column: Contact Lead capture card */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-150/80 premium-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent-gold" />
                <span>Submit Sourcing Request</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:outline-none transition-all duration-300 ${
                        errors.name 
                          ? 'border-red-400 focus:ring-2 focus:ring-red-100' 
                          : 'border-slate-200 focus:ring-2 focus:ring-red-100/50 focus:border-corporate-blue'
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
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                      Corporate Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@acme.com"
                      className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:outline-none transition-all duration-300 ${
                        errors.email 
                          ? 'border-red-400 focus:ring-2 focus:ring-red-100' 
                          : 'border-slate-200 focus:ring-2 focus:ring-red-100/50 focus:border-corporate-blue'
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
                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 96182 84831"
                      className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:outline-none transition-all duration-300 ${
                        errors.phone 
                          ? 'border-red-400 focus:ring-2 focus:ring-red-100' 
                          : 'border-slate-200 focus:ring-2 focus:ring-red-100/50 focus:border-corporate-blue'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Subject category */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                      Enquiry Subject
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl bg-white focus:ring-2 focus:ring-red-100/50 focus:border-corporate-blue focus:outline-none transition-colors text-slate-800"
                    >
                      <option value="General Enquiry">General Corporate Enquiry</option>
                      <option value="Wholesale Order">Wholesale Cooking Oil Order</option>
                      <option value="Distributor Application">Distributor Sourcing Application</option>
                      <option value="Quality Analysis">Product Quality & Analysis (COA)</option>
                      <option value="Custom Packaging">Custom Packaging Request</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    Enquiry Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide detailed description of materials required, technical grade numbers, volume specifications..."
                    className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:outline-none transition-all duration-300 ${
                      errors.message 
                        ? 'border-red-400 focus:ring-2 focus:ring-red-100' 
                        : 'border-slate-200 focus:ring-2 focus:ring-red-100/50 focus:border-corporate-blue'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Action button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-corporate-blue hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow hover:shadow-lg focus:outline-none transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Sourcing Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-accent-gold" />
                        <span>Submit Sourcing Enquiry</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </motion.div>

        </div>

      </section>

      {/* 3. Google Maps Integration Section */}
      <section className="w-full h-96 bg-slate-200 relative overflow-hidden border-t border-slate-200">
        <iframe
          src={basicInfo.googleMapEmbedUrl}
          title="Balaji corporate office location"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </section>

    </div>
  );
}
