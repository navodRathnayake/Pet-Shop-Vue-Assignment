<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import AboutUs from './components/AboutUSComponent.vue'
import RescueBanner from './components/RescueBannerComponent.vue'
import ContactUs from './components/ContactUsComponent.vue'
import AppFooter from './components/AppFooterComponent.vue'
import AppBar from './components/AppBar.vue'
import Banner from './components/RescueBannerComponent.vue'
</script>

<template>
    <div class="w-[100vw] h-[50vh]">
      <AppBar />
      <RouterView />
      
      <Banner />
      <AppFooter />
    </div>
</template>

