'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
    services: [
        { name: 'Threat Management', href: '#services' },
        { name: 'Managed Security (MSSP)', href: '#services' },
        { name: 'Security Auditing', href: '#services' },
        { name: 'Website Development', href: '#services' },
    ],
    company: [
        { name: 'About Us', href: '#' },
        { name: 'Our Process', href: '#workflow' },
        { name: 'Contact', href: '#contact' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
    ],
}

const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
    { name: 'Twitter', href: '#', icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-nis-bg-alt border-t border-white/5">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-nis-bg to-transparent opacity-50 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/logo.png"
                                alt="NIS - Nanma Info Solutions"
                                width={160}
                                height={160}
                                className="w-28 h-28 md:w-36 md:h-36"
                            />
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
                            Empowering Safety, Enabling Trust. We provide enterprise-grade cybersecurity
                            solutions to protect your digital assets and ensure business continuity.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-nis-accent hover:border-nis-accent/50 transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.name}
                                >
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path d={social.icon} />
                                    </svg>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 text-sm hover:text-nis-accent transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 text-sm hover:text-nis-accent transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 text-sm hover:text-nis-accent transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm">
                        © {currentYear} NIS – Nanma Info Solutions. All rights reserved.
                    </p>
                    <p className="text-white/40 text-sm">
                        Protecting Digital Futures Since 2015
                    </p>
                </div>
            </div>
        </footer>
    )
}
