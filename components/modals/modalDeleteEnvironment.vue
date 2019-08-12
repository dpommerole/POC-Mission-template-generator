<template>
  <modal name="delete-environment" height="auto" :scrollable="true">
    <div v-if="environment">
      <div style="margin: 1rem 0 1rem 0; padding-left: 1rem;">
        <h2>
          Edit environment
        </h2>
      </div>

      <b-container style="background-color: white;">
        <b-row>
          <b-col>
            <p>Do you really want to delete {{ environment.name }} ?</p>
          </b-col>
        </b-row>

        <b-row>
          <b-col v-if="missions.length > 0" cols="12" role="tablist">
            <b-row style="float: right;">
              <b-col cols="12">
                <b-button style="margin: 0 2rem 1rem 0;" @click="removeFromAllMission">
                  Remove from all mission
                </b-button>
              </b-col>
            </b-row>

            <b-row style="width: 100%">
              <b-col cols="12">
                <b-card v-for="(mission, index) in missions" :key="mission.id" no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button v-b-toggle="'accordion-' + index" block href="#" variant="info">
                      name: {{ mission.name ? mission.name : 'name not fill' }}
                    </b-button>
                  </b-card-header>
                  <b-collapse :id="'accordion-' + index" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <ul>
                        <li>Validated: {{ mission.validated ? 'yes' : 'no' }}</li>
                        <li>Group name: {{ mission.nameGroup ? mission.nameGroup : 'Group name not fill' }}</li>
                        <li>Client name: {{ mission.nameClient ? mission.nameClient : 'Client name not fill' }}</li>
                      </ul>

                      <b-button style="float: right; margin: 0 0 1rem 0;" @click="removeFromOneMission(index)">
                        Remove
                      </b-button>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>

      <div style="float: right; margin: 1rem 0 1rem 0; padding-right: 1rem;">
        <b-button @click="cancel">
          Cancel
        </b-button>
        <b-button variant="danger" @click="deleteEnv">
          Delete
        </b-button>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  props: {
    environment: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      missions: []
    }
  },
  watch: {
    environment: function (newVal, oldVal) {
      this.missions = []
    }
  },
  methods: {
    removeFromAllMission () {
      console.log('coucou2')
      const params = {
        token: this.$auth.getToken('local'),
        environmentId: this.environment.id
      }

      this.$axios.delete('/api/environment/deleteAllAttachMission', { params })
        .then(response => {
          console.log('remove from all successfuly')
          this.deleteEnv()
        })
    },
    removeFromOneMission (index) {
      const params = {
        token: this.$auth.getToken('local'),
        missionId: this.missions[index].id,
        environmentId: this.environment.id
      }
      this.$axios.delete('/api/environment/deleteOneAttachMission', { params })
        .then(response => {
          this.missions.splice(index, 1)
        })
    },
    cancel () {
      this.$modal.hide('delete-environment')
    },
    deleteEnv () {
      const params = {
        id: this.environment.id,
        token: this.$auth.getToken('local')
      }
      this.$axios.delete('/api/environment/deleteOne', { params })
        .then(response => {
          if (response.data.code === 400) {
            this.$axios.get('/api/environment/getAttachMission', { params })
              .then(responseAttach => {
                console.log('responseAttach = ', responseAttach)
                this.missions = responseAttach.data.missions
              })
          } else {
            this.$emit('deleted-environment', response.data.environment.id)
            this.cancel()
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
