<script setup>
import { ref } from 'vue'
import AppBar from './AppBar.vue'
import HeroComponent from './HeroComponent.vue'


const mobileMenuOpen = ref(false)
</script>

<template>
    <div class="bg-white h-[100vh]">

      <AppBar />
      <HeroComponent />
      
    </div>
  </template>