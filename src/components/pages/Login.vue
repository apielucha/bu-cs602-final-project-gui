<template>
  <div class="login">
    <div class="blur">
      <div class="container">
        <div class="row">
          <h1 class="col-12 text-center">Pinstagram</h1>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <h2>Log in</h2>
            <form id="form-login" @submit.prevent="submitLogin">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                v-model="login.email">
              <input
                type="password"
                name="password"
                placeholder="Password"
                v-model="login.password">
              <input type="submit" value="Log in" class="btn btn-info">
            </form>
          </div>
          <div class="col-lg-6">
            <h2>Register</h2>
            <form id="form-register" @submit.prevent="submitRegister">
              <div class="combined">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  v-model="register.firstname">
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  v-model="register.lastname">
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                v-model="register.email">
              <input
                type="password"
                name="password"
                placeholder="Password"
                v-model="register.password">
              <input type="submit" value="Sign up" class="btn btn-info">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'querystring';

export default {
  name: 'Login',
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
      register: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      },
    };
  },
  computed: {
    apiUrl() {
      return process.env.API_URL;
    },
  },
  methods: {
    submitLogin() {
      const url = `${process.env.API_URL}/login`;
      const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

      axios.post(url, qs.stringify(this.login), config)
        .then(response => response.data)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem('sessionID', res.sessionID);
            this.$router.push('/');
          }
        });
      // .catch((err) => { /* Handle form error */ });
    },
    submitRegister() {
      const url = `${process.env.API_URL}/register`;
      const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

      axios.post(url, qs.stringify(this.register), config)
        .then(response => response.data)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem('sessionID', res.sessionID);
            this.$router.push('/');
          }
        });
      // .catch((err) => { /* Handle form error */ });
    },
  },
};
</script>

<style scoped>
  .login {
    height: 100vh;
    background-image: url('/static/img/login-background.jpg');
  }

  .blur {
    height: 100vh;
    padding-top: 70px;
    background-color: rgba(0,0,0,0.5);
  }

  h1 {
    margin-bottom: 50px;
    font-size: 8em;
    color: white;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.4);
  }

  h2 {
    margin: 10px 0 50px;
    text-align: center;
    text-transform: uppercase;
    color: white;
    letter-spacing: 10px;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.4);
  }

  form input:not(.btn) {
    display: table;
    margin: auto;
    padding: 10px;
    width: 20vw;
    outline: none;
    border: none;
    border-bottom: 1px solid #E9E9E9;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
  }

  form input.btn {
    display: table;
    margin: auto;
    margin-top: 20px;
    padding: 10px;
    width: 20vw;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
  }

  form#form-login>input:first-child {
    border-radius: 5px 5px 0 0;
  }

  form#form-login>input:nth-child(2) {
    border-radius: 0 0 5px 5px;
    border-bottom: none;
  }

  form#form-register>.combined {
    display: table;
    margin: auto;
    border-radius: 5px 5px 0 0;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
  }

  form#form-register>.combined>input {
    display: inline-block;
    width: 10vw;
    box-shadow: none;
  }

  form#form-register>.combined>input:first-child {
    border-radius: 5px 0 0 0;
    border-right: 1px solid #E9E9E9;
  }

  form#form-register>.combined>input:nth-child(2) {
    border-radius: 0 5px 0 0;
  }

  form#form-register>input:nth-child(3) {
    border-radius: 0 0 5px 5px;
    border-bottom: none;
  }
</style>
