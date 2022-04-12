<template>
  <div
    class="
      absolute
      w-full
      max-w-xs
      top-2/4
      left-2/4
      transform
      -translate-x-1/2 -translate-y-1/2
    "
  >
  <div class="md:flex md:items-center justify-center mb-6">
        <p class="text-red-500 mt-1 text-s italic">
          {{ errorMessage }}
        </p>
        <p v-if="this.getRegisterFail" class="text-red-500 mt-1 text-s italic">
          This user already exists.
        </p>
      </div>
    <form method="post" @submit.prevent="registration" class="w-full max-w-sm">
        
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="
              block
              text-gray-500
              font-bold
              md:text-right
              mb-1
              md:mb-0
              pr-4
            "
            for="inline-full-name"
          >
            Email
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="
              bg-gray-200
              appearance-none
              border-2 border-gray-200
              rounded
              w-full
              py-2
              px-4
              text-gray-700
              leading-tight
              focus:outline-none focus:bg-white focus:border-purple-500
            "
            id="email"
            type="email"
            value="Email"
            placeholder="example@gmail.com"
            v-model="email"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="
              block
              text-gray-500
              font-bold
              md:text-right
              mb-1
              md:mb-0
              pr-4
            "
            for="inline-password"
          >
            Password
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="
              bg-gray-200
              appearance-none
              border-2 border-gray-200
              rounded
              w-full
              py-2
              px-4
              text-gray-700
              leading-tight
              focus:outline-none focus:bg-white focus:border-purple-500
            "
            id="password"
            type="password"
            placeholder="******************"
            v-model="password"
            :class="{ 'border-red-500' : passwordError}"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="
              block
              text-gray-500
              font-bold
              md:text-right
              mb-1
              md:mb-0
              pr-4
            "
            for="inline-password"
          >
            Confirm Password
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="
              bg-gray-200
              appearance-none
              border-2 border-gray-200
              rounded
              w-full
              py-2
              px-4
              text-gray-700
              leading-tight
              focus:outline-none focus:bg-white focus:border-purple-500
            "
            id="password-confirm"
            type="password"
            placeholder="******************"
            v-model="passwordConfirm"
            :class="{ 'border-red-500' : passwordError}"
          />
        </div>
      </div>
      

      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            class="
              shadow
              bg-purple-500
              hover:bg-purple-400
              focus:shadow-outline focus:outline-none
              text-white
              font-bold
              py-2
              px-4
              rounded
            "
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
      <div class="md:flex mt-4 md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3"><router-link class="text-blue-500" to="/login">Aleady have an accont?</router-link></div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex';

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: "",
      errorMessage: "",
      passwordError: false,
    };
  },
  computed:{
    ...mapGetters(['getRegisterFail']),
  },
  methods: {
    async registration() {

        if(this.password.length <6){
            this.errorMessage="Password should be at least 6 characters"
            this.passwordError=true;
            return;
        }
        

        if (this.password != this.passwordConfirm){
            this.errorMessage= "Password is not the same!"
            this.passwordError=true;
            return;
        }

        this.emptyErrors();        
        
        const email=this.email;
        const password=this.password;


        this.registerUser({
            email,
            password
            });


        
    },
    emptyErrors(){
        this.errorMessage= '';
        this.passwordError= false;
    },
    ...mapActions(["registerUser"]),
  },
};
</script>

<style>
</style>