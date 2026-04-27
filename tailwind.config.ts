import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        fg: 'var(--fg)',
        'fg-soft': 'var(--fg-soft)',
        muted: 'var(--muted)',
        'muted-soft': 'var(--muted-soft)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
        brand: {
          DEFAULT: 'var(--brand)',
          2: 'var(--brand-2)',
          navy: '#002D72',
          blue: '#0057B8',
        },
        primary: {
          DEFAULT: '#050B16',
          dark: '#020610',
          light: '#0B1530',
        },
        accent: {
          DEFAULT: '#FFD100',
          light: '#FFE166',
          dark: '#E6BC00',
        },
        neon: {
          blue: '#0057B8',
          green: '#25D366',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
        serif: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #050B16 0%, #002D72 50%, #050B16 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 87, 184, 0.35)',
        'glow-lg': '0 0 40px rgba(0, 87, 184, 0.45)',
        'glow-accent': '0 0 24px rgba(255, 209, 0, 0.35)',
        'neon': '0 0 10px rgba(0, 87, 184, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 45, 114, 0.30)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 87, 184, 0.35)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 87, 184, 0.6)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
