<template>
  <div class="fixed z-0 left-0 top-0 w-full h-full bg-black bg-opacity-40">
      <div class="absolute flex flex-col top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2
       bg-white w-2/3 h-2/3 p-5 md:h-2/4">
            <div class="relative h-full w-full">
                <div class="h-2/3 flex justify-evenly flex-col">
                    <div>
                        <h1 class="md:text-2xl pt-5">Thank you for playing!</h1>
                    </div>
                    <div v-if="check_if_prize">
                        You won {{this.getFinalResults.prize}}€
                    </div>
                </div>
                <div class="h-1/3 w-full flex justify-between items-center px-10 relative">
                    <button @click="gotoHome" class="bottom-1/2 h-1/3 px-2 py-1 bg-indigo-600 rounded text-white hover:bg-indigo-700 duration-75">Go Back</button>
                    <button @click="saveHistory" class=" bottom-1/2 h-1/3 px-2 py-1 bg-green-600 rounded text-white hover:bg-green-700 duration-75">Save to History</button>
                </div>
            </div>
       </div>
  </div>
</template>

<script>
import { getDatabase, ref, push, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import {mapGetters,mapActions} from 'vuex'

export default {
    name: "TheModal",
    computed:{
        check_if_prize(){
            if(this.getFinalResults.prize) return true
            else return false
        },
        ...mapGetters(['getFinalResults']),
    },
    methods:{
        saveHistory(){
            const database = getDatabase();
            const auth = getAuth();
            const userId = auth.currentUser.uid;

            const historyRef = ref(database, 'history/' + userId + '/');
            const newHistoryRef = push(historyRef);

            set(newHistoryRef,{
                timestamp: this.getFinalResults.timestamp,
                drawNumbers: this.getFinalResults.drawNumbers,
                playerBet: this.getFinalResults.betNumbers,
                prizeWon: this.getFinalResults.prize,
            });
            this.gotoHome();
        },
        gotoHome(){
            this.emptyPickedNumber();
            this.$router.push({name:"Home"})
        },
        ...mapActions(['emptyPickedNumber'])
    }
}
</script>

<style>

</style>