'use client'

import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const workflowSteps = [
    {
        id: 1,
        title: 'Consultation',
        description: 'Understanding your infrastructure and challenges. We take time to learn about your business, existing security measures, and specific concerns.',
        details: [
            'Infrastructure assessment',
            'Business requirements analysis',
            'Current security evaluation',
            'Challenge identification',
        ],
        icon: '💬',
    },
    {
        id: 2,
        title: 'Assessment & Strategy',
        description: 'Designing tailored security solutions based on comprehensive analysis and industry best practices.',
        details: [
            'Risk assessment',
            'Custom strategy development',
            'Solution architecture',
            'Timeline planning',
        ],
        icon: '📋',
    },
    {
        id: 3,
        title: 'Implementation',
        description: 'Deploying secure and scalable systems with minimal disruption to your daily operations.',
        details: [
            'Security tool deployment',
            'System configuration',
            'Integration setup',
            'Quality assurance',
        ],
        icon: '⚙️',
    },
    {
        id: 4,
        title: 'Monitoring & Optimization',
        description: 'Continuous improvement and protection through 24/7 monitoring and proactive threat management.',
        details: [
            'Real-time monitoring',
            'Performance optimization',
            'Threat detection',
            'System updates',
        ],
        icon: '👁️',
    },
    {
        id: 5,
        title: 'Reporting & Support',
        description: 'Clear insights and actionable intelligence with dedicated support to keep you informed and protected.',
        details: [
            'Regular security reports',
            'Actionable insights',
            'Dedicated support',
            'Incident briefings',
        ],
        icon: '📊',
    },
]

export default function Workflow() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="workflow" className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-nis-bg to-nis-bg-alt/50 pointer-events-none" />

            <div ref={containerRef} className="relative max-w-4xl mx-auto px-6">
                {/* Section Header */}
                <SectionWrapper animation="fadeInUp" className="text-center mb-16">
                    <motion.span
                        className="inline-block px-4 py-1.5 rounded-full bg-nis-accent/10 text-nis-accent text-sm font-medium mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        Our Process
                    </motion.span>
                    <h2 className="section-heading text-white">
                        How We Protect Your Business
                    </h2>
                    <p className="section-subheading mx-auto">
                        A proven, systematic approach to cybersecurity that delivers
                        measurable results and lasting protection.
                    </p>
                </SectionWrapper>

                {/* Accordion */}
                <div className="space-y-4">
                    {workflowSteps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                delay: 0.1 * index,
                                duration: 0.6,
                                ease: [0.25, 0.4, 0.25, 1],
                            }}
                        >
                            <div
                                className={`glass rounded-xl overflow-hidden transition-all duration-500 ${openIndex === index
                                    ? 'border-nis-accent/30 shadow-glow'
                                    : 'border-white/5'
                                    }`}
                            >
                                {/* Header */}
                                <button
                                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <div className="flex items-center gap-4">
                                        {/* Step number */}
                                        <span
                                            className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold transition-colors duration-300 ${openIndex === index
                                                ? 'bg-nis-accent text-nis-bg'
                                                : 'bg-white/5 text-white/50'
                                                }`}
                                        >
                                            {step.id}
                                        </span>

                                        {/* Icon and Title */}
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">{step.icon}</span>
                                            <h3
                                                className={`text-lg font-semibold transition-colors duration-300 ${openIndex === index ? 'text-nis-accent' : 'text-white'
                                                    }`}
                                            >
                                                {step.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Toggle icon */}
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`transition-colors duration-300 ${openIndex === index ? 'text-nis-accent' : 'text-white/50'
                                            }`}
                                    >
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </motion.div>
                                </button>

                                {/* Content */}
                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                                        >
                                            <div className="px-6 pb-6 pt-2">
                                                <p className="text-white/60 mb-4 pl-14">
                                                    {step.description}
                                                </p>

                                                {/* Details list */}
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-14">
                                                    {step.details.map((detail, i) => (
                                                        <motion.li
                                                            key={i}
                                                            className="flex items-center gap-2 text-sm text-white/50"
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.1 * i, duration: 0.3 }}
                                                        >
                                                            <svg className="w-4 h-4 text-nis-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                            </svg>
                                                            {detail}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
