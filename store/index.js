import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {}
const getters = {}
const mutations = {}
const actions = {}

const stores = {

}

const modules = Object.entries(stores).reduce((_modules, [name, store]) => {
  _modules[name] = {
    namespaced: true,
    ...store,
  }
  return _modules
}, {})

export const $store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
  strict: process.env.ENVIRONMENT !== 'production',
})

