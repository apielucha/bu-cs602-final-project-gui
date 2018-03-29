<template>
  <div id="app">
    <Header v-if="loginRoute" />
    <router-view :class="{ 'navbar-fixed': loginRoute }"/>
  </div>
</template>

<script>
import Header from '@/components/_partials/Header';

export default {
  name: 'App',
  components: { Header },
  computed: {
    loginRoute() {
      return this.$route.path !== '/login';
    },
  },
};
</script>

<style scoped>
  .navbar-fixed {
    margin-top: 58px;
  }
</style>
