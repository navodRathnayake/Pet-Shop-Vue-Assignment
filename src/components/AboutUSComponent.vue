<script setup>
  import AppBar from './AppBar.vue'
  import AppFooter from '../components/AppFooterComponent.vue'
</script>

<template>
  <AppBar/>
    <div class="relative isolate overflow-hidden py-24 sm:py-32 bg-about-us dark:bg-about-us-dark" >
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-7xl lg:mx-0">
            <div class="group rounded-5xl max-h w-100 px-10 py-10 bg-yellow-500 font-bold text-white relative overflow-hidden">
              <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">BOW ! BOW !</h2>
            </div>
            <p class="group rounded-5xl max-h w-120 px-10 py-10 bg-yellow-500 font-bold text-white relative overflow-hidden">Welcome to our online pet shop! We are a team of passionate pet lovers who are dedicated to providing the best products and services for your furry friends. Our shop offers a wide range of branded pet products that are carefully selected to meet your pet’s needs. We also offer online shopping features that make it easy for you to purchase your favorite pet products from the comfort of your home.</p>
          </div>
          <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          </div>
        </div>
        <br/>
        <div class="bg-white py-20 sm:py20 dark:bg-slate-300">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt class="text-base leading-7 text-gray-600">Transactions every 24 hours</dt>
                  <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">44 million</dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt class="text-base leading-7 text-gray-600">Assets under holding</dt>
                  <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">$119 trillion</dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt class="text-base leading-7 text-gray-600">New users annually</dt>
                  <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">46,000</dd>
                </div>
              </dl>
            </div>
          </div>
      </div>
</template>