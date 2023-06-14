
<template>
  <div id="LoginComponent">
    <div v-if="!authenticated">
      <div class="lg: justify-center lg: items-center lg:flex md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white w-[100vw]">
        <div class="max-w-md w-full space-y-8">
          <div class="text-center">
            <h2 class="mt-6 text-3xl font-bold text-gray-900">
              Welcom Back!
            </h2>
            <p class="mt-2 text-sm text-gray-500">Please sign in to your account</p>
          </div>
          <div class="flex flex-row justify-center items-center space-x-3">
           
          </div>
          <div class="flex items-center justify-center space-x-2">
            <span class="h-px w-16 bg-gray-200"></span>
            <span class="text-gray-300 font-normal">or continue with</span>
            <span class="h-px w-16 bg-gray-200"></span>
          </div>
            <input type="hidden" name="remember" value="true">
            <div class="relative">
              <div class="absolute right-3 mt-4"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
              <input
                class=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                type="email" placeholder="mail@gmail.com"  v-model="email">
            </div>
            <div class="mt-8 content-center">
              <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                Password
              </label>
              <input
                class="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                type="password" placeholder="Enter your password"  v-model="password">
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember_me" name="remember_me" type="checkbox"
                  class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded">
                <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div class="text-sm">
                <a href="#" class="text-indigo-400 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button type=""
                class="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500" @click="signin">
                Sign in
              </button>
            </div>
            <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <span>Don't have an account?</span>
              <a href="/register"
                class="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign
                up</a>
            </p>
            <!-- <p v-if="errMsg">{{ errMsg }}</p> -->
        </div>
      </div>
     </div>
    <div v-if="authenticated">
      <button @click="logout" class="myLogout">Logout</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { getAuth, onAuthStateChanged,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter } from "vue-router";


export default {
  name: "LoginBox", 

  data() {
    return {
      loggedIn: false,
      email: "",
      password: "",
       router: useRouter(),
      errMsg: "",
      auth:getAuth()
    };
  },
  mounted() {

    const ref = this;
  onAuthStateChanged(this.auth, (user) =>{
      if (user) {
        ref.loggedIn = true;
      } else {
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
signin() {
      signInWithEmailAndPassword(this.auth, this.email, this.password)
        .then((data) => {
          alert("Logged in");
          this.router.push("/");
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/invalid-email":
              this.errMsg = "Invalid Email";
              alert("Invalid Email");
              break;
            case "auth/user-not-found":
              this.errMsg = "No account with that email found";
              alert("No account with that email found");
              break;
            case "auth/wrong-password":
              this.errMsg = "Password incorrect";
              alert("Password incorrect");
              break;
            default:
              this.errMsg = "Email or password was incorrect";
              alert("Email or password was incorrect");
              break;
          }
        });
    },
    logout() {

  signOut(this.auth).then(() => {
          this.loggedIn = false;
          this.email = "";
          this.password = "";
          this.router.push("/");
        });
    }
  }
};
</script>
