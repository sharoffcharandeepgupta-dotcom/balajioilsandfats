import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center pt-24 px-4 bg-slate-50">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-2xl border border-slate-150 shadow-md text-center space-y-6">
        
        {/* Visual decoration icon */}
        <div className="w-20 h-20 rounded-full bg-amber-50 border border-amber-100 text-accent-gold flex items-center justify-center mx-auto shadow-inner">
          <HelpCircle className="w-10 h-10 animate-bounce" />
        </div>

        <div className="space-y-2">
          <span className="text-sm font-bold text-accent-gold uppercase tracking-widest">Error 404</span>
          <h1 className="text-3xl font-extrabold text-corporate-dark">Page Not Found</h1>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
            The page you are trying to reach doesn't exist, has been removed, or its URL has changed.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-1.5 bg-corporate-blue hover:bg-slate-800 text-white font-bold py-2.5 px-5 rounded-lg text-sm transition-colors shadow-sm focus:outline-none"
          >
            <Home className="w-4 h-4 text-accent-gold" />
            <span>Go to Home</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-1.5 border border-slate-200 hover:border-slate-350 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 px-5 rounded-lg text-sm transition-colors focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>

      </div>
    </div>
  );
}
