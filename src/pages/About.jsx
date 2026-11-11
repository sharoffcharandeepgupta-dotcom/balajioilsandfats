import React from 'react';
import { Target, Eye, ShieldCheck, Milestone, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { basicInfo, aboutData, leadership } from '../data/companyData';
import SectionTitle from '../components/SectionTitle';

export default function About() {
  return (
    <div className="w-full">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-corporate text-white py-20 pt-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1920" 
            alt="Office management committee" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-slate-900 bg-opacity-80" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-gold bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full">
            Our Identity
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">
            About Balaji Oil & Fats
          </h1>
          <p className="text-slate-350 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Discover our journey, oil refining expertise, and the sterile packaging lines that support households and industries nationwide.
          </p>
        </div>
      </section>

      {/* 2. Detailed Introduction & Stats */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          
          {/* Text block */}
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-corporate-blue bg-corporate-light px-3 py-1 rounded-full border border-red-55">
              Who We Are
            </span>
            <h2 className="text-3xl font-extrabold text-corporate-dark tracking-tight leading-tight">
              An Established Edible Oil Refinery Since 2017
            </h2>
            <div className="bg-corporate-light border-l-4 border-corporate-blue p-4 rounded-r-xl">
              <span className="text-xs font-bold text-corporate-blue uppercase tracking-wide block">Established in 2017</span>
              <p className="text-slate-700 text-xs sm:text-sm mt-1 leading-relaxed font-semibold">
                Balaji Oil & Fats Private Limited has been diligently building its presence in the cooking oil manufacturing and distribution industry since 2017, growing regional trust into high-purity supply chains.
              </p>
            </div>
            <p className="text-slate-605 text-sm sm:text-base leading-relaxed font-light">
              {basicInfo.longDescription}
            </p>
            <p className="text-slate-605 text-sm leading-relaxed font-light">
              Our core operational objective is simple: to make cooking oil manufacturing pure, safe, and highly quality-controlled. By maintaining strict seed testing protocols, continuous vacuum refining expellers, and automated clean-room bottling systems, we ensure our clients always receive edible oils of the highest hygiene standards.
            </p>
            
            <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">FSSAI Certified</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Compliant with food safety codes</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-corporate-light text-corporate-blue flex items-center justify-center shrink-0 border border-red-100">
                  <Milestone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Since 2017</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Cooking purity & trust</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Vision & Mission Statements */}
      <section className="py-20 bg-corporate-light border-y border-slate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Mission Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-150/65 flex gap-6 items-start hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-corporate-light text-corporate-blue flex items-center justify-center shrink-0 shadow-inner">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {aboutData.mission}
                </p>
              </div>
            </motion.div>

            {/* Vision Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-150/65 flex gap-6 items-start hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-amber-50 text-accent-gold flex items-center justify-center shrink-0 shadow-inner">
                <Eye className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {aboutData.vision}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Core Corporate Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Core Corporate Values" 
          subtitle="What We Standardize" 
          center={true} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {aboutData.values.map((val, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="bg-white border border-slate-150/60 p-6 rounded-xl premium-shadow hover:premium-shadow-hover transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 bg-corporate-light text-corporate-blue rounded-xl flex items-center justify-center mb-5 group-hover:bg-corporate-blue group-hover:text-white transition-all duration-300 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Balaji Group of Companies Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
        <SectionTitle 
          title="Balaji Group of Companies" 
          subtitle="“A growing group of businesses built on trust, quality, and long-term relationships.” — Building trust and growing together since 2017." 
          center={true} 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto">
          {leadership.map((member, idx) => (
            <motion.div 
              key={member.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className={`bg-white rounded-2xl border-t-4 border-x border-b border-slate-150/60 p-6 text-center premium-shadow hover:premium-shadow-hover transition-all duration-300 flex flex-col items-center group ${
                member.id === 'owner-1'
                  ? 'border-t-amber-500 hover:border-t-amber-400 ring-1 ring-amber-100'
                  : 'border-t-slate-200 hover:border-t-corporate-blue'
              }`}
            >
              {/* Founder badge for Sharaff Bheemaih */}
              {member.id === 'owner-1' && (
                <span className="text-[9px] font-bold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full mb-3 shadow-sm">
                  ★ Founder
                </span>
              )}

              {/* Profile Image Frame with hover details */}
              <div className={`w-32 h-32 rounded-full overflow-hidden border-4 transition-colors duration-300 shadow-inner mb-4 relative ${
                member.id === 'owner-1'
                  ? 'border-amber-200 group-hover:border-amber-400'
                  : 'border-slate-100 group-hover:border-accent-gold'
              }`}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out ${
                    member.id === 'owner-1' ? 'object-top' : 'object-center'
                  }`}
                  loading="lazy"
                />
              </div>

              {/* Text metadata */}
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-corporate-blue transition-colors duration-300">
                {member.name}
              </h3>
              
              <span className="text-sm font-semibold text-corporate-blue block mt-1">
                {member.designation}
              </span>
              
              <span className="text-[10px] text-slate-400 font-bold tracking-wider uppercase block mt-0.5">
                {member.role}
              </span>

              <p className="text-slate-500 text-xs leading-relaxed mt-4 flex-1 font-light">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* 6. Company Timeline History */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-red-950 opacity-90" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-gold bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
              Our Journey
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-4">
              Historical Timeline
            </h2>
            <p className="text-slate-400 mt-2 text-sm max-w-lg mx-auto leading-relaxed">
              How a regional seed mill grew into a nation-wide continuous refining and distribution brand.
            </p>
          </div>

          {/* Timeline UI with Scroll Trigger Animations */}
          <div className="relative border-l border-slate-700 md:ml-32 mt-10 space-y-12">
            {aboutData.history.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
                className="relative pl-8 md:pl-12 group"
              >
                
                {/* Timeline dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-4 border-accent-gold group-hover:bg-accent-gold transition-colors duration-300" 
                />
                
                {/* Year Label */}
                <div className="absolute left-[-110px] top-0.5 hidden md:block text-right w-20">
                  <span className="text-xl font-black text-accent-gold font-sans">{item.year}</span>
                </div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="bg-slate-800 bg-opacity-30 border border-slate-800/80 rounded-xl p-6 hover:border-slate-700 hover:bg-opacity-50 transition-all duration-300"
                >
                  <span className="text-lg font-bold text-white block">
                    <span className="md:hidden text-accent-gold mr-2">[{item.year}]</span>
                    {item.title}
                  </span>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                    {item.description}
                  </p>
                </motion.div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
