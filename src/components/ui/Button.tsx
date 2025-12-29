'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    className?: string
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}: ButtonProps) {
    const baseStyles = 'relative overflow-hidden font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2'

    const variants = {
        primary: 'bg-nis-accent text-nis-bg hover:shadow-glow-lg',
        secondary: 'bg-transparent border border-nis-accent text-nis-accent hover:bg-nis-accent hover:text-nis-bg',
        ghost: 'bg-transparent text-white/80 hover:text-nis-accent',
    }

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    }

    return (
        <motion.button
            className={clsx(baseStyles, variants[variant], sizes[size], className)}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {/* Shimmer effect */}
            <span className="absolute inset-0 overflow-hidden">
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </span>
            <span className="relative z-10">{children}</span>
        </motion.button>
    )
}
