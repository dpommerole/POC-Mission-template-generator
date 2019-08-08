<template>
  <div id="page" ref="content" class="toPdf">
    <div id="left--part">
      <div id="image">
        <img id="imageId" crossOrigin="Anonymous" :src="mission.image" alt="image">
      </div>
      <div id="details">
        <div id="buttons--mission">
          <button>#Mission</button>
          <button v-show="mission.category">
            #{{ mission.category }}
          </button>
        </div>
        <div id="picto" style="color: white;">
          <div class="alignText">
            <div class="round--picto">
              <img id="logoCart" style="height: 30px; width: 30px;"
                   crossOrigin="Anonymous" :src="logoCart"
              >
            </div>
            <p>{{ mission.type }}</p>
          </div>
          <div>
            <div class="round--picto">
              <img id="logoCalendar" style="height: 30px; width: 30px;"
                   crossOrigin="Anonymous" :src="logoCalendar"
              >
            </div>
            <p>{{ mission.duration }}</p>
          </div>
          <div>
            <div class="round--picto">
              <img id="logoUser" style="height: 30px; width: 30px;"
                   crossOrigin="Anonymous" :src="logoUser"
              >
            </div>
            <p>{{ mission.teamSize }}</p>
          </div>
          <div>
            <div class="round--picto">
              <img id="logoMapMarker" style="height: 30px; width: 30px;"
                   crossOrigin="Anonymous" :src="logoMapMarker"
              >
            </div>
            <p>{{ mission.location }}</p>
          </div>
        </div>
      </div>
      <div id="environnement">
        <button>#Environement</button>
      </div>
      <div id="env">
        <div v-for="environment in mission.environments" id="picto--env" :key="environment.id" style="color: white;">
          <img :id="environment.name" class="round--picto"
               crossOrigin="Anonymous" :src="environment.logo" @error="imgUrlAlt"
          >
          <p>{{ environment.name }}</p>
        </div>
      </div>
    </div>
    <div id="right--part">
      <button>
        <nuxt-link :to="{ path: 'edit-mission', query: { id: mission.id }}">
          Edit
        </nuxt-link>
      </button>
      <div id="logos">
        <div id="client--logo">
          <img :id="mission.nameGroup" crossOrigin="Anonymous" :src="mission.logoGroup" :alt="mission.nameGroup">
          <img :id="mission.nameClient" crossOrigin="Anonymous" :src="mission.logoClient" :alt="mission.nameClient">
        </div>
        <div id="atecna">
          <img :src="logoAtecna" alt="">
        </div>
      </div>
      <b-container id="text">
        <b-row>
          <b-col>
            <div id="context">
              <h2>Contexte mission</h2>
              <button id="cmd" @click="downloadWithCSS">
                generate PDF
              </button>
            </div>
            <div>
              <h4>{{ mission.webSite }}</h4>
              <p>{{ mission.context }}</p>
            </div>
          </b-col>
          <b-col>
            <div id="livrable">
              <h4>Livrable</h4>
              <p>{{ mission.livrable }}</p>
            </div>
            <div id="atecnaPlus">
              <h4>Les + Atecna</h4>
              <p>{{ mission.atecnaPlus }}</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
  const utils = require('../store/utils')

  export default {
    data() {
      return {
        mission: {},
        logoCart: this.$cartIcon,
        logoCalendar: this.$calendarIcon,
        logoUser: this.$userIcon,
        logoMapMarker: this.$mapMarkerIcon,
        logoAtecna: this.$atecnaLogo
      }
    },
    mounted() {

      console.log('params = ', this.$route.query.id)
      const params = {
        id: this.$route.query.id,
        token: this.$auth.getToken('local')
      }

      this.$axios.get('/api/mission/getOne', { params })
        .then(response => {
          this.mission = response.data.mission
        })
    },
    methods: {
      edit() {

      },
      imgUrlAlt(event) {
        event.target.src = this.$imageFallback
      },
      downloadWithCSS() {
        utils.makePDF(this.mission)
      }
    }
  }
</script>

<style>
    #page {
        display: flex;
    }
    #left--part {
        width: 30%;
        background-color: #f1c40f;
        height: 100vh;
    }
    #image img {
        width: 100%;
        object-fit: cover;
        height: 10em;
    }
    #buttons--mission {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    button {
        margin: 1em 0.3em;
        background-color: #2f3640;
        color: white;
        border-radius: 7px;
        border: none;
    }
    #picto {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-flow: wrap;
        text-align: center;
    }
    .round--picto {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #f5f6fa;
        color: black;
        margin: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #environnement {
        display: flex;
        justify-content: center;
    }
    #env {
        display: flex;
        flex-flow: wrap;
        justify-content: center;
    }
    #picto--env {
        display: flex;
        flex-direction: column !important;
        justify-content: center;
        /* flex-flow: wrap; */
    }
    #picto--env p {
        text-align: center;
    }
    #right--part {
        width: 70%;
        height: 100vh;
    }
    #logos {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 1em;
    }
    #atecna {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #atecna img{
        width: 80%;
    }
    #logos #client--logo img {
        width: 10%;
    }
    #context--left--part {
        width: 40%;
        padding-left: 2em;
    }
    #context--right--part {
        width: 40%;
        padding-left: 41%;
        justify-content: end;
        align-items: end;
    }
    #context h2 {
        padding-left: 1em;
    }
    #text {
        background-color: white;
    }
    .alignText {
        text-align: center;
    }
</style>
