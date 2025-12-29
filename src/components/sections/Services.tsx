'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import GlassCard from '@/components/ui/GlassCard'
import SectionWrapper from '@/components/ui/SectionWrapper'

const services = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
        title: 'Threat Management',
        description: 'We identify, analyze, and neutralize potential threats before they impact your operations. Our proactive approach ensures continuous protection against evolving cyber risks.',
        features: ['Threat Detection', 'Risk Analysis', 'Proactive Defense', 'Incident Prevention'],
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
        title: 'Managed Security Services (MSSP)',
        description: 'Our 24/7 monitoring, incident response, and security management services ensure your systems remain protected around the clock—without the burden of maintaining an in-house security team.',
        features: ['24/7 Monitoring', 'Incident Response', 'Security Management', 'SOC Services'],
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        title: 'Security Auditing & Risk Assessment',
        description: 'We conduct in-depth security audits to uncover vulnerabilities, assess compliance, and strengthen your digital infrastructure through actionable insights.',
        features: ['Vulnerability Assessment', 'Compliance Audit', 'Risk Analysis', 'Security Reports'],
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        title: 'Cybersecurity Awareness & Training',
        description: 'We empower teams with practical cybersecurity knowledge, helping organizations reduce human error and build a strong security culture.',
        features: ['Security Training', 'Phishing Awareness', 'Best Practices', 'Culture Building'],
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
        title: 'Website Development & Management',
        description: 'From secure website architecture to performance optimization, we build and manage modern, reliable web platforms aligned with industry best practices.',
        features: ['Secure Architecture', 'Performance Optimization', 'Web Management', 'Best Practices'],
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
        title: 'Malware Analysis & Removal',
        description: 'We detect, analyze, and eliminate malicious threats while reinforcing system defenses to prevent future attacks.',
        features: ['Malware Detection', 'Threat Analysis', 'System Cleanup', 'Defense Hardening'],
    },
]

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    return (
        <section id="services" className="relative py-24 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-nis-bg via-nis-bg-alt/50 to-nis-bg pointer-events-none" />

            <div ref={containerRef} className="relative max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <SectionWrapper animation="fadeInUp" className="text-center mb-16">
                    <motion.span
                        className="inline-block px-4 py-1.5 rounded-full bg-nis-accent/10 text-nis-accent text-sm font-medium mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        What We Do
                    </motion.span>
                    <h2 className="section-heading text-white">
                        End-to-End Cybersecurity & Digital Services
                    </h2>
                    <p className="section-subheading mx-auto">
                        We deliver comprehensive cybersecurity and digital services designed to
                        safeguard businesses of all sizes — from startups to enterprises.
                    </p>
                </SectionWrapper>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                delay: 0.1 * index,
                                duration: 0.6,
                                ease: [0.25, 0.4, 0.25, 1],
                            }}
                        >
                            <GlassCard className="h-full group">
                                {/* Icon */}
                                <motion.div
                                    className="w-14 h-14 rounded-xl bg-nis-accent/10 flex items-center justify-center text-nis-accent mb-6 group-hover:bg-nis-accent/20 transition-colors duration-300"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {service.icon}
                                </motion.div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-nis-accent transition-colors duration-300">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-white/60 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2">
                                    {service.features.map((feature, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/50 border border-white/5"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Hover arrow */}
                                <motion.div
                                    className="mt-6 flex items-center text-nis-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 5 }}
                                >
                                    <span className="text-sm font-medium">Learn more</span>
                                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
