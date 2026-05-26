'use client'

import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export  function FooterSection() {
  const footerLinks = [
    {
      title: "Services",
      links: ["Web Development", "Mobile Apps", "AI Integration", "UI/UX Design", "Consulting", "Support"]
    },
    {
      title: "Technologies",
      links: ["React & Next.js", "Flutter & React Native", "Python & Node.js", "AWS & GCP", "AI & ML", "Databases"]
    },
    {
      title: "Resources",
      links: ["Blog", "Case Studies", "Portfolio", "Testimonials", "Process", "FAQ"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Partners", "Clients", "Newsroom", "Contact"]
    }
  ];

  const brandLogos = [
    { name: "acme", styles: "font-semibold text-xl tracking-tight text-neutral-500 lowercase" },
    { name: "NEXORA", styles: "font-bold text-lg tracking-wider text-neutral-500 uppercase" },
    { name: "Cloudify", styles: "font-medium text-lg text-neutral-500 flex items-center gap-1" },
    { name: "Globex", styles: "font-bold text-lg tracking-tight text-neutral-500" },
    { name: "zenith", styles: "font-semibold text-lg text-neutral-500 italic" }
  ];

  return (
    <footer className="bg-neutral-50/60 pt-20 pb-8 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden border-t border-neutral-200/40">
      
      {/* Background Decorative Accents */}
      {/* Bottom Right Dot Grid */}
      <div className="absolute bottom-40 right-12 grid grid-cols-6 gap-2 opacity-10 hidden md:grid">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-neutral-900 rounded-full"></div>
        ))}
      </div>

      {/* Left Bottom Abstract Arch Curve */}
      <div className="absolute left-[-100px] bottom-[-50px] w-[350px] h-[350px] pointer-events-none hidden lg:block">
        <div className="absolute inset-0 rounded-full border border-neutral-200/60 scale-90"></div>
        <div className="absolute inset-0 rounded-full border border-neutral-200/30 scale-75"></div>
        {/* Accent tracking dot */}
        <div className="absolute right-1/4 top-12 w-2 h-2 bg-[#FF5722] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Upper Link Directories & Newsletter Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-16">
          
          {/* Brand Info Pillar Column */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              {/* Fallback stylized logo placeholder mimicking the reference artwork */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-black text-2xl shadow-md transform rotate-12">
                B
              </div>
              <span className="text-2xl font-extrabold text-neutral-900 tracking-tight ml-1">UBConcept</span>
            </div>
            <p className="text-neutral-500 text-sm font-medium leading-relaxed max-w-[240px]">
              Building world-class web and mobile applications powered by AI to help your business grow.
            </p>
            
            {/* Enterprise Tag Badge */}
            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-50 border border-orange-100 rounded-lg flex items-center justify-center text-[#FF5722]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-900">Enterprise Ready</h4>
                <p className="text-[10px] text-neutral-400 font-semibold tracking-wide mt-0.5">Security • Reliability • Support</p>
              </div>
            </div>
          </div>

          {/* Dynamic Link Directory Segments */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerLinks.map((section, idx) => (
              <div key={idx} className="flex flex-col">
                <h3 className="text-neutral-900 font-bold text-sm tracking-wide mb-4 relative">
                  {section.title}
                  <span className="absolute left-0 bottom-[-6px] w-3 h-[2px] bg-[#FF5722]"></span>
                </h3>
                <ul className="space-y-3 mt-2">
                  {section.links.map((link, linkIdx) => {
                    const lowerLink = link.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <li key={linkIdx}>
                        <Link href={lowerLink} className="text-neutral-500 hover:text-[#FF5722] text-sm font-medium transition-colors duration-200">
                          {link}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Box Pillar Column */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-neutral-900 font-bold text-sm tracking-wide mb-4">Stay Updated</h3>
            <p className="text-neutral-500 text-sm font-medium leading-relaxed mb-4">
              Subscribe to our newsletter for the latest updates, insights, and events.
            </p>
            
            {/* Input Form Wrapper */}
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center bg-white border border-neutral-200/80 rounded-xl p-1.5 shadow-inner max-w-sm">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full pl-3 text-sm font-medium text-neutral-800 placeholder-neutral-400 focus:outline-none bg-transparent"
              />
              <button 
                type="submit" 
                aria-label="Subscribe to newsletter"
                className="w-10 h-10 bg-[#FF5722] hover:bg-[#E64A19] rounded-lg flex items-center justify-center text-white transition-colors duration-200 flex-shrink-0 shadow-sm"
              >
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </form>

            <p className="text-[11px] text-neutral-400 font-medium leading-relaxed mt-4">
              By subscribing, you agree to our{' '}
              <a href="#" className="text-[#FF5722] hover:underline font-semibold">Privacy Policy</a> and{' '}
              <a href="#" className="text-[#FF5722] hover:underline font-semibold">Terms of Service</a>.
            </p>
          </div>

        </div>

        {/* Middle Trusted Logo Marquee Strip Banner */}
        <div className="bg-orange-50/20 border border-orange-100/50 rounded-2xl py-6 px-8 flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 shadow-sm">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#FF5722] fill-orange-50/40" />
            <p className="text-neutral-800 font-bold text-sm tracking-wide text-center lg:text-left">
              Trusted by thousands of organizations worldwide
            </p>
          </div>
          
          {/* Divider visible on desktop layers */}
          <div className="hidden lg:block h-6 w-[1px] bg-neutral-200 mx-4"></div>

          {/* Dummy Clean Text Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {brandLogos.map((logo, index) => (
              <div key={index} className={logo.styles}>
                {logo.name === "Cloudify" && (
                  <span className="inline-block w-4 h-4 rounded-full border-2 border-neutral-400 mr-0.5"></span>
                )}
                {logo.name}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Utility Copyright & Social Strip */}
        <div className="border-t border-neutral-200/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs font-medium text-neutral-500 tracking-wide text-center sm:text-left order-2 sm:order-1">
            © 2026 UBConcept. All rights reserved.
          </div>

          {/* Legal Document Context Anchor Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-neutral-500 order-3 sm:order-2">
            <a href="#" className="hover:text-[#FF5722] transition-colors">Privacy Policy</a>
            <span className="text-neutral-300 hidden sm:inline">|</span>
            <a href="#" className="hover:text-[#FF5722] transition-colors">Terms of Service</a>
            <span className="text-neutral-300 hidden sm:inline">|</span>
            <a href="#" className="hover:text-[#FF5722] transition-colors">Security</a>
            <span className="text-neutral-300 hidden sm:inline">|</span>
            <a href="#" className="hover:text-[#FF5722] transition-colors">Trust Center</a>
          </div>

          {/* Social Links Network Block */}
         {/* Social Links Network Block */}
<div className="flex items-center justify-center gap-5 text-neutral-600 order-1 sm:order-3">
  {/* LinkedIn */}
  <Link href="#" className="hover:text-[#FF5722] transition-colors duration-200">
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  </Link>

  {/* Twitter / X */}
  <Link href="#" className="hover:text-[#FF5722] transition-colors duration-200">
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  </Link>

  {/* YouTube */}
  <Link href="#" className="hover:text-[#FF5722] transition-colors duration-200">
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
    </svg>
  </Link>

  {/* GitHub */}
  <Link href="#" className="hover:text-[#FF5722] transition-colors duration-200">
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  </Link>
</div>
        </div>

      </div>
    </footer>
  );
}