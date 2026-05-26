import React from 'react'
import { ContactForm } from '@/components/contact-form'
import { ContactHero } from '@/components/contact-hero'
import { ContactOffices } from '@/components/contact-offices'
import FAQSection from '@/components/faq'
import { CTASection } from '@/components/contact-cta'

const Contact = () => {
  return (
    <main>
        <ContactHero />
        <ContactForm />
        <ContactOffices />
        <FAQSection />
        <CTASection />
    </main>
  )
}

export default Contact  