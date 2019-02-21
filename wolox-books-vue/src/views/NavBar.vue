<template lang="pug">
  nav.navbar.row.middle.space-around.full-width
    div.main.row.space-between
      img.logo(src='../assets/wolox-logo.png')
      button.bold(@click="logOut") Logout
</template>

<script>
import { LocalStorageService } from '../services/localStorageService'

const localStorageService = new LocalStorageService()

export default {
  methods: {
    logOut () {
      localStorageService.removeValue(localStorageService.SESSION_TOKEN)
      this.$router.push({ name: 'signIn' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/colors';

  .navbar {
    height: 60px;
    border-top: 4px solid $celurean;
    box-shadow: 0px 10px 5px -6px $wild-sand;
  }

  .main {
    width: 1132px;
  }

  .logo {
    height: 22px;
  }

</style>
