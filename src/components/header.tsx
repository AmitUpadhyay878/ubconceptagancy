"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "",submenu: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Mobile App Development", href: "/services/mobile-app-development" },
    { label: "AI Solutions", href: "/services/ai-solutions" },
  ] },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/blog" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-18">
             <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-black text-2xl shadow-md transform rotate-12">
                B
              </div>
              <span className="text-2xl font-extrabold text-neutral-900 tracking-tight ml-1">UBConcept</span>
              </Link>
            </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg font-semibold text-foreground-secondary hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 ml-4">
              <Button variant="primary" size="sm">
                <Link href="/contact" className="text-lg">
                  Contact
                </Link>
              </Button>
            </div>
          </nav>

          <button
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center hover:bg-accent-light/50 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          className="md:hidden border-t border-border bg-background px-6 pb-6 pt-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-foreground-secondary hover:text-foreground transition-colors py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-2 border-t border-border">
              <Button variant="primary" size="md" className="w-full">
                <Link href="/contact">
                  contact
                </Link>
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  )
}
