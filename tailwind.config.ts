// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'brand-red': '#B1040E', // This is the red from the Stanford site
//         'brand-sand': '#F9F6F2', // If you need the light background color
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Global Primary Color Palette - Change here to update entire website
        'primary': '#15803D',        // Main brand green
        'primary-dark': '#166534',   // Darker green for backgrounds
        'primary-darker': '#14532D', // Even darker for footer
        'primary-light': '#22C55E',  // Lighter green for accents
        'primary-hover': '#16A34A',  // Hover state color
        'primary-foreground': '#FFFFFF', // White text on primary color

        // Semantic color names (alias to primary)
        'brand': 'rgb(var(--color-primary) / <alpha-value>)',
      },
      // fontFamily: {
      //   sans: ['"Source Sans Pro"', 'sans-serif'], // 👈 Makes it the default sans-serif font
      //   // OR if you want a custom name:
      //   // 'source-sans': ['"Source Sans Pro"', 'sans-serif'],
      // },
      fontFamily: {
  sans: ['"Source Sans Pro"', 'sans-serif'],
  serif: ['"Crimson Text"', 'serif'], // Stanford-style serif font
},

    },
  },
  plugins: [],
};