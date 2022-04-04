import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blogs from '../views/Blogs.vue'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import ForgetPassword from '../views/ForgetPassword.vue';
//import { from } from 'core-js/core/array';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
    meta: {
      title: 'Blogs'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Register'
    }
  },
  {
    path: '/forget-Password',
    name: 'ForgetPassword',
    component: ForgetPassword,
    meta: {
      title: 'ForgetPassword'
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to,from,next)=>{
  document.title = `${to.meta.title} | CodingBlog`;
  next();

});

export default router
