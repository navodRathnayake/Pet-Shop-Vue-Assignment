<script setup>
import AppBar from './AppBar.vue'
import AppFooter from '../components/AppFooterComponent.vue'
</script>

<template>
  <AppBar />
    <div class="bg-contact-us dark:bg-contact-us-dark py-24 sm:py-32">
        <div class="mx-auto max-w-7xl  lg:px-8 group rounded-3xl max-h w-[90vw] px-10 py-10 bg-gray-200">
          <div class="mx-auto max-w-2xl lg:mx-0 ">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Reach Us</h2>
            <p class="mt-2 text-lg leading-8 text-gray-600">We are always available for you.</p>
          </div>
          <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-red-500 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            
            
            <article class="flex max-w-xl flex-col items-start justify-between">
              <div class="flex items-center gap-x-4 text-xs">
              </div>
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Via Social Media
                  </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. deserunt vel. Iusto corrupti dicta.</p>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4">
                <img src="https://th.bing.com/th/id/OIP.zaiIl16zqTKDuhYIxeop0wHaHa?pid=ImgDet&rs=1" alt="" class="h-10 w-10 rounded-full bg-gray-50">
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Facebook
                    </a>
                  </p>
                  <p class="text-gray-600">fb / petshopLK</p>
                </div>
              </div>

              <div class="relative mt-8 flex items-center gap-x-4">
                <img src="https://th.bing.com/th/id/OIP.XCjHItePwcZFIQe-JbZWigHaHa?pid=ImgDet&w=920&h=920&rs=1" alt="" class="h-10 w-10 rounded-full bg-gray-50">
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      twitter
                    </a>
                  </p>
                  <p class="text-gray-600">twitter / petshopLK</p>
                </div>
              </div>

              <div class="relative mt-8 flex items-center gap-x-4">
                <img src="https://th.bing.com/th/id/OIP.I6xvIti8_0iByP3arKDcHwAAAA?pid=ImgDet&rs=1" alt="" class="h-10 w-10 rounded-full bg-gray-50">
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Pinterest
                    </a>
                  </p>
                  <p class="text-gray-600">Pinterest / petshopLK</p>
                </div>
              </div>
            </article>




              <article class="flex max-w-xl flex-col items-start justify-between">
                <div class="flex items-center gap-x-4 text-xs">
                </div>
                <div class="group relative">
                  <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      On Mobile
                    </a>
                  </h3>
                  <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">We are also physically available at main city of Sri Lanka - Colombo. Reach Us ...</p>
                </div>
                <div class="relative mt-8 flex items-center gap-x-4">
                  <!-- <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-10 w-10 rounded-full bg-gray-50"> -->
                  <div class="text-sm leading-6">
                    <article class="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
                      <address class="text-gray-600">
                        <p><strong>Our Pet Shop</strong></p>
                        <p>sample@abc.com</p>
                        <p>+212-321-433-321</p>
                        <p><a href="tel:+1-555-555-1212" class="text-blue-500 hover:text-blue-700">+1 (555) 555-1212</a></p>
                        <p><a href="mailto:info@ourpetshop.com" class="text-blue-500 hover:text-blue-700">info@ourpetshop.com</a></p>
                      </address>
                    </article>
                  </div>
                </div>
              </article>




              <article class="flex max-w-xl flex-col items-start justify-between">
                <div class="flex items-center gap-x-4 text-xs">
                </div>
                <div class="group relative">
                  <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Location
                    </a>
                  </h3>
                  <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">We are also physically available at main city of Sri Lanka - Colombo. Reach Us ...</p>
                </div>
                <div class="relative mt-8 flex items-center gap-x-4">
                  <!-- <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-10 w-10 rounded-full bg-gray-50"> -->
                  <div class="text-sm leading-6">
                    <article class="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
                      <address class="text-gray-600">
                        <p><strong>Our Pet Shop</strong></p>
                        <p>1234 Main St.</p>
                        <p>Anytown, USA 12345</p>
                        <p><a href="tel:+1-555-555-1212" class="text-blue-500 hover:text-blue-700">+1 (555) 555-1212</a></p>
                        <p><a href="mailto:info@ourpetshop.com" class="text-blue-500 hover:text-blue-700">info@ourpetshop.com</a></p>
                      </address>
                    </article>
                  </div>
                </div>
              </article>
            <!-- More posts... -->
          </div>
        </div>
      </div>
</template>