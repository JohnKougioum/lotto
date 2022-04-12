<template>
  <div id="app">
    <TheHeader v-if="showHeader" />
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
export default {
  name: 'App',
  components:{
    TheHeader
  },
  computed:{
    showHeader(){
      if(this.$route.name == 'Login' || this.$route.name == 'Register') return false
      else return true
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>