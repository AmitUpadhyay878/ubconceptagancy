"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Play, ShieldCheck, Headphones, CheckCircle2 } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-[#F8F6F2] py-12 lg:py-16">
      <div className="mx-auto px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-white px-8 py-10 shadow-sm lg:px-14 lg:py-14">
          
          {/* Subtle decorative rings */}
          <div className="absolute right-[-60px] top-[-40px] h-[260px] w-[260px] rounded-full border border-orange-100" />
          <div className="absolute right-[-10px] top-[20px] h-[180px] w-[180px] rounded-full border border-dashed border-orange-100" />

          {/* Dot accents */}
          <div className="absolute right-8 top-8 hidden grid-cols-4 gap-3 lg:grid">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full bg-orange-200" />
            ))}
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="h-[2px] w-10 bg-[#FF612F]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF612F]">
                  Let&rsquo;s Build Together
                </span>
              </div>

              <h2 className="text-4xl font-black leading-[1.1] tracking-[-0.03em] text-[#111111] sm:text-5xl">
                Build Your Next
                <span className="mt-1 block">
                  Project{" "}
                  <span className="text-[#FF612F]">With Us.</span>
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#666666] lg:text-lg">
                Partner with UBConcept to create powerful web and mobile applications
                powered by AI that drive real business growth.
              </p>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <button className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#FF612F] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  Start Your Project
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
                <button className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-[#FF612F] bg-white px-8 py-4 text-base font-semibold text-[#111111] transition-all duration-300 hover:bg-[#FFF4EE]">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#FF612F]">
                    <Play className="ml-0.5 h-3.5 w-3.5 text-[#FF612F]" />
                  </div>
                  Watch Video
                </button>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-neutral-100 pt-6 lg:flex-nowrap lg:gap-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF4EE]">
                    <ShieldCheck className="h-5 w-5 text-[#FF612F]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111111]">Free Consultation</p>
                    <p className="text-xs text-[#666666]">No commitment required</p>
                  </div>
                </div>
                <div className="hidden h-10 w-px bg-neutral-200 lg:block" />
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF4EE]">
                    <Headphones className="h-5 w-5 text-[#FF612F]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111111]">Dedicated Team</p>
                    <p className="text-xs text-[#666666]">Your dev squad awaits</p>
                  </div>
                </div>
                <div className="hidden h-10 w-px bg-neutral-200 lg:block" />
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF4EE]">
                    <CheckCircle2 className="h-5 w-5 text-[#FF612F]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111111]">Agile Process</p>
                    <p className="text-xs text-[#666666]">Iterate and ship fast</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative hidden items-center justify-center lg:flex"
            >
              <div className="absolute h-[240px] w-[240px] rounded-full border border-orange-100" />
              <div className="absolute h-[170px] w-[170px] rounded-full border border-dashed border-orange-200" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[240px] w-[240px]"
              >
                <div className="absolute left-10 top-8 h-3 w-3 rounded-full bg-[#FF612F]" />
                <div className="absolute bottom-8 right-8 h-3 w-3 rounded-full bg-[#FF612F]" />
              </motion.div>
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#FFA16B] to-[#FF612F] shadow-[0_20px_50px_rgba(255,97,47,0.3)]">
                <ArrowUpRight className="h-14 w-14 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
