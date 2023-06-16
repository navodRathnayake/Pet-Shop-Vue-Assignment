<template>
  <div class="bg-white relative pt-40 pb-20 lg:pt-44 dark:bg-gray-900">
    
    <div class="relative xl:container m-auto px-6 md:px-12 lg:px-6">
        <h1 class="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">Jack Pet Always Here For <br class="lg:block hidden">All Your Pet's Good Health</h1>
        <div class="lg:flex">
            <div class="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                <p class="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                    DailyBot takes chat and collaboration to the next level: daily standups, team check-ins, surveys, kudos, best companion bot for your virtual watercooler, 1:1 intros, motivation tracking and more.
                </p>
                <div class="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                    <!-- <button @click="() => TogglePopup('buttonTrigger')">Open Popup</button> -->
                    
                    
                    <div aria-label="add to chat" href="/voucher" class=" bg-red-500 p-4 border bg-red border-red-200 dark:bg-gray  dark:border-red-500 rounded-full duration-300 hover:border-red-400 hover:shadow-lg hover:shadow-red-600/50 dark:hover:border-red fill-red-600">
                        <div v-if="!authenticated">
                            <div class="flex justify-center space-x-4 ">
                                <a href ="#" @click="alertMessage"><span class=" font-medium text-white">Subscribe Now</span></a>
                            </div>
                        </div>
                        <div v-if="authenticated">
                            <div class="flex justify-center space-x-4 ">
                                <a href="/voucher"><span class=" font-medium text-white">View Subscription</span></a>
                            </div>
                        </div>
                    </div>   
                     
                </div>

                <div class="dark:text-gray-300">
                </div>
                <div class="pt-12 flex gap-6 lg:gap-12 justify-between grayscale lg:w-2/3 sm: 2/3 xl:2/3 md: 2/3 ">
                    <img src="https://th.bing.com/th/id/R.4a56d115773bf4e7a08e7c28d461fe02?rik=R5DkR1sBiGtqiQ&pid=ImgRaw&r=0" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                    <img src="https://imageserver.petsbest.com/website/PetsBestLogo.png" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                    <!-- <img src="https://th.bing.com/th/id/OIP.ZHuR1w_C-DP3TRcHTP21WwHaDt?pid=ImgDet&rs=1" class="h-8 sm:h-10 w-auto lg:h-12" alt="" /> -->
                    <img src="https://drfossums.com/wp-content/uploads/2020/03/cropped-pets-logo.png" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                </div>
            </div>
            <div class="mt-12 md:mt-0 lg:absolute -right-0 lg:w-5/12 hidden md:block sm:block">
                <div class="relative w-full">
                    <div aria-hidden="true" class="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"></div>
                    <img src="https://th.bing.com/th/id/R.15ff2d9cdb2449feb06327dd24c2cd2a?rik=mrTt1v66ozZVFQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fdogs-transparent-background%2fdogs-transparent-background-13.png&ehk=QAG27185PTsl601azFzkbBxe5Z7FG21nzaOFUcRHzEM%3d&risl=&pid=ImgRaw&r=0" class="relative w-full" alt="wath illustration" loading="lazy" width="320" height="280">
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { getAuth, onAuthStateChanged,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import CartSliderView from '../components/CartView.vue'
import ProfileView from '../components/ProfileView.vue';
import Json from '../json/marketplace.json'
import Popup from '../components/Popup.vue'

export default {
    name: "LoginBox",
    setup () {
		const popupTriggers = ref({
			buttonTrigger: false,
			timedTrigger: false
		});

		const TogglePopup = (trigger) => {
			popupTriggers.value[trigger] = !popupTriggers.value[trigger]
		}

		setTimeout(() => {
			popupTriggers.value.timedTrigger = true;
		}, 3000);

		return {
			Popup,
			popupTriggers,
			TogglePopup
		}
	},
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
        alertMessage() {
            alert("You Have to Sign up for get the discount");
        },
    },
};
</script>




