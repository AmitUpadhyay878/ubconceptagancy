'use client'
import React from 'react';
import { ArrowUpRight, ArrowRight, Briefcase, Send } from 'lucide-react';

export default function PortfolioSection() {
 
    const projects = [
    {
      id: "01",
      title: "Vertexa Analytics Platform",
      category: "SaaS Platform",
      description: "A comprehensive analytics platform that helps businesses track performance and generate actionable insights in real-time.",
      tags: ["React", "Node.js", "PostgreSQL", "AWS"],
      // Mock images styled to replicate dark dashboard previews
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      bgClass: "bg-[#121212]"
    },
    {
      id: "02",
      title: "Brightstone E-commerce",
      category: "E-commerce",
      description: "A modern e-commerce solution with seamless shopping experience, secure payments, and powerful admin management.",
      tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop",
      bgClass: "bg-neutral-100"
    },
    {
      id: "03",
      title: "Noventi Mobile App",
      category: "Mobile App",
      description: "A productivity mobile app that helps users stay organized, track goals, and boost daily performance.",
      tags: ["Flutter", "Firebase", "Dart", "Figma"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop",
      bgClass: "bg-gradient-to-br from-indigo-950 to-purple-950"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">

      <div className="absolute top-12 left-12 grid grid-cols-6 gap-2 opacity-15 hidden md:grid">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></div>
        ))}
      </div>

      {/* Top Right Concentric Orbit Rings */}
      <div className="absolute right-[-100px] top-[-50px] w-[500px] h-[500px] pointer-events-none z-0 hidden lg:block">
        <div className="absolute inset-0 rounded-full border border-neutral-200/60 scale-100"></div>
        <div className="absolute inset-0 rounded-full border border-neutral-200/80 scale-75"></div>
        {/* Soft blur background gradient aura */}
        <div className="absolute right-0 top-1/4 w-48 h-48 rounded-full bg-orange-200/30 blur-3xl"></div>
        {/* Minimalist accent timeline tracking dots */}
        <div className="absolute left-1/4 top-1/3 w-2 h-2 bg-[#FF5722] rounded-full"></div>
        <div className="absolute left-[15%] top-2/3 w-2.5 h-2.5 bg-neutral-900 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-4 h-[2px] bg-[#FF5722]"></span>
            <span className="text-xs font-bold text-[#FF5722] tracking-widest uppercase">Our Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
            Projects That <br />
            Reflect <span className="text-[#FF5722]">Excellence.</span>
          </h2>
          <p className="mt-4 text-neutral-500 font-medium text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We partner with forward-thinking organizations to build powerful digital experiences that drive real results.
          </p>
        </div>

        {/* 3-COLUMN PORTFOLIO CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-3xl overflow-hidden border border-neutral-200/50 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative group"
            >
              <div>
                {/* PROJECT WORK IMAGE CONTAINER PREVIEW */}
                <div className={`h-[260px] relative overflow-hidden flex items-center justify-center p-6 border-b border-neutral-100`}>
                  
                
                  <div className="absolute top-4 z-10 left-4 w-9 h-9 bg-[#FF5722] text-white rounded-xl font-bold text-sm flex items-center justify-center shadow-md shadow-orange-600/10">
                    {project.id}
                  </div>

                  {/* Floating Content Category Text Tag */}
                  <div className="absolute top-4 z-10 right-4 bg-white/90 backdrop-blur-sm border border-neutral-200/30 text-neutral-800 text-[11px] font-bold px-3 py-1.5 rounded-full tracking-wide shadow-sm">
                    {project.category}
                  </div>

                  {/* Inner Project Screen Asset Preview Render */}
                  <div className="w-full h-full mt-6 rounded-t-xl overflow-hidden shadow-2xl relative border border-neutral-200/10 transition-transform duration-300 group-hover:scale-[1.02]">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-top filter contrast-[1.02]"
                    />
                  </div>
                </div>

                {/* TEXT DETAILED CONTENT AREA */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-neutral-900 text-xl font-extrabold tracking-tight mb-2 group-hover:text-[#FF5722] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-500 font-medium text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Responsive Code Tag Pills Block */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="bg-neutral-50 text-neutral-500 border border-neutral-200/60 font-semibold text-xs px-3 py-1.5 rounded-full tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CARD ANCHOR FOOTER ACTION PANEL */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 flex items-center justify-between border-t border-neutral-50">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FF5722] hover:text-[#E64A19] tracking-tight group/link"
                >
                  View Project
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" strokeWidth={2.5} />
                </a>

                {/* Floating Round Accent Arrow Anchor Button */}
                <div className="w-12 h-12 bg-orange-50/60 rounded-full flex items-center justify-center text-[#FF5722] border border-orange-100/30 shadow-inner group-hover:bg-[#FF5722] group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* BOTTOM SECTION: "HAVE A PROJECT IN MIND?" CTA BANNER */}
        <div className="bg-white rounded-2xl border border-neutral-200/50 p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm relative overflow-hidden max-w-7xl mx-auto">
          
          {/* Decorative Corner Elements inside the lower CTA box */}
          {/* Micro dot overlay left */}
          <div className="absolute left-6 bottom-4 grid grid-cols-4 gap-1.5 opacity-15 pointer-events-none hidden sm:grid">
            {[...Array(12)].map((_, i) => <div key={i} className="w-1 h-1 bg-neutral-900 rounded-full"></div>)}
          </div>
          
          {/* Concentric rings wrapper right */}
          <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-48 h-48 pointer-events-none opacity-5 hidden lg:block">
            <div className="absolute inset-0 rounded-full border border-neutral-900 scale-100"></div>
            <div className="absolute inset-0 rounded-full border border-neutral-900 scale-75"></div>
          </div>

          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-5 z-10">
            {/* Squared Soft Tinted Briefcase Icon Frame */}
            <div className="w-14 h-14 bg-orange-50 border border-orange-100 rounded-2xl flex items-center justify-center text-[#FF5722] shadow-inner relative flex-shrink-0">
              <Briefcase className="w-6 h-6" fill="currentColor" fillOpacity={0.05} />
            </div>
            
            {/* CTA Typography */}
            <div className="flex flex-col space-y-1">
              <h3 className="text-neutral-900 text-2xl font-black tracking-tight">
                Have a Project in Mind?
              </h3>
              <p className="text-neutral-400 font-medium text-sm tracking-wide">
                Let&apos;s build something amazing together. We&apos;re just a message away!
              </p>
            </div>
          </div>

          {/* Action Interaction Controls Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 z-10 w-full lg:w-auto">
            {/* Primary Action */}
            <button className="w-full sm:w-auto bg-[#FF5722] hover:bg-[#E64A19] text-white px-6 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-600/10 transition-colors group/btn">
              Start a Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" strokeWidth={2.5} />
            </button>

            {/* Secondary Action */}
            <button className="w-full sm:w-auto bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200 px-6 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors relative group/btn2">
              Contact Us
              <ArrowRight className="w-4 h-4 text-neutral-700 transition-transform group-hover/btn2:translate-x-0.5" strokeWidth={2.5} />
              
              {/* Floating stylized send paper-plane badge to perfectly represent the right-aligned layout element */}
              <div className="absolute right-[-70px] lg:right-[-90px] top-1/2 -translate-y-1/2 w-12 h-12 bg-[#FF5722] text-white rounded-full items-center justify-center shadow-lg hidden sm:flex transform translate-x-4 lg:translate-x-0">
                <Send className="w-4 h-4 transform -rotate-12 translate-x-0.5" fill="currentColor" fillOpacity={0.1} />
              </div>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
