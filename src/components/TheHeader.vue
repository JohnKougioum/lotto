<template>
  <div>
    <!-- <v-app class="max-h-4 overflow-x-hidden">
      <v-progress-linear :active="checkIfLoading" :indeterminate="checkIfLoading"></v-progress-linear>
    </v-app> -->
    <nav class="p-5 bg-white shadow md:items-center md:justify-between">
      <div>
        <ul class="md:flex flex-col md:flex-row justify-end md:items-center">
          <li class="mx-4">
            <router-link
              class="text-xl hover:text-indigo-600 duration-75"
              to="/home"
              >Home</router-link
            >
          </li>
          <li class="mx-4">
            <router-link
              class="text-xl hover:text-indigo-600 duration-75"
              to="/draw"
              >Draw</router-link
            >
          </li>
          <li class="mx-4">
            <router-link
              class="text-xl hover:text-indigo-600 duration-75"
              to="/history"
              >History</router-link
            >
          </li>
          <li class="md:flex items-center mx-8">
            <svg
              class="mx-4"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"
              />
            </svg>
            <button
              @click="logout"
              class="
                text-l
                bg-gray-200
                p-1
                rounded
                hover:text-white hover:bg-gray-700
                duration-150
              "
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
    
  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import { getAuth, signOut } from "firebase/auth";
export default {
  name: "TheHeader",
  computed:{
    ...mapGetters(['getIsLoading']),
    checkIfLoading(){
      return this.getIsLoading
    }
  },
  methods: {
    async logout() {
      //Empty Picked number array from store
      this.emptyPickedNumber();
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.$router.push({name:"Login"})
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ...mapActions(["emptyPickedNumber"])
  },
};
</script>

<style></style>
