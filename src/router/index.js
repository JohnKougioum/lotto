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
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/Draw',
    name: 'Draw',
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

router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    store.commit('set_isLoading') 
  }
  next()
})

router.afterEach(() => {
  store.commit('set_isLoading') 
  
})

export default router
