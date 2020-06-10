<template>
  <div>
    <p>Counter : {{ $store.state.count}} </p>
    <button @click="increment">Add</button>
    <button @click="decrement">Subtract</button>
  </div>
</template>

<script>
import store from '~/store/store'

export default {
  store,
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    }
  }
}
</script>