<template>
  <div class="md:flex h-screen flex-col items-center">
    <TheLoader v-if="this.getContentLoading" />
    <div class="flex justify-center flex-col md:justify-start w-full md:w-1/3">
      <div class="md:pt-14">
        <div class="">
          <HistoryResult
            v-for="(bets, index) in getBetHistory.slice().reverse()"
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
import HistoryResult from "../components/HistoryResult.vue";
import TheLoader from "../components/TheLoader.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "History",
  components: {
    HistoryResult,
    TheLoader,
  },
  created() {
    const flag = true;
    this.$store.commit("set_Content_Loading", flag);
    this.setBetHistory();
  },
  computed: {
    ...mapGetters(["getBetHistory", "getContentLoading"]),
  },
  methods: {
    ...mapActions(["setBetHistory"]),
  },
};
</script>

<style>
</style>