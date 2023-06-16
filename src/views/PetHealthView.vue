<script setup>
    import AppBar from '../components/AppBar.vue'
    import HealthTipCard from '../components/HealthTipCard.vue'
    import AppFooter from '../components/AppFooterComponent.vue'
    import HealthBlog from '../components/HealthBlogView.vue'
</script>
<template>
    <div>
      <!-- <AppBar /> -->
    <div class="bg-white py-24 sm:py-32 h-[100vh] dark:bg-slate-200">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-5xl lg:text-center">
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Keep Your Pet Healthy</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">Maintaining good health in pets is important for their overall well-being. Regular veterinary check-ups can help detect early signs of illness and prevent serious health problems. Proper nutrition is essential for maintaining good health in pets</p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              
              <div v-for="index in [1,2,3,4]">
                <div class="flex flex-col p-8 bg-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                  <div class="flex items-center justify-between">
                      <div class="flex items-center">
                          <div class="flex flex-col ml-3">
                              <div class="font-medium leading-none text-gray-100">{{ myJson.articles[index].title }}</div>
                              <p class="text-sm text-gray-500 leading-none mt-1">{{ myJson.articles[index].description }}</p>
                          </div>
                      </div>
                  </div>
              </div>

              </div>

            </dl>
          </div>
        </div>
      </div>
      <HealthBlog v-bind:title1 = myJson.articles[0].title v-bind:title2 = myJson.articles[1].title v-bind:body1= myJson.articles[0].description v-bind:body2= myJson.articles[1].description />
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GetBitCoin",
  components: {},
  data() {
    return {
      myJson : [],
    };
  },
  beforeMount() {
    this.getCoin();
  },
  methods: {
    getCoin() {
      axios
        .get("https://newsapi.org/v2/everything?q=pet%20health&sortBy=popularity&apiKey=4d4223aa1e96473cbd20a3f1deec4dae")
        .then((response) => {
          this.myJson = response.data;
          console.log(myJson);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));

    },
  },
};
</script>
