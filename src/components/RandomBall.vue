<template>
  <div
  
    class="relative cursor-pointer select-none items-center m-3 p-2 border-2 h-11 w-11 border-black rounded-full  hover:bg-gray-300 duration-75"
    :class="highlight ? 'bg-yellow-300' : ''"
  >
    <span>{{ rnumber }}</span>

  </div>
</template>

<script>
export default {
    name: "RandomBall",
    props:{
      rnumber: Number,
      picked: Boolean,
      tempBallArray: Array,
    },
    computed:{
      highlight(){
        return this.checkHightlight(this.rnumber)
      },
    },
    methods:{
      checkHightlight(rnumber){
        if(this.picked== true){
            if(this.tempBallArray.some(num=>num.number==rnumber)){ 
              return true
            }
            else return false
        }},
    },
    
}
</script>

<style>

</style>