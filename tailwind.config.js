/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'contact-us': "url('https://thumbs.dreamstime.com/b/pet-shop-background-your-design-vector-illustration-119318049.jpg')",
        'about-us': "url('https://th.bing.com/th/id/R.58bc1a660f616a1eb97e8d07b483ca34?rik=edry%2bNoWbcZBUg&pid=ImgRaw&r=0')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

