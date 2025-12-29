'use client'

import { useRef, useEffect, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxWrapperProps {
    children: ReactNode
    speed?: number // -1 to 1, where 0 is no parallax
    className?: string
}

export default function ParallaxWrapper({
    children,
    speed = 0.5,
    className,
}: ParallaxWrapperProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })

    const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])

    return (
        <motion.div ref={ref} className={className} style={{ y }}>
            {children}
        </motion.div>
    )
}

// Mouse-move parallax hook
export function useMouseParallax(intensity: number = 20) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReducedMotion) return

        const element = ref.current
        if (!element) return

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window

            const x = ((clientX - innerWidth / 2) / innerWidth) * intensity
            const y = ((clientY - innerHeight / 2) / innerHeight) * intensity

            requestAnimationFrame(() => {
                element.style.transform = `translate(${x}px, ${y}px)`
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [intensity])

    return ref
}

// Parallax layers component
interface ParallaxLayersProps {
    children: ReactNode
    className?: string
}

export function ParallaxLayers({ children, className }: ParallaxLayersProps) {
    return (
        <div className={`relative ${className}`}>
            {children}
        </div>
    )
}

interface ParallaxLayerProps {
    children: ReactNode
    depth: 'foreground' | 'midground' | 'background'
    className?: string
}

export function ParallaxLayer({ children, depth, className }: ParallaxLayerProps) {
    const speeds = {
        foreground: 1,
        midground: 0.6,
        background: 0.3,
    }

    return (
        <ParallaxWrapper speed={speeds[depth]} className={className}>
            {children}
        </ParallaxWrapper>
    )
}
