<script setup>
import { ref } from 'vue'
import AppBar from './AppBar.vue'
import HeroComponent from './HeroComponent.vue'
import AppFooter from '../components/AppFooterComponent.vue'


const mobileMenuOpen = ref(false)
</script>

<template>
    <div class="bg-white">

      <AppBar />
      <HeroComponent id="#a" />
      <AppFooter />

    </div>
  </template>