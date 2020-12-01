<template>
  <div id="app">
    Vue
    <router-view />
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from '../src/components/FooterGuide/FooterGuide'
export default {
  name: "App",
  components:{
    FooterGuide
  }
};
</script>

<style>

</style>
