<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Group Project</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/courses" class="nav-link">Classes</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <Header />
      <router-view />  <!-- the vue component will display here -->
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: "app",
  components:{
    Header,
  }
};
</script>
