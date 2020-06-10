import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =
  new Vuex.Store({
    state() {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count += 1
      },
      decrement (state) {
        state.count = state.count > 0 ? state.count - 1 : 0
      }
    }
  })

export default store