import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'nis-bg': '#0b0f14',
                'nis-bg-alt': '#0e1116',
                'nis-accent': '#d6fe3b',
                'nis-glass': 'rgba(255, 255, 255, 0.06)',
                'nis-glow': 'rgba(214, 254, 59, 0.3)',
                'nis-border': 'rgba(255, 255, 255, 0.1)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'hero-gradient': 'radial-gradient(ellipse at center top, rgba(214, 254, 59, 0.08) 0%, transparent 60%)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 2s infinite',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'slide-up': 'slide-up 0.6s ease-out',
                'fade-in': 'fade-in 0.8s ease-out',
                'orb-float': 'orb-float 8s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(214, 254, 59, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(214, 254, 59, 0.5)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                'slide-up': {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'orb-float': {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '25%': { transform: 'translate(10px, -15px) scale(1.05)' },
                    '50%': { transform: 'translate(-5px, -25px) scale(1)' },
                    '75%': { transform: 'translate(-15px, -10px) scale(0.95)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(214, 254, 59, 0.3)',
                'glow-lg': '0 0 40px rgba(214, 254, 59, 0.4)',
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            },
        },
    },
    plugins: [],
}

export default config
