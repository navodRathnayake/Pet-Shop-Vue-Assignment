<script setup>
    import AppBar from '../components/AppBar.vue'
    import HealthTipCard from '../components/HealthTipCard.vue'
    import AppFooter from '../components/AppFooterComponent.vue'
    import HealthBlog from '../components/HealthBlogView.vue'
</script>
<template>
    <div>
      <AppBar />
    <div class="bg-white py-24 sm:py-32 h-[100vh]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-5xl lg:text-center">
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Keep Your Pet Healthy</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">Maintaining good health in pets is important for their overall well-being. Regular veterinary check-ups can help detect early signs of illness and prevent serious health problems. Proper nutrition is essential for maintaining good health in pets</p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <HealthTipCard />
              <HealthTipCard />
              <HealthTipCard />
              <HealthTipCard />
              <HealthTipCard />
              <HealthTipCard />
            </dl>
          </div>
        </div>
      </div>
      <HealthBlog />
      <AppFooter />
    </div>
</template>