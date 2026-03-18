/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      /* ─── Border Radius ─── */
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      /* ─── Colors ─── */
      colors: {
        /* Shell */
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        /* Card / Popover */
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },

        /* Primary */
        primary: {
          DEFAULT: 'hsl(var(--primary))' /* #072E45 */,
          mid: 'hsl(var(--primary-mid))' /* #123E56 */,
          light: 'hsl(var(--primary-light))' /* #0C6A92 */,
          foreground: 'hsl(var(--primary-foreground))',
        },

        /* Secondary */
        secondary: {
          DEFAULT: 'hsl(var(--secondary))' /* #D76838 */,
          light: 'hsl(var(--secondary-light))' /* #DE8556 */,
          lighter: 'hsl(var(--secondary-lighter))' /* #E9B088 */,
          foreground: 'hsl(var(--secondary-foreground))',
        },

        /* Muted / Disabled */
        muted: {
          DEFAULT: 'hsl(var(--muted))' /* #ECF1F6 */,
          foreground: 'hsl(var(--muted-foreground))' /* #8A8A8A */,
        },

        /* Accent */
        accent: {
          DEFAULT: 'hsl(var(--accent))' /* #FFC107 */,
          foreground: 'hsl(var(--accent-foreground))',
        },

        /* Alerts */
        destructive: {
          DEFAULT: 'hsl(var(--destructive))' /* #FF4747 */,
          foreground: 'hsl(var(--destructive-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))' /* #00C566 */,
          foreground: 'hsl(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))' /* #FACC15 */,
          foreground: 'hsl(var(--warning-foreground))',
        },

        /* Greyscale */
        grey: {
          'text-primary': 'hsl(var(--grey-text-primary))' /* #181818 */,
          'text-secondary': 'hsl(var(--grey-text-secondary))' /* #5C5C5C */,
          'text-tertiary': 'hsl(var(--grey-text-tertiary))' /* #747474 */,
          icons: 'hsl(var(--grey-icons))' /* #7C7B7B */,
          stroke: 'hsl(var(--grey-stroke))' /* #D7D7D7 */,
          dividers: 'hsl(var(--grey-dividers))' /* #D9D9D9 */,
          'disabled-text': 'hsl(var(--grey-disabled-text))' /* #8A8A8A */,
          'disabled-bg': 'hsl(var(--grey-disabled-bg))' /* #D9D9D9 */,
          20: 'hsl(var(--grey-20))' /* #ECF1F6 */,
        },

        /* Semantic aliases – Border / Input / Ring */
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },

      /* ─── Typography ─── */
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        h1: ['32px', { lineHeight: '40px', fontWeight: '700' }],
        h2: ['24px', { lineHeight: '32px', fontWeight: '600' }],
        h3: ['20px', { lineHeight: '28px', fontWeight: '600' }],
        h4: ['18px', { lineHeight: '100%', fontWeight: '500' }],
        body: ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'body-sm': ['14px', { lineHeight: '22px', fontWeight: '400' }],
        'body-sm-md': ['14px', { lineHeight: '22px', fontWeight: '500' }],
        label: ['12px', { lineHeight: '16px', fontWeight: '500' }],
        btn: ['16px', { lineHeight: '16px', fontWeight: '500' }],
        caption: ['12px', { lineHeight: '18px', fontWeight: '400' }],
        overline: ['11px', { lineHeight: '16px', fontWeight: '600' }],
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
