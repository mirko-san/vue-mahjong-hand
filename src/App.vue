<template>
  <vue-mahjong-hand msg="m1,p1,s1,E,S,W,N,P,F,C" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VueMahjongHand from "./components/VueMahjongHand.vue";

export default defineComponent({
  name: "App",
  components: {
    VueMahjongHand
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
