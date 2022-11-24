/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/*.{html,js}", "./src/app/**/*.{html,js}", "./src/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'block-xl': '0 0 20px 5px rgba(0, 0, 0, 0.3)',
        'block-md': '0 0 20px 1px rgba(0, 0, 0, 0.3)',
        'md-reverse': '0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)',
        'b-md': '0 1px 20px 1px rgba(0,0,0,0.5)',
        't-md': '0 -11px 20px 1px rgba(0,0,0,0.5)',
      },
      colors: {
        'apple-action': '#367AF6',
      }
    },
  },
  plugins: [
    require("tailwindcss-scoped-groups")({
      groups: ["one", "two"],
    }),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
}
