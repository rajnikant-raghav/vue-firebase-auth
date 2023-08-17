import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import Signup from './components/Signup.vue';
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/signup', component: Signup },
  { path: '/dashboard', component: Dashboard },
]
const router = createRouter({
  history: createWebHistory(),
  routes
});
const firebaseConfig = {
  apiKey: "AIzaSyC3IZ68M-zDNYVvCwhWAR4H4ftoONbQ5e8",
  authDomain: "vue-fire-auth-9766d.firebaseapp.com",
  projectId: "vue-fire-auth-9766d",
  storageBucket: "vue-fire-auth-9766d.appspot.com",
  messagingSenderId: "1063784275615",
  appId: "1:1063784275615:web:3e907b0b1de3c5ef118caa"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
 const auth = getAuth(firebaseApp);
//  app.config.globalProperties.$auth = auth;
 const app = createApp(App);
 app.use(router)

app.mount('#app')
