'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import GlassCard from '@/components/ui/GlassCard'
import SectionWrapper from '@/components/ui/SectionWrapper'

const teamMembers = [
    {
        name: 'Sarah Chen',
        role: 'Chief Security Officer',
        bio: '20+ years in enterprise security, former CISO at Fortune 100 companies.',
        image: '👩‍💼',
        linkedin: '#',
        certifications: ['CISSP', 'CISM'],
    },
    {
        name: 'Michael Torres',
        role: 'Head of Offensive Security',
        bio: 'Led red team operations for government agencies and major corporations.',
        image: '👨‍💻',
        linkedin: '#',
        certifications: ['OSCP', 'OSCE'],
    },
    {
        name: 'Emily Watson',
        role: 'Cloud Security Architect',
        bio: 'Expert in multi-cloud security with deep AWS, Azure, and GCP experience.',
        image: '👩‍🔬',
        linkedin: '#',
        certifications: ['AWS SAP', 'CCSP'],
    },
    {
        name: 'David Kim',
        role: 'SOC Director',
        bio: 'Built and managed SOCs for financial institutions across 3 continents.',
        image: '👨‍🏫',
        linkedin: '#',
        certifications: ['GCIA', 'GCIH'],
    },
]

export default function Team() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    return (
        <section id="team" className="relative py-24 overflow-hidden">
            {/* Background with subtle particles */}
            <div className="absolute inset-0 bg-gradient-to-b from-nis-bg-alt/50 to-nis-bg pointer-events-none" />

            {/* Subtle animated background particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-nis-accent/20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            delay: Math.random() * 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            <div ref={containerRef} className="relative max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <SectionWrapper animation="fadeInUp" className="text-center mb-16">
                    <motion.span
                        className="inline-block px-4 py-1.5 rounded-full bg-nis-accent/10 text-nis-accent text-sm font-medium mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        Our Experts
                    </motion.span>
                    <h2 className="section-heading text-white">
                        Meet the Security Leaders
                    </h2>
                    <p className="section-subheading mx-auto">
                        Industry veterans with decades of combined experience protecting
                        the world&apos;s most critical digital infrastructure.
                    </p>
                </SectionWrapper>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                delay: 0.1 * index,
                                duration: 0.6,
                                ease: [0.25, 0.4, 0.25, 1],
                            }}
                        >
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <GlassCard className="text-center group" hover={false}>
                                    {/* Avatar with glow */}
                                    <motion.div
                                        className="relative w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-nis-accent/20 to-blue-500/10 flex items-center justify-center text-5xl"
                                        whileHover={{
                                            boxShadow: '0 0 30px rgba(214, 254, 59, 0.3)',
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {member.image}
                                        {/* Soft glowing border on hover */}
                                        <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-nis-accent/30 transition-colors duration-300" />
                                    </motion.div>

                                    {/* Name */}
                                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-nis-accent transition-colors duration-300">
                                        {member.name}
                                    </h3>

                                    {/* Role */}
                                    <p className="text-nis-accent text-sm mb-3">{member.role}</p>

                                    {/* Bio */}
                                    <p className="text-white/50 text-sm mb-4 leading-relaxed">
                                        {member.bio}
                                    </p>

                                    {/* Certifications */}
                                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                                        {member.certifications.map((cert, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-0.5 text-xs rounded bg-white/5 text-white/50 border border-white/5"
                                            >
                                                {cert}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Social link */}
                                    <motion.a
                                        href={member.linkedin}
                                        className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-white/50 hover:text-nis-accent hover:bg-white/10 transition-all duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={`${member.name}'s LinkedIn`}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </motion.a>
                                </GlassCard>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Join prompt */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <p className="text-white/50 mb-4">
                        Want to join our team of security experts?
                    </p>
                    <motion.a
                        href="#"
                        className="inline-flex items-center gap-2 text-nis-accent hover:text-white transition-colors duration-300"
                        whileHover={{ x: 5 }}
                    >
                        <span className="font-medium">View Open Positions</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}
