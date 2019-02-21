<template lang="pug">
  .container.column.center.middle
    .form.column.center.middle
      img.logo(src='../../src/assets/wolox-logo.png' alt="wolox-logo")
      h2.title books
      form.content(@submit.prevent)
        .form-item
          span.name First name
          input.input(v-model="firstName")
        .form-item
          span.name Last name
          input.input(v-model="lastName")
        .form-item
          span.name Email
          input.input(v-model="email")
        .form-item
          span.name Password
          input.input(v-model="password")
        button.btn.primary.full-width.m-bottom-2(@click="logInfo")
          | Sign Up
      router-link.btn.secondary.full-width.m-top-2(to="")
        | Log In
</template>

<script>
export default {
  data () {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null
    }
  },
  methods: {
    logInfo () {
      const data =
      {
        user: {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          password: this.password
        }
      }
      console.log(data)
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
