<template>
<main class="flex  items-center justify-center pb-1">
    <RouterLink to="/pethealth">
    <button class="group rounded-2xl max-h w-40 bg-yellow-500 font-bold text-white relative overflow-hidden">
        <div class="flex items-center justify-center">
            <font-awesome-icon :icon="['fas', 'lightbulb']" class="pr-3" />
        <span class="text-sm/">Pet health</span>
        </div>
        <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
        </div>
    </button>
</RouterLink>
</main>
</template>