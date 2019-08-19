<template>
  <div id="login">
    <div class="login--window">
      <h3>HELLO</h3>

      <b-form id="formSignIn">
        <form-input
          id="signInFirstName"
          :model="$v.form.firstName"
          placeholder="firstName"
          type="text"
          message="This is a required field"
        />

        <form-input
          id="signInLastName"
          :model="$v.form.lastName"
          placeholder="lastName"
          type="text"
          message="This is a required field"
        />

        <form-input
          id="signInEmail"
          :model="$v.form.email"
          placeholder="email"
          type="email"
          message="This is a required field, must be a valid email and be less than 100 characters."
        />

        <form-input
          id="signInPassword"
          :model="$v.form.password"
          placeholder="password"
          type="password"
          message="This is a required field."
        />

        <form-input
          id="signInPasswordConfirm"
          :model="$v.form.passwordConfirm"
          placeholder="passwordConfirm"
          type="password"
          message="Passwords must be identical."
        />

        <b-button id="signInButton" variant="primary" :disabled="$v.form.$invalid" @click="signIn">
          Submit
        </b-button>
      </b-form>
      <nuxt-link to="/">
        J'ai déjà un compte
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, sameAs, maxLength } from 'vuelidate/lib/validators'
import { login } from '@/services/login.service'
import { axiosPost } from '@/services/backend.service'
import { generateToastNotification } from '@/services/toast.service'
import formInput from '@/components/formInput'

export default {
  components: {
    formInput
  },
  mixins: [validationMixin],
  auth: false,
  data () {
    return {
      user: {},
      form: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        passwordConfirm: null
      }
    }
  },
  validations: {
    form: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      email: {
        required,
        email,
        maxLength: maxLength(99)
      },
      password: {
        required
      },
      passwordConfirm: {
        required,
        sameAsPassword: sameAs('password')
      }
    }
  },
  methods: {
    async signIn () {
      const params = {
        firstName: this.$v.form.firstName.$model,
        lastName: this.$v.form.lastName.$model,
        email: this.$v.form.email.$model,
        password: this.$v.form.password.$model
      }

      try {
        const signInResponse = await axiosPost(
          {
            axios: this.$axios,
            url: '/api/account/register',
            params
          })
        this.user = signInResponse.data.user
        this.doLogin()
      } catch {
        generateToastNotification({
          toast: this.$toasted,
          message: 'An error occured with the server',
          theme: 'toasted-primary',
          position: 'bottom-center',
          duration: 5000
        })
      }
    },
    async doLogin () {
      try {
        const loggedRoute = await login({
          auth: this.$auth,
          email: this.user.email,
          password: this.$v.form.password.$model })
        this.$router.push(loggedRoute)
      } catch (e) {
        generateToastNotification({
          toast: this.$toasted,
          message: 'Log in to home has failed',
          theme: 'toasted-primary',
          position: 'bottom-center',
          duration: 5000
        })
      }
    }
  }
}
</script>

<style scoped>
  @import "@/style/login_signin.css";
</style>
