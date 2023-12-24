import {nextui} from '@nextui-org/theme'
import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
	  nextui(), 
	  plugin(({ theme, addUtilities }) => {
		  const neonUitils = {}
		  const colors = theme("colors")
		  for (const color in colors) {
			  if (typeof colors[color] === 'object') {
				  const color1 = colors[color]['500']
				  const color2 = colors[color]['700']
				  neonUitils[`.neon-${color}`] = {
					  boxShadow: `0 0 10px ${color1}, 0 0 40px ${color2}`
				  }
			  }
		  }
		  addUtilities(neonUitils)
	  })
  ],
}
