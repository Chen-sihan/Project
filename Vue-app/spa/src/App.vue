<template>
  <div id="app">
  

    <router-view></router-view>
    <FooterGuide  v-show='$route.meta.title'></FooterGuide>
  </div>
</template>

<script>

import  FooterGuide from './components/FooterGuide/FooterGuide'
export default {

  name: 'App',
  data() {
    return {
      isflag:false
    }
  },
  components:{
    FooterGuide
  }
}
</script>

<style  lang='stylus'>
#app
  width 100%
  height 100%
  background #f5f5f5
  position  relative

</style>
