<template>
  <div>
    <div class="md:flex flex-row md:m-20">
      <div class="md:flex justify-between">
        <div class=" p-3 md:w-1/3">
        <h1 class="pb-2 text-xl">Pick 5 numbers</h1>
          <div class="justify-center md:flex flex-wrap">
            <Ball
            :key="numberedBalls.number"
            v-for="(numberedBalls, index) in initialNumbers"
            :index="index"
            :numberedBall="numberedBalls"
          />
          </div>
        </div>
        <div class="relative md:flex md:w-1/3 flex-col">
          <h1 class="text-left pb-2 text-xl">Your numbers</h1>
          <div class="p-4 flex flex-wrap flex-col justify-evenly">
            <Ball
              :key="pickedBall.number"
              v-for="(pickedBall, index) in getPickedNumbers"
              :index="index"
              :numberedBall="pickedBall"
            />
            </div>
          <div class="absolute pl-6 -bottom-1/4 inline-flex">
            <button
              class="
                py-1
                px-4
                bg-green-500
                text-white
                hover:bg-green-600
                duration-75
                rounded-sm
                
              "
              type="submit"
              :disabled="this.getPickedNumbers.length !== 5"
              @click="submitDraw"
            >
              Bet
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions,mapGetters } from "vuex";
import Ball from "../components/Ball.vue";
export default {
  name: "Home",
  components: {
    Ball,
  },
  computed: {
    ...mapGetters(["getPickedNumbers"]),
  },
  data() {
    return {
      initialNumbers: [
        {
          number: 1,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 2,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 3,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 4,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 5,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 6,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 7,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 8,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 9,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 10,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 11,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 12,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 13,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 14,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 15,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 16,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 17,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 18,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 19,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 20,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 21,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 22,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 23,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 24,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 25,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 26,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 27,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 28,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 29,
          deletable: false,
          ballColorChange: false,
        },
        {
          number: 30,
          deletable: false,
          ballColorChange: false,
        },
      ],
    };
  },
  methods:{
    submitDraw(){
      let isDrawing = true
      this.setDrawPhase({isDrawing})
      this.$router.push({name: 'Draw'})
      
    },
    ...mapActions(['setDrawPhase'])
  }
};
</script>

<style>
</style>