<template>
  
    <div
  
    @click="addNumberToList(numberedBall)"
    class="relative cursor-pointer bg-white select-none items-center m-3 p-2 border-2 h-11 w-11 border-black rounded-full  hover:bg-gray-300 duration-75"
    :class="CheckBallColor ? 'bg-gray-500 text-white hover:bg-gray-500 duration-0' : ''"
  >
    <span>{{ numberedBall.number }}</span>
    <img @click.stop="deleteNumberFromList(numberedBall)" v-if="numberedBall.deletable" class="m-3 p-2 absolute -top-2/3" src="../assets/closeIcon.svg" alt="close_icon">
  </div>

  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Ball",
  data(){
    return{
      clickedBall: false
    }
  },
  props: {
    numberedBall: Object,
  },
  computed:{
    ...mapGetters(['getPickedNumbers']),
    CheckBallColor(){
      // checks if ball exist in pickedNumber and if its not picked (so the color doesnt change in the picked ball)
      let flag = this.checkBallExists(this.numberedBall);
      if (flag && flag.ballColorChange==this.numberedBall.deletable) return false
      else if(flag) return true
      else return false
    }
  },
  methods:{
      addNumberToList(pickedBall){

        //Checsks for duplicates
        let flag = this.checkBallExists(pickedBall)
        if (flag) return      

        //Checks if already 5 balls picked
        if(this.getPickedNumbers.length == 5) return

        //Adds the ball to the Array(store)
        const pickedNumbers = [{
          number: pickedBall.number,
          deletable: true,
          ballColorChange:true
        }];

        this.addPickedNumber({pickedNumbers})
      },
      deleteNumberFromList(ballToDelete){
        //Push ball to delete to vuex to delete the ball from the pickedNumbers list
        const ballToDeleteNumber = ballToDelete.number        
        this.deletePickedNumber({ballToDeleteNumber})
      },
      checkBallExists(pickedBall){
        if (this.getPickedNumbers.length != 0){

          for(var i=0;i<this.getPickedNumbers.length;i++){
            if(this.getPickedNumbers[i].number == pickedBall.number){
              return this.getPickedNumbers[i];
            }
          }
        }
      },
      ...mapActions(["addPickedNumber","deletePickedNumber"])
    }
  
};
</script>

<style></style>
