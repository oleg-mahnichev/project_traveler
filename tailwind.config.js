// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{html,js,vue}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,vue,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F3743D',
        gray: '#939393',
        black: '#2C2C2C'
      }
    }
  },
  plugins: []
}