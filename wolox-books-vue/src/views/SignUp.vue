<template lang="pug">
  .container.column.center.middle
    .form.column.center.middle
      img.logo(src='../assets/wolox-logo.png' alt="wolox-logo")
      h2.title books
      form.content(@submit.prevent)
        .form-item
          span.name(:class="{error: $v.firstName.$error}")
            | First name
          input.input(v-model.trim="firstName")
          span.error-label(v-if="!$v.firstName.required && $v.firstName.$dirty")
            | El campo es requerido
        .form-item
          span.name(:class="{error: $v.lastName.$error}")
            | Last name
          input.input(v-model="lastName")
          span.error-label(v-if="!$v.lastName.required && $v.lastName.$dirty")
            | El campo es requerido
        .form-item
          span.name(:class="{error: $v.email.$error}")
            | Email
          input.input(v-model="$v.email.$model")
          span.error-label(v-if="!$v.email.required && $v.email.$dirty")
            | El campo es requerido
        .form-item
          span.name(:class="{error: $v.password.$error}")
            | Password
          input.input(v-model.trim="$v.password.$model")
          span.error-label(v-if="!$v.password.required && $v.password.$dirty")
            | El campo es requerido
        button.btn.primary.full-width.m-bottom-2(@click="logInfo")
          | Sign Up
      router-link.btn.secondary.full-width.m-top-2(:to="{ name: 'signIn' }")
        | Log In
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { UserService } from '../services/userService'

const userService = new UserService()

export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  },
  methods: {
    logInfo () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        const data =
          {
            user: {
              first_name: this.firstName,
              last_name: this.lastName,
              email: this.email,
              password: this.password,
              password_confirmation: this.password,
              locale: 'en'
            }
          }
        userService.createUser(data)
          .then(response => {
            if (response.ok) {
              this.$router.push({ name: 'signIn' })
            }
          })
      }
    }
  },
  validations: {
    email: { required },
    password: { required },
    firstName: { required },
    lastName: { required }
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
