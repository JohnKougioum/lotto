<template>
  <div class="md:flex flex-row md:m-20">
    <div class="flex md:w-1/3 justify-center flex-wrap">
        <RandomBall 
        v-for="(randomNumber,index) in this.randomBallsList"
        :key="index"
        :index="index"
        :rnumber="randomNumber.number"
        :picked="false"
        :tempBallArray="[]"
        />
    </div>
    <div :class="winning ? 'winbet__animation' : ''" class="opacity-0 md:flex items-center bg-yellow-300 rounded text-lg h-20 justify-center md:w-1/3">!!! Winning Bet !!!</div>
    <div class="flex flex-col md:w-1/3 justify-center flex-wrap">
        <h1 class="text-lg pb-4">Your Bet!</h1>
        <div class="flex md:mb-10 justify-center flex-wrap">
            <RandomBall
            v-for="(pickedNumber,index) in this.getPickedNumbers"
            :key="index"
            :index="index"
            :rnumber="pickedNumber.number"
            :picked="true"
            :tempBallArray="randomBallsList"
            />
        </div>
        <div class="text-xl">You have won: {{winninePrize}}€</div>
    </div>
    <transition name="modalGrow">
        <TheModal v-if="!this.getDrawPhase" />
    </transition>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import RandomBall from '../components/RandomBall.vue'
import TheModal from '../components/TheModal.vue'
export default {
    name: "Draw",
    components:{
        RandomBall,
        TheModal
    },
    data(){
        return{
            randomBallsList: [],
            highlighted__prop: false,
            tempBetCount:0,
            winningPrize:0,
        }
    },
    created(){
        setTimeout(()=>{this.drawNumbers()},3000);
    },
    computed:{
        ...mapGetters(['getDrawPhase','getPickedNumbers','getBetCount']),
        winning(){
            if (this.getBetCount >= 3){
                 return true
            }
            else return false
        },
        winninePrize(){
            return this.calculatePrize()
        }
    },
    beforeRouteLeave:function (to,from,next){
      if (this.getDrawPhase==false) next()
      else return false
    },
    methods:{
        drawNumbers(){
            let iniNum = Math.floor(Math.random() *30) +1
            
            this.randomBallsList.push({
                number: iniNum,
                highlighted: false,
            })
            
            this.checkIncrBetCount(iniNum)
            let i =0;
            var interval = setInterval(()=>{
                i++
                

                let num = Math.floor(Math.random() *30) +1
                while(this.randomBallsList.some(listNum => listNum.number == num)){
                    num = Math.floor(Math.random() *30) +1
                }

                this.checkIncrBetCount(num)

                this.randomBallsList.push({
                    number: num,
                    highlighted: false,
                })
                
                if (i==4){
                  this.saveHistory();
                  setTimeout(()=>{
                        let isDrawing = false
                        this.setDrawPhase({isDrawing})
                    }, 1100)
                  clearInterval(interval)  
                } 
            },4000)
            
        },
        checkIncrBetCount(rnumber){
            if(this.getPickedNumbers.some(num=>num.number==rnumber)){ 
                this.tempBetCount++
            }
            let betCount = this.tempBetCount
              this.setBetCount({betCount})
              
        },
        calculatePrize(){
            let prize;
            switch(this.getBetCount){
                case 3:
                    prize = 5
                    break;
                case 4:
                    prize = 10
                    break
                case 5:
                    prize = 20
                    break
                default:
                    prize = 0
            }
            return prize
        },
        saveHistory(){
            const tempRandom = []
            const tempBet = []
            this.randomBallsList.forEach(element => {
                tempRandom.push(element.number)
            });

            this.getPickedNumbers.forEach(element => {
                tempBet.push(element.number)
            })

            let tempPrize = this.calculatePrize()

            const current = new Date();
            const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
            const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
            const timestamp = date +' '+ time;


            const results = {
                timestamp: timestamp,
                drawNumbers: tempRandom,
                betNumbers: tempBet,
                prize: tempPrize
            }
            
            this.setFinalResults({results})
        },
        ...mapActions(['setBetCount','setFinalResults','setDrawPhase'])

        
    }
}
</script>

<style scoped>
.winbet__animation{
    opacity: 1;
    animation: grow .25s;
}
@keyframes grow {
    0%{
        transform: scale(0);
    }
    45%{
        transform: scale(0.2);
    }
    60%{
        transform: scale(0.3);
    }
    100%{
        transform: scale(1);
    }
}

.modalGrow-enter-active, .modalGrow-leave-active {
  transition: opacity .25s;
}
.modalGrow-enter, .modalGrow-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>