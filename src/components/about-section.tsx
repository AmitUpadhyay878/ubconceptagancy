"use client"

// import { motion } from "framer-motion"
// import { Activity, ShieldCheck, Users, TrendingUp } from "lucide-react"

// export function AboutSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#F8F6F2] py-16">
//       <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-orange-100 blur-3xl opacity-30" />

//       <div className="mx-auto max-w-7xl px-6 lg:px-10">
//         <div className="grid gap-5 lg:grid-cols-12">
          
//           {/* LEFT COLUMN */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="lg:col-span-4"
//           >
//             <div className="mb-6 flex items-center gap-2.5">
//               <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF612F] text-white">
//                 <TrendingUp className="h-4 w-4" />
//               </div>
//               <span className="text-xl font-black tracking-tight text-[#111111]">
//                 NEXORA
//               </span>
//             </div>

//             <h2 className="max-w-md text-3xl font-black leading-[1.1] tracking-[-0.03em] text-[#111111] sm:text-4xl">
//               Smarter Decisions,
//               <span className="block text-[#FF612F]">
//                 Better Outcomes.
//               </span>
//             </h2>

//             <p className="mt-5 max-w-md text-base leading-7 text-[#666666]">
//               Nexora brings clarity to complexity so teams can
//               move forward with confidence.
//             </p>

//             {/* Dark Card */}
//             <div className="relative mt-8 overflow-hidden rounded-[24px] bg-[#111111] p-6 text-white shadow-xl">
              
//               <div className="absolute right-[-30px] top-8 h-48 w-48 rounded-full border border-white/10" />
//               <div className="absolute right-6 top-16 h-32 w-32 rounded-full border-[10px] border-white/20 border-r-[#FF612F] border-b-[#FF612F]" />

//               <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/30 bg-[#1c1c1c]">
//                 <Activity className="h-5 w-5 text-[#FF612F]" />
//               </div>

//               <div className="relative z-10 mt-6">
//                 <h3 className="max-w-xs text-2xl font-bold leading-tight">
//                   Actionable Intelligence
//                 </h3>
//                 <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-300">
//                   Turn data into decisions with real-time
//                   insights that drive measurable impact.
//                 </p>
//               </div>

//               <div className="absolute bottom-4 left-4 grid grid-cols-5 gap-1.5 opacity-20">
//                 {Array.from({ length: 15 }).map((_, i) => (
//                   <div key={i} className="h-1 w-1 rounded-full bg-white" />
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* RIGHT GRID */}
//           <div className="grid gap-5 lg:col-span-8 lg:grid-cols-2">
            
//             {/* Top Wide Card */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="relative overflow-hidden rounded-[24px] border border-neutral-200 bg-white p-7 shadow-sm lg:col-span-2"
//             >
//               <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200">
//                 <TrendingUp className="h-5 w-5 text-[#111111]" />
//               </div>

//               <div className="mt-5 max-w-md">
//                 <h3 className="text-2xl font-bold tracking-tight text-[#111111]">
//                   Unified Overview
//                 </h3>
//                 <p className="mt-2 text-sm leading-6 text-[#666666]">
//                   All your metrics and signals in one place
//                   for complete visibility.
//                 </p>
//               </div>

//               <div className="absolute right-0 top-0 hidden h-full w-[52%] lg:block">
//                 <svg viewBox="0 0 500 300" className="h-full w-full" fill="none">
//                   <path d="M20 180 C100 20, 180 260, 260 140 C340 20, 400 220, 480 40" stroke="#111111" strokeWidth="2" fill="none" />
//                   <circle cx="260" cy="140" r="10" fill="#FF612F" />
//                   <circle cx="260" cy="140" r="22" fill="#FF612F" opacity="0.15" />
//                 </svg>
//               </div>

//               <div className="mt-6 flex gap-2">
//                 <div className="h-2.5 w-2.5 rounded-full bg-[#FF612F]" />
//                 <div className="h-2.5 w-2.5 rounded-full bg-[#111111]" />
//                 <div className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
//               </div>
//             </motion.div>

//             {/* Orange Card */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className="relative overflow-hidden rounded-[24px] bg-[#FF612F] p-6 text-white shadow-lg"
//             >
//               <div className="absolute right-[-40px] top-8 h-48 w-48 rounded-full border border-white/20" />
//               <div className="absolute right-0 top-16 h-32 w-32 rounded-full border border-dashed border-white/30" />

//               <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/10">
//                 <ShieldCheck className="h-5 w-5" />
//               </div>

//               <div className="relative z-10 mt-6">
//                 <h3 className="max-w-xs text-2xl font-bold leading-tight">
//                   Proactive Protection
//                 </h3>
//                 <p className="mt-3 max-w-sm text-sm leading-6 text-orange-50">
//                   Identify risks early and stay ahead with
//                   intelligent alerts and monitoring.
//                 </p>
//               </div>

//               <div className="absolute bottom-6 right-6 flex h-20 w-20 items-center justify-center rounded-full bg-white">
//                 <span className="text-3xl font-black text-[#FF612F]">!</span>
//               </div>
//             </motion.div>

//             {/* White Card */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="relative overflow-hidden rounded-[24px] border border-neutral-200 bg-white p-6 shadow-sm"
//             >
//               <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200">
//                 <Users className="h-5 w-5 text-[#111111]" />
//               </div>

//               <div className="mt-6">
//                 <h3 className="text-2xl font-bold leading-tight text-[#111111]">
//                   Team Alignment
//                 </h3>
//                 <p className="mt-2 text-sm leading-6 text-[#666666]">
//                   Keep everyone informed and aligned with
//                   real-time updates and shared goals.
//                 </p>
//               </div>

//               <div className="absolute -right-6 bottom-0 h-44 w-44 rounded-full border-[16px] border-neutral-100 border-r-[#FF612F]" />

//               <div className="mt-6 flex gap-2">
//                 <div className="h-2.5 w-2.5 rounded-full bg-[#FF612F]" />
//                 <div className="h-2.5 w-2.5 rounded-full bg-[#FF612F]" />
//                 <div className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import React from 'react';
import { Zap, TrendingUp, ShieldCheck, Users } from 'lucide-react';

export  function AboutSection() {
  return (
    <section className="bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column: Header text and Large Black Card */}
          <div className="lg:col-span-1 flex flex-col justify-between gap-8">
            {/* Main Header */}
            <div className="max-w-md">
              <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-none">
                We Build, <br />
                <span className="text-[#FF5722]">You Scale.</span>
              </h2>
              <p className="mt-4 text-neutral-600 text-lg leading-relaxed font-medium">
                UBConcept crafts custom web and mobile applications powered by AI to help your business grow.
              </p>
            </div>

            {/* Actionable Intelligence Card (Black) */}
            <div className="bg-[#121212] rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between h-[360px] shadow-sm">
              {/* Dot Grid Background Accent */}
              <div className="absolute bottom-6 left-6 grid grid-cols-5 gap-2 opacity-20">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                ))}
              </div>

              {/* Lucide Icon (Zap) */}
              <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-[#FF5722] shadow-inner">
                <Zap className="w-5 h-5 fill-current" />
              </div>

              {/* Text Content */}
              <div className="z-10 mt-auto max-w-[240px]">
                <h3 className="text-white text-2xl font-bold tracking-tight">Custom Development</h3>
                <p className="text-neutral-400 mt-2 text-sm font-medium leading-relaxed">
                  Tailored web and mobile solutions built with cutting-edge technology and AI.
                </p>
              </div>

              {/* Circular Graphic Component */}
              <div className="absolute right-[-40px] top-[40px] sm:top-[60px] w-64 h-64 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border-[14px] border-neutral-800 flex items-center justify-center relative">
                  {/* Orange progress arc segment */}
                  <div className="absolute inset-0 rounded-full border-[14px] border-t-[#FF5722] border-r-[#FF5722] border-b-transparent border-l-transparent rotate-45 transform"></div>
                  {/* Inner center dot */}
                  <div className="w-4 h-4 bg-[#FF5722] rounded-full"></div>
                </div>
                {/* Micro orbit dots */}
                <div className="absolute w-56 h-56 rounded-full border border-dashed border-neutral-800 opacity-40 animate-spin-slow"></div>
              </div>
            </div>
          </div>

          {/* Right Columns: Container for Top Wide Card and Bottom Two Splitted Cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Unified Overview Card (Top Wide White Card) */}
            <div className="bg-white rounded-2xl p-8 border border-neutral-200/60 flex flex-col sm:flex-row justify-between items-start sm:items-center min-h-[220px] relative overflow-hidden shadow-sm">
              <div className="flex flex-col justify-between h-full max-w-xs z-10">
                <div>
                  {/* Lucide Icon (TrendingUp) */}
                  <div className="w-12 h-12 bg-neutral-50 border border-neutral-100 rounded-xl flex items-center justify-center text-neutral-800 mb-6 shadow-sm">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-neutral-900 text-2xl font-bold tracking-tight">Full-Stack Expertise</h3>
                  <p className="text-neutral-500 mt-2 text-sm font-medium leading-relaxed">
                    From frontend to backend, we deliver complete, production-ready applications.
                  </p>
                </div>
                {/* Pagination Dots */}
                <div className="flex gap-1.5 mt-6">
                  <span className="w-2 h-2 rounded-full bg-[#FF5722]"></span>
                  <span className="w-2 h-2 rounded-full bg-neutral-200"></span>
                  <span className="w-2 h-2 rounded-full bg-neutral-200"></span>
                </div>
              </div>

              {/* Sine Wave Line Chart Graphic */}
              <div className="w-full sm:w-3/5 h-40 mt-6 sm:mt-0 relative flex items-center">
                <svg className="w-full h-full" viewBox="0 0 300 120" fill="none">
                  <path 
                    d="M 0 90 C 40 90, 30 30, 70 30 C 110 30, 100 110, 140 110 C 180 110, 170 50, 210 50 C 250 50, 260 10, 300 10" 
                    stroke="url(#line-gradient)" 
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#404040" />
                      <stop offset="50%" stopColor="#FF5722" />
                      <stop offset="100%" stopColor="#171717" />
                    </linearGradient>
                  </defs>
                  {/* Grid tracking line */}
                  <line x1="70" y1="10" x2="70" y2="110" stroke="#e5e5e5" strokeDasharray="3 3" />
                  <line x1="140" y1="10" x2="140" y2="110" stroke="#e5e5e5" strokeDasharray="3 3" />
                  {/* Highlighted Target Dot */}
                  <circle cx="70" cy="30" r="5" fill="#FF5722" />
                  <circle cx="70" cy="30" r="10" stroke="#FF5722" strokeWidth="2" fill="none" opacity="0.4" />
                </svg>
              </div>
            </div>

            {/* Bottom Row Splitted Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Proactive Protection Card (Orange) */}
              <div className="bg-[#FF5722] rounded-2xl p-8 flex flex-col justify-between h-[280px] relative overflow-hidden shadow-sm">
                {/* Lucide Icon (ShieldCheck) */}
                <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white shadow-inner">
                  <ShieldCheck className="w-5 h-5" />
                </div>

                <div className="z-10 mt-auto max-w-[200px]">
                  <h3 className="text-white text-2xl font-bold tracking-tight">AI-First Approach</h3>
                  <p className="text-orange-100/80 mt-2 text-sm font-medium leading-relaxed">
                    We integrate AI into every product to deliver smarter, adaptive experiences.
                  </p>
                </div>

                {/* Radar/Alert Graphic Element */}
                <div className="absolute right-[-20px] bottom-[30px] w-40 h-40 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-dashed border-white/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border border-dashed border-white/30 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg text-[#FF5722] font-bold text-xl">
                        !
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Alignment Card (White/Gray) */}
              <div className="bg-white rounded-2xl p-8 border border-neutral-200/60 flex flex-col justify-between h-[280px] relative overflow-hidden shadow-sm">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    {/* Lucide Icon (Users) */}
                    <div className="w-12 h-12 bg-neutral-50 border border-neutral-100 rounded-xl flex items-center justify-center text-neutral-800 mb-4 shadow-sm">
                      <Users className="w-5 h-5" />
                    </div>
                    <h3 className="text-neutral-900 text-2xl font-bold tracking-tight">Agile Delivery</h3>
                    <p className="text-neutral-500 mt-2 text-sm font-medium leading-relaxed max-w-[200px]">
                      We ship fast, iterate constantly, and keep you involved at every step.
                    </p>
                  </div>

                  {/* Pagination Dots */}
                  <div className="flex gap-1.5 mt-auto">
                    <span className="w-2 h-2 rounded-full bg-[#FF5722]"></span>
                    <span className="w-2 h-2 rounded-full bg-[#FF5722]"></span>
                    <span className="w-2 h-2 rounded-full bg-neutral-200"></span>
                  </div>
                </div>

                {/* Gauge Chart Graphic */}
                <div className="absolute right-[-30px] bottom-[-10px] w-44 h-44 flex items-center justify-center rotate-[135deg]">
                  <div className="w-36 h-36 rounded-full border-[16px] border-neutral-100 relative flex items-center justify-center">
                    {/* Orange filled path overlay simulating visual gauge slice */}
                    <div className="absolute inset-0 rounded-full border-[16px] border-t-[#FF5722] border-r-transparent border-b-transparent border-l-transparent -m-[16px]"></div>
                    {/* Dashed outer alignment guideline */}
                    <div className="absolute w-40 h-40 rounded-full border border-dashed border-neutral-300 -rotate-45"></div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
