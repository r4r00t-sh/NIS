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

const productLinks = [
    {
        name: 'Nanma ScanX',
        href: '/products/nanma-scanx',
        description: 'Vulnerability Scanner powered by OpenVAS',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false)
    const [isMobileProductOpen, setIsMobileProductOpen] = useState(false)

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
                    {/* Product Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsProductDropdownOpen(true)}
                        onMouseLeave={() => setIsProductDropdownOpen(false)}
                    >
                        <motion.button
                            className="text-sm text-white/70 hover:text-nis-accent transition-colors duration-300 relative group flex items-center gap-1"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0, duration: 0.5 }}
                        >
                            Products
                            <svg
                                className={`w-4 h-4 transition-transform duration-300 ${isProductDropdownOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-nis-accent transition-all duration-300 group-hover:w-full" />
                        </motion.button>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                            {isProductDropdownOpen && (
                                <motion.div
                                    className="absolute top-full left-0 mt-2 w-72 py-2 bg-nis-bg-alt/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: 'easeOut' }}
                                >
                                    {productLinks.map((product) => (
                                        <Link
                                            key={product.name}
                                            href={product.href}
                                            className="flex items-start gap-3 px-4 py-3 hover:bg-white/5 transition-colors duration-200 group"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-nis-accent/10 flex items-center justify-center text-nis-accent group-hover:bg-nis-accent/20 transition-colors duration-200 flex-shrink-0">
                                                {product.icon}
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-white group-hover:text-nis-accent transition-colors duration-200">
                                                    {product.name}
                                                </div>
                                                <div className="text-xs text-white/50 mt-0.5">
                                                    {product.description}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="text-sm text-white/70 hover:text-nis-accent transition-colors duration-300 relative group"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
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
                        className="fixed top-0 left-0 right-0 bottom-0 z-[55] bg-nis-bg lg:hidden overflow-y-auto"
                        style={{ height: '100vh', width: '100vw' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className="flex flex-col items-center justify-center min-h-full py-24 gap-6">
                            {/* Products with expandable submenu */}
                            <motion.div
                                className="flex flex-col items-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0, duration: 0.3 }}
                            >
                                <button
                                    onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
                                    className="text-2xl font-medium text-white hover:text-nis-accent transition-colors flex items-center gap-2"
                                >
                                    Products
                                    <svg
                                        className={`w-5 h-5 transition-transform duration-300 ${isMobileProductOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <AnimatePresence>
                                    {isMobileProductOpen && (
                                        <motion.div
                                            className="mt-4 flex flex-col items-center gap-3"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {productLinks.map((product) => (
                                                <Link
                                                    key={product.name}
                                                    href={product.href}
                                                    onClick={() => {
                                                        setIsMobileMenuOpen(false)
                                                        setIsMobileProductOpen(false)
                                                    }}
                                                    className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                                                >
                                                    <div className="w-8 h-8 rounded-lg bg-nis-accent/10 flex items-center justify-center text-nis-accent">
                                                        {product.icon}
                                                    </div>
                                                    <div>
                                                        <div className="text-base font-medium text-white">
                                                            {product.name}
                                                        </div>
                                                        <div className="text-xs text-white/50">
                                                            {product.description}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-medium text-white hover:text-nis-accent transition-colors"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 0.05 * (index + 1), duration: 0.3 }}
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
