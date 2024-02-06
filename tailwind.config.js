/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenText: '#00A807',
        quizColor: '#006224',
        quizBg: '#C5E09E',

        optionBg: '#449F66',
        optionHoverBg: '#006224',

        resultBg: '#F1F1F1',
        resultBanner: '#60A9A7',
        resultType: '#FF661B',
        hashtagBg: '#FCD03E',
      },
    },
  },
  plugins: [],
}

