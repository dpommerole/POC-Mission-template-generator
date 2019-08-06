<template>
  <div id="login">
    <div class="login--window">
      <h3>HELLO</h3>

      <b-form @submit.stop.prevent="login">
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
    //middleware: 'notAuthenticated',
    methods: {
      async login() {
        try {
          console.log('Logging in...')
          await this.$auth.loginWith('local', {
            data: {
              "email": this.$v.form.email.$model,
              "password": this.$v.form.password.$model
            }
          }).catch(e => {
            console.log('Failed Logging In')
          })
          setTimeout(() => {
            if (this.$auth.loggedIn) {
              this.$router.push('/home')
              console.log('Successfully Logging In')
            }
          }, 100)
        } catch (e) {
          console.log('Username or Password wrong')
        }
      }
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap');

  #login {
    font-family: 'Open Sans', sans-serif;
    background-color: #f1c40f;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ecf0f1' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .login--window {
    background-color: white;
    height: 400px;
    width: 350px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em;
    /* border: 1px solid black; */
    border-radius: 7px;
  }
  h3 {
    margin: 1em auto;
    color: #1abc9c;
    font-weight: 600;
  }
  input {
    width: 100%;
    height: 3em;
    margin-top: 0.5em;
    border-top: none;
    border-right: none;
    border-left: none;
    font-size: 0.8em;
  }
  input:focus {
    outline:none;
    border-color: #1abc9c;
  }
  button {
    height: 3em;
    margin-top: 2em;
    margin-bottom: 0.5em;
    border-radius: 0.25rem;
    width: 100%;
    color: white;
    background-color: #1abc9c;
    font-weight: bolder;
  }
  button:hover {
    color: white;
    background-color: #16a085;
  }
  .form-control:focus {
    border-color: #1abc9c;
  }
  a {
    font-size: 0.8em;
    text-decoration: none;
    color: #16a085;
  }
  a:hover {
    color: #1abc9c;
  }
</style>
