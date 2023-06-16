<script setup>
  import ThemeModeSwitch from './ThemeModeSwitchComponent.vue'

  import {useDark, useToggle} from "@vueuse/core"
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
</script>

<template>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        
        <div v-if="!isDark" class="pr-5">
          <font-awesome-icon :icon="['fas', 'sun']" />
        </div>

        <div v-if="isDark" class="pr-5">
          <font-awesome-icon :icon="['fas', 'circle-half-stroke']" />
        </div>
       
        <ThemeModeSwitch />
        <div v-if="!authenticated">
          <font-awesome-icon :icon="['far', 'circle-user']" size = "lg"/>
          
        </div>

        <div v-if="authenticated" class="flex">
          <!-- cart -->
          <div class="ml-4 cursor-pointer flow-root lg:ml-3">
            <div @click="slideOver" class="group -m-2 flex items-center p-2">
              <svg class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{{JsonData.cart.item.length}}</span>
            </div>
          </div>
          <!-- cart -->
          <div @click="profileOver" class="flex cursor-pointer -space-x-1 overflow-hidden lg:ml-3">
            <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
          </div>
        </div>

        <div v-if="!authenticated">
          <a href="/login" class="text-sm font-semibold leading-6 text-gray-900 ml-1">Log in <span aria-hidden="true">&rarr;</span></a>
        </div>

        <div v-if="authenticated">
          <button @click="logout" class="text-sm font-semibold leading-6 text-gray-900 ml-3">Log Out <span aria-hidden="true"></span></button>
        </div>
        
        <!-- <RouterLink>Log in </RouterLink> -->
      </div>
      <!-- cart slide over -->
      <div id="slide-over-container" class="fixed inset-0 w-full h-[100vh] invisible">
        <div @click="slideOver" id="slide-over-bg" class="absolute duration-500 ease-out transition-all inset-0 w-full h-[100vh] bg-gray-900 opacity-10"></div>
        <div id="slide-over" class="absolute duration-500 ease-out transition-all w-96 h-[100vh] bg-white right-0 top-0 translate-x-full">
          <div @click="slideOver" class="w-10 h-10 cursor-pointer flex items-center justify-center absolute top-0 right-0 mt-5 mr-5">
            <font-awesome-icon :icon="['fas', 'xmark']" />
          </div>
          <div class="mt-20">
            <CartSliderView />
          </div>
        </div>
      </div>
      <!-- cart slide over -->
      <!-- profile slide over -->
      <div id="profile-over-container" class="fixed inset-0 w-full h-[100vh] invisible">
        <div @click="profileOver" id="profile-over-bg" class="absolute duration-500 ease-out transition-all inset-0 w-full h-[100vh] bg-gray-900 opacity-10"></div>
        <div id="profile-over" class="absolute duration-500 ease-out transition-all w-96 h-[100vh] bg-white right-0 top-0 translate-x-full">
          <div @click="profileOver" class="w-10 h-10 cursor-pointer flex items-center justify-center absolute top-0 right-0 mt-5 mr-5">
            <font-awesome-icon :icon="['fas', 'xmark']" />
          </div>
          <div class="mt-20">
            <ProfileView />
          </div>
        </div>
      </div>
      <!-- profile slide over -->
</template>

<script>
/* eslint-disable no-unused-vars */
import { getAuth, onAuthStateChanged,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import CartSliderView from '../components/CartView.vue'
import ProfileView from '../components/ProfileView.vue';
import Json from '../json/marketplace.json'

export default {
    name: "LoginBox",
    data() {
        return {
            loggedIn: false,
            email: "",
            password: "",
            router: useRouter(),
            errMsg: "",
            auth: getAuth(),
            JsonData : Json
        };
    },
    mounted() {
        const ref = this;
        onAuthStateChanged(this.auth, (user) => {
            if (user) {
                ref.loggedIn = true;
            }
            else {
                ref.loggedIn = false;
            }
        });
    },
    computed: {
        authenticated() {
            return this.loggedIn;
        }
    },
    methods: {
        logout() {
            alert("You Have Loged Out");
            signOut(this.auth).then(() => {
                this.loggedIn = false;
                this.email = "";
                this.password = "";
                this.router.push("/");
            });
        },
        slideOver() {
            document.getElementById("slide-over-container").classList.toggle("invisible");
            document.getElementById("slide-over-bg").classList.toggle("opacity-0");
            document.getElementById("slide-over-bg").classList.toggle("opacity-50");
            document.getElementById("slide-over").classList.toggle("translate-x-full");
        },
        profileOver() {
            document.getElementById("profile-over-container").classList.toggle("invisible");
            document.getElementById("profile-over-bg").classList.toggle("opacity-0");
            document.getElementById("profile-over-bg").classList.toggle("opacity-50");
            document.getElementById("profile-over").classList.toggle("translate-x-full");
        }
    },
    components: { ProfileView }
};
</script>