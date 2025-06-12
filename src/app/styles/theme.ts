export const colors = {
  primary: {
    DEFAULT: '#0B1426', // Deep Navy
    light: '#1A2B4D',
    dark: '#060B14',
  },
  secondary: {
    DEFAULT: '#00D4FF', // Electric Blue
    light: '#33DDFF',
    dark: '#00A3CC',
  },
  accent: {
    emerald: '#10B981', // Emerald Green
    gold: '#F59E0B', // Warm Gold
  },
  neutral: {
    dark: '#1F2937', // Charcoal
    light: '#F8FAFC', // Off-white
  },
  code: {
    red: '#FF6B6B',
    cyan: '#4ECDC4',
    blue: '#45B7D1',
  },
} as const;

export const typography = {
  fontFamily: {
    primary: 'Inter, sans-serif',
    secondary: 'JetBrains Mono, monospace',
    accent: 'Playfair Display, serif',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
} as const;

export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  largeDesktop: '1440px',
} as const; 