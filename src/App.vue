<template>
  <div id="app" v-bind:style="{ backgroundColor: color}">
    <pacemaker></pacemaker>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->
  </div>
</template>
<script>
import pacemaker from './views/Pacemaker'
export default {
  components: {
    'pacemaker': pacemaker
  },
  data () {
    return {
      // color: '#f4f5f7'
      color: '#1f1762'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  height: 100%;
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;
}
</style>
