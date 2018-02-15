const online = window.navigator.onLine // 初始化应用网络连接状态

const state = {online}
const getters = {
  isOnline: state => state.online
}
const mutations = {
  setOnlineStatus (state, status) {
    state.online = status
  }
}

const actions = {}

const app = {state, getters, mutations, actions}

export default app
