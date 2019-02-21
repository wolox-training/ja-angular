<template lang="pug">
  .container.column.center.middle
    .form.column.center.middle
      img.logo(src='../assets/wolox-logo.png' alt="wolox-logo")
      h2.title books
      form.content
        .form-item
          span.name {{ $t("signIn.email")}}
          input.input(v-model="email")
        .form-item
          span.name {{ $t("signIn.password")}}
          input.input(v-model="password")
        button.btn.primary.full-width.m-bottom-2(@click="signIn") Log In
      router-link.btn.secondary.full-width.m-top-2(:to="{ name: 'signUp' }") Sign Up
</template>

<script>
import { UserService } from '../services/userService'
import { LocalStorageService } from '../services/localStorageService'

const userService = new UserService()
const localStorageService = new LocalStorageService()

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {

    signIn () {
      userService.signIn(this.email, this.password)
        .then(response => {
          if (response.ok) {
            localStorageService.setValue(localStorageService.SESSION_TOKEN, response.data.access_token)
            this.$router.push({ name: 'home' })
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/colors';

  .container {
    min-height: 100vh;
  }

  .form {
    width: 100%;
    max-width: 370px;
    background-color: $wild-sand;
    padding: 20px;
    border-top: 4px solid $celurean;
  }

  .logo {
    width: 100%;
    margin-bottom: 10px;
  }

  .title {
    font-size: 15px;
    letter-spacing: 4px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 50px;
  }

  .content {
    width: 100%;
    border-bottom: 2px solid $alto;
  }

</style>
