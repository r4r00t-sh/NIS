'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
import FloatingOrbs from '@/components/animations/FloatingOrbs'
import { staggerContainer, fadeInUp } from '@/lib/animations'

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    })

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window
            setMousePosition({
                x: (clientX - innerWidth / 2) / 50,
                y: (clientY - innerHeight / 2) / 50,
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background layers */}
            <motion.div
                className="absolute inset-0 bg-nis-bg"
                style={{ y: backgroundY }}
            >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-hero-gradient opacity-80" />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />
            </motion.div>

            {/* Floating orbs */}
            <FloatingOrbs />

            {/* Mouse parallax decorative elements */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-nis-accent/10"
                style={{
                    x: mousePosition.x * 2,
                    y: mousePosition.y * 2,
                }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full border border-nis-accent/5"
                style={{
                    x: mousePosition.x * -1.5,
                    y: mousePosition.y * -1.5,
                }}
            />

            {/* Content */}
            <motion.div
                className="relative z-10 max-w-6xl mx-auto px-6 text-center"
                style={{ y: textY, opacity }}
            >
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    {/* Badge */}
                    <motion.div
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-nis-accent/30 bg-nis-accent/5"
                    >
                        <span className="w-2 h-2 rounded-full bg-nis-accent animate-pulse" />
                        <span className="text-sm text-nis-accent font-medium">
                            Enterprise Cybersecurity Solutions
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                    >
                        <span className="text-white">Empowering Safety,</span>
                        <br />
                        <span className="text-gradient">Enabling Trust</span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
                    >
                        Next-generation cybersecurity protecting your infrastructure,
                        data, and digital presence.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <motion.div
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(214, 254, 59, 0.3)',
                                    '0 0 40px rgba(214, 254, 59, 0.5)',
                                    '0 0 20px rgba(214, 254, 59, 0.3)',
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            className="rounded-lg"
                        >
                            <Button variant="primary" size="lg">
                                Start Security Assessment
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </Button>
                        </motion.div>
                        <Button variant="secondary" size="lg">
                            View Our Services
                        </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        variants={fadeInUp}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-3xl mx-auto"
                    >
                        {[
                            { value: '500+', label: 'Clients Protected' },
                            { value: '99.9%', label: 'Uptime SLA' },
                            { value: '24/7', label: 'SOC Monitoring' },
                            { value: '0', label: 'Data Breaches' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-nis-accent">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-white/50 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                style={{ opacity }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
                    <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-nis-accent"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </div>
            </motion.div>
        </section>
    )
}
