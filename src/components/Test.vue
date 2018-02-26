<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <h2>{{ revMsg }}</h2>

    <input type="text" v-model="msg">
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      msg: 'Hello world!',
    };
  },
  computed: {
    revMsg() {
      return this.msg.split('').reverse().join('');
    },
  },
};
</script>
