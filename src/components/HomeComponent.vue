<script setup>
import { ref } from 'vue'
import AppBar from './AppBar.vue'
import HeroComponent from './HeroComponent.vue'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const mobileMenuOpen = ref(false)
</script>

<template>
    <div class="bg-white h-[70vh]">

      <AppBar />
      <HeroComponent />
      
    </div>
  </template>