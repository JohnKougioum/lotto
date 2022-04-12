<template>
  <!-- <div class="h-20 p-2 w-3/4 border-2 border-green-500 rounded">
        result
    </div> -->
  <div class="py-7 flex flex-wrap justify-center items-center">
    <v-row
      class="md:w-3/4 mx-15 border-2 border-green-500 rounded"
      justify="center"
    >
      <img @click="deleteAction" class="relative z-50 cursor-pointer" src="../assets/closeIcon.svg" alt="" />
      <v-expansion-panels class="h-1/6" accordion>
        <v-expansion-panel class="h-auto">
          <v-expansion-panel-header>
            <div class="flex flex-row justify-evenly">
              <span>Draw Numbers: {{ historyData.data.drawNumbers }}</span>
              <span class="pl-"> {{ WonOrLost }} </span>
              <span>{{ historyData.data.prizeWon }}€    </span>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="flex flex-col">
                <div class="flex flex-row justify-around">
                    <span>{{historyData.data.timestamp}}</span>
                    <span>Draw Numbers: {{historyData.data.drawNumbers}}</span>
                </div>
                <div class="flex flex-row justify-around">
                    <span>Player Bet: {{historyData.data.playerBet}}</span>

                    <span>Status: {{WonOrLost}}</span>
                    <span>Won: {{historyData.data.prizeWon}}€</span>
                </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
// import { getAuth } from "firebase/auth";
// import { getDatabase, ref, remove} from "firebase/database";
import {mapActions} from 'vuex'
export default {
  name: "HistoryResult",
  props: {
    historyData: Object,
  },
  computed: {
    WonOrLost() {
      if (this.historyData.data.prizeWon != 0) return "Won";
      else return "Lost";
    },
  },
  methods:{
      deleteAction(){
        const key = this.historyData.key
        this.deleteBetFromHistory({key})
      },
      ...mapActions(['deleteBetFromHistory'])
  }
};
</script>

<style>
</style>