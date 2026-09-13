/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F7F4EB',
          light: '#FCFAF5',
          warm: '#F2EDE0',
          dark: '#E8E2D2',
        },
        ink: {
          DEFAULT: '#171717',
          pure: '#000000',
          muted: '#52525B',
          light: '#A1A1AA',
          faint: '#D4D4D8',
        },
        mountain: {
          DEFAULT: '#1E3A2F',
          dark: '#142720',
          light: '#2D5A47',
          soft: '#E8EFEA',
        },
        terracotta: {
          DEFAULT: '#C25E3E',
          dark: '#A3482C',
          light: '#D96B43',
          soft: '#FAEDE8',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        hand: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'notebook': '0 20px 40px -15px rgba(23, 23, 23, 0.08), 0 0 0 1px rgba(23, 23, 23, 0.06)',
        'notebook-open': '0 30px 60px -20px rgba(23, 23, 23, 0.12), 0 0 0 1px rgba(23, 23, 23, 0.08), inset 0 0 60px rgba(0,0,0,0.02)',
        'card-lift': '0 10px 25px -5px rgba(23, 23, 23, 0.06), 0 0 0 1px rgba(23, 23, 23, 0.04)',
      },
    },
  },
  plugins: [],
}

