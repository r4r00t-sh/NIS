'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Orb {
    id: number
    size: number
    x: number
    y: number
    color: 'green' | 'blue' | 'purple'
    delay: number
    duration: number
}

export default function FloatingOrbs() {
    const [orbs, setOrbs] = useState<Orb[]>([])

    useEffect(() => {
        // Check for reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReducedMotion) return

        // Generate random orbs
        const generatedOrbs: Orb[] = [
            { id: 1, size: 400, x: 10, y: 20, color: 'green', delay: 0, duration: 15 },
            { id: 2, size: 300, x: 70, y: 60, color: 'blue', delay: 2, duration: 18 },
            { id: 3, size: 250, x: 85, y: 30, color: 'green', delay: 4, duration: 20 },
            { id: 4, size: 350, x: 30, y: 70, color: 'purple', delay: 1, duration: 16 },
            { id: 5, size: 200, x: 50, y: 10, color: 'blue', delay: 3, duration: 22 },
        ]
        setOrbs(generatedOrbs)
    }, [])

    const colorStyles = {
        green: 'bg-gradient-radial from-nis-accent/30 to-transparent',
        blue: 'bg-gradient-radial from-blue-500/20 to-transparent',
        purple: 'bg-gradient-radial from-purple-500/20 to-transparent',
    }

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {orbs.map((orb) => (
                <motion.div
                    key={orb.id}
                    className={`absolute rounded-full blur-[80px] ${colorStyles[orb.color]}`}
                    style={{
                        width: orb.size,
                        height: orb.size,
                        left: `${orb.x}%`,
                        top: `${orb.y}%`,
                        transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                        y: [0, -30, 0, 20, 0],
                        x: [0, 15, -10, 5, 0],
                        scale: [1, 1.05, 1, 0.95, 1],
                    }}
                    transition={{
                        duration: orb.duration,
                        delay: orb.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    )
}
