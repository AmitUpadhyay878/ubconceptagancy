
"use client"

// import { motion } from "framer-motion"
// import {
//   Activity,
//   Globe,
//   ShieldCheck,
//   Users,
// } from "lucide-react"

// const stats = [
//   {
//     icon: Users,
//     value: "2.5K+",
//     label: "Active Organizations",
//   },
//   {
//     icon: Activity,
//     value: "98.7%+",
//     label: "System Uptime",
//   },
//   {
//     icon: ShieldCheck,
//     value: "1.2M+",
//     label: "Alerts Processed Daily",
//   },
//   {
//     icon: Globe,
//     value: "150+",
//     label: "Countries Served",
//   },
// ]

// export function CounterSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#F8F6F2] py-24">
//       {/* Background Orbital */}
//       <div className="absolute right-[-180px] top-[-120px] h-[700px] w-[700px] rounded-full border border-orange-100" />

//       <div className="absolute right-[-120px] top-[-60px] h-[580px] w-[580px] rounded-full border border-orange-100" />

//       <div className="absolute right-[-60px] top-0 h-[460px] w-[460px] rounded-full border border-orange-100" />

//       <div className="absolute right-[40px] top-[60px] h-[320px] w-[320px] rounded-full border border-orange-100" />

//       <div className="absolute right-[140px] top-[140px] h-[160px] w-[160px] rounded-full bg-orange-100/60" />

//       {/* Decorative Dot */}
//       <div className="absolute right-[420px] top-[190px] h-4 w-4 rounded-full bg-[#FF612F]" />

//       {/* Left Dot Grid */}
//       <div className="absolute left-20 top-48 hidden grid-cols-6 gap-4 lg:grid">
//         {Array.from({ length: 36 }).map((_, i) => (
//           <div
//             key={i}
//             className="h-1.5 w-1.5 rounded-full bg-orange-200"
//           />
//         ))}
//       </div>

//       <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
//         {/* Top Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mx-auto max-w-4xl text-center"
//         >
//           {/* Badge */}
//           <div className="mb-8 inline-flex items-center gap-4">
//             <div className="h-[2px] w-14 bg-[#FF612F]" />

//             <span className="text-lg font-semibold uppercase tracking-[0.2em] text-[#FF612F]">
//               Our Impact
//             </span>
//           </div>

//           {/* Heading */}
//           <h2 className="text-5xl font-black leading-[1] tracking-[-0.04em] text-[#111111] sm:text-6xl lg:text-7xl">
//             Built For Scale.
//             <span className="mt-2 block text-[#FF612F]">
//               Proven Every Day.
//             </span>
//           </h2>

//           {/* Description */}
//           <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-[#666666]">
//             Organizations around the world rely on Altora
//             to power smarter operations and better outcomes.
//           </p>
//         </motion.div>

//         {/* Stats Grid */}
//         <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
//           {stats.map((item, index) => {
//             const Icon = item.icon

//             return (
//               <motion.div
//                 key={item.label}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.1,
//                 }}
//                 viewport={{ once: true }}
//                 className="group rounded-[32px] border border-neutral-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
//               >
//                 {/* Icon */}
//                 <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#FFF4EE]">
//                   <Icon className="h-10 w-10 text-[#FF612F]" />
//                 </div>

//                 {/* Number */}
//                 <h3 className="mt-10 text-center text-6xl font-black tracking-[-0.05em] text-[#FF612F]">
//                   {item.value}
//                 </h3>

//                 {/* Accent Line */}
//                 <div className="mx-auto mt-6 h-[3px] w-12 rounded-full bg-[#FF612F]" />

//                 {/* Label */}
//                 <p className="mt-6 text-center text-2xl font-medium leading-relaxed text-[#111111]">
//                   {item.label}
//                 </p>
//               </motion.div>
//             )
//           })}
//         </div>

//         {/* Bottom Trust Box */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-10 flex flex-col items-center justify-center gap-6 rounded-[28px] border border-orange-100 bg-[#FFF9F5] px-8 py-7 text-center md:flex-row"
//         >
//           {/* Icon */}
//           <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
//             <ShieldCheck className="h-8 w-8 text-[#FF612F]" />
//           </div>

//           {/* Divider */}
//           <div className="hidden h-12 w-px bg-orange-200 md:block" />

//           {/* Text */}
//           <p className="text-xl font-medium leading-relaxed text-[#111111]">
//             Enterprise-grade security, reliability, and support
//             you can trust.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

import React from 'react';
import { Users2, TrendingUp, Zap, Globe, ShieldCheck } from 'lucide-react';

export  function CounterSection() {
  const metrics = [
    {
      id: 1,
      icon: <Users2 className="w-6 h-6 text-[#FF5722]" />,
      value: "150+",
      label: "Projects Delivered"
    },
    {
      id: 2,
      icon: <TrendingUp className="w-6 h-6 text-[#FF5722]" />,
      value: "99%+",
      label: "Client Satisfaction"
    },
    {
      id: 3,
      icon: <Zap className="w-6 h-6 text-[#FF5722]" />,
      value: "50+",
      label: "AI Models Deployed"
    },
    {
      id: 4,
      icon: <Globe className="w-6 h-6 text-[#FF5722]" />,
      value: "20+",
      label: "Countries Served"
    }
  ];

  return (
    <section className="bg-neutral-50/60 py-20 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      
      {/* Background Decorative Accents */}
      {/* Left Top Dot Grid */}
      <div className="absolute top-12 left-12 grid grid-cols-6 gap-2 opacity-15 hidden md:grid">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-neutral-900 rounded-full"></div>
        ))}
      </div>
      
      {/* Right Top Abstract Circular Radiance */}
      <div className="absolute right-[-100px] top-[-100px] w-[450px] h-[450px] pointer-events-none hidden lg:block">
        <div className="absolute inset-0 rounded-full border border-neutral-200/40 scale-75"></div>
        <div className="absolute inset-0 rounded-full border border-neutral-200/60 scale-90"></div>
        {/* Soft orange core blur representing the partial circle shape */}
        <div className="absolute right-0 top-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-orange-200/40 to-transparent blur-2xl transform translate-x-12"></div>
        {/* Small accent dot */}
        <div className="absolute left-1/4 top-1/2 w-2 h-2 bg-[#FF5722] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-4 h-[2px] bg-[#FF5722]"></span>
            <span className="text-xs font-bold text-[#FF5722] tracking-widest uppercase">Our Impact</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Delivering Impact. <br />
            <span className="text-[#FF5722]">Every Single Day.</span>
          </h2>
          <p className="mt-4 text-neutral-500 font-medium leading-relaxed">
            Businesses around the world trust UBConcept to build powerful digital products that drive real results.
          </p>
        </div>

        {/* 4-Column Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => (
            <div 
              key={metric.id} 
              className="bg-white rounded-2xl p-8 border border-neutral-200/50 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[240px]"
            >
              {/* Circular Tinted Icon Container */}
              <div className="w-14 h-14 bg-orange-50/60 rounded-full flex items-center justify-center mb-6">
                {metric.icon}
              </div>
              
              {/* Value Indicator */}
              <div className="text-4xl font-extrabold text-neutral-900 tracking-tight mb-2">
                {metric.value}
              </div>
              
              {/* Micro Dividers */}
              <div className="w-5 h-[2px] bg-[#FF5722]/60 rounded-full mb-4"></div>
              
              {/* Description Label */}
              <p className="text-neutral-500 font-semibold text-sm tracking-wide">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Trust/Security Banner */}
        <div className="bg-orange-50/30 border border-orange-100/60 rounded-xl py-4 px-6 flex flex-col sm:flex-row items-center justify-center gap-3 shadow-sm max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-[#FF5722]">
            <ShieldCheck className="w-5 h-5 fill-orange-50" strokeWidth={2} />
          </div>
          {/* Vertical divider line visible on desktop scales */}
          <div className="hidden sm:block h-4 w-[1px] bg-neutral-300 mx-1"></div>
          <p className="text-neutral-700 font-semibold text-sm text-center sm:text-left tracking-wide">
            Enterprise-grade development with AI-powered solutions you can trust.
          </p>
        </div>

      </div>
    </section>
  );
}
