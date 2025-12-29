import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/lib/LenisProvider'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: 'NIS – Nanma Info Solutions | Enterprise Cybersecurity',
    description: 'Empowering Safety, Enabling Trust. NIS provides enterprise-grade cybersecurity solutions including penetration testing, cloud security, SOC services, and compliance consulting.',
    keywords: ['cybersecurity', 'penetration testing', 'cloud security', 'SOC', 'compliance', 'GDPR', 'HIPAA', 'PCI-DSS'],
    authors: [{ name: 'Nanma Info Solutions' }],
    openGraph: {
        title: 'NIS – Nanma Info Solutions | Enterprise Cybersecurity',
        description: 'Empowering Safety, Enabling Trust. Enterprise-grade cybersecurity solutions.',
        type: 'website',
        locale: 'en_US',
        siteName: 'NIS - Nanma Info Solutions',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'NIS – Nanma Info Solutions',
        description: 'Empowering Safety, Enabling Trust.',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="bg-nis-bg text-white antialiased">
                <LenisProvider>
                    {children}
                </LenisProvider>
            </body>
        </html>
    )
}
