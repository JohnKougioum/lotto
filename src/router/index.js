import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Draw from '../views/Draw.vue'
import History from '../views/History.vue'
import store from '../store/'
import { getAuth,onAuthStateChanged } from "firebase/auth";


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    alias: '/',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Draw',
    name: 'Draw',
    component: Draw,
    beforeEnter: (to,from,next)=>{
      const auth = getAuth();
      const user = auth.currentUser;
      if(store.getters['getDrawPhase'] == true) next();
      else{
        if (user){ 
          next({name: 'Home'})}
        else next({name:'Login'})
      }
    },
  },
  {
    path: '/History',
    name: 'History',
    component: History
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  // if (to.name == "Login" || to.name == "Register"){
  //   next();
  // }else{
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/firebase.User
  //       // const uid = user.uid;
  //       next();
  //     } else {
  //       next({name: "Login",})
  //     }
  //   });
  // }
  const auth = getAuth();
  const user = auth.currentUser;
  if (to.name == "Login" || to.name == "Register"){
    onAuthStateChanged(auth, (user)=>{
      if (user){
        next({name:'Home'})
      }else{
        next();
      }
    })
  }else{
    if (user) next()
    else next({name: "Login"})
  }
})


export default router
