'use client';
import React, { useState } from 'react';
import { User, Mail, Building2, Phone, Tag, PenTool, Send, MailOpen, PhoneCall, MapPin, Clock, Headphones } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

const contactSchema = z.object({
  fullName: z.string().min(2).max(100),
  workEmail: z.string().email(),
  companyName: z.string().min(2).max(100),
  phoneNumber: z.string().regex(/^\+?(\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/),
  subject: z.string().min(2).max(200),
  message: z.string().min(10).max(500),
  agreeToTerms: z.boolean().refine(value => value === true, { message: "You must agree to the terms and conditions." })
});

export function ContactForm() {

    const {register, handleSubmit, formState: { errors }} =useForm(
        {
            resolver: zodResolver(contactSchema)
        }
    )

  const handleForm = (data: z.infer<typeof contactSchema>) => {
    console.log('Form data submitted:', data);
  };

  const contactDetails = [
    {
      id: 1,
      icon: <MailOpen className="w-5 h-5 text-white" />,
      label: "Email Us",
      value: "info.ubconcept@gmail.com",
      href: "mailto:info.ubconcept@gmail.com"
    },
    {
      id: 2,
      icon: <PhoneCall className="w-5 h-5 text-white" />,
      label: "Call Us",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      id: 3,
      icon: <MapPin className="w-5 h-5 text-white" />,
      label: "Visit Us",
      value: "123 Innovation Drive, San Francisco, CA 94107",
      href: "https://maps.app.goo.gl/FtWFPcXy1F77qRwA8"
    },
    {
      id: 4,
      icon: <Clock className="w-5 h-5 text-white" />,
      label: "Working Hours",
      value: "Mon - Fri • 10:00 AM - 7:00 PM (UTC)",
      href: null
    }
  ];

  return (
    <section className="py-2 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto bg-neutral-50/50 rounded-3xl border border-neutral-100 p-4 sm:p-6 lg:p-8 shadow-sm">
        
        {/* Added items-stretch to force equal height columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SIDE PANEL - CONTACT INPUT FORM */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full border border-neutral-200/40">
            <div>
              <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
                Send Us a Message
              </h2>
              <p className="mt-2 text-neutral-500 font-medium text-sm">
                Fill out the form and our team will get back to you.
              </p>

              <form onSubmit={handleSubmit(handleForm)} className="mt-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-neutral-50/60 border border-neutral-200/80 rounded-xl py-3.5 pl-11 pr-4 text-sm font-medium text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#FF5722] focus:bg-white transition-all"
                      {...register("fullName")}
                      required
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}    
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <input
                      type="email"
                      placeholder="Work Email"
                      className="w-full bg-neutral-50/60 border border-neutral-200/80 rounded-xl py-3.5 pl-11 pr-4 text-sm font-medium text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#FF5722] focus:bg-white transition-all"
                      {...register("workEmail")}
                      required
                    />
                    {errors.workEmail && <p className="text-red-500 text-xs mt-1">{errors.workEmail.message}</p>}    
                  </div>

                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full bg-neutral-50/60 border border-neutral-200/80 rounded-xl py-3.5 pl-11 pr-4 text-sm font-medium text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#FF5722] focus:bg-white transition-all"
                      {...register("companyName")}
                    />
                    {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>}    
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-neutral-50/60 border border-neutral-200/80 rounded-xl py-3.5 pl-11 pr-4 text-sm font-medium text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#FF5722] focus:bg-white transition-all"
                      {...register("phoneNumber")}
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>}
                  </div>
                </div>

                <div className="relative">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-neutral-50/60 border border-neutral-200/80 rounded-xl py-3.5 pl-11 pr-4 text-sm font-medium text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#FF5722] focus:bg-white transition-all"
                    {...register("subject")}
                    required
                  />
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>

                <div className="relative">
                  <PenTool className="absolute left-4 top-4 w-4 h-4 text-neutral-400" />
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full bg-neutral-50/60 border border-neutral-200/80 rounded-xl py-3.5 pl-11 pr-4 text-sm font-medium text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#FF5722] focus:bg-white transition-all resize-none"
                    {...register("message")}
                    required
                  ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <div className="flex items-center space-x-2.5 pt-2">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    className="w-4 h-4 accent-[#FF5722] rounded border-neutral-300 focus:ring-0 cursor-pointer"
                    {...register("agreeToTerms")}
                    required
                  />
                  <label htmlFor="agreeToTerms" className="text-xs sm:text-sm font-semibold text-neutral-700 select-none cursor-pointer">
                    I agree to the <a href="#" className="text-[#FF5722] hover:underline">Privacy Policy</a>
                  </label>
                  {errors.agreeToTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms.message}</p>}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white px-6 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-600/10 transition-colors group"
                  >
                    Send Message
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE PANEL - GET IN TOUCH INFO CARD */}
          {/* Replaced 'min-h-[460px]' with 'h-full' and flex structure updates */}
          <div className="lg:col-span-5 bg-[#121212]  rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between h-full">
            
            {/* Top Right Decorative Background Grid */}
            <div className="absolute top-6 right-6 grid grid-cols-4 gap-1.5 opacity-10 pointer-events-none">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
              ))}
            </div>

            <div className="z-10 w-full">
              <h3 className="text-white text-2xl font-extrabold tracking-tight">
                Get in Touch
              </h3>

              <div className="mt-12 space-y-8">
                {contactDetails.map((detail) => {
                  const ContentWrapper = detail.href ? 'a' : 'div';
                  return (
                    <div key={detail.id} className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-[#FF5722] flex items-center justify-center flex-shrink-0 shadow-md">
                        {detail.icon}
                      </div>
                      <div className="flex flex-col text-xl">
                        <span className="text-neutral-400 font-semibold text-xs tracking-wide uppercase">
                          {detail.label}
                        </span>
                        <ContentWrapper 
                          href={detail.href || undefined} 
                          className={`text-white font-medium mt-0.5 max-w-[240px] sm:max-w-xs leading-relaxed ${detail.href ? 'hover:text-[#FF5722] transition-colors duration-150' : ''}`}
                        >
                          {detail.value}
                        </ContentWrapper>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}