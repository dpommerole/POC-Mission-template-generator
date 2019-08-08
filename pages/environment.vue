<template>
  <div style="display: flex; width: 100%">
    <no-ssr v-if="selectedEnvironment !== null">
      <modal-delete-environment :environment="selectedEnvironment" @deleted-environment="deleteEnvironment" />
      <modal-edit-environment :environment="selectedEnvironment" @new-environment="updateEnvironments" />
    </no-ssr>

    <b-container style="background-color: white; flex-flow: wrap; width: 100%; flex-flow: wrap; text-align: center;">
      <b-row v-if="environmentsNull.length > 0">
        <p>Environment with no picture.</p>
      </b-row>
      <b-row v-if="environmentsNull.length > 0">
        <b-col v-for="environment in environmentsNull" :key="environment.id" class="col-md-2 column">
          <b-dropdown class="mx-1 float-right" toggle-class="colorBDrop" variant="lightgray" right>
            <b-dropdown-item @click="openEditModal(environment)">
              Modify
            </b-dropdown-item>
            <b-dropdown-item @click="openDeleteModal(environment)">
              Delete
            </b-dropdown-item>
          </b-dropdown>
          <img style="margin: auto; display: block;" class="round--picto" crossOrigin="Anonymous" :src="environment.logo">
          <p>{{ environment.name }}</p>
        </b-col>
      </b-row>

      <b-row v-if="environmentsNoCrossOrigin.length > 0">
        <p>Environment logo who do not accept crossOrigin or broken.</p>
      </b-row>
      <b-row v-if="environmentsNoCrossOrigin.length > 0">
        <b-col v-for="environment in environmentsNoCrossOrigin" :key="environment.id" class="col-md-2 column">
          <b-dropdown class="mx-1 float-right" toggle-class="colorBDrop" variant="lightgray" right>
            <b-dropdown-item @click="openEditModal(environment)">
              Modify
            </b-dropdown-item>
            <b-dropdown-item @click="openDeleteModal(environment)">
              Delete
            </b-dropdown-item>
          </b-dropdown>
          <img style="margin: auto; display: block;" class="round--picto" crossOrigin="Anonymous" :src="environment.logo">
          <p>{{ environment.name }}</p>
        </b-col>
      </b-row>

      <b-row v-if="environments.length > 0">
        <p>Environment with no problem.</p>
      </b-row>
      <b-row v-if="environments.length > 0">
        <b-col v-for="environment in environments" :key="environment.id" class="col-md-2 column">
          <b-dropdown class="mx-1 float-right" toggle-class="colorBDrop" variant="lightgray" right>
            <b-dropdown-item @click="openEditModal(environment)">
              Modify
            </b-dropdown-item>
            <b-dropdown-item @click="openDeleteModal(environment)">
              Delete
            </b-dropdown-item>
          </b-dropdown>
          <img style="margin: auto; display: block;" class="round--picto" crossOrigin="Anonymous" :src="environment.logo" @error="addToNoCrossOrigin">
          <p>{{ environment.name }}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import modalDeleteEnvironment from '../components/modals/modalDeleteEnvironment'
  import modalEditEnvironment from '../components/modals/modalEditEnvironment'

  export default {
    components: {
      modalDeleteEnvironment,
      modalEditEnvironment
    },
    data() {
      return {
        environmentsNull: [],
        environmentsNoCrossOrigin: [],
        environments: [],
        selectedEnvironment: {
          name: '',
          logo: ''
        }
      }
    },
    mounted() {
      const params = {
        token: this.$auth.getToken('local')
      }

      this.$axios.get('/api/environment/getAll', {params})
        .then(response => {
          for (let i = 0; i < response.data.environments.length; i++) {

            if (response.data.environments[i].logo === this.$imageFallback) {
              this.environmentsNull.push(response.data.environments[i])
            } else {
              this.environments.push(response.data.environments[i])
            }
          }
        })
    },
    methods: {
      openDeleteModal(environment) {
        this.$modal.show('delete-environment', {}, {
          beforeOpenAction: this.selectedEnvironment = environment
        })
      },
      openEditModal(environment) {
        this.$modal.show('edit-environment', {}, {
          beforeOpenAction: this.selectedEnvironment = environment
        })
      },
      addToNoCrossOrigin(event) {
        const index = this.environments.findIndex(elem => elem.logo === event.target.src)
        if (index !== -1) {
          this.environmentsNoCrossOrigin.push(this.environments[index])
          this.environments.splice(index, 1)
        }
      },
      updateEnvironments(environmentEdited) {

        let index = -1
        if (this.environments.findIndex(elem => elem.id === environmentEdited.id) !== -1) {
          index = this.environments.findIndex(elem => elem.id === environmentEdited.id)
          this.environments.splice(index, 1, environmentEdited)
        } else if (this.environmentsNoCrossOrigin.findIndex(elem => elem.id === environmentEdited.id)) {
          index = this.environmentsNoCrossOrigin.findIndex(elem => elem.id === environmentEdited.id)
          this.environmentsNoCrossOrigin.splice(index, 1)
          this.environments.push(environmentEdited)
        } else {
          index = this.environmentsNull.findIndex(elem => elem.id === environmentEdited.id)
          this.environmentsNull.splice(index, 1)
          this.environments.push(environmentEdited)
        }
      },
      deleteEnvironment(environmentDeletedId) {
        let index = -1
        if (this.environments.findIndex(elem => elem.id === this.selectedEnvironment.id) !== -1) {
          index = this.environments.findIndex(elem => elem.id === this.selectedEnvironment.id)
          this.environments.splice(index, 1)
        } else if (this.environmentsNoCrossOrigin.findIndex(elem => elem.id === this.selectedEnvironment.id) !== -1) {
          index = this.environmentsNoCrossOrigin.findIndex(elem => elem.id === this.selectedEnvironment.id)
          this.environmentsNoCrossOrigin.splice(index, 1)
        } else {
          index = this.environmentsNull.findIndex(elem => elem.id === this.selectedEnvironment.id)
          this.environmentsNull.splice(index, 1)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    .btn-lightgray {
        background-color: lightgray !important;
        color: black !important;
    }
    .column {
        background-color: lightgray;
        padding: 15px 0 0 0;
        margin: 15px;

        .dropdown {

            .colorBDrop {
                padding: 0 !important;
                border: 0 !important;
            }
        }
    }
    .round--picto {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #f5f6fa;
        color: black;
        margin: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>