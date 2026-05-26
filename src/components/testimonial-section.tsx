"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Jessica Lee",
    role: "Head of Operations",
    company: "Cloudex",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    review:
      "UBConcept delivered a stunning mobile app that transformed our customer engagement. The AI features were a game-changer.",
    featured: false,
  },
  {
    name: "Daniel Morgan",
    role: "CTO",
    company: "Noventi",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    review:
      "The web platform UBConcept built for us is fast, intuitive, and our users love it. Best development partner we've worked with.",
    featured: true,
  },
  {
    name: "Sarah Mitchell",
    role: "VP of Engineering",
    company: "Brightstone",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    review:
      "From concept to launch, UBConcept handled everything professionally. Our AI-powered dashboard exceeded all expectations.",
    featured: false,
  },
]

export function TestimonialSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F2] py-16">
      {/* Decorative rings */}
      <div className="absolute right-[-120px] top-20 h-[300px] w-[300px] rounded-full border border-orange-100" />
      <div className="absolute bottom-[-80px] left-[-80px] h-[240px] w-[240px] rounded-full border border-orange-100" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-3">
            <div className="h-[2px] w-8 bg-[#FF612F]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF612F]">
              Trusted By Teams Worldwide
            </span>
          </div>

          <h2 className="text-3xl font-black leading-[1.1] tracking-[-0.03em] text-[#111111] sm:text-4xl">
            Real Results. Real Impact.
            <span className="mt-1 block text-[#FF612F]">
              From Real Teams.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#666666]">
            UBConcept helps organizations build powerful digital products
            that drive real business outcomes.
          </p>
        </motion.div>

        {/* TESTIMONIALS */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-[24px] border p-7 transition-all duration-300 hover:-translate-y-1 ${
                item.featured
                  ? "border-neutral-900 bg-[#111111] text-white shadow-xl"
                  : "border-neutral-200 bg-white shadow-sm"
              }`}
            >
              {item.featured && (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f1f1f,transparent_70%)] opacity-80" />
              )}

              <div className="relative z-10 flex items-center justify-between">
                <Quote
                  className={`h-7 w-7 ${item.featured ? "text-[#FF612F]" : "text-[#FF612F]"}`}
                />
                {item.featured ? (
                  <div className="rounded-full bg-[#FF612F] px-4 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    Featured
                  </div>
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF4EE]">
                    <Quote className="h-4 w-4 text-[#FF612F]" />
                  </div>
                )}
              </div>

              <p
                className={`relative z-10 mt-6 text-[15px] leading-[1.7] ${
                  item.featured ? "text-neutral-100" : "text-[#111111]"
                }`}
              >
                {item.review}
              </p>

              <div className="relative z-10 mt-8 flex items-center gap-4 border-t border-white/10 pt-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div className="flex-1">
                  <h4
                    className={`text-base font-bold ${
                      item.featured ? "text-white" : "text-[#111111]"
                    }`}
                  >
                    {item.name}
                  </h4>
                  <p
                    className={`text-sm ${
                      item.featured ? "text-neutral-400" : "text-[#666666]"
                    }`}
                  >
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RATING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-center gap-5 md:flex-row"
        >
          <div className="hidden h-px w-32 bg-[#FF612F] md:block" />

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#FF612F] text-[#FF612F]" />
              ))}
            </div>

            <span className="text-lg font-medium text-[#666666]">
              4.9/5 average rating
            </span>

            <div className="hidden h-6 w-px bg-neutral-300 md:block" />

            <div className="flex items-center gap-2">
              <span className="text-lg font-medium text-[#666666]">
                200+ reviews on
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF612F] text-xs font-black text-white">
                G2
              </div>
            </div>
          </div>

          <div className="hidden h-px w-32 bg-[#FF612F] md:block" />
        </motion.div>
      </div>
    </section>
  )
}
