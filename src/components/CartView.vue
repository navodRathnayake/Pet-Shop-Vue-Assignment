<script>
import Json from '../json/marketplace.json'
export default {
  data() {
    return {
      JsonData : Json
    };
  },
};
</script>

<template>
  <div class ="bg-slate-300 h-[100vh]">
    <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6 ">
        <div class="flex items-start justify-between">
          
        </div>

        <div class="mt-8">
          <div class="flow-root">
            <ul role="list" class="-my-6 divide-y divide-gray-200">
              
              <div v-for="(item, index) in JsonData.cart.item" :key="index">
                <li class="flex py-6">
                  <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img v-bind:src="item.img" class="h-full w-full object-cover object-center">
                  </div>
  
                  <div class="ml-4 flex flex-1 flex-col">
                    <div>
                      <div class="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href="#">{{item.title}}</a>
                        </h3>
                        <p class="ml-4">{{item.price}}</p>
                      </div>
                      <p class="mt-1 text-sm text-gray-500">{{item.sub}}</p>
                    </div>
                    <div class="flex flex-1 items-end justify-between text-sm">
                      <p class="text-gray-500">Qty {{item.quantity}}</p>
  
                      <div class="flex">
                        <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div class="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>{{JsonData.cart.total}}</p>
        </div>
        <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        <div class="mt-6">
          <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
        </div>
        <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or
            <a href="/marketplace" class="font-medium text-indigo-600 hover:text-indigo-500">
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </p>
        </div>
      </div>
  </div>
</template>


