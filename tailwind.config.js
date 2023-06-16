/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-body' : '#BAA433',
      },
      backgroundImage: {
        'contact-us': "url('https://thumbs.dreamstime.com/b/pet-shop-background-your-design-vector-illustration-119318049.jpg')",
        'contact-us-dark': "url('https://media.istockphoto.com/vectors/dogs-seamless-pattern-in-black-and-white-colors-vector-id507576776?k=6&m=507576776&s=170667a&w=0&h=e_hKnu5rv8ITVSAZg1M9yDriixHYxVaiSCfQkBTV2eE=')",
        'about-us': "url('https://th.bing.com/th/id/R.58bc1a660f616a1eb97e8d07b483ca34?rik=edry%2bNoWbcZBUg&pid=ImgRaw&r=0')",
        'about-us-dark': "url('https://th.bing.com/th/id/R.af0c39a12975fb9948b6379f4ec60cc2?rik=BOgK5wV0Qegmtg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-CpDGbzJ1gEM%2fUdKcgvzhNlI%2fAAAAAAAASzs%2f_2d4IcU6n8E%2fs550%2fCamillaFoss_Ruffen%26friends_black.jpg&ehk=YXtZfa0UGSTeTCFZrPQ4fRnWCIhemLB1KGz%2fVc33tB0%3d&risl=&pid=ImgRaw&r=0')",
        'dog-rescue': "url('https://media.istockphoto.com/vectors/seamless-pawprints-background-vector-id157988168?k=6&m=157988168&s=170667a&w=0&h=0noHVsGU8Bd_LE7W1lgiWb-7OrSgKOaS-sDwLGCQ2FQ=')",

        'poster-1': "url('https://th.bing.com/th/id/R.2e3c16d5168812903949a693b5e9b7ea?rik=H9qjDcsc2rjimw&pid=ImgRaw&r=0')",
        'poster-2': "url('https://th.bing.com/th/id/OIP.xAc535t_GGyU3BXrmOfX1gHaKe?pid=ImgDet&rs=1')",
        'poster-3': "url('https://pawprintsdogrescue.org/wp-content/uploads/2019/03/dog-show-details.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

