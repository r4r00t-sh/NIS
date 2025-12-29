'use client'

import { motion } from 'framer-motion'
import { textRevealContainer, textRevealWord } from '@/lib/animations'

interface TextRevealProps {
    text: string
    className?: string
    delay?: number
}

export default function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
    const words = text.split(' ')

    return (
        <motion.span
            className={className}
            variants={textRevealContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    className="inline-block mr-[0.25em]"
                    variants={textRevealWord}
                    style={{ transitionDelay: `${delay + index * 0.08}s` }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    )
}

// Character by character reveal
interface CharRevealProps {
    text: string
    className?: string
    delay?: number
}

export function CharReveal({ text, className, delay = 0 }: CharRevealProps) {
    const chars = text.split('')

    return (
        <motion.span
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {chars.map((char, index) => (
                <motion.span
                    key={index}
                    className="inline-block"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.3,
                                delay: delay + index * 0.03,
                                ease: [0.25, 0.4, 0.25, 1],
                            },
                        },
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.span>
    )
}
