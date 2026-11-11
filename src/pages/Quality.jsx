import React from 'react';
import { ShieldCheck, CheckCircle2, FlaskConical, ClipboardCheck, Container } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

export default function Quality() {
  const qualityPillars = [
    {
      icon: FlaskConical,
      title: "Analytical Testing Lab",
      desc: "Our food lab tests oil batches for Free Fatty Acids (FFA), peroxide values, iodine indexes, and color density to ensure compliance with FSSAI regulations."
    },
    {
      icon: ClipboardCheck,
      title: "HACCP & Food Safety",
      desc: "Process workflows strictly adhere to HACCP and ISO 22000 guidelines. Filling clean rooms maintain positive air pressures and are sanitized daily."
    },
    {
      icon: Container,
      title: "Controlled Silo Storage",
      desc: "Raw oil seeds are housed in temperature-regulated, moisture-monitored vertical silos. Edible oils are stored in food-grade steel tanks under nitrogen blanketing to prevent oxidation."
    },
    {
      icon: ShieldCheck,
      title: "Hygienic Sterile Bottling",
      desc: "PET bottles and canisters are cleaned, vacuum aspirated, and sealed using automated touchless machinery, preventing chemical or environmental exposure."
    }
  ];

  return (
    <div className="w-full">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-corporate text-white py-20 pt-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?auto=format&fit=crop&q=80&w=1920" 
            alt="Laboratory vials and chemists" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-slate-900 bg-opacity-80" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-gold bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full">
            Laboratory Certified
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">
            Our Quality Standards
          </h1>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            From the seed expellers to the packaging tins, we enforce multi-tier food-safety parameters to deliver pure, healthy, and hygienic cooking oils.
          </p>
        </div>
      </section>

      {/* 2. Four Pillars of Quality */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle 
          title="Strict Edible Oil Standards" 
          subtitle="Our Quality Promise" 
          center={true} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {qualityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl border border-slate-150 shadow-sm hover:shadow-md transition-shadow flex gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-corporate-blue flex items-center justify-center shrink-0 shadow-inner">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 3. Deep Dive parameters grid */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950 opacity-90" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-gold bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
              Testing Benchmarks
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-4">
              Edible Oil Chemical Parameters
            </h2>
            <p className="text-slate-400 mt-2 text-sm max-w-lg mx-auto">
              Our in-house analytical lab continuously checks processing outputs to match FSSAI parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-slate-800 bg-opacity-40 border border-slate-800 p-6 rounded-xl text-center space-y-3">
              <span className="text-xl font-bold text-accent-gold">Acid Value & FFA</span>
              <p className="text-slate-400 text-xs leading-relaxed">
                Free Fatty Acids (FFA) are checked below 0.08% to guarantee maximum stability and neutralize sour notes, preserving oil freshness.
              </p>
            </div>

            <div className="bg-slate-800 bg-opacity-40 border border-slate-800 p-6 rounded-xl text-center space-y-3">
              <span className="text-xl font-bold text-accent-gold">Peroxide Value</span>
              <p className="text-slate-400 text-xs leading-relaxed">
                We monitor lipid oxidation. Peroxide levels are kept below 1.0 meq/kg (well below the legal limit of 10.0) to ensure zero rancidity.
              </p>
            </div>

            <div className="bg-slate-800 bg-opacity-40 border border-slate-800 p-6 rounded-xl text-center space-y-3">
              <span className="text-xl font-bold text-accent-gold">Lovibond Color Index</span>
              <p className="text-slate-400 text-xs leading-relaxed">
                Automated colorimetry measures oil lightness. Bleaching clay cycles ensure a uniform, clean golden hue with zero visual sediments.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Quality Certification seals strip */}
      <section className="py-16 bg-white border-t border-slate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-slate-400 font-bold uppercase tracking-wider text-xs">
            Certifications & Standards Compliance
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-75">
            <div className="flex items-center gap-2 text-slate-800 font-extrabold text-base tracking-wide uppercase">
              <CheckCircle2 className="w-5 h-5 text-accent-gold" />
              <span>FSSAI Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-slate-800 font-extrabold text-base tracking-wide uppercase">
              <CheckCircle2 className="w-5 h-5 text-accent-gold" />
              <span>ISO 22000:2018</span>
            </div>
            <div className="flex items-center gap-2 text-slate-800 font-extrabold text-base tracking-wide uppercase">
              <CheckCircle2 className="w-5 h-5 text-accent-gold" />
              <span>HACCP Standard</span>
            </div>
            <div className="flex items-center gap-2 text-slate-800 font-extrabold text-base tracking-wide uppercase">
              <CheckCircle2 className="w-5 h-5 text-accent-gold" />
              <span>GMP Standard</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
