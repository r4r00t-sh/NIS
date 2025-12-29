'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'

const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#workflow' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'py-3 bg-nis-bg/80 backdrop-blur-xl border-b border-white/5'
                : 'py-5 bg-transparent'
                }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative z-10">
                    <motion.div
                        className="flex items-center -my-8"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src="/logo.png"
                            alt="NIS - Nanma Info Solutions"
                            width={160}
                            height={160}
                            className="w-28 h-28 md:w-36 md:h-36"
                        />
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="text-sm text-white/70 hover:text-nis-accent transition-colors duration-300 relative group"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-nis-accent transition-all duration-300 group-hover:w-full" />
                        </motion.a>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <Button variant="primary" size="sm">
                        Get Protected
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden relative z-[60] p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <motion.span
                            className="w-full h-0.5 bg-white block"
                            animate={{
                                rotate: isMobileMenuOpen ? 45 : 0,
                                y: isMobileMenuOpen ? 9 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="w-full h-0.5 bg-white block"
                            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="w-full h-0.5 bg-white block"
                            animate={{
                                rotate: isMobileMenuOpen ? -45 : 0,
                                y: isMobileMenuOpen ? -9 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu - Outside container for proper fixed positioning */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed top-0 left-0 right-0 bottom-0 z-[55] bg-nis-bg lg:hidden"
                        style={{ height: '100vh', width: '100vw' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className="flex flex-col items-center justify-center h-full gap-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-medium text-white hover:text-nis-accent transition-colors"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                                className="mt-4"
                            >
                                <Button variant="primary" size="lg" onClick={() => setIsMobileMenuOpen(false)}>
                                    Get Protected
                                </Button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
