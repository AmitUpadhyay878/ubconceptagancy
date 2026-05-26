'use client'

import React from 'react';
import { Clock, CheckCircle2, Star, Calendar, Phone, Zap, Headphones, ShieldCheck, TrendingUp, ArrowRight, Globe } from 'lucide-react';

export function ContactHero() {
  const horizontalBadges = [
    { icon: <Zap className="w-4 h-4 text-[#FF5722]" fill="currentColor" />, title: "Fast Response", desc: "< 2 Hours" },
    { icon: <Headphones className="w-4 h-4 text-[#FF5722]" />, title: "Expert Support", desc: "24/7 Available" },
    { icon: <ShieldCheck className="w-4 h-4 text-[#FF5722]" />, title: "Trusted by 10K+", desc: "Global Teams" }
  ];

  const bottomCards = [
    {
      icon: <TrendingUp className="w-5 h-5 text-white" />,
      title: "Start a Project",
      description: "Tell us about your idea and we'll help bring it to life.",
      cta: "Start a Project"
    },
    {
      icon: <Headphones className="w-5 h-5 text-white" />,
      title: "Get Support",
      description: "Need help? Our support team is ready to assist you 24/7.",
      cta: "Get Support"
    },
    {
      icon: <Globe className="w-5 h-5 text-white" />,
      title: "Partner With Us",
      description: "Collaborate with UBConcept for partnerships and integrations.",
      cta: "Partner With Us"
    }
  ];

  return (
    <section className="bg-[#FAF9F6] pt-20 pb-16 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden min-h-screen flex flex-col justify-between">
      
      {/* BACKGROUND DECORATIVE ACCENTS */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full pointer-events-none z-0">
        {/* Large faint background circular path tracks wrapping the support profile */}
        <div className="absolute top-[5%] right-[-5%] w-[650px] h-[650px] rounded-full border border-orange-200/40 hidden lg:block"></div>
        <div className="absolute top-[2%] right-[-8%] w-[750px] h-[750px] rounded-full border border-neutral-200/50 hidden lg:block"></div>
        
        {/* Top Right Micro Dot Grid */}
        <div className="absolute top-12 right-12 grid grid-cols-5 gap-2 opacity-20 hidden sm:grid">
          {[...Array(20)].map((_, i) => <div key={i} className="w-1 h-1 bg-neutral-900 rounded-full"></div>)}
        </div>
        
        {/* Accent tracking points */}
        <div className="absolute left-[45%] top-[15%] w-2.5 h-2.5 bg-[#FF5722] rounded-full hidden lg:block"></div>
        <div className="absolute right-[5%] top-[25%] w-2 h-2 bg-[#FF5722] rounded-full hidden lg:block"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex-grow flex flex-col justify-center">
        
        {/* MAIN BODY ROWS CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-6">
          
          {/* LEFT SIDE BLOCK - HEADINGS AND CTAs */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
            <div className="flex items-center gap-2">
              <span className="w-3 h-[2px] bg-[#FF5722]"></span>
              <span className="text-[11px] font-bold text-[#FF5722] tracking-widest uppercase">
                Contact
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.08]">
              Let&apos;s Build <br />
              <span className="text-[#FF5722]">Your Next App.</span>
            </h1>

            <p className="text-neutral-500 font-medium text-lg max-w-lg leading-relaxed">
              From concept to launch, our team builds powerful web and mobile products with AI at their core.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="bg-[#FF5722] hover:bg-[#E64A19] text-white px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-md shadow-orange-600/10 transition-all duration-200">
                <Calendar className="w-4 h-4" />
                Start a Project
                <ArrowRight className="w-3.5 h-3.5 ml-1" strokeWidth={2.5} />
              </button>
              <button className="bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200/80 px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm transition-all duration-200">
                <Phone className="w-4 h-4 text-[#FF5722]" fill="currentColor" />
                Talk to Sales
              </button>
            </div>

            {/* Micro Badge Items Layout */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-neutral-200/60 max-w-xl">
              {horizontalBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                    {badge.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-neutral-800 leading-none">{badge.title}</span>
                    <span className="text-[10px] text-neutral-400 font-bold mt-0.5">{badge.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE BLOCK - SUPPORT WORKER IMAGERY AND INTERFACE FLOATS */}
          <div className="lg:col-span-6 relative w-full h-[460px] sm:h-[500px] flex items-center justify-center lg:justify-end">
            
            {/* Centered Ring Orbit Anchor Wrapper (Image Frame Mask) */}
            <div className="relative w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] bg-gradient-to-tr from-orange-100/40 to-orange-50/20 rounded-full flex items-center justify-center z-10 lg:mr-12">
              
              {/* Profile Headshot Asset Placeholder (Masked internally with clean layout) */}
              <div className="w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] rounded-full overflow-hidden bg-neutral-200/60 relative border-4 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
                  alt="Customer Support Representative"
                  className="w-full h-full object-cover object-top scale-105"
                />
              </div>

              {/* 1. Live Support Card (Top Left Float) */}
              <div className="bg-white border border-neutral-100 rounded-2xl py-3.5 px-5 shadow-xl flex items-center space-x-3 absolute left-[-20px] top-4 z-30">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-neutral-800 tracking-tight">Live Support</span>
                  <div className="flex items-center space-x-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[10px] font-bold text-neutral-400 tracking-wide">We&apos;re Online</span>
                  </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-50" />
              </div>

              {/* 2. Average Response Panel (Center Left Float) */}
              <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-5 shadow-2xl w-52 absolute left-[-40px] bottom-12 z-30 flex flex-col space-y-2">
                <div className="flex items-center space-x-2 text-neutral-400 text-[10px] font-bold uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Avg Response Time</span>
                </div>
                <div className="text-2xl font-black text-white tracking-tight">
                  &lt; 2 Hours
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] font-bold text-[#FF5722] uppercase tracking-widest flex items-center gap-1">
                    <span className="w-1 h-1 bg-[#FF5722] rounded-full"></span> Lightning Fast
                  </span>
                  {/* Miniature Sparkline Graphic */}
                  <div className="w-16 h-4">
                    <svg className="w-full h-full" viewBox="0 0 60 20" fill="none">
                      <path d="M0 15 Q15 18 25 10 T45 8 T60 2" stroke="#FF5722" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 3. Customer Satisfaction Rating Module (Right Float) */}
              <div className="bg-white border border-neutral-200/50 rounded-2xl p-4 shadow-xl w-36 absolute right-[-20px] sm:right-[-10px] top-1/3 z-30 flex flex-col">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Customer</span>
                <span className="text-xs font-bold text-neutral-800 tracking-tight -mt-0.5">Satisfaction</span>
                
                {/* 5-Star Indicators Block */}
                <div className="flex items-center gap-0.5 my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                
                <div className="text-xl font-black text-neutral-900 tracking-tighter">
                  4.9<span className="text-neutral-400 font-bold text-xs">/5</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: 3-COLUMN NAVIGATION HUB */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 relative z-10 w-full">
          {bottomCards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-neutral-200/50 rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200 min-h-[200px]"
            >
              <div>
                {/* Micro Icon Circle Box */}
                <div className="w-10 h-10 bg-[#FF5722] rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm shadow-orange-500/10 mb-4">
                  {card.icon}
                </div>
                <h3 className="text-neutral-900 font-extrabold text-base tracking-tight mb-2">
                  {card.title}
                </h3>
                <p className="text-neutral-500 font-medium text-xs sm:text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom Text Anchor CTA */}
              <div className="pt-5">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF5722] hover:text-[#E64A19] transition-colors group"
                >
                  {card.cta}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}