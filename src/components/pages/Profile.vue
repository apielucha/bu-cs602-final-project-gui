<template lang="html">
  <main class="container">
    <div class="row welcome">
      <div class="card">
        <div class="card-body text-center">
          <a data-toggle="modal" data-target="#modal-add">
            Add photos to your collection
          </a>
          <ModalAddPhoto id="modal-add" @uploaded="uploadedPhoto" />
        </div>
      </div>
    </div>
    <div class="row justify-content-between">
      <CardPhoto v-for="item in photos" :key="item.id" :data="item"/>
      <div class="phantom"></div>
      <div class="phantom"></div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import qs from 'querystring';
import CardPhoto from '@/components/_partials/CardPhoto';
import ModalAddPhoto from '@/components/_partials/ModalAddPhoto';

export default {
  name: 'Profile',
  components: { CardPhoto, ModalAddPhoto },
  props: ['searchString'],
  data() {
    return {
      photos: [],
    };
  },
  created() {
    axios.get(`${process.env.API_URL}/pictures/me`)
      .then((response) => { this.photos = response.data; });
  },
  watch: {
    searchString(newVal) {
      const query = newVal ? qs.stringify({ name: newVal }) : '';

      axios.get(`${process.env.API_URL}/pictures?${query}`)
        .then((response) => { this.photos = response.data; });
    },
  },
  methods: {
    uploadedPhoto(photo) {
      this.photos.unshift(photo);
    },
  },
};
</script>

<style lang="scss" scoped>
  main.container {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .row.welcome {
    margin-bottom: 10px;

    .card {
      width: 100%;

      &:hover {
        background-color: #F6F6F6;
      }

      .card-body {
        padding: 0;

        a {
          display: block;
          width: 100%;
          height: 100%;
          padding: 1.25rem;
          cursor: pointer;
          font-size: 1.5rem;
          color: #CCC;
        }
      }
    }
  }

  .phantom {
    width: 32%;
    height: 0;
  }
</style>
