import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

export function ContactOffices() {
  const offices = [
    {
      id: 1,
      city: "New York, USA",
      address: "123 Park Avenue,",
      subAddress: "New York, NY 10017",
      phone: "+1 (555) 123-4567",
      // Custom structural vectors for landmarks
      landmark: (
        <svg className="absolute bottom-0 right-2 w-24 h-24 text-orange-200/50 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
          {/* Statue of Liberty Silhouette */}
          <path d="M45 90h10v10H45zm2-30l2-20h2l2 20zm-5 5l2-10 4 10zm12-5l4-10 2 10z" opacity="0.3" />
          <path d="M48 35h4v25h-4zm-2-5l4-15 4 15zm1 40h2v15h-2z" />
          <path d="M30 95h40v5H30z" className="text-orange-300/40" />
        </svg>
      )
    },
    {
      id: 2,
      city: "London, UK",
      address: "42 Bishopsgate,",
      subAddress: "London EC2N 4AH",
      phone: "+44 20 7123 4567",
      landmark: (
        <svg className="absolute bottom-0 right-4 w-16 h-28 text-orange-200/50 pointer-events-none" viewBox="0 0 60 120" fill="currentColor">
          {/* Big Ben Silhouette */}
          <rect x="20" y="40" width="20" height="80" />
          <polygon points="20,40 30,10 40,40" />
          <rect x="25" y="48" width="10" height="10" className="text-white/60" />
          <circle cx="30" cy="53" r="3" className="text-orange-500" />
          <rect x="15" y="115" width="30" height="5" className="text-orange-300/40" />
        </svg>
      )
    },
    {
      id: 3,
      city: "Dubai, UAE",
      address: "Downtown Dubai,",
      subAddress: "Dubai, UAE",
      phone: "+971 50 123 4567",
      landmark: (
        <svg className="absolute bottom-0 right-2 w-20 h-32 text-orange-200/60 pointer-events-none" viewBox="0 0 80 140" fill="currentColor">
          {/* Burj Khalifa Silhouette */}
          <rect x="36" y="10" width="8" height="130" />
          <rect x="32" y="40" width="16" height="100" opacity="0.8" />
          <rect x="26" y="70" width="28" height="70" opacity="0.6" />
          <rect x="18" y="95" width="44" height="45" opacity="0.4" />
          <polygon points="36,10 40,0 44,10" />
        </svg>
      )
    },
    {
      id: 4,
      city: "Singapore",
      address: "Marina Bay Sands,",
      subAddress: "Singapore 018956",
      phone: "+65 9123 4567",
      landmark: (
        <svg className="absolute bottom-0 right-1 w-28 h-20 text-orange-200/50 pointer-events-none" viewBox="0 0 120 80" fill="currentColor">
          {/* Marina Bay Sands Tower Pillars & Boat deck */}
          <rect x="15" y="25" width="16" height="55" rx="2" />
          <rect x="50" y="25" width="16" height="55" rx="2" />
          <rect x="85" y="25" width="16" height="55" rx="2" />
          {/* Top curved sky park ship deck structure */}
          <path d="M5 20 C30 15, 90 15, 115 22 L110 30 C85 22, 35 22, 10 30 Z" />
        </svg>
      )
    },
    {
      id: 5,
      city: "Ahmedabad, India",
      address: "Infocity, Gandhinagar,",
      subAddress: "Ahmedabad 382007",
      phone: "+91 79 1234 5678",
      landmark: (
        <svg className="absolute bottom-0 right-1 w-28 h-20 text-orange-200/60 pointer-events-none" viewBox="0 0 120 80" fill="currentColor">
          {/* Temple Silhouette */}
          <rect x="40" y="30" width="40" height="50" />
          <path d="M40 30 Q60 10 80 30 Z" />
          <rect x="20" y="45" width="22" height="35" opacity="0.8" />
          <path d="M20 45 Q31 25 42 45 Z" opacity="0.8" />
          <rect x="78" y="45" width="22" height="35" opacity="0.8" />
          <path d="M78 45 Q89 25 100 45 Z" opacity="0.8" />
          {/* Top spires/flags */}
          <line x1="60" y1="10" x2="60" y2="2" stroke="currentColor" strokeWidth="2" />
          <polygon points="60,2 68,5 60,8" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#FAF9F6] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER CONTAINER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            {/* The little dual orange lines on the left of header */}
            <div className="flex flex-col gap-1">
              <span className="w-3 h-[2.5px] bg-[#FF5722] rounded-full"></span>
              <span className="w-1.5 h-[2.5px] bg-[#FF5722] rounded-full"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight ml-1">
              Our Global Offices
            </h2>
          </div>
          
          <button className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200 px-5 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-colors duration-150 group">
            View All Locations
            <ArrowRight className="w-4 h-4 text-[#FF5722] transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
          </button>
        </div>

        {/* 5-COLUMN STRUCTURAL BENTO LIST */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {offices.map((office) => (
            <div
              key={office.id}
              className="bg-orange-50/30 rounded-2xl p-6 border border-orange-100/60 relative overflow-hidden flex flex-col justify-between h-[230px] shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              {/* Content Card Wrapper */}
              <div className="relative z-10">
                {/* Micro Orange Pin Tag Heading */}
                <div className="flex items-center gap-1.5 mb-4">
                  <MapPin className="w-4 h-4 text-[#FF5722] fill-[#FF5722]/10 flex-shrink-0" strokeWidth={2.5} />
                  <h3 className="text-neutral-900 font-extrabold text-sm sm:text-base tracking-tight">
                    {office.city}
                  </h3>
                </div>
                
                {/* Secondary Gray Text Sub-Information */}
                <div className="text-neutral-500 font-semibold text-xs sm:text-[13px] space-y-0.5 leading-relaxed tracking-wide">
                  <p>{office.address}</p>
                  <p>{office.subAddress}</p>
                </div>
              </div>

              {/* Bold Footer Phone String */}
              <div className="relative z-10 text-neutral-700 font-bold text-xs sm:text-sm tracking-tight pt-2">
                {office.phone}
              </div>

              {/* DYNAMIC SVG LANDMARK VECTOR LAYER */}
              {office.landmark}

              {/* Shared Tinted Floor Blend Horizon Gradient Line */}
              <div className="absolute left-0 bottom-0 right-0 h-8 bg-gradient-to-t from-orange-100/20 via-orange-100/5 to-transparent pointer-events-none"></div>
              
              {/* Subtle accent floor border matching reference image */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-200/30 to-transparent"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}