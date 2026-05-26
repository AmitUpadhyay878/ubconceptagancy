"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Bell, ArrowRight, Play, Zap, TrendingUp, ShieldCheck } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const socialLogos = ["Clouddex", "Noventi", "Brightstone", "Vertexa"]

const pillarItems = [
  {
    icon: <Zap className="w-5 h-5 text-white" fill="currentColor" />,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices.",
  },
    {
    icon: <TrendingUp className="w-5 h-5 text-white" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile experiences that users love.",
  },
    {
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
    title: "AI Integration",
    description: "Intelligent features powered by machine learning and AI.",
  },
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const rightColRef = useRef<HTMLDivElement>(null)
  const pillarsRef = useRef<HTMLDivElement>(null)
  const ringsRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // 1. Left column staggered entrance
      const leftChildren = leftColRef.current?.querySelectorAll("[data-anim]")
      if (leftChildren) {
        tl.from(leftChildren, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
        }, 0)
      }

      // 2. Right column cards fly in from opposite sides
      const alertCard = rightColRef.current?.querySelector("[data-card='alert']")
      const healthCard = rightColRef.current?.querySelector("[data-card='health']")

      if (alertCard) {
        tl.from(alertCard, { x: -60, opacity: 0, duration: 0.8 }, 0.3)
      }
      if (healthCard) {
        tl.from(healthCard, { x: 60, opacity: 0, duration: 0.8 }, 0.45)
      }

      // 3. Decorative shapes fade + scale
      const shapes = rightColRef.current?.querySelector("[data-shapes]")
      if (shapes) {
        tl.from(shapes, { scale: 0.6, opacity: 0, duration: 0.6 }, 0.6)
      }

      // 4. Bottom pillars staggered
      const pillarItems = pillarsRef.current?.querySelectorAll("[data-pillar]")
      if (pillarItems) {
        tl.from(pillarItems, {
          y: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        }, 0.7)
      }

      // 5. Orbit rings rotation
      const rings = ringsRef.current?.querySelectorAll("[data-ring]")
      if (rings) {
        rings.forEach((ring) => {
          gsap.to(ring, {
            rotation: 360,
            duration: 30 + Math.random() * 15,
            repeat: -1,
            ease: "none",
          })
        })
      }

      // 6. Floating cards subtle hover levitation
      if (alertCard) {
        gsap.to(alertCard, {
          y: -8,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: 0.5,
        })
      }
      if (healthCard) {
        gsap.to(healthCard, {
          y: -6,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: 0.8,
        })
      }

      // 7. ScrollTrigger — decorative shapes parallax
      if (shapes) {
        gsap.to(shapes, {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        })
      }

      // 8. ScrollTrigger — left content fades on scroll
      if (leftColRef.current) {
        gsap.to(leftColRef.current, {
          opacity: 0.6,
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom 60%",
            scrub: 1,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAF9F6] pt-20 pb-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden min-h-screen flex flex-col justify-between"
    >
      {/* BACKGROUND ACCENTS */}
      <div
        ref={ringsRef}
        className="absolute right-0 top-0 w-full lg:w-1/2 h-full pointer-events-none z-0"
      >
        <div
          data-ring
          className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full border border-neutral-200/60 hidden lg:block"
        />
        <div className="absolute top-[10%] right-[35%] grid grid-cols-5 gap-2 opacity-20 hidden lg:grid">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-neutral-900 rounded-full" />
          ))}
        </div>

        {/* Decorative shapes */}
        <div
          data-shapes
          className="absolute bottom-[20%] right-0 w-[400px] h-[300px] opacity-90 hidden lg:block"
        >
          <div className="absolute right-0 bottom-0 w-48 h-48 bg-[#FF5722] rounded-tl-full" />
          <div className="absolute right-48 bottom-0 w-48 h-48 bg-orange-100/40 rounded-t-full" />
          <div className="absolute right-32 bottom-[-40px] w-32 h-32 bg-[#121212] rounded-full overflow-hidden flex flex-col justify-between p-2 rotate-45">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-full h-[2px] bg-neutral-800/60" />
            ))}
          </div>
          <div className="absolute right-0 bottom-[-60px] grid grid-cols-6 gap-2 opacity-20">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-neutral-900 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-8">
          {/* LEFT COLUMN */}
          <div
            ref={leftColRef}
            className="lg:col-span-6 flex flex-col space-y-6 text-left"
          >
            <div data-anim className="flex items-center gap-2">
              <span className="w-3 h-[2px] bg-[#FF5722]" />
              <span className="text-[11px] font-bold text-[#FF5722] tracking-widest uppercase">
                AI-Powered Operations Platform
              </span>
            </div>

            <h1
              data-anim
              className="text-5xl sm:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.05]"
            >
              We Build Digital <br />
              Products That <br />
              <span className="text-[#FF5722]">Drive Growth.</span>
            </h1>

            <p
              data-anim
              className="text-neutral-500 font-medium text-lg max-w-lg leading-relaxed"
            >
              UBConcept crafts custom web and mobile applications powered by AI to help your business scale and succeed.
            </p>

            <div data-anim className="flex flex-wrap items-center gap-4 pt-2">
              <button className="bg-[#FF5722] hover:bg-[#E64A19] text-white px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-md transition-all duration-200 group">
                Start Your Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button className="bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200 px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm transition-all duration-200">
                View Our Work
                <Play className="w-3.5 h-3.5 fill-current text-neutral-700 ml-1" />
              </button>
            </div>

            <div data-anim className="pt-8">
              <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 mb-3">
                Trusted by Innovative Teams
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-neutral-400 font-bold text-sm">
                {socialLogos.map((name) => (
                  <span
                    key={name}
                    className="hover:text-neutral-600 transition-colors cursor-default tracking-tight"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            ref={rightColRef}
            className="lg:col-span-6 relative w-full h-[440px] sm:h-[480px] flex items-center justify-center lg:justify-end"
          >
            {/* Alert Card */}
            <div
              data-card="alert"
              className="bg-[#121212] rounded-2xl w-72 p-6 shadow-2xl absolute left-4 sm:left-12 bottom-6 z-20 border border-neutral-800 flex flex-col space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 bg-[#FF5722] rounded-xl flex items-center justify-center text-white shadow-md">
                  <Bell className="w-4 h-4 fill-current" />
                </div>
                <span className="w-1.5 h-1.5 bg-neutral-700 rounded-full" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base tracking-tight">
                  Recent Project
                </h3>
              </div>
              <div className="space-y-3.5 pt-1 text-xs font-medium">
                {[
                  "E-commerce platform with AI recommendations",
                  "Healthcare app with real-time monitoring",
                  "Fintech dashboard with predictive analytics",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-neutral-800/80 pb-2.5 last:border-0 last:pb-0"
                  >
                    <span className="text-neutral-300">{text}</span>
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ml-3 ${
                        i === 0
                          ? "bg-orange-500"
                          : i === 1
                            ? "bg-yellow-500"
                            : "bg-white"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Health Card */}
            <div
              data-card="health"
              className="bg-white border border-neutral-200/60 rounded-2xl p-6 shadow-xl w-80 absolute top-4 right-2 sm:right-6 z-10 flex flex-col space-y-4"
            >
              <div className="flex items-center justify-between text-neutral-800">
                <span className="text-xs font-bold tracking-tight text-neutral-700">
                  Client Satisfaction
                </span>
                <span className="text-neutral-400 font-bold text-sm tracking-tighter cursor-pointer">
                  ...
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 py-2">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <path
                      className="text-neutral-100"
                      strokeWidth="3"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#FF5722]"
                      strokeDasharray="75, 100"
                      strokeWidth="3"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-xl font-black text-neutral-900 tracking-tighter">
                      92
                    </span>
                    <p className="text-[9px] text-neutral-400 font-bold tracking-tight uppercase -mt-1">
                      Rating
                    </p>
                  </div>
                </div>

                <div className="w-32 h-12 relative flex items-center">
                  <svg className="w-full h-full" viewBox="0 0 100 40" fill="none">
                    <path
                      d="M0 30 Q15 25 30 35 T60 15 T90 10"
                      stroke="#FF5722"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="90" cy="10" r="3" fill="#FF5722" />
                  </svg>
                </div>
              </div>

              <div className="text-[11px] font-bold text-neutral-400 tracking-wide flex items-center gap-1">
                <span className="text-emerald-500 flex items-center">
                  ↑ 18%
                </span>
                from our clients
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM PILLARS */}
        <div
          ref={pillarsRef}
          className="bg-white border border-neutral-200/50 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-sm mt-8 relative z-10 w-full"
        >
          {pillarItems.map((pillar, idx) => (
            <div
              key={idx}
              data-pillar
              className="flex items-start space-x-4 p-2"
            >
              <div className="w-10 h-10 bg-[#FF5722] rounded-xl flex items-center justify-center shrink-0 shadow-sm shadow-orange-500/20">
                {pillar.icon}
              </div>
              <div className="flex flex-col space-y-0.5">
                <h4 className="text-neutral-900 font-bold text-sm tracking-tight">
                  {pillar.title}
                </h4>
                <p className="text-neutral-500 font-medium text-xs leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// import React from 'react';
// import { Bell, ArrowRight, Play, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

// export function HeroSection() {
//   const socialLogos = [
//     { name: "Clouddex", icon: <span className="inline-block w-4 h-4 rounded-full border-2 border-neutral-400 mr-1"></span> },
//     { name: "Noventi", icon: <span className="font-serif italic font-bold mr-1">N</span> },
//     { name: "Brightstone", icon: <span className="inline-block w-3 h-3 rotate-45 border-2 border-neutral-400 mr-1.5"></span> },
//     { name: "Vertexa", icon: <span className="font-mono font-bold mr-1">V</span> }
//   ];

//   const pillarItems = [
//     {
//       icon: <Zap className="w-5 h-5 text-white" fill="currentColor" />,
//       title: "Connect Everything",
//       description: "Bring all your data and tools together seamlessly."
//     },
//     {
//       icon: <TrendingUp className="w-5 h-5 text-white" />,
//       title: "Understand Instantly",
//       description: "AI surfaces what matters and explains why."
//     },
//     {
//       icon: <ShieldCheck className="w-5 h-5 text-white" />,
//       title: "Act With Impact",
//       description: "Take the right action at the right time."
//     }
//   ];

//   return (
//     <section className="bg-[#FAF9F6] pt-20 pb-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden min-h-screen flex flex-col justify-between">
      
//       {/* BACKGROUND GRAPHIC ACCENTS */}
//       <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full pointer-events-none z-0">
//         {/* Large faint background circular arc */}
//         <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full border border-neutral-200/60 hidden lg:block"></div>
//         {/* Subtle dot matrices */}
//         <div className="absolute top-[10%] right-[35%] grid grid-cols-5 gap-2 opacity-20 hidden lg:grid">
//           {[...Array(20)].map((_, i) => <div key={i} className="w-1 h-1 bg-neutral-900 rounded-full"></div>)}
//         </div>
        
//         {/* Geometric shapes layer matching bottom right vectors */}
//         <div className="absolute bottom-[20%] right-0 w-[400px] h-[300px] opacity-90 hidden lg:block">
//           {/* Quarter orange circle */}
//           <div className="absolute right-0 bottom-0 w-48 h-48 bg-[#FF5722] rounded-tl-full"></div>
//           {/* Faint pastel semicircles overlay */}
//           <div className="absolute right-48 bottom-0 w-48 h-48 bg-orange-100/40 rounded-t-full"></div>
//           {/* Dark striped structural circular element */}
//           <div className="absolute right-32 bottom-[-40px] w-32 h-32 bg-[#121212] rounded-full overflow-hidden flex flex-col justify-between p-2 rotate-45">
//             {[...Array(8)].map((_, i) => (
//               <div key={i} className="w-full h-[2px] bg-neutral-800/60"></div>
//             ))}
//           </div>
//           {/* Lower right dot pattern block */}
//           <div className="absolute right-0 bottom-[-60px] grid grid-cols-6 gap-2 opacity-20">
//             {[...Array(24)].map((_, i) => <div key={i} className="w-1 h-1 bg-neutral-900 rounded-full"></div>)}
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto w-full relative z-10 flex-grow flex flex-col justify-center">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-8">
          
//           {/* LEFT COLUMN - TEXT CONTENT */}
//           <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
//             <div className="flex items-center gap-2">
//               <span className="w-3 h-[2px] bg-[#FF5722]"></span>
//               <span className="text-[11px] font-bold text-[#FF5722] tracking-widest uppercase">
//                 AI-Powered Operations Platform
//               </span>
//             </div>
            
//             <h1 className="text-5xl sm:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.05]">
//               Turn Complexity <br />
//               Into Clarity. <br />
//               <span className="text-[#FF5722]">Act With Confidence.</span>
//             </h1>

//             <p className="text-neutral-500 font-medium text-lg max-w-lg leading-relaxed">
//               UBConcept unifies your data, processes, and people so you can make smarter decisions, faster.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap items-center gap-4 pt-2">
//               <button className="bg-[#FF5722] hover:bg-[#E64A19] text-white px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-md transition-all duration-200 group">
//                 Book a Demo
//                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
//               </button>
//               <button className="bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200 px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm transition-all duration-200">
//                 See How It Works
//                 <Play className="w-3.5 h-3.5 fill-current text-neutral-700 ml-1" />
//               </button>
//             </div>

//             {/* Social Trust Index */}
//             <div className="pt-8">
//               <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 mb-3">
//                 Trusted by Innovative Teams
//               </p>
//               <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-neutral-400 font-bold text-sm">
//                 {socialLogos.map((logo, index) => (
//                   <div key={index} className="flex items-center hover:text-neutral-600 transition-colors cursor-default">
//                     {logo.icon}
//                     <span className="tracking-tight">{logo.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN - VISUAL INTERFACE LAYER */}
//           <div className="lg:col-span-6 relative w-full h-[440px] sm:h-[480px] flex items-center justify-center lg:justify-end">
            
//             {/* 1. Intelligent Alerts Module (Dark Floating Panel) */}
//             <div className="bg-[#121212] rounded-2xl w-72 p-6 shadow-2xl absolute left-4 sm:left-12 bottom-6 z-20 border border-neutral-800 flex flex-col space-y-4">
//               <div className="flex items-center justify-between">
//                 <div className="w-9 h-9 bg-[#FF5722] rounded-xl flex items-center justify-center text-white shadow-md">
//                   <Bell className="w-4 h-4 fill-current" />
//                 </div>
//                 <span className="w-1.5 h-1.5 bg-neutral-700 rounded-full"></span>
//               </div>
//               <div>
//                 <h3 className="text-white font-bold text-base tracking-tight">Intelligent Alerts</h3>
//               </div>
//               <div className="space-y-3.5 pt-1 text-xs font-medium">
//                 <div className="flex items-center justify-between border-b border-neutral-800/80 pb-2.5">
//                   <span className="text-neutral-300">Anomaly detected in payment flow</span>
//                   <span className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0 ml-3"></span>
//                 </div>
//                 <div className="flex items-center justify-between border-b border-neutral-800/80 pb-2.5">
//                   <span className="text-neutral-400">Inventory below reorder point</span>
//                   <span className="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0 ml-3"></span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-neutral-400">Spike in user drop-off in Checkout step</span>
//                   <span className="w-2 h-2 rounded-full bg-white flex-shrink-0 ml-3"></span>
//                 </div>
//               </div>
//             </div>

//             {/* 2. Operational Health Module (White Floating Card) */}
//             <div className="bg-white border border-neutral-200/60 rounded-2xl p-6 shadow-xl w-80 absolute top-4 right-2 sm:right-6 z-10 flex flex-col space-y-4">
//               <div className="flex items-center justify-between text-neutral-800">
//                 <span className="text-xs font-bold tracking-tight text-neutral-700">Operational Health</span>
//                 <span className="text-neutral-400 font-bold text-sm tracking-tighter cursor-pointer">•••</span>
//               </div>
              
//               <div className="flex items-center justify-between gap-4 py-2">
//                 {/* Score Dial Graphic */}
//                 <div className="relative w-24 h-24 flex items-center justify-center">
//                   <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
//                     <path className="text-neutral-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
//                     <path className="text-[#FF5722]" strokeDasharray="75, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
//                   </svg>
//                   <div className="absolute text-center">
//                     <span className="text-xl font-black text-neutral-900 tracking-tighter">92</span>
//                     <p className="text-[9px] text-neutral-400 font-bold tracking-tight uppercase -mt-1">Score</p>
//                   </div>
//                 </div>

//                 {/* Sparkling Mini Line Graph */}
//                 <div className="w-32 h-12 relative flex items-center">
//                   <svg className="w-full h-full" viewBox="0 0 100 40" fill="none">
//                     <path d="M0 30 Q15 25 30 35 T60 15 T90 10" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" />
//                     <circle cx="90" cy="10" r="3" fill="#FF5722" />
//                   </svg>
//                 </div>
//               </div>

//               <div className="text-[11px] font-bold text-neutral-400 tracking-wide flex items-center gap-1">
//                 <span className="text-emerald-500 flex items-center">↑ 18%</span> vs last 30 days
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* BOTTOM METRIC PILLARS FOOTER */}
//         <div className="bg-white border border-neutral-200/50 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-sm mt-8 relative z-10 w-full">
//           {pillarItems.map((pillar, idx) => (
//             <div key={idx} className="flex items-start space-x-4 p-2">
//               <div className="w-10 h-10 bg-[#FF5722] rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm shadow-orange-500/20">
//                 {pillar.icon}
//               </div>
//               <div className="flex flex-col space-y-0.5">
//                 <h4 className="text-neutral-900 font-bold text-sm tracking-tight">{pillar.title}</h4>
//                 <p className="text-neutral-500 font-medium text-xs leading-relaxed">{pillar.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
