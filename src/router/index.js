import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import Login from '@/components/pages/Login';
import Test from '@/components/pages/Test';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!auth.loggedIn) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath },
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
