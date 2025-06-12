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
    },
  },
  plugins: [],
};

export default config; 