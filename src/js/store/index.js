import Vue from 'vue'
import Vuex from 'vuex'
import App from 'js/store/modules/app'

Vue.use(Vuex)

const state = {}

const mutations = {}

const getters = {}

const actions = {}

const modules = {App}

const store = new Vuex.Store({state, mutations, getters, actions, modules})

export default store
