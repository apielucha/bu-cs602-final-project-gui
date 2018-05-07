import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import Home from '@/components/pages/Home';
import Login from '@/components/pages/Login';
import Profile from '@/components/pages/Profile';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const url = `${process.env.API_URL}/testAuth`;
    const config = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    };

    axios.get(url, config)
      .then(() => { next(); })
      .catch(() => {
        next({
          path: '/login',
          query: { redirect: to.fullPath },
        });
      });
  } else {
    next();
  }
});

export default router;
