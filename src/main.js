import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
// import VueWebsocket from 'vue-websocket'
// import VueNativeSock from 'vue-native-websocket'
import Vuex from 'vuex'
// import {
//   SOCKET_ONOPEN,
//   SOCKET_ONCLOSE,
//   SOCKET_ONERROR,
//   SOCKET_ONMESSAGE,
//   SOCKET_RECONNECT,
//   SOCKET_RECONNECT_ERROR
// } from './mutation-types'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// const mutations = {
//   SOCKET_ONOPEN,
//   SOCKET_ONCLOSE,
//   SOCKET_ONERROR,
//   SOCKET_ONMESSAGE,
//   SOCKET_RECONNECT,
//   SOCKET_RECONNECT_ERROR
// }

Vue.use(Vuex)
Vue.use(BootstrapVue)
// Vue.use(VueNativeSock, 'ws://localhost:4040', {
//   store: store,
//   mutations: mutations,
//   protocol: 'my-protocol',
//   format: 'json',
//   reconnection: true, // (Boolean) whether to reconnect automatically (false)
//   reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
//   reconnectionDelay: 3000 // (Number) how long to initially wait before attempting a new (1000)
// })

// Vue.use(VueWebsocket)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
