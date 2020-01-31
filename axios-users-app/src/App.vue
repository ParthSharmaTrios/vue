<template>
  <div id="app">
      <ListUsers></ListUsers>
  </div>
</template>

<script>
import ListUsers from "./components/ListUsers";
export default {
  name: 'app',
  components: {
      ListUsers
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
