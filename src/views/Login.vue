<template>

  <div class="absolute  w-full max-w-xs top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">
    <form method="post" @submit.prevent="Login" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Email
        </label>
        <input
          class="
            shadow
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-gray-700
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          id="email"
          type="email"
          placeholder="example@gmail.com"
          v-model="email"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="
            shadow
            appearance-none
            border border-red-500
            rounded
            w-full
            py-2
            px-3
            text-gray-700
            mb-3
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          id="password"
          type="password"
          placeholder="******************"
          v-model="password"
        />
        <p class="text-red-500 text-xs italic">{{this.error}}</p>
      </div>
      <div class="flex justify-center items-center">
        <button
          class="
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
            focus:outline-none focus:shadow-outline
          "
          type="submit"
        >
          Sign In
        </button>
      </div>
      <div class="mt-4 italic items-center">
        <router-link to="/register" class="text-blue-400">Create Account</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "Login",
  data(){
    return{
      email: '',
      password: '',
      error: 'Please choose a password.'
    }
  },
  methods:{
    async Login(){
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          // Signed in           
          this.$router.push({name:"Home"})
        })
        .catch((error) => {
          const errorCode = error.code;
          const LoginErrorMessage = error.message;
          this.error="Wrong Email or Password"
          console.log(errorCode,LoginErrorMessage)
          
        });
    }
  },
};
</script>

<style></style>
