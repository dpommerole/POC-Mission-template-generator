
<template>
  <div id="page">
    <b-container style="background-color: white">
      <b-row>
        <b-col>
          <div id="drop">
            <b-select v-model="selectedValidated" :options="optionsValidated" @change="updateFilters" />
          </div>
        </b-col>

        <b-col>
          <div>
            <b-select v-model="selectedNameGroup" :options="optionsNameGroup" @change="updateFilters" />
          </div>
        </b-col>

        <b-col>
          <div>
            <b-select v-model="selectedNameClient" :options="optionsNameClient" @change="updateFilters" />
          </div>
        </b-col>

        <b-col>
          <div v-if="$auth.user.roleName === 'ADM'">
            <b-select v-model="selectedName" :options="optionsName" @change="updateFilters" />
          </div>
        </b-col>
      </b-row>

      <b-row style="float: right;">
        <b-col>
          <nuxt-link to="new-mission">
            New mission
          </nuxt-link>
        </b-col>
      </b-row>

      <div id="content">
        <b-row v-if="missions.length > 0">
          <b-col v-for="mission in missions" :key="mission.id" md="auto">
            <b-card
              :title="mission.name"
              :img-src="mission.image"
              :img-alt="mission.name"
              img-top
              tag="article"
              style="max-width: 18rem; height: auto !important"
              class="w-100 mb-2"
              border-variant="dark"
            >
              <b-card-text v-show="$auth.user.roleName === 'ADM'">
                <p>{{ mission.userName }}</p>
              </b-card-text>

              <b-button variant="success" class="link-btn">
                <nuxt-link :to="{ path: 'mission', query: { id: mission.id }}">
                  Accéder à la fiche
                </nuxt-link>
              </b-button>
            </b-card>
          </b-col>
        </b-row>
        <div v-if="missions.length === 0">
          <p v-if="selectedValidated === null && selectedNameGroup === null &&
            selectedNameClient === null && selectedName === null"
          >
            You still don't have any mission.
          </p>
          <p v-if="selectedValidated !== null || selectedNameGroup !== null ||
            selectedNameClient !== null || selectedName !== null"
          >
            No mission for the current filter.
          </p>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
  import { axiosGet } from '../services/backend.service'

  export default {
    data() {
      return {
        missions: [],
        selectedValidated: null,
        optionsValidated: [
          { value: null, text: 'Select a state' },
          { value: 0, text: 'On going' },
          { value: 1, text: 'Finish' }
        ],
        selectedNameGroup: null,
        optionsNameGroup: [],
        selectedNameClient: null,
        optionsNameClient: [],
        selectedName: null,
        optionsName: [],
        nbPerPage: 10,
        lastId: 2147483647,
        nbRqt: 0
      }
    },
    async mounted() {
      this.scroll()

      const params = {
        userId: this.$auth.user.id,
        role: this.$auth.user.roleName,
        token: this.$auth.getToken('local')
      }

      this.getGallery(params)

      // fill optionNameGroup
      this.optionsNameGroup = [
        { value: null, text: 'Select a group name' }
      ]

      let responseDistinctNameGroup = await axiosGet({
        axios: this.$axios,
        url: '/api/mission/getDistinctNameGroup',
        params
      })

      const organiseDistinctNameGroup = responseDistinctNameGroup.data.nameGroups
        .map(elem => {
          return {text: elem.nameGroup, value: elem.nameGroup}
        })
        .filter(elem => elem.text)

      this.optionsNameGroup = this.optionsNameGroup.concat(organiseDistinctNameGroup)
      // END fill optionNameGroup


      // fill optionNameClient
      this.optionsNameClient = [
        { value: null, text: 'Select a client name' }
      ]

      let responseDistinctNameClient= await axiosGet({
        axios: this.$axios,
        url: '/api/mission/getDistinctNameClient',
        params
      })

      const organiseDistinctNameClient = responseDistinctNameClient.data.nameClients
        .map(elem => {
          return {text: elem.nameClient, value: elem.nameClient}
        })
        .filter(elem => elem.text)

      this.optionsNameClient = this.optionsNameClient.concat(organiseDistinctNameClient)
      // END fill optionNameClient


      // fill optionName
      if (this.$auth.user.roleName === 'ADM') {
        this.optionsName = [
          {value: null, text: 'Select a name'}
        ]

        let responseDistinctName = await axiosGet({
          axios: this.$axios,
          url: '/api/mission/getDistinctName',
          params
        })

        const organiseDistinctName = responseDistinctName.data.names
          .map(elem => {
            return {text: elem.name, value: elem.name}
          })
          .filter(elem => elem.text)

        this.optionsName = this.optionsName.concat(organiseDistinctName)
      }
      // END fill optionNameClient
    },
    methods: {
      async updateFilters() {
        const params = {
          validated: this.selectedValidated,
          nameGroup: this.selectedNameGroup,
          nameClient: this.selectedNameClient,
          name: this.selectedName,
          userId: this.$auth.user.id,
          role: this.$auth.user.roleName,
          token: this.$auth.getToken('local'),
          nbPerPage: this.nbPerPage,
          lastId: 2147483647
        }

        let gallery = await axiosGet({
          axios: this.$axios,
          url: '/api/mission/galery',
          params
        })

        if (gallery.data.mission) {
          this.nbRqt = 1

          this.missions = gallery.data.mission[0]

          if (this.missions && this.missions.length > 0) {
            this.lastId = this.missions[this.missions.length - 1].id
          } else {
            this.lastId = 2147483647
          }
        }
      },
      scroll() {
        window.onscroll = () => {

          if (this.missions.length === this.nbRqt * this.nbPerPage) {
            let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight

            if (bottomOfWindow) {

              const params = {
                userId: this.$auth.user.id,
                role: this.$auth.user.roleName,
                token: this.$auth.getToken('local'),
                nbPerPage: this.nbPerPage,
                lastId: this.lastId
              }

              this.getGallery(params)
            }
          }
        }
      },
      async getGallery(params) {
        params.nbPerPage = params.nbPerPage ? params.nbPerPage : this.nbPerPage
        params.lastId = params.lastId ? params.lastId : 2147483647

        let gallery = await axiosGet({
          axios: this.$axios,
          url: '/api/mission/galery',
          params
        })
        if (gallery.data.mission && gallery.data.mission[0].length > 0) {
          this.nbRqt++

          this.missions = this.missions.concat(gallery.data.mission[0])

          if (this.missions && this.missions.length > 0) {
            this.lastId = this.missions[this.missions.length - 1].id
          } else {
            this.lastId = 2147483647
          }
        }
      },
    }
  }
</script>

<style scoped>
    #page {
        display:flex;
        flex-direction: column;
        justify-content: center;
        margin: 1em auto;
        width: 90%;
    }
    #drop a {
        text-decoration: none;
        color: black;
    }
    #content {
        width: 100%;
        margin: 1em auto;
        display: flex;
        justify-content: space-evenly;
        flex-flow: wrap;
    }
    .link-btn a {
        color: #FFF;
    }
    .card-big {
        height: 360px;
    }
    .card-small {
        height: 320px;
    }
    .card-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }
    /* .card-image-top {
      width: 150%;
      object-fit: cover;
    } */
</style>
