
<template>
  <div id="page">
    <b-container style="background-color: white">
      <b-row>
        <b-col>
          <div id="drop">
            <b-select id="selectStateFilter" v-model="selectedValidated" :options="optionsValidated" @change="updateFilters" />
          </div>
        </b-col>

        <b-col>
          <div>
            <b-select id="selectGroupFilter" v-model="selectedNameGroup" :options="optionsNameGroup" @change="updateFilters" />
          </div>
        </b-col>

        <b-col>
          <div>
            <b-select id="selectClientFilter" v-model="selectedNameClient" :options="optionsNameClient" @change="updateFilters" />
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
              :img-src="mission.image ? mission.image : $imageFallback"
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
import { axiosGet } from '@/services/backend.service'
import { getFilterHome } from '@/services/homeFilter.service'
const MAX_INT = 2147483647

export default {
  data () {
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
      lastId: MAX_INT,
      nbRqt: 0,
      hasTriggeredBottomScroll: false
    }
  },
  async mounted () {
    this.scroll()

    const params = {
      userId: this.$auth.user.id,
      role: this.$auth.user.roleName,
      token: this.$auth.getToken('local')
    }

    this.getGallery(params)

    const resultFilterHome = await getFilterHome(params, this.$axios)
    this.optionsNameGroup = resultFilterHome.optionsNameGroup
    this.optionsNameClient = resultFilterHome.optionsNameClient
    this.optionsName = resultFilterHome.optionsName ? resultFilterHome.optionsName : []
  },
  methods: {
    async updateFilters () {
      const isResetGallery = true
      const params = {
        validated: this.selectedValidated,
        nameGroup: this.selectedNameGroup,
        nameClient: this.selectedNameClient,
        name: this.selectedName,
        userId: this.$auth.user.id,
        role: this.$auth.user.roleName,
        token: this.$auth.getToken('local'),
        nbPerPage: this.nbPerPage,
        lastId: MAX_INT
      }

      this.getGallery(params, isResetGallery)
    },
    scroll () {
      const isResetGallery = false

      window.onscroll = async () => {
        if (this.missions.length === this.nbRqt * this.nbPerPage) {
          console.log('scroll', document.documentElement.scrollTop + window.innerHeight)
          console.log('windows offset', document.documentElement.offsetHeight)
          let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight * 0.90

          if (bottomOfWindow && !this.hasTriggeredBottomScroll) {
            this.hasTriggeredBottomScroll = true
            const params = {

              userId: this.$auth.user.id,
              role: this.$auth.user.roleName,
              token: this.$auth.getToken('local'),
              nbPerPage: this.nbPerPage,
              lastId: this.lastId
            }
            await this.getGallery(params, isResetGallery)
          }
        }
      }
    },
    async getGallery (params, isResetGallery) {
      console.log('getGallery function called')
      params.nbPerPage = params.nbPerPage ? params.nbPerPage : this.nbPerPage
      params.lastId = params.lastId ? params.lastId : 2147483647

      let gallery = await axiosGet({
        axios: this.$axios,
        url: '/api/mission/galery',
        params
      })

      if (gallery.data.mission) {
        this.nbRqt = isResetGallery ? 1 : this.nbRqt + 1
        this.missions = isResetGallery ? gallery.data.mission[0] : this.missions.concat(gallery.data.mission[0])

        this.lastId = this.getLastIdMission()
      }
      this.hasTriggeredBottomScroll = false
    },

    getLastIdMission () {
      if (this.missions.length > 0) {
        return this.missions[this.missions.length - 1].id
      }
      return MAX_INT
    }
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
