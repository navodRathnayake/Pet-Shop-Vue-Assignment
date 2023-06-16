<script setup>
    import SearchBar from '../components/SearchBarView.vue'
    import ProductCard from '../components/ProductCardView.vue'
    import CartView from '../components/CartView.vue'
    import Pagination from '../components/PaginationView.vue'
    import Json from '../json/marketplace.json'
</script>

<script>
export default {
  data() {
    return {
      JsonData : Json
    };
  },
  name: '',
  components : {
    SearchBar,
    ProductCard,
    CartView,
    Pagination
  }
};
</script>

<!-- <script>
export default {
  data() {
    return {
      message: JsonData,
    };
  },
};
</script> -->

<template>
    
<div class="bg-white dark:bg-gray-200">
    <div>
      <!--
        Mobile filter dialog
  
        Off-canvas filters for mobile, show/hide based on off-canvas filters state.
      -->
      <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
        <!--
          Off-canvas menu backdrop, show/hide based on off-canvas menu state.
  
          Entering: "transition-opacity ease-linear duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "transition-opacity ease-linear duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
  
      
      </div>
  
      <main class="mx-auto w-[100vw] px-4 sm:px-6 lg:px-8">
        <div class="flex items-baseline justify-between border-b border-gray-200 pb-1 pt-24 ">
            <Pagination />
  
          <div class="flex items-center pb-5">
                <SearchBar />
         
  
          </div>
        </div>
  
        <section aria-labelledby="products-heading" class="pb-24 pt-6">
  
          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 ">
            <!-- Filters -->
            <form class="hidden lg:block ">
           
                <CartView />
              
            </form>
            <!-- Product grid -->
            <div class="lg:col-span-3">
              <!-- Your content -->
              <ProductCard />
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

