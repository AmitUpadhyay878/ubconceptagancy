'use client';
import React, { useState } from 'react';
import { Plus, Minus, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function FAQSection() {
  // Managing local indices state to track open elements separately across columns
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How long does it take to build an app?",
      answer: "Timelines vary based on complexity. A typical MVP can be delivered in 8-12 weeks, while larger enterprise applications may take 4-6 months. We'll provide a detailed timeline during our consultation."
    },
    {
      id: 2,
      question: "What technologies do you use?",
      answer: "We work with modern stacks including React, Next.js, Flutter, React Native, Node.js, Python, and cloud platforms like AWS and GCP. We choose the best tech for each project's needs."
    },
    {
      id: 3,
      question: "Do you offer post-launch support?",
      answer: "Yes, we provide ongoing maintenance, monitoring, and feature updates post-launch. Our support plans ensure your application stays secure, performant, and up-to-date."
    },
    {
      id: 4,
      question: "Can you integrate AI into my project?",
      answer: "Absolutely. We specialize in AI integration including recommendation engines, predictive analytics, natural language processing, and computer vision features for web and mobile apps."
    },
    {
      id: 5,
      question: "How does your pricing work?",
      answer: "We offer flexible engagement models including fixed-price projects, dedicated teams, and hourly consulting. We'll recommend the best approach based on your project scope and goals."
    }
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  // Splitting the dataset cleanly down the middle for the 2-column structure
  const leftColumnFaqs = faqs.filter(faq => faq.id <= 3);
  const rightColumnFaqs = faqs.filter(faq => faq.id > 3);

  return (
    <section className="bg-[#FAF9F6] py-16 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      
      {/* DECORATIVE RIGHT SIDE VECTOR DOT GRAPHICS & BUBBLES */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-full pointer-events-none z-0 hidden lg:block">
        {/* Floating Chat/Question Indicator Orbs */}
        <div className="absolute top-[35%] right-20 w-16 h-16 rounded-full bg-[#FF5722] shadow-xl flex items-center justify-center text-white text-2xl font-bold shadow-orange-600/20">
          ?
        </div>
        <div className="absolute top-[52%] right-28 w-20 h-16 rounded-3xl bg-gradient-to-br from-orange-400 to-orange-500 shadow-xl flex items-center justify-center text-white shadow-orange-500/10">
          <MessageSquare className="w-6 h-6 opacity-90 fill-current" />
        </div>
        
        {/* Fine Micro Dot Grid Array Accent */}
        <div className="absolute top-1/3 right-8 grid grid-cols-3 gap-3 opacity-25">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* UPPER MAIN HEADER SUB-STRIP */}
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 border-b border-neutral-200/40 pb-6 mb-10">
          <div className="flex items-center gap-2">
            {/* Split orange line styling decoration on header text */}
            <div className="flex flex-col gap-1">
              <span className="w-3.5 h-[2.5px] bg-[#FF5722] rounded-full"></span>
              <span className="w-2 h-[2.5px] bg-[#FF5722] rounded-full"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight ml-1">
              Frequently Asked Questions
            </h2>
          </div>
          
          <p className="text-xs sm:text-sm font-semibold text-neutral-500 tracking-wide">
            Can&apos;t find what you&apos;re looking for?{' '}
            <Link href="/contact" className="text-[#FF5722] hover:text-[#E64A19] hover:underline transition-colors ml-1 inline-flex items-center gap-1">
              Contact our team <span className="w-3 h-[1px] bg-[#FF5722] inline-block align-middle"></span>
            </Link>
          </p>
        </div>

        {/* DOUBLE-COLUMN GRID HOUSING INTERACTIVE ACCORDIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4 items-start lg:pr-48">
          
          {/* LEFT ACCORDION COLUMN (Items 1 to 3) */}
          <div className="space-y-4 w-full">
            {leftColumnFaqs.map((faq) => (
              <div 
                key={faq.id}
                className="bg-white border border-neutral-200/60 rounded-2xl transition-all duration-300 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-neutral-800 text-sm sm:text-base tracking-tight hover:text-neutral-900 focus:outline-none select-none"
                >
                  <span>{faq.question}</span>
                  <div className="flex-shrink-0 text-[#FF5722] p-1 bg-neutral-50/50 rounded-lg border border-neutral-100">
                    {openFaq === faq.id ? (
                      <Minus className="w-4 h-4" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-4 h-4" strokeWidth={2.5} />
                    )}
                  </div>
                </button>
                
                {/* Expandable/Collapsible Content Area */}
                <div 
                  className={`transition-all duration-300 ease-in-out font-medium text-neutral-500 text-xs sm:text-sm leading-relaxed border-t border-neutral-50/50 bg-neutral-50/20 ${
                    openFaq === faq.id ? 'max-h-40 p-6' : 'max-h-0 pointer-events-none'
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT ACCORDION COLUMN (Items 4 and 5) */}
          <div className="space-y-4 w-full">
            {rightColumnFaqs.map((faq) => (
              <div 
                key={faq.id}
                className="bg-white border border-neutral-200/60 rounded-2xl transition-all duration-300 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-neutral-800 text-sm sm:text-base tracking-tight hover:text-neutral-900 focus:outline-none select-none"
                >
                  <span>{faq.question}</span>
                  <div className="flex-shrink-0 text-[#FF5722] p-1 bg-neutral-50/50 rounded-lg border border-neutral-100">
                    {openFaq === faq.id ? (
                      <Minus className="w-4 h-4" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-4 h-4" strokeWidth={2.5} />
                    )}
                  </div>
                </button>
                
                {/* Expandable/Collapsible Content Area */}
                <div 
                  className={`transition-all duration-300 ease-in-out font-medium text-neutral-500 text-xs sm:text-sm leading-relaxed border-t border-neutral-50/50 bg-neutral-50/20 ${
                    openFaq === faq.id ? 'max-h-40 p-6' : 'max-h-0 pointer-events-none'
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}