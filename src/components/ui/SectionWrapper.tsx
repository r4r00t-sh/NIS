'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { ReactNode, useRef } from 'react'
import clsx from 'clsx'

interface SectionWrapperProps {
    children: ReactNode
    className?: string
    animation?: 'fadeIn' | 'fadeInUp' | 'slideLeft' | 'slideRight' | 'stagger'
    delay?: number
    threshold?: number
}

const animations: Record<string, Variants> = {
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    },
    fadeInUp: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } },
    },
    slideLeft: {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } },
    },
    slideRight: {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } },
    },
    stagger: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    },
}

export default function SectionWrapper({
    children,
    className,
    animation = 'fadeInUp',
    delay = 0,
    threshold = 0.2,
}: SectionWrapperProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-100px', amount: threshold })

    const variant = animations[animation]

    return (
        <motion.div
            ref={ref}
            className={clsx(className)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variant}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </motion.div>
    )
}
