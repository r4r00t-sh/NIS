'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Button from '@/components/ui/Button'
import TextReveal from '@/components/animations/TextReveal'

export default function CallToAction() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background with animated gradient */}
            <div className="absolute inset-0 bg-nis-bg-alt">
                {/* Animated gradient background */}
                <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(214, 254, 59, 0.15) 0%, transparent 50%)',
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            <div ref={containerRef} className="relative max-w-5xl mx-auto px-6">
                <motion.div
                    className="relative rounded-3xl overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    {/* Pulsing aura */}
                    <motion.div
                        className="absolute inset-0 rounded-3xl"
                        animate={{
                            boxShadow: [
                                '0 0 60px rgba(214, 254, 59, 0.1)',
                                '0 0 100px rgba(214, 254, 59, 0.2)',
                                '0 0 60px rgba(214, 254, 59, 0.1)',
                            ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />

                    {/* Glass container */}
                    <div className="relative glass p-12 md:p-16 rounded-3xl text-center">
                        {/* Background pattern */}
                        <div
                            className="absolute inset-0 opacity-5"
                            style={{
                                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                                backgroundSize: '20px 20px',
                            }}
                        />

                        {/* Content */}
                        <div className="relative z-10 space-y-8">
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-nis-accent/30 bg-nis-accent/10"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <span className="w-2 h-2 rounded-full bg-nis-accent animate-pulse" />
                                <span className="text-sm text-nis-accent font-medium">
                                    Your Trusted Security Partner
                                </span>
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                <TextReveal text="Let's Build a Safer Digital Future" />
                            </h2>

                            <motion.p
                                className="text-lg text-white/60 max-w-2xl mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                Whether you&apos;re securing your infrastructure, strengthening compliance,
                                or protecting your digital assets — NIS is here to help.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                {/* Shimmer button */}
                                <motion.div className="relative group">
                                    <Button variant="primary" size="lg" className="relative overflow-hidden">
                                        <span className="relative z-10">Claim Free Assessment</span>
                                        {/* Shimmer effect */}
                                        <motion.span
                                            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                                            animate={{ translateX: ['calc(-100%)', 'calc(100%)'] }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                repeatDelay: 1,
                                                ease: 'easeInOut',
                                            }}
                                        />
                                    </Button>
                                </motion.div>

                                <Button variant="ghost" size="lg">
                                    Schedule a Call →
                                </Button>
                            </motion.div>

                            {/* Trust badges */}
                            <motion.div
                                className="flex flex-wrap items-center justify-center gap-6 pt-8 text-white/40 text-sm"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            >
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    No Credit Card Required
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    24-Hour Response
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    100% Confidential
                                </span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
