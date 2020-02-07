<template>
  <div id="app">

      <nav class="navbar navbar-default">
          <div class="container-fluid">
              <div class="navbar-header">
                  <a class="navbar-brand" href="#">WebSiteName</a>
              </div>
              <ul class="nav navbar-nav">
                  <li class="active"><a href="/#/">Home</a></li>
                  <li><a href="/#/create">Create</a></li>
                  <li><router-link to="/">List of Users</router-link> </li>
                  <li><router-link to="/create">Add new user</router-link> </li>

              </ul>
          </div>
      </nav>

     <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>

<style>
#app {

  color: #2c3e50;
  margin-top: 60px;
}
</style>
