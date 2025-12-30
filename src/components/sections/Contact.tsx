'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import SectionWrapper from '@/components/ui/SectionWrapper'

interface FormData {
    name: string
    email: string
    company: string
    message: string
}

interface FormErrors {
    name?: string
    email?: string
    company?: string
    message?: string
}

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        message: '',
    })

    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({ name: '', email: '', company: '', message: '' })
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }))
        }
    }

    return (
        <section id="contact" className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-nis-bg-alt/50 to-nis-bg pointer-events-none" />

            <div ref={containerRef} className="relative max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left side - Info */}
                    <SectionWrapper animation="slideRight">
                        <motion.span
                            className="inline-block px-4 py-1.5 rounded-full bg-nis-accent/10 text-nis-accent text-sm font-medium mb-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5 }}
                        >
                            Get In Touch
                        </motion.span>

                        <h2 className="section-heading text-white mb-6">
                            Let&apos;s Secure Your Future
                        </h2>

                        <p className="text-white/60 text-lg leading-relaxed mb-10">
                            Ready to take your security to the next level? Our experts are
                            standing by to discuss your unique challenges and craft a
                            tailored solution.
                        </p>

                        {/* Contact info */}
                        <div className="space-y-6">
                            <motion.div
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-nis-accent/10 flex items-center justify-center text-nis-accent flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white font-medium mb-1">Email Us</div>
                                    <a href="mailto:nanmainfosolutions@gmail.com" className="text-white/60 hover:text-nis-accent transition-colors">
                                        nanmainfosolutions@gmail.com
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-nis-accent/10 flex items-center justify-center text-nis-accent flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white font-medium mb-1">Call Us</div>
                                    <a href="tel:+917907795883" className="text-white/60 hover:text-nis-accent transition-colors">
                                        +91 7907795883
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-nis-accent/10 flex items-center justify-center text-nis-accent flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white font-medium mb-1">Visit Us</div>
                                    <p className="text-white/60">
                                        Poolanthara, Pothencode<br />
                                        Kerala, IN 695589
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Response time */}
                        <motion.div
                            className="mt-10 p-4 rounded-xl bg-nis-accent/5 border border-nis-accent/20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-nis-accent animate-pulse" />
                                <span className="text-white/80 text-sm">
                                    Average response time: <span className="text-nis-accent font-medium">Under 2 hours</span>
                                </span>
                            </div>
                        </motion.div>
                    </SectionWrapper>

                    {/* Right side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <div className="glass rounded-2xl p-8">
                            {isSubmitted ? (
                                <motion.div
                                    className="text-center py-12"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-nis-accent/20 flex items-center justify-center">
                                        <svg className="w-10 h-10 text-nis-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                                    <p className="text-white/60">
                                        Thank you for reaching out. Our team will get back to you within 24 hours.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name field */}
                                    <div className="floating-input">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder=" "
                                            className={`${errors.name ? 'border-red-500' : ''}`}
                                        />
                                        <label htmlFor="name">Full Name *</label>
                                        {errors.name && (
                                            <motion.span
                                                className="text-red-400 text-xs mt-1 block"
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                            >
                                                {errors.name}
                                            </motion.span>
                                        )}
                                    </div>

                                    {/* Email field */}
                                    <div className="floating-input">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder=" "
                                            className={`${errors.email ? 'border-red-500' : ''}`}
                                        />
                                        <label htmlFor="email">Email Address *</label>
                                        {errors.email && (
                                            <motion.span
                                                className="text-red-400 text-xs mt-1 block"
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                            >
                                                {errors.email}
                                            </motion.span>
                                        )}
                                    </div>

                                    {/* Company field */}
                                    <div className="floating-input">
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder=" "
                                        />
                                        <label htmlFor="company">Company Name</label>
                                    </div>

                                    {/* Message field */}
                                    <div className="floating-input">
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder=" "
                                            className={`resize-none ${errors.message ? 'border-red-500' : ''}`}
                                        />
                                        <label htmlFor="message" className="top-6">
                                            How can we help? *
                                        </label>
                                        {errors.message && (
                                            <motion.span
                                                className="text-red-400 text-xs mt-1 block"
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                            >
                                                {errors.message}
                                            </motion.span>
                                        )}
                                    </div>

                                    {/* Submit button */}
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        size="lg"
                                        className="w-full ripple"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center gap-2">
                                                Send Message
                                                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span>
                                        )}
                                    </Button>

                                    <p className="text-white/40 text-xs text-center">
                                        By submitting, you agree to our Privacy Policy and Terms of Service.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
