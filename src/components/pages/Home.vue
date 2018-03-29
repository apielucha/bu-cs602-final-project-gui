<template>
  <main class="container">
    <div class="row welcome">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ welcomeMsg }}</h5>
        </div>
      </div>
    </div>
    <div class="row justify-content-between">
      <Card v-for="item in list" :key="item.id" :data="item"/>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import Card from '@/components/_partials/Card';

export default {
  name: 'Home',
  components: { Card },
  data() {
    return {
      list: [],
      welcomeMsg: 'How are you?',
    };
  },
  created() {
    axios.get(`${process.env.API_URL}/images`)
      .then((response) => { this.list = response.data; });
  },
};
</script>

<style scoped>
  main.container {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .row.welcome { margin-bottom: 10px; }
  .row.welcome>.card { width: 100%; }
</style>
