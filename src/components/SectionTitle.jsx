import React from 'react';

/**
 * A standard, premium section title with subheadings and brand colored underlines.
 * @param {string} title The main title text
 * @param {string} subtitle The small subtitle category label above the title
 * @param {boolean} center If true, centers the text and accent bar. Defaults to true.
 */
export default function SectionTitle({ title, subtitle, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="text-sm font-semibold uppercase tracking-wider text-accent-gold bg-accent-goldLight px-3 py-1 rounded-full">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-corporate-dark mt-3 tracking-tight">
        {title}
      </h2>
      <div 
        className={`h-1.5 w-20 bg-gradient-to-r from-corporate-blue to-accent-gold rounded-full mt-4 ${
          center ? 'mx-auto' : 'mr-auto'
        }`}
      />
    </div>
  );
}
