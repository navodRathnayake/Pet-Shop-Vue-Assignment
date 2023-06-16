<script>
import Json from '../json/user.json'
export default {
  data() {
    return {
      JsonData : Json
    };
  },
};
</script>

<template>
   <div class="bg-gray-200 font-sans h-screen w-full flex flex-row justify-center items-center">
      <div class="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
         <img class="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src="https://avatars.githubusercontent.com/u/67946056?v=4" alt="">
         <div class="text-center mt-2 text-3xl font-medium">{{JsonData.user.name}}</div>
         <div class="text-center mt-2 font-light text-sm">{{JsonData.user.tp}}</div>
         <div class="text-center mt-2 font-light text-sm">{{JsonData.user.card}}</div>
         <div class="text-center font-normal text-lg">Top {{JsonData.user.rank}}</div>
         <div class="px-6 text-center mt-2 font-light text-sm">
         </div>
         <hr class="mt-8">
         <div class="flex p-4">
         <div class="w-1/2 text-center">
             <a href="#">Log Out</a>
         </div>
         <div class="w-0 border border-gray-300">
            
         </div>
         <div class="w-1/2 text-center">
            <a href="#">Update Profile</a>
         </div>
         </div>
      </div>
   </div>
</template>