import { Variants } from 'framer-motion'

// Fade in from bottom
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1],
        },
    },
}

// Fade in
export const fadeIn: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    },
}

// Scale up on hover
export const scaleHover: Variants = {
    initial: { scale: 1 },
    hover: {
        scale: 1.02,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.4, 0.25, 1],
        },
    },
}

// Stagger children
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

// Stagger with more delay
export const staggerContainerSlow: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
}

// Slide in from left
export const slideInFromLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1],
        },
    },
}

// Slide in from right
export const slideInFromRight: Variants = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1],
        },
    },
}

// Reveal text word by word
export const textRevealContainer: Variants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
}

export const textRevealWord: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1],
        },
    },
}

// Accordion animations
export const accordionContent: Variants = {
    collapsed: {
        height: 0,
        opacity: 0,
        transition: {
            height: { duration: 0.3 },
            opacity: { duration: 0.2 },
        },
    },
    expanded: {
        height: 'auto',
        opacity: 1,
        transition: {
            height: { duration: 0.3 },
            opacity: { duration: 0.3, delay: 0.1 },
        },
    },
}

// Rotate icon
export const rotateIcon: Variants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 },
}

// Card hover with glow
export const cardHover: Variants = {
    initial: {
        scale: 1,
        boxShadow: '0 0 0 rgba(214, 254, 59, 0)',
    },
    hover: {
        scale: 1.02,
        boxShadow: '0 0 30px rgba(214, 254, 59, 0.2)',
        transition: {
            duration: 0.3,
            ease: [0.25, 0.4, 0.25, 1],
        },
    },
}

// Lift effect
export const liftHover: Variants = {
    initial: { y: 0 },
    hover: {
        y: -8,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.4, 0.25, 1],
        },
    },
}

// Arrow slide
export const arrowSlide: Variants = {
    initial: { x: 0 },
    hover: {
        x: 8,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.4, 0.25, 1],
        },
    },
}

// Pulse glow animation
export const pulseGlow = {
    initial: {
        boxShadow: '0 0 20px rgba(214, 254, 59, 0.3)',
    },
    animate: {
        boxShadow: [
            '0 0 20px rgba(214, 254, 59, 0.3)',
            '0 0 40px rgba(214, 254, 59, 0.5)',
            '0 0 20px rgba(214, 254, 59, 0.3)',
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}
