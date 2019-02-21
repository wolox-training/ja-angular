<template lang="pug">
  div.full-width.body
    nav-bar
    div.column.full-width.main.center
      router-view.container

</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar
  }

}
</script>

<style lang="scss" scoped>
  @import '../../scss/colors';
  .body {
    min-height: 100vh;
    background-color: $wild-sand;
  }

  .main {
    padding: 60px 0;
  }

 .container {
   max-width: 1132px;
 }
</style>
