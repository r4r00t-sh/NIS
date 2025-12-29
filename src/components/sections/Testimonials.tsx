'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import ParallaxWrapper from '@/components/animations/ParallaxWrapper'

const testimonials = [
    {
        id: 1,
        quote: "NIS transformed our security posture completely. Their team identified critical vulnerabilities that our previous provider missed, and implemented solutions that have kept us breach-free for 3 years.",
        author: 'Jennifer Martinez',
        role: 'CTO',
        company: 'TechFlow Industries',
        rating: 5,
    },
    {
        id: 2,
        quote: "The 24/7 SOC monitoring gives us peace of mind. When we had a potential incident at 3 AM, their team was on it within minutes. That kind of responsiveness is invaluable.",
        author: 'Robert Chen',
        role: 'Director of IT',
        company: 'Global Health Systems',
        rating: 5,
    },
    {
        id: 3,
        quote: "Working with NIS on our cloud migration was seamless. They ensured our security didn't just maintain—it improved dramatically throughout the transition.",
        author: 'Amanda Foster',
        role: 'VP of Engineering',
        company: 'FinServe Corp',
        rating: 5,
    },
    {
        id: 4,
        quote: "Their penetration testing was the most thorough we've ever experienced. The detailed report and remediation guidance helped us achieve PCI compliance ahead of schedule.",
        author: 'David Nakamura',
        role: 'CISO',
        company: 'RetailMax',
        rating: 5,
    },
]

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    // Auto-slide
    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1)
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [])

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
        }),
    }

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1)
        setCurrentIndex(index)
    }

    const nextSlide = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Parallax background */}
            <div className="absolute inset-0 bg-gradient-to-b from-nis-bg to-nis-bg-alt/50" />

            <ParallaxWrapper speed={0.3} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-nis-accent/5 blur-3xl" />
                <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl" />
            </ParallaxWrapper>

            <div ref={containerRef} className="relative max-w-5xl mx-auto px-6">
                {/* Section Header */}
                <SectionWrapper animation="fadeInUp" className="text-center mb-16">
                    <motion.span
                        className="inline-block px-4 py-1.5 rounded-full bg-nis-accent/10 text-nis-accent text-sm font-medium mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        Client Testimonials
                    </motion.span>
                    <h2 className="section-heading text-white">
                        What Our Clients Say
                    </h2>
                    <p className="section-subheading mx-auto">
                        Hear from the security leaders who trust us with their most
                        critical digital assets.
                    </p>
                </SectionWrapper>

                {/* Testimonial Carousel */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    {/* Main testimonial card */}
                    <div className="relative glass rounded-3xl p-8 md:p-12 min-h-[320px] flex items-center">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                                className="w-full"
                            >
                                {/* Quote icon */}
                                <div className="text-6xl text-nis-accent/20 mb-6">&ldquo;</div>

                                {/* Quote text */}
                                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                                    {testimonials[currentIndex].quote}
                                </p>

                                {/* Author info */}
                                <div className="flex items-center gap-4">
                                    {/* Avatar placeholder */}
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-nis-accent/20 to-blue-500/10 flex items-center justify-center text-2xl">
                                        👤
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white">
                                            {testimonials[currentIndex].author}
                                        </div>
                                        <div className="text-white/50 text-sm">
                                            {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                                        </div>
                                    </div>
                                    {/* Rating stars */}
                                    <div className="ml-auto hidden md:flex gap-1">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-5 h-5 text-nis-accent"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation arrows */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
                        <motion.button
                            className="w-12 h-12 -ml-6 rounded-full bg-nis-bg border border-white/10 flex items-center justify-center text-white/60 hover:text-nis-accent hover:border-nis-accent/50 transition-all duration-300 pointer-events-auto"
                            onClick={prevSlide}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>
                        <motion.button
                            className="w-12 h-12 -mr-6 rounded-full bg-nis-bg border border-white/10 flex items-center justify-center text-white/60 hover:text-nis-accent hover:border-nis-accent/50 transition-all duration-300 pointer-events-auto"
                            onClick={nextSlide}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Next testimonial"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <motion.button
                                key={index}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-nis-accent w-8'
                                        : 'bg-white/20 hover:bg-white/40'
                                    }`}
                                onClick={() => goToSlide(index)}
                                whileHover={{ scale: 1.2 }}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
