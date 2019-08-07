<template>
  <div>
    <b-container style="background-color: white">
      <b-form>
        <b-row>
          <b-col>
            <b-form-group id="nameGroup">
              <b-form-input
                id="newMissionName"
                v-model="$v.form.name.$model"
                placeholder="name"
                name="newMissionName"
                type="text"
                :state="$v.form.name.$dirty ? !$v.form.name.$error : null"
                aria-describedby="newMissionName-live-feedback"
              />

              <b-form-invalid-feedback id="newMissionName-live-feedback" />
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group id="imageGroup">
              <b-form-input
                id="newMissionImage"
                v-model="$v.form.image.$model"
                placeholder="image"
                name="newMissionImage"
                type="url"
                :state="$v.form.image.$dirty ? !$v.form.image.$error : null"
                aria-describedby="newMissionImage-live-feedback"
              />

              <b-form-invalid-feedback id="newMissionImage-live-feedback">
                Must be a valid url.
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group id="logoGroupGroup">
              <b-form-input
                id="newMissionLogoGroup"
                v-model="$v.form.logoGroup.$model"
                placeholder="logoGroup"
                name="newMissionLogoGroup"
                type="url"
                :state="$v.form.logoGroup.$dirty ? !$v.form.logoGroup.$error : null"
                aria-describedby="newMissionLogoGroup-live-feedback"
              />

              <b-form-invalid-feedback id="newMissionLogoGroup-live-feedback">
                Must be a valid url.
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group id="logoClientGroup">
              <b-form-input
                id="newMissionLogoClient"
                v-model="$v.form.logoClient.$model"
                placeholder="logoClient"
                name="newMissionLogoClient"
                type="url"
                :state="$v.form.logoClient.$dirty ? !$v.form.logoClient.$error : null"
                aria-describedby="newMissionLogoClient-live-feedback"
              />

              <b-form-invalid-feedback id="newMissionLogoClient-live-feedback">
                Must be a valid url.
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group id="nameGroupGroup">
              <b-form-input
                id="newMissionNameGroup"
                v-model="$v.form.nameGroup.$model"
                placeholder="nameGroup"
                name="newMissionNameGroup"
                type="text"
                :state="$v.form.nameGroup.$dirty ? !$v.form.nameGroup.$error : null"
                aria-describedby="newMissionNameGroup-live-feedback"
              />

              <b-form-invalid-feedback id="newMissionNameGroup-live-feedback" />
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group id="nameClientGroup">
              <b-form-input
                id="newMissionNameClient"
                v-model="$v.form.nameClient.$model"
                placeholder="nameClient"
                name="newMissionNameClient"
                type="text"
                :state="$v.form.nameClient.$dirty ? !$v.form.nameClient.$error : null"
                aria-describedby="newMissionNameClient-live-feedback"
              />

              <b-form-invalid-feedback id="newMissionNameClient-live-feedback" />
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group id="webSiteGroup">
              <b-form-input
                id="newMissionWebSite"
                v-model="$v.form.webSite.$model"
                placeholder="webSite"
                name="newMissionWebSite"
                type="text"
                :state="$v.form.webSite.$dirty ? !$v.form.webSite.$error : null"
                aria-describedby="newMissionWebSite-live-feedback"
              />

              <b-form-invalid-feedback id="newMissionWebSite-live-feedback" />
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group id="contextGroup">
              <b-form-input
                id="newMissionContext"
                v-model="$v.form.context.$model"
                placeholder="context"
                name="newMissionContext"
                type="text"
                :state="$v.form.context.$dirty ? !$v.form.context.$error : null"
                aria-describedby="newMissionContext-live-feedback"
              />

              <b-form-invalid-feedback id="newMissionContext-live-feedback" />
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group id="livrableGroup">
              <b-form-input
                id="newMissionLivrable"
                v-model="$v.form.livrable.$model"
                placeholder="livrable"
                name="newMissionLivrable"
                type="text"
                :state="$v.form.livrable.$dirty ? !$v.form.livrable.$error : null"
                aria-describedby="newMissionLivrable-live-feedback"
              />

              <b-form-invalid-feedback id="newMissionLivrable-live-feedback" />
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group id="atecnaPlusGroup">
              <b-form-input
                id="newMissionAtecnaPlus"
                v-model="$v.form.atecnaPlus.$model"
                placeholder="atecnaPlus"
                name="newMissionAtecnaPlus"
                type="text"
                :state="$v.form.atecnaPlus.$dirty ? !$v.form.atecnaPlus.$error : null"
                aria-describedby="newMissionAtecnaPlus-live-feedback"
              />

              <b-form-invalid-feedback id="newMissionAtecnaPlus-live-feedback" />
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group id="categoryGroup">
              <b-form-input
                id="newMissionCategory"
                v-model="$v.form.category.$model"
                placeholder="category"
                name="newMissionCategory"
                type="text"
                :state="$v.form.category.$dirty ? !$v.form.category.$error : null"
                aria-describedby="newMissionCategory-live-feedback"
              />

              <b-form-invalid-feedback id="newMissionCategory-live-feedback" />
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group id="typeGroup">
              <b-form-input
                id="newMissionType"
                v-model="$v.form.type.$model"
                placeholder="type"
                name="newMissionType"
                type="text"
                :state="$v.form.type.$dirty ? !$v.form.type.$error : null"
                aria-describedby="newMissionType-live-feedback"
              />

              <b-form-invalid-feedback id="newMissionType-live-feedback" />
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group id="durationGroup">
              <b-form-input
                id="newMissionDuration"
                v-model="$v.form.duration.$model"
                placeholder="duration"
                name="newMissionDuration"
                type="text"
                :state="$v.form.duration.$dirty ? !$v.form.duration.$error : null"
                aria-describedby="newMissionDuration-live-feedback"
              />

              <b-form-invalid-feedback id="newMissionDuration-live-feedback" />
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group id="TeamSizeGroup">
              <b-form-input
                id="newMissionTeamSize"
                v-model="$v.form.teamSize.$model"
                placeholder="teamSize"
                name="newMissionTeamSize"
                type="number"
                :state="$v.form.teamSize.$dirty ? !$v.form.teamSize.$error : null"
                aria-describedby="newMissionTeamSize-live-feedback"
              />

              <b-form-invalid-feedback id="newMissionTeamSize-live-feedback" />
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group id="locationGroup">
              <b-form-input
                id="newMissionLocation"
                v-model="$v.form.location.$model"
                placeholder="location"
                name="newMissionLocation"
                type="text"
                :state="$v.form.location.$dirty ? !$v.form.location.$error : null"
                aria-describedby="newMissionLocation-live-feedback"
              />

              <b-form-invalid-feedback id="newMissionLocation-live-feedback" />
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <v-select v-model="list"
                      label="name"
                      taggable
                      multiple
                      :options="environments"
                      @input="addToDrop"
            />
          </b-col>

          <b-col>
            <draggable
              tag="transition-group"
              :component-data="componentData"
              :list="list"
              class="list-group"
              draggable=".item"
              :animation="100"
              @start="dragging = true"
              @end="dragging = false"
            >
              <div
                v-for="element in list"
                :key="element.name"
                class="list-group-item item"
              >
                <b-row style="align-items: center">
                  <b-col style="display: flex; align-content: center; align-items: center;">
                    <img class="round--picto"
                         :src="element.logo"
                    >
                    <p>{{ element.name }}</p>
                  </b-col>
                </b-row>
              </div>
            </draggable>
          </b-col>
        </b-row>

        <b-button variant="primary" :disabled="$v.form.$invalid" @click="createMission">
          Submit
        </b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { url } from 'vuelidate/lib/validators'
  import draggable from 'vuedraggable'
  import 'vue-select/dist/vue-select.css'

  let id = 1

  export default {
    components: {
      draggable
    },
    mixins: [validationMixin],
    data() {
      return {
        form: {
          name: null,
          image: null,
          logoGroup: null,
          logoClient: null,
          nameGroup: null,
          nameClient: null,
          webSite: null,
          context: null,
          livrable: null,
          atecnaPlus: null,
          category: null,
          type: null,
          duration: null,
          teamSize: null,
          location: null,
          environments: []
        },
        environments: [],
        list: [],
        selected: null,
        dragging: true,
        componentData: {
          props: {
            type: "transition",
            name: "flip-list"
          }
        }
      }
    },
    validations: {
      form: {
        name: {

        },
        image: {
          url
        },
        logoGroup: {
          url
        },
        logoClient: {
          url
        },
        nameGroup: {

        },
        nameClient: {

        },
        webSite: {

        },
        context: {

        },
        livrable: {

        },
        atecnaPlus: {

        },
        category: {

        },
        type: {

        },
        duration: {

        },
        teamSize: {

        },
        location: {

        },
        environments: {

        }
      }
    },
    mounted() {
      const params = {
        token: this.$auth.getToken('local')
      }

      this.$axios.get('/api/environment/getAll', { params })
        .then(response => {
          console.log('response = ', response.data.environments)
          this.environments = response.data.environments
        })
    },
    methods: {
      addToDrop: function(param) {
        if (param.length > 0) {
          if (this.list.filter(c => c.name === param[param.length - 1].name).length === 0) {
            this.list.push(param[param.length - 1])
          }
        }
      },
      async createMission() {
        const params = {
          name: this.$v.form.name.$model,
          image: this.$v.form.image.$model,
          logoGroup: this.$v.form.logoGroup.$model,
          logoClient: this.$v.form.logoClient.$model,
          nameGroup: this.$v.form.nameGroup.$model,
          nameClient: this.$v.form.nameClient.$model,
          webSite: this.$v.form.webSite.$model,
          context: this.$v.form.context.$model,
          livrable: this.$v.form.livrable.$model,
          atecnaPlus: this.$v.form.atecnaPlus.$model,
          category: this.$v.form.category.$model,
          type: this.$v.form.type.$model,
          duration: this.$v.form.duration.$model,
          teamSize: this.$v.form.teamSize.$model,
          location: this.$v.form.location.$model,
          environments: this.list,
          userId: this.$auth.user.id,
          token: this.$auth.getToken('local')
        }

        console.log('params = ', params)

        try {
          await this.$axios.post('/api/mission/createOne', params)
            .then(response => {
              console.log('response = ', response)
              console.log('response = ', response.data.mission)
              this.$router.push({ path: '/mission', query: { id: response.data.mission.missionId } })
            })
        } catch {
          console.log('An error occurred.')
        }
      }
    }
  }
</script>

<style scoped>
    .flip-list-move {
        transition: transform 0.5s;
    }
    .no-move {
        transition: transform 0s;
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