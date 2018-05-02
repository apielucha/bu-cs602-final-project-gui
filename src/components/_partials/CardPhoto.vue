<template>
  <div class="card">
    <img class="card-img-top" :src="imgSrc" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ data.title }}</h5>
      <p class="card-text">{{ data.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPhoto',
  props: ['data'],
  computed: {
    imgSrc() {
      return process.env.API_URL + this.data.url;
    },
  },
};
</script>

<style scoped>
  .card {
    width: 32%;
  }
</style>
