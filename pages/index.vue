<template>
  <div id="login">
    <div class="login--window">
      <h3>HELLO</h3>

      <b-form @submit.stop.prevent="doLogin">
        <b-form-group id="loginEmailGroup">
          <b-form-input
            id="loginEmail"
            v-model="$v.form.email.$model"
            placeholder="email"
            name="loginEmail"
            type="email"
            :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
            aria-describedby="loginEmail-live-feedback"
          />

          <b-form-invalid-feedback id="loginEmail-live-feedback">
            This is a required field and must be a valid email.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="loginPasswordGroup">
          <b-form-input
            id="loginPassword"
            v-model="$v.form.password.$model"
            placeholder="password"
            type="password"
            name="loginPassword"
            :state="$v.form.password.$dirty ? !$v.form.password.$error : null"
            aria-describedby="loginPassword-live-feedback"
          />

          <b-form-invalid-feedback id="loginPassword-live-feedback">
            this is a required field.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-button type="submit" variant="primary" :disabled="$v.form.$invalid">
          Submit
        </b-button>
      </b-form>

      <nuxt-link to="signin">
        Inscription
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'
  import { login } from '@/services/login.service'

  export default {
    mixins: [validationMixin],
    data() {
      return {
        user: {},
        form: {
          email: null,
          password: null
        }
      }
    },
    validations: {
      form: {
        email: {
          required,
          email
        },
        password: {
          required
        }
      }
    },
    methods: {
      async doLogin() {
        try {
          this.$router.push(await login({
            auth: this.$auth, 
            email: this.$v.form.email.$model , 
            password: this.$v.form.password.$model}))
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>

<style scoped>
  @import "../style/login_signin.css"
</style>
