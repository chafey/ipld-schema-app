<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
export default {
  name: 'App',
  components: {
    Home,
  }
}
</script>

<style>
html, body {
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app > div {
  height: 100%;
  display: flex;
  flex-direction: column;
}
pre {
  overflow: auto;
}
</style>
