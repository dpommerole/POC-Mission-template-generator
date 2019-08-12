<template>
  <div id="login">
    <div class="login--window">
      <h3>HELLO</h3>

      <b-form id="formLogin">
        <form-input 
        id="loginEmail"
        :model="$v.form.email"
        placeholder="email"
        type="email"
        message="This is a required field and must be a valid email."
        ></form-input>
        
        <form-input 
        id="loginPassword"
        :model="$v.form.password"
        placeholder="password"
        type="password"
        message="This is a required field."
        ></form-input>

        <b-button id="loginButton" variant="primary" @click="doLogin">
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
  import { generateToastNotification } from '@/services/toast.service'
  import formInput from "@/components/formInput";

  export default {
    components: {
      formInput
    },
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
          const loggedRoute = await login({
            auth: this.$auth,
            email: this.$v.form.email.$model ,
            password: this.$v.form.password.$model})
          this.$router.push(loggedRoute)
        } catch (e) {
          generateToastNotification({
            toast: this.$toasted,
            message: 'Bad email and password combinaison',
            theme: 'toasted-primary',
            position: 'bottom-center',
            duration : 5000,
          })
        }
      }
    }
  }
</script>

<style scoped>
  @import "@/style/login_signin.css";
</style>
