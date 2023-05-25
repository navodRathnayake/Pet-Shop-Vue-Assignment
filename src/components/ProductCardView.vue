<script setup>
    import Cart from '../components/Cart.vue'
    import Json from '../json/marketplace.json'
</script>

<script>
export default {
  data() {
    return {
      JsonData: Json,
    };
  },
};
</script>

<template>
<div class="h-[100vh] bg-gray-100 overflow-y-auto flex flex-col flex-grow">
    <div class="relative m-3 flex flex-wrap mx-auto justify-center pt-0">
  
      <div v-for="(item, index) in JsonData.product" :key="index">
        <Cart :img="item.img" :title= "item.title"  :price="item.price" :type="item.type" />
      </div>
  
    </div>
  </div>
</template>