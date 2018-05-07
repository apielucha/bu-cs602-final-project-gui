<template>
  <div class="card">
    <img class="card-img-top" :src="imgSrc" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ data.title }}</h5>
      <p class="card-text">{{ data.text }}</p>
      <p class="card-text"><small class="text-muted">
        {{ data.author }} - {{ date }}
      </small></p>
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
    date() {
      return new Date(this.data.timestamp).toLocaleDateString('en-US');
    },
  },
};
</script>

<style scoped>
  .card {
    width: 32%;
    margin-bottom: 10px;
  }
</style>
