'use client'

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const features = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Deep Vulnerability Scanning',
        description: 'Comprehensive scanning across networks, applications, and infrastructure with 50,000+ vulnerability tests powered by OpenVAS.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Real-Time Threat Detection',
        description: 'Instant alerting and continuous monitoring to identify emerging vulnerabilities before they become critical security risks.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        title: 'Intelligent Reporting',
        description: 'Generate executive and technical reports with risk scores, CVE references, and actionable remediation guidance.',
    },
]

const stats = [
    { value: '50K+', label: 'Vulnerability Tests' },
    { value: '99.9%', label: 'Detection Accuracy' },
    { value: '<5min', label: 'Setup Time' },
    { value: '24/7', label: 'Expert Support' },
]

// Product images data
const productImages = [
    { id: 1, src: '/NanmaScanx/1.png', alt: 'Dashboard Overview', label: 'Dashboard' },
    { id: 2, src: '/NanmaScanx/2.png', alt: 'Vulnerability Analysis', label: 'Scan Results' },
    { id: 3, src: '/NanmaScanx/3.png', alt: 'Detailed Reports', label: 'Reports' },
    { id: 4, src: '/NanmaScanx/4.png', alt: 'Alert Center', label: 'Alerts' },
    { id: 5, src: '/NanmaScanx/5.png', alt: 'Vulnerability List', label: 'Vuln List' },
    { id: 6, src: '/NanmaScanx/6.png', alt: 'Analytics Dashboard', label: 'Analytics' },
]

export default function NanmaScanXPage() {
    const containerRef = useRef<HTMLDivElement>(null)
    const heroRef = useRef<HTMLDivElement>(null)
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    })

    const heroOpacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]), { stiffness: 100, damping: 30 })
    const heroY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), { stiffness: 100, damping: 30 })

    return (
        <main ref={containerRef} className="relative bg-[#08090d] overflow-hidden">
            <Header />

            {/* Hero Section - Split Layout */}
            <section
                ref={heroRef}
                className="relative min-h-screen flex items-center overflow-hidden pt-20"
            >
                {/* Background Effects */}
                <div className="absolute inset-0">
                    {/* Dark gradient base */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b10] via-[#08090d] to-[#08090d]" />

                    {/* Light rays from top */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[600px]">
                        <div className="absolute inset-0 bg-gradient-to-b from-violet-600/10 via-violet-600/5 to-transparent blur-3xl" />
                        <div className="absolute left-1/4 top-0 w-1/3 h-full bg-gradient-to-b from-blue-500/8 via-transparent to-transparent blur-2xl transform -skew-x-12" />
                        <div className="absolute right-1/4 top-0 w-1/3 h-full bg-gradient-to-b from-violet-500/8 via-transparent to-transparent blur-2xl transform skew-x-12" />
                    </div>

                    {/* Subtle grid */}
                    <div
                        className="absolute inset-0 opacity-[0.015]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                                              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                            backgroundSize: '80px 80px',
                        }}
                    />
                </div>

                <motion.div
                    className="relative z-10 max-w-7xl mx-auto px-6 w-full"
                    style={{ opacity: heroOpacity, y: heroY }}
                >
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        {/* Left Content */}
                        <div className="text-left">
                            {/* Coming Soon Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm mb-8"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                                </span>
                                <span className="text-sm text-violet-300 font-medium tracking-wide">
                                    Coming Soon
                                </span>
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                            >
                                <span className="text-white">Advanced Security</span>
                                <br />
                                <span className="text-white">for </span>
                                <span className="bg-gradient-to-r from-nis-accent via-lime-300 to-emerald-400 bg-clip-text text-transparent">
                                    Modern Enterprises
                                </span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-base sm:text-lg text-slate-400 mb-8 max-w-lg leading-relaxed"
                            >
                                Nanma ScanX is a next-generation vulnerability scanner powered by the OpenVAS engine.
                                Identify, analyze, and remediate security weaknesses across your entire infrastructure.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-10"
                            >
                                <Link href="/#contact" className="w-full sm:w-auto">
                                    <motion.button
                                        whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(214, 254, 59, 0.3)' }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-nis-accent text-slate-900 font-semibold rounded-xl flex items-center justify-center gap-2 transition-all"
                                    >
                                        Get Early Access
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </motion.button>
                                </Link>
                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-slate-700 text-white font-medium rounded-xl transition-all text-center"
                                >
                                    Book a Demo
                                </motion.button>
                            </motion.div>

                            {/* Social Proof */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="flex items-center gap-3"
                            >
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#08090d] bg-gradient-to-br ${i === 1 ? 'from-violet-500 to-purple-600' :
                                            i === 2 ? 'from-blue-500 to-cyan-600' :
                                                i === 3 ? 'from-emerald-500 to-green-600' :
                                                    'from-orange-500 to-red-600'
                                            }`} />
                                    ))}
                                </div>
                                <div className="text-sm text-slate-400">
                                    <span className="text-white font-medium">500+</span> Security professionals waiting
                                </div>
                            </motion.div>
                        </div>

                        {/* Right - Product Mockup with 3D Effect */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative lg:scale-110 lg:translate-x-4 mt-8 lg:mt-0"
                        >
                            {/* Glow effect behind image */}
                            <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-r from-violet-600/20 via-nis-accent/10 to-blue-600/20 rounded-3xl blur-3xl opacity-60" />

                            {/* Main Dashboard Image */}
                            <motion.div
                                whileHover={{ scale: 1.02, rotateY: -2 }}
                                transition={{ duration: 0.4 }}
                                className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-black/50"
                                style={{
                                    perspective: '1000px',
                                    transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
                                }}
                            >
                                <Image
                                    src="/NanmaScanx/1.png"
                                    alt="Nanma ScanX Dashboard"
                                    width={950}
                                    height={600}
                                    className="w-full h-auto"
                                    priority
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d]/60 via-transparent to-transparent" />
                            </motion.div>

                            {/* Floating secondary card - top right (hidden on mobile) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: [0, -6, 0, 6, 0],
                                }}
                                transition={{
                                    opacity: { duration: 0.6, delay: 0.6 },
                                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
                                }}
                                className="hidden md:block absolute -top-8 -right-8 w-64 rounded-xl overflow-hidden border border-slate-700/50 shadow-xl shadow-black/50"
                                style={{
                                    transform: 'perspective(1000px) rotateY(-10deg) rotateX(5deg)',
                                }}
                            >
                                <Image
                                    src="/NanmaScanx/2.png"
                                    alt="Scan Results"
                                    width={280}
                                    height={200}
                                    className="w-full h-auto"
                                />
                            </motion.div>

                            {/* Floating tertiary card - bottom left (hidden on mobile) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: [0, 8, 0, -8, 0],
                                }}
                                transition={{
                                    opacity: { duration: 0.6, delay: 0.7 },
                                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }
                                }}
                                className="hidden md:block absolute -bottom-10 -left-10 w-72 rounded-xl overflow-hidden border border-slate-700/50 shadow-xl shadow-black/50"
                                style={{
                                    transform: 'perspective(1000px) rotateY(5deg) rotateX(-5deg)',
                                }}
                            >
                                <Image
                                    src="/NanmaScanx/3.png"
                                    alt="Reports"
                                    width={320}
                                    height={230}
                                    className="w-full h-auto"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Stats Bar */}
            <section className="relative py-16 border-y border-slate-800/50">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-600/5 to-transparent" />
                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-nis-accent mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-slate-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative py-24">
                <div className="absolute inset-0 bg-[#08090d]" />

                {/* Subtle background orbs */}
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-nis-accent/5 rounded-full blur-[100px]" />

                <div className="relative max-w-7xl mx-auto px-6">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Everything You Need to <span className="text-nis-accent">Stay Secure</span>
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Powerful vulnerability management tools designed for security teams who demand excellence.
                        </p>
                    </motion.div>

                    {/* Feature Cards */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="h-full p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-violet-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5">
                                    {/* Icon */}
                                    <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-6 group-hover:bg-violet-500/20 transition-colors">
                                        {feature.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-nis-accent transition-colors">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Showcase Section - Modern Carousel */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#08090d] via-[#0a0b10] to-[#08090d]" />

                {/* Center spotlight */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-600/10 via-nis-accent/5 to-blue-600/10 rounded-full blur-[120px]" />

                <div className="relative max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-nis-accent/10 text-nis-accent text-sm font-medium mb-6 border border-nis-accent/20">
                            Product Preview
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Beautifully Designed. <span className="text-violet-400">Incredibly Powerful.</span>
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            A modern interface that makes vulnerability management intuitive and efficient.
                        </p>
                    </motion.div>

                    {/* Carousel Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative max-w-5xl mx-auto"
                    >
                        {/* Background glow */}
                        <div className="absolute -inset-8 bg-gradient-to-r from-violet-600/20 via-nis-accent/10 to-blue-600/20 rounded-3xl blur-3xl opacity-50" />

                        {/* Main Image Display */}
                        <div className="relative">
                            {/* Navigation Arrows */}
                            <motion.button
                                onClick={() => setActiveImageIndex(prev => prev === 0 ? productImages.length - 1 : prev - 1)}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-white hover:bg-violet-600/80 hover:border-violet-500/50 transition-all shadow-lg"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </motion.button>

                            <motion.button
                                onClick={() => setActiveImageIndex(prev => prev === productImages.length - 1 ? 0 : prev + 1)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-white hover:bg-violet-600/80 hover:border-violet-500/50 transition-all shadow-lg"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.button>

                            {/* Main image container */}
                            <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl bg-slate-900/50">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeImageIndex}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                                        className="relative"
                                    >
                                        <Image
                                            src={productImages[activeImageIndex].src}
                                            alt={productImages[activeImageIndex].alt}
                                            width={1200}
                                            height={750}
                                            className="w-full h-auto"
                                        />

                                        {/* Gradient overlay at bottom */}
                                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/90 to-transparent" />

                                        {/* Current view info */}
                                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                                            <div>
                                                <div className="px-3 py-1.5 bg-nis-accent text-slate-900 text-sm font-bold rounded-lg inline-block mb-2">
                                                    {productImages[activeImageIndex].label}
                                                </div>
                                                <p className="text-white/80 text-sm">
                                                    {productImages[activeImageIndex].alt}
                                                </p>
                                            </div>
                                            <div className="text-slate-400 text-sm font-medium">
                                                {activeImageIndex + 1} / {productImages.length}
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Light reflection at top */}
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-6 h-1 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-violet-500 to-nis-accent"
                                initial={{ width: '0%' }}
                                animate={{ width: `${((activeImageIndex + 1) / productImages.length) * 100}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        {/* Thumbnail Strip */}
                        <div className="mt-6 flex justify-center gap-3 flex-wrap">
                            {productImages.map((img, index) => (
                                <motion.button
                                    key={img.id}
                                    onClick={() => setActiveImageIndex(index)}
                                    className={`relative group rounded-xl overflow-hidden border-2 transition-all duration-300 ${activeImageIndex === index
                                        ? 'border-nis-accent shadow-lg shadow-nis-accent/20'
                                        : 'border-slate-700/50 hover:border-violet-500/50'
                                        }`}
                                    whileHover={{ scale: 1.05, y: -4 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="relative w-24 h-16 md:w-32 md:h-20">
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            className={`object-cover transition-all duration-300 ${activeImageIndex === index ? 'brightness-100' : 'brightness-50 group-hover:brightness-75'
                                                }`}
                                        />

                                        {/* Active indicator overlay */}
                                        {activeImageIndex === index && (
                                            <motion.div
                                                layoutId="activeIndicator"
                                                className="absolute inset-0 border-2 border-nis-accent rounded-xl"
                                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                            />
                                        )}

                                        {/* Hover overlay with label */}
                                        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${activeImageIndex === index ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                                            }`}>
                                            <span className="px-2 py-1 bg-slate-900/90 text-white text-xs font-medium rounded">
                                                {img.label}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Label below thumbnail */}
                                    <div className={`px-2 py-1.5 text-center text-xs font-medium transition-colors ${activeImageIndex === index
                                        ? 'bg-nis-accent/20 text-nis-accent'
                                        : 'bg-slate-800/80 text-slate-400 group-hover:text-white'
                                        }`}>
                                        {img.label}
                                    </div>
                                </motion.button>
                            ))}
                        </div>

                        {/* Keyboard hint */}
                        <div className="mt-6 text-center text-slate-500 text-sm hidden md:block">
                            <span className="inline-flex items-center gap-2">
                                <kbd className="px-2 py-1 bg-slate-800 border border-slate-700 rounded text-xs">←</kbd>
                                <kbd className="px-2 py-1 bg-slate-800 border border-slate-700 rounded text-xs">→</kbd>
                                <span className="ml-1">to navigate</span>
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24">
                <div className="absolute inset-0 bg-[#08090d]" />

                {/* Animated background */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-violet-600/15 to-nis-accent/15 rounded-full blur-[80px]"
                />

                <div className="relative max-w-3xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Coming Soon Badge */}
                        <motion.div
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(139,92,246,0.2)',
                                    '0 0 40px rgba(139,92,246,0.4)',
                                    '0 0 20px rgba(139,92,246,0.2)',
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm mb-8"
                        >
                            <span className="text-xl">🚀</span>
                            <span className="text-lg text-violet-300 font-semibold">
                                Launching Soon
                            </span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Secure Your Infrastructure?
                        </h2>
                        <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto">
                            Be among the first to experience the future of vulnerability scanning. Join the waitlist for exclusive early access.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/#contact">
                                <motion.button
                                    whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(214, 254, 59, 0.4)' }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-10 py-5 bg-nis-accent text-slate-900 font-bold text-lg rounded-xl transition-all"
                                >
                                    Join the Waitlist
                                </motion.button>
                            </Link>
                            <Link href="/">
                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-10 py-5 border border-slate-700 text-white font-medium text-lg rounded-xl transition-all"
                                >
                                    Learn About NIS
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
