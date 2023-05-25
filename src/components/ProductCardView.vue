<script setup>
    import Cart from '../components/Cart.vue'
    import Json from '../json/data.json'
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
<div class="h-[100vh] bg-gray-100 flex flex-col ">
    <div class="relative m-3 flex flex-wrap mx-auto justify-center pt-0">
  
      <div v-for="(item, index) in JsonData.cart.item" :key="index">
        <Cart :title= "item.title"  :price="item.price" :quantity="item.quantity" />
      </div>
  
    </div>
  </div>
</template>