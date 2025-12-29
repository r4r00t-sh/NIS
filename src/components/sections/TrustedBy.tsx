'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const logos = [
    { name: 'Microsoft', width: 120 },
    { name: 'Google Cloud', width: 130 },
    { name: 'AWS', width: 80 },
    { name: 'Cisco', width: 90 },
    { name: 'IBM', width: 70 },
    { name: 'Oracle', width: 100 },
]

export default function TrustedBy() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    return (
        <section className="relative py-20 overflow-hidden bg-nis-bg-alt/50">
            {/* Subtle divider lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div ref={containerRef} className="max-w-7xl mx-auto px-6">
                <SectionWrapper animation="fadeIn" className="text-center mb-12">
                    <p className="text-sm uppercase tracking-widest text-white/40 mb-2">
                        Trusted by Industry Leaders
                    </p>
                    <h2 className="text-2xl font-semibold text-white/80">
                        Securing Fortune 500 Companies Worldwide
                    </h2>
                </SectionWrapper>

                {/* Logo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={logo.name}
                            className="relative group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{
                                delay: 0.1 * index,
                                duration: 0.6,
                                ease: [0.25, 0.4, 0.25, 1],
                            }}
                        >
                            <motion.div
                                className="px-6 py-4 rounded-xl bg-white/[0.02] border border-white/5 transition-all duration-300 group-hover:border-nis-accent/20 group-hover:bg-white/[0.05]"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Placeholder for logo - using text representation */}
                                <div
                                    className="flex items-center justify-center h-12 text-white/30 group-hover:text-white/60 transition-colors duration-300 font-semibold tracking-wide"
                                    style={{ width: logo.width }}
                                >
                                    {logo.name}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional trust indicators */}
                <motion.div
                    className="mt-16 flex flex-wrap justify-center gap-8"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    {[
                        { icon: '🛡️', text: 'ISO 27001 Certified' },
                        { icon: '✓', text: 'SOC 2 Type II' },
                        { icon: '🔒', text: 'GDPR Compliant' },
                        { icon: '⭐', text: 'CISA Partner' },
                    ].map((badge, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-white/50 text-sm"
                        >
                            <span>{badge.icon}</span>
                            <span>{badge.text}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
