import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'prosper-pink': '#ec678c',
        'prosper-purple': '#c177c3',
        'prosper-blue': '#5d95eb',
        'prosper-cyan': '#69d6e4',
        'prosper-orange': '#f3b86a',
      },
      backgroundImage: {
        'rainbow-gradient': 
          'radial-gradient(circle at 15% 20%, #ec678c 0%, transparent 40%), ' +
          'radial-gradient(circle at 85% 15%, #5d95eb 0%, transparent 45%), ' +
          'radial-gradient(circle at 15% 85%, #f3b86a 0%, transparent 45%), ' +
          'radial-gradient(circle at 85% 85%, #69d6e4 0%, transparent 50%), ' +
          'linear-gradient(135deg, #ec678c 0%, #c177c3 35%, #5d95eb 60%, #69d6e4 80%, #f3b86a 100%)',
      },
      fontFamily: {
        timber: ['var(--font-timber)', 'serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;