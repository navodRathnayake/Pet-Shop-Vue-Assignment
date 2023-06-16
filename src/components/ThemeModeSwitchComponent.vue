<template>
    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in lg:mr-2">
        <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer " v-on:click="toggleDark()"/>
        <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-700 cursor-pointer"></label>
    </div>

</template>

<style>
.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: #68D391;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color: #68D391;
}
</style>

<script setup>
import {useDark, useToggle} from "@vueuse/core"
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>