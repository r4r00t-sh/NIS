'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'
import clsx from 'clsx'
import { cardHover } from '@/lib/animations'

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
    children: ReactNode
    className?: string
    hover?: boolean
    glow?: boolean
}

export default function GlassCard({
    children,
    className,
    hover = true,
    glow = false,
    ...props
}: GlassCardProps) {
    return (
        <motion.div
            className={clsx(
                'relative p-6 rounded-2xl',
                'bg-white/[0.03] backdrop-blur-xl',
                'border border-white/[0.08]',
                'transition-all duration-500',
                hover && 'hover:bg-white/[0.06] hover:border-nis-glow hover:shadow-glow',
                glow && 'shadow-glow',
                className
            )}
            variants={hover ? cardHover : undefined}
            initial="initial"
            whileHover={hover ? "hover" : undefined}
            {...props}
        >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-nis-accent/5 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </motion.div>
    )
}
