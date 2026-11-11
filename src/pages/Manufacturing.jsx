import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { manufacturingSteps } from '../data/companyData';
import SectionTitle from '../components/SectionTitle';

export default function Manufacturing() {
  const highlights = [
    {
      title: "Hygienic sterile environments",
      desc: "Our packaging facilities operate under sterile positive-pressure clean rooms to prevent contact with outer air."
    },
    {
      title: "Consistent product quality",
      desc: "Process automation locks expeller temperatures and pressure margins to deliver uniform color and taste index."
    },
    {
      title: "Quality seed sourcing",
      desc: "Direct-from-farm seeds are scanned using spectroscopic technology for fatty acid and moisture integrity."
    }
  ];

  return (
    <div className="w-full">

      {/* 1. Header Banner */}
      <section className="bg-gradient-corporate text-white py-20 pt-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1518152006812-cdab29b069a8?auto=format&fit=crop&q=80&w=1920"
            alt="Refinery plant steel pipelines"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-slate-900 bg-opacity-80" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-gold bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full">
            Modern Refining Mill
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">
            Our Manufacturing Process
          </h1>
          <p className="text-slate-350 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Take a look at how we transform premium raw oil seeds into high-purity, hygienic cooking oil varieties using automated refining technology.
          </p>
        </div>
      </section>

      {/* 2. Process Stepper Timeline */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">

        <SectionTitle
          title="Raw-Seeds-to-Kitchen Process Flow"
          subtitle="Refining Stages"
          center={true}
        />

        <div className="relative max-w-5xl mx-auto mt-16 px-4 md:px-0">
          {/* Central Vertical connecting Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-slate-200 transform md:-translate-x-1/2" />

          {/* Timeline steps */}
          <div className="space-y-12 md:space-y-16">
            {manufacturingSteps.map((step, idx) => {
              const IconComponent = Icons[step.iconName] || Icons.HelpCircle;
              const isEven = idx % 2 === 0;

              return (
                <div key={step.id} className="relative flex flex-col md:flex-row items-start md:items-center justify-between">
                  {/* Indicator Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute left-6 md:left-1/2 top-6 md:top-auto w-5 h-5 rounded-full bg-white border-4 border-corporate-blue transform -translate-x-1/2 z-10 flex items-center justify-center shadow-md hover:border-accent-gold transition-colors duration-300"
                  />

                  {/* Left Card or Spacing */}
                  <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:text-right md:order-1' : 'md:order-3 md:invisible h-0 md:h-auto pointer-events-none'}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white p-6 rounded-2xl premium-shadow border border-slate-150/60 hover:premium-shadow-hover hover:border-corporate-blue/20 transition-all duration-300 group flex flex-col md:items-end text-left md:text-right"
                      >
                        <span className="text-[10px] font-bold text-accent-gold uppercase tracking-wider block mb-2">
                          STAGE 0{idx + 1}
                        </span>
                        <div className="w-10 h-10 bg-corporate-light text-corporate-blue rounded-xl flex items-center justify-center mb-4 group-hover:bg-corporate-blue group-hover:text-white transition-all duration-300 shadow-sm">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                          {step.title.split('. ')[1]}
                        </h3>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Spacer in the middle for center alignment */}
                  <div className="hidden md:block w-[10%] md:order-2" />

                  {/* Right Card or Spacing */}
                  <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${!isEven ? 'md:text-left md:order-3' : 'md:order-1 md:invisible h-0 md:h-auto pointer-events-none'}`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white p-6 rounded-2xl premium-shadow border border-slate-150/60 hover:premium-shadow-hover hover:border-corporate-blue/20 transition-all duration-300 group flex flex-col items-start text-left"
                      >
                        <span className="text-[10px] font-bold text-accent-gold uppercase tracking-wider block mb-2">
                          STAGE 0{idx + 1}
                        </span>
                        <div className="w-10 h-10 bg-corporate-light text-corporate-blue rounded-xl flex items-center justify-center mb-4 group-hover:bg-corporate-blue group-hover:text-white transition-all duration-300 shadow-sm">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                          {step.title.split('. ')[1]}
                        </h3>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </section>

      {/* 3. Technology & Hygiene highlights */}
      <section className="py-24 bg-corporate-light border-y border-slate-150 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-corporate-blue bg-red-50 px-3 py-1 rounded-full border border-red-100">
              Hygienic Mandates
            </span>
            <h2 className="text-3xl font-extrabold text-corporate-dark tracking-tight leading-tight">
              Touchless, Quality-Controlled Packing Lines
            </h2>
            <p className="text-slate-655 text-sm leading-relaxed font-light">
              We focus on food-safety index. Once the seed expelling and deodorization process finishes, the edible oils are piped through sealed stainless steel conduits directly to clean packaging units. Jars and bottles are blown, vacuum cleaned, filled, and sealed without human physical intervention.
            </p>
            <div className="space-y-3 pt-2">
              {highlights.map((h, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-slate-800 text-xs sm:text-sm font-semibold">{h.title}</h4>
                    <p className="text-slate-500 text-xs mt-0.5">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow group">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600"
                  alt="Automated packing factory"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow group">
                <img
                  src="https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?auto=format&fit=crop&q=80&w=600"
                  alt="Hygienic lab testing"
                  className="w-full aspect-[4/5] object-cover pt-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
