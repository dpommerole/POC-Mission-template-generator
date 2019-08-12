<template>
  <no-ssr>
    <modal height="auto" name="edit-environment">
      <div v-if="environment">
        <div style="margin: 1rem 0 1rem 0; padding-left: 1rem;">
          <h2>
            Edit environment
          </h2>
        </div>

        <b-container style="background-color: white;">
          <b-form @submit.stop.prevent="edit">
            <b-row>
              <b-form-group id="envNameGroup" label="Name" style="width: 100%; margin: 1rem;">
                <b-form-input
                  id="editEnvName"
                  v-model="$v.form.name.$model"
                  placeholder="name"
                  name="editEnvName"
                  type="text"
                  :state="$v.form.name.$dirty ? !$v.form.name.$error : null"
                  aria-describedby="editEnvName-live-feedback"
                />

                <b-form-invalid-feedback id="editEnvName-live-feedback">
                  This is a required field.
                </b-form-invalid-feedback>
              </b-form-group>
            </b-row>

            <b-row>
              <b-form-group id="envLogoGroup" label="Logo" style="width: 100%; margin: 1rem;">
                <b-form-input
                  id="editEnvLogo"
                  v-model="$v.form.logo.$model"
                  placeholder="logo"
                  name="editEnvLogo"
                  type="text"
                  :state="$v.form.logo.$dirty ? !$v.form.logo.$error : null"
                  aria-describedby="editEnvLogo-live-feedback"
                />

                <b-form-invalid-feedback id="editEnvLogo-live-feedback">
                  This is a required field.
                </b-form-invalid-feedback>
              </b-form-group>
            </b-row>
          </b-form>
        </b-container>

        <div style="float: right; margin: 1rem 0 1rem 0; padding-right: 1rem;">
          <b-button @click="cancel">
            Cancel
          </b-button>
          <b-button variant="primary" @click="edit">
            Edit
          </b-button>
        </div>
      </div>
    </modal>
  </no-ssr>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  props: {
    environment: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      form: {
        name: this.environment.name,
        logo: this.environment.logo
      }
    }
  },
  watch: {
    environment: function (newVal, oldVal) {
      if (newVal) {
        this.form.name = newVal.name
        this.form.logo = newVal.logo
      } else {
        this.form.name = ''
        this.form.logo = ''
      }
    }
  },
  validations: {
    form: {
      name: {
        required
      },
      logo: {
        required
      }
    }
  },
  methods: {
    cancel () {
      console.log('cancel')
      this.$modal.hide('edit-environment')
    },
    edit () {
      console.log('edit')
      const params = {
        id: this.environment.id,
        name: this.$v.form.name.$model,
        logo: this.$v.form.logo.$model,
        token: this.$auth.getToken('local')
      }

      console.log('params = ', params)
      this.$axios.put('/api/environment/updateOne', params)
        .then(response => {
          this.$emit('new-environment', response.data.environment)
          this.cancel()
        }).catch(e => {
          // console.log('error catch = ', e);
        })
    }
  }
}
</script>

<style scoped>

</style>
