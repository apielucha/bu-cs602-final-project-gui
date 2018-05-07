<template>
  <div id="app">
    <Header v-if="loginRoute" @searched="searched" />
    <router-view :searchString="searchString" :class="{ 'navbar-fixed': loginRoute }"/>
  </div>
</template>

<script>
import Header from '@/components/_partials/Header';

export default {
  name: 'App',
  components: { Header },
  data() {
    return {
      searchString: '',
    };
  },
  computed: {
    loginRoute() {
      return this.$route.path !== '/login';
    },
  },
  methods: {
    searched(name) {
      this.searchString = name;
    },
  },
};
</script>

<style scoped>
  .navbar-fixed {
    margin-top: 58px;
  }
</style>
