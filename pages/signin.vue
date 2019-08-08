<template>
  <div id="login">
    <div class="login--window">
      <h3>HELLO</h3>

      <b-form @submit.stop.prevent="signIn">
        <b-form-group id="firstNameGroup">
          <b-form-input
            id="signInFirstName"
            v-model="$v.form.firstName.$model"
            placeholder="firstName"
            name="signInFirstName"
            type="text"
            :state="$v.form.firstName.$dirty ? !$v.form.firstName.$error : null"
            aria-describedby="signInFirstName-live-feedback"
          />

          <b-form-invalid-feedback id="signInFirstName-live-feedback">
            This is a required field.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="lastNameGroup">
          <b-form-input
            id="signInLastName"
            v-model="$v.form.lastName.$model"
            placeholder="lastName"
            name="signInLastName"
            type="text"
            :state="$v.form.lastName.$dirty ? !$v.form.lastName.$error : null"
            aria-describedby="signInLastName-live-feedback"
          />

          <b-form-invalid-feedback id="signInLastName-live-feedback">
            This is a required field.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="emailGroup">
          <b-form-input
            id="signInEmail"
            v-model="$v.form.email.$model"
            placeholder="email"
            name="signInEmail"
            type="email"
            :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
            aria-describedby="signInEmail-live-feedback"
          />

          <b-form-invalid-feedback id="signInEmail-live-feedback">
            This is a required field, must be a valid email and be less than 100 characters.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="passwordGroup">
          <b-form-input
            id="signInPassword"
            v-model="$v.form.password.$model"
            placeholder="password"
            name="signInPassword"
            type="password"
            :state="$v.form.password.$dirty ? !$v.form.password.$error : null"
            aria-describedby="signInPassword-live-feedback"
          />

          <b-form-invalid-feedback id="signInPassword-live-feedback">
            This is a required field.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="passwordConfirmGroup">
          <b-form-input
            id="signInPasswordConfirm"
            v-model="$v.form.passwordConfirm.$model"
            placeholder="passwordConfirm"
            name="signInPasswordConfirm"
            type="password"
            :state="$v.form.passwordConfirm.$dirty ? !$v.form.passwordConfirm.$error : null"
            aria-describedby="signInPasswordConfirm-live-feedback"
          />

          <b-form-invalid-feedback id="signInPasswordConfirm-live-feedback">
            Passwords must be identical.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-button type="submit" variant="primary" :disabled="$v.form.$invalid">
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

  export default {
    mixins: [validationMixin],
    auth: false,
    data() {
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
      async signIn() {
        const params = {
          firstName: this.$v.form.firstName.$model,
          lastName: this.$v.form.lastName.$model,
          email: this.$v.form.email.$model,
          password: this.$v.form.password.$model
        }

        try {
          await this.$axios.post('/api/account/register', { params })
            .then(response => {
              this.user = response.data.user

              this.doLogin()
            })
        } catch {
          console.error('An error occurred.')
        }
      },
      async doLogin() {
        try {
          this.$router.push(await login({
            auth: this.$auth, 
            email: this.user.email, 
            password: this.$v.form.password.$model}))
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>

<style scoped>
  @import "@/style/login_signin.css";
</style>
