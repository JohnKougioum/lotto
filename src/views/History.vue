<template>
  <div class="md:flex h-screen flex-col items-center">
      <div class="flex justify-center flex-col md:justify-start w-full md:w-1/3 ">
        
        <div class="md:pt-14">
            <div class="">
            <HistoryResult
            v-for="(bets,index) in getBetHistory.slice().reverse()"
            :key="index"
            :index="index"
            :historyData="bets"
            />
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import HistoryResult from '../components/HistoryResult.vue'
import {mapGetters,mapActions} from 'vuex';
export default {
    name: "History",
    components: {
        HistoryResult
    },
    created(){
        this.setBetHistory()
    },
    computed:{
        ...mapGetters(['getBetHistory'])
    },
    methods:{
        ...mapActions(['setBetHistory'])
    }

}
</script>

<style>

</style>