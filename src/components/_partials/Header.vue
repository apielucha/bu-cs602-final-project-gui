<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-info">
    <div class="container">
      <router-link class="navbar-brand mb-0 h1" to="/">{{ title }}</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ active: isUrl('/') }"
              to="/">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ active: isUrl('/profile') }"
              to="/profile">
              Profile
            </router-link>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click="logout">
              Logout
            </a>
          </li>
        </ul>

        <form class="form-inline my-2 my-lg-0">
          <input
            id="input-search"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search">
          <button class="btn btn-outline-light my-2 my-sm-0" @click.prevent="search">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Header',
  data() {
    return {
      title: 'Pinstagram',
    };
  },
  computed: {
    apiUrl() {
      return process.env.API_URL;
    },
    url() {
      return this.$route.path;
    },
  },
  methods: {
    isUrl(url) {
      return this.url === url;
    },
    logout() {
      const url = `${process.env.API_URL}/logout`;

      axios.get(url)
        .then(response => response.data)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem('sessionID', '');
            this.$router.push('/login');
          }
        });
    },
    search() {
      const name = document.getElementById('input-search').value;
      this.$emit('searched', name);
    },
  },
};
</script>

<style scoped>
</style>
