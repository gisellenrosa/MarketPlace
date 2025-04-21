import { type Config } from 'tailwindcss';

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          base: 'var(--orange-base)',
          dark: 'var(--orange-dark)',
        },
        blue: {
          light: 'var(--blue-light)',
          base: 'var(--blue-base)',
          dark: 'var(--blue-dark)',
        },
        white: 'var(--white)',
        background: 'var(--background)',
        shape: 'var(--shape)',
        gray: {
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
        },
        danger: 'var(--danger)',
        success: 'var(--success)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        title: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'title-lg': ['var(--text-title-lg)', { lineHeight: 'var(--lh-tight)' }],
        'title-md': ['var(--text-title-md)', { lineHeight: 'var(--lh-tight)' }],
        'title-sm': ['var(--text-title-sm)', { lineHeight: 'var(--lh-tight)' }],
        subtitle: ['var(--text-subtitle)', { lineHeight: 'var(--lh-tight)' }],
        'body-md': ['var(--text-body-md)', { lineHeight: 'var(--lh-tight)' }],
        'body-sm': ['var(--text-body-sm)', { lineHeight: 'var(--lh-tight)' }],
        'body-xs': ['var(--text-body-xs)', { lineHeight: 'var(--lh-tight)' }],
        'label-md': ['var(--text-label-md)', { lineHeight: 'var(--lh-tight)' }],
        'label-sm': ['var(--text-label-sm)', { lineHeight: 'var(--lh-tight)' }],
        'action-md': ['var(--text-action-md)', { lineHeight: 'var(--lh-tight)' }],
        'action-sm': ['var(--text-action-sm)', { lineHeight: 'var(--lh-tight)' }],
      },
    },
  },
  plugins: [],
};

export default config;
