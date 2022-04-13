import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/'
import { getAuth,onAuthStateChanged } from "firebase/auth";


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    alias: '/',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')

  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    // component: Home
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/Draw',
    name: 'Draw',
    // component: Draw,
    component: () => import(/* webpackChunkName: "draw" */ '../views/Draw.vue'),
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
    path: '/history',
    name: 'History',
    component: () => import(/* webpackChunkName: "history" */ '../views/History.vue'),

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
