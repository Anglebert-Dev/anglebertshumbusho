import type { Config } from 'tailwindcss';
import { colors, typography, breakpoints } from './src/app/styles/theme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize,
      screens: {
        'mobile': breakpoints.mobile,
        'tablet': breakpoints.tablet,
        'desktop': breakpoints.desktop,
        'large-desktop': breakpoints.largeDesktop,
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};

export default config; 