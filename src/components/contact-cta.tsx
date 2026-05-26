import React from 'react';
import { Rocket, ArrowUpRight, ArrowRight, Phone } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">    
        {/* MAIN CTA CONTAINER CARD */}
        <div className="bg-[#FF5722] rounded-2xl p-8 lg:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg shadow-orange-600/10">
          
          {/* BACKGROUND GRAPHIC ACCENTS */}
          {/* Left Side Fine Micro Dot Grid */}
          <div className="absolute left-6 bottom-4 grid grid-cols-5 gap-2 opacity-15 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
            ))}
          </div>

          {/* Right Side Large Concentric Orbit Rings */}
          <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none z-0 hidden md:block">
            <div className="absolute inset-0 rounded-full border border-white/10 scale-100"></div>
            <div className="absolute inset-0 rounded-full border border-white/15 scale-75"></div>
            <div className="absolute inset-0 rounded-full border border-white/20 scale-50"></div>
          </div>

          {/* LEFT CONTENT SEGMENT (Rocket Icon & Heading text) */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 z-10 max-w-xl">
            {/* White Squared Floating Rocket Badge */}
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#FF5722] shadow-md flex-shrink-0 relative">
              <Rocket className="w-7 h-7 transform -rotate-45" fill="currentColor" fillOpacity={0.1} />
              {/* Subtle back ambient shadow mask matching the prompt style */}
              <div className="absolute inset-0 rounded-2xl shadow-inner pointer-events-none opacity-40"></div>
            </div>

            {/* Main Callout Typography */}
            <div className="flex flex-col space-y-1">
              <h2 className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Ready to Build <br className="hidden sm:inline" /> Something Amazing?
              </h2>
            </div>
          </div>

          {/* CENTER TEXT & BUTTON ACTIONS HUB */}
          <div className="flex flex-col md:flex-row items-center lg:items-start gap-6 z-10 w-full lg:w-auto">
            
            {/* Descriptive Subtext & Buttons Grid */}
            <div className="flex flex-col space-y-4 max-w-lg text-center md:text-left">
              <p className="text-orange-50 font-medium text-sm leading-relaxed">
                Start your journey with UBConcept today. Let&apos;s build something great together.
              </p>
               <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                {/* Book a Demo Button */}
                <button className="bg-white cursor-pointer hover:bg-orange-50 text-[#FF5722] px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-colors group">
                  Start a Project
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                </button>

                {/* Contact the Team Outline Button */}
                <button className="bg-transparent cursor-pointer hover:bg-white/5 text-white border border-white/30 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors">
                  <Phone className="w-3.5 h-3.5" fill="currentColor" fillOpacity={0.2} />
                  Contact the Team
                </button>
              </div>    
            </div>

            {/* RIGHT SIDE FLOATING GLOWING ARROW CIRCLE (Hidden on mobile scales) */}
            <div className="hidden md:flex w-20 h-20 bg-white rounded-full items-center justify-center text-[#FF5722] shadow-2xl relative z-10 flex-shrink-0 lg:ml-6">
              <ArrowUpRight className="w-8 h-8" strokeWidth={2.5} />
            </div>

          </div>
          
        </div>
          
      </div>
    </section>
  );
}