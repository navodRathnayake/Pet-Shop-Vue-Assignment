<script setup>
    import ProfileData from '../components/ProfileDataView.vue'
</script>

<template>
    <div class = "profileSliderBg">
    <div class="max-w-lg mx-auto my-10 rounded-lg shadow-md p-5 flex-row ">
      <img class="w-32 h-32 rounded-full mx-auto" src="https://picsum.photos/200" alt="Profile picture">
      <div>
        <ProfileData />
      </div>
      <div>
        <!-- component -->
<button class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">Log Out</button>
      </div>
    </div>
    </div>
</template>

<style scoped>
.profileSliderBg{
    background-image: url ('../assets/slide.jpg');
}
</style>