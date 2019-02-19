<template lang="pug">
  div.container.column.center.middle
    div.form.column.center.middle
      img.logo(src='../assets/wolox-logo.png')
      h2.title books
      form.content
        div.form-item
          span.name Email
          input.input(v-model="email")
        div.form-item
          span.name Password
          input.input(v-model="password")
        button.btn.primary.full-width.m-bottom-2(@click="signIn") Log In
      button.btn.secondary.full-width.m-top-2(@click="goToSignUp") Sign Up
</template>

<script>
import { UserService } from '../services/userService'

const userService = new UserService()

export default {
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  methods: {

    signIn () {
      userService.signIn(this.email, this.password)
        .then(response => console.log(response.data.access_token))
    },

    goToSignUp () {
      this.$router.push({ name: 'signUp' })
    }

  }
}
</script>

<style lang="scss" scoped>
@import '../scss/colors.scss';

  .container {
    min-height: 100vh;
  }

  .form {
    width: 370px;
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
