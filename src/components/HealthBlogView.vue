<template>
<div class="py-16 bg-slate-300 dark:bg-slate-400">  
    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="mb-12 space-y-2 text-center">
          <span class="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">Blog</span>
          <h2 class="text-2xl text-cyan-900 font-bold md:text-4xl">Sharing is Caring</h2>
          <p class="lg:w-6/12 lg:mx-auto">Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia aliquid explicabo? Excepturi, voluptate?</p>
        </div>
  
        <div class="grid gap-12 lg:grid-cols-2">
          <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
            <img src="https://th.bing.com/th/id/R.d10c8e4877465250ff6bf80ef1451834?rik=ZN%2f6FJNZErAJ6w&pid=ImgRaw&r=0" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl">
            <div class="sm:w-7/12 pl-0 p-5">
              <div class="space-y-2">
                <div class="space-y-4">
                  <h4 class="text-2xl font-semibold text-cyan-900">{{title1}}</h4>
                  <p class="text-gray-600">{{body1}}</p>
                </div>
                <a href="www.tailus.io" class="block w-max text-cyan-600">Read more</a>
              </div>
            </div>
          </div>
          <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
            <img src="https://th.bing.com/th/id/OIP.R_dB04GKZt2Lxu94-dilVgAAAA?pid=ImgDet&rs=1" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl">
            <div class="sm:w-7/12 pl-0 p-5">
              <div class="space-y-2">
                <div class="space-y-4">
                  <h4 class="text-2xl font-semibold text-cyan-900">{{title2}}</h4>
                  <p class="text-gray-600">{{body2}}</p>
                </div>
                <a href="www.tailus.io" class="block w-max text-cyan-600">Read more</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'tips',
  props : {
    title1 : String,
    title2 : String,
    body1 : String,
    body2 : String,
  }
};
</script>

