import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'overlayBanner': 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 85.04%)',
        
      },
      
    },
    colors: {
      'primary':  '#F71963',
      'secondary': '#9F9F9F',
      'categorys': '0px 8px 16px 0px rgba(57, 48, 19, 0.12)'
    },
    backgroundColor: {
       'primary':  '#F71963',
       'secondary': '#9F9F9F',
       'input': '#F6F5F2',
      
    },
    
  },
  plugins: [],
}
export default config
