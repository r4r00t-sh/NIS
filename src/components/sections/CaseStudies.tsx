'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import GlassCard from '@/components/ui/GlassCard'
import SectionWrapper from '@/components/ui/SectionWrapper'

const caseStudies = [
    {
        client: 'Global Banking Corp',
        industry: 'Financial Services',
        challenge: 'Critical vulnerabilities in legacy systems',
        result: '100% compliance achieved',
        improvement: '85% reduction in security incidents',
        image: '/case-study-1.jpg',
    },
    {
        client: 'HealthTech Plus',
        industry: 'Healthcare',
        challenge: 'HIPAA compliance gaps',
        result: 'Full HIPAA certification',
        improvement: '60% faster incident response',
        image: '/case-study-2.jpg',
    },
    {
        client: 'E-Commerce Giant',
        industry: 'Retail',
        challenge: 'PCI-DSS non-compliance',
        result: 'Zero data breaches',
        improvement: '$2M saved in potential fines',
        image: '/case-study-3.jpg',
    },
]

export default function CaseStudies() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    return (
        <section id="case-studies" className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-nis-bg-alt/50 to-nis-bg pointer-events-none" />

            <div ref={containerRef} className="relative max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <SectionWrapper animation="fadeInUp" className="text-center mb-16">
                    <motion.span
                        className="inline-block px-4 py-1.5 rounded-full bg-nis-accent/10 text-nis-accent text-sm font-medium mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        Success Stories
                    </motion.span>
                    <h2 className="section-heading text-white">
                        Proven Results for Industry Leaders
                    </h2>
                    <p className="section-subheading mx-auto">
                        See how we&apos;ve helped organizations across industries strengthen
                        their security posture and achieve compliance goals.
                    </p>
                </SectionWrapper>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.client}
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                                delay: 0.2 * index,
                                duration: 0.8,
                                ease: [0.25, 0.4, 0.25, 1],
                            }}
                        >
                            <motion.div
                                className="h-full"
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <GlassCard className="h-full group cursor-pointer" hover={false}>
                                    {/* Image placeholder with gradient */}
                                    <div className="relative h-48 -mx-6 -mt-6 mb-6 rounded-t-2xl overflow-hidden bg-gradient-to-br from-nis-accent/20 to-blue-500/10">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-6xl opacity-20">🏢</div>
                                        </div>
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-nis-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Industry badge */}
                                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-nis-accent/10 text-nis-accent mb-4">
                                        {study.industry}
                                    </span>

                                    {/* Client name */}
                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-nis-accent transition-colors duration-300">
                                        {study.client}
                                    </h3>

                                    {/* Challenge */}
                                    <p className="text-white/50 text-sm mb-4">
                                        <span className="text-white/70 font-medium">Challenge:</span>{' '}
                                        {study.challenge}
                                    </p>

                                    {/* Results */}
                                    <div className="space-y-2 pt-4 border-t border-white/5">
                                        <div className="flex items-center gap-2 text-sm">
                                            <svg className="w-4 h-4 text-nis-accent" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-white/70">{study.result}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <svg className="w-4 h-4 text-nis-accent" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-white/70">{study.improvement}</span>
                                        </div>
                                    </div>

                                    {/* Read more link */}
                                    <motion.div
                                        className="mt-6 flex items-center text-nis-accent"
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className="text-sm font-medium">Read Case Study</span>
                                        <motion.svg
                                            className="w-4 h-4 ml-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </motion.svg>
                                    </motion.div>
                                </GlassCard>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* View all link */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <motion.a
                        href="#"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-nis-accent transition-colors duration-300"
                        whileHover={{ x: 5 }}
                    >
                        <span>View All Case Studies</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}
