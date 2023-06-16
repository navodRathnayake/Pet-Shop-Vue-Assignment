<script>
export default {
  name : 'tips',
  props : {
    title : String,
    description : String,
  }
};
</script>

<template>
    <div class="flex flex-col p-8 bg-gray-800 shadow-md hover:shodow-lg rounded-2xl">
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <div class="flex flex-col ml-3">
                    <div class="font-medium leading-none text-gray-100">{{title}}</div>
                    <p class="text-sm text-gray-500 leading-none mt-1">{{description}}</p>
                </div>
            </div>
            <!-- <button  class="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">Delete</button> -->
        </div>
    </div>
</template>