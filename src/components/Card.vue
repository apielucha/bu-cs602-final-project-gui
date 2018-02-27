<template>
  <div class="card">
    <img class="card-img-top" :src="imgSrc" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ data.message }}</h5>
      <p class="card-text">
        Some quick example text to build on the card title and
        make up the bulk of the card's content.
      </p>
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
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
