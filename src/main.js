import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBone, faBowlFood, faCircleHalfStroke, faDog, faLightbulb, faMoon, faPrescriptionBottleMedical, faSun, faUser, faUserSecret, faXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faUser, faLightbulb, faCircleUser, faXmark, faBowlFood, faPrescriptionBottleMedical, faDog, faSun, faMoon, faCircleHalfStroke)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_hmvHYhvDasrey0KtLa7IFShtBRVkeZA",
  authDomain: "web-assignment-1-2e775.firebaseapp.com",
  projectId: "web-assignment-1-2e775",
  storageBucket: "web-assignment-1-2e775.appspot.com",
  messagingSenderId: "432899051928",
  appId: "1:432899051928:web:02f994fa5d7818806f1bed"
};

// Initialize Firebase


const app = createApp(App)

const firebase = initializeApp(firebaseConfig);

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
