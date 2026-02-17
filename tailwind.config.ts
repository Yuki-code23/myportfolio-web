import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'matt-black': '#0a0a0a',
        'dark-gray': '#121212',
        'light-gray': '#1a1a1a',
        'gold': '#D4AF37',
        'silver': '#C0C0C0',
        'accent': '#D4AF37',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
