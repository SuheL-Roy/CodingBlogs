import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blogs from '../views/Blogs.vue'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import ForgetPassword from '../views/ForgetPassword.vue';
import Profile from '../views/Profile.vue';
import Admin from '../views/Admin.vue';
import CreatePost from '../views/CreatePost.vue';
import blogPreview from '../views/BlogPreview.vue';
import ViewBlog from '../views/ViewBlog.vue';
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
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: 'Profile'
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      title: 'Admin'
    }
  },
  {
    path: '/post',
    name: 'CreatePost',
    component: CreatePost,
    meta: {
      title: 'Post'
    }
  },
  {
    path: '/Blog-Preview',
    name: 'blogPreview',
    component: blogPreview,
    meta: {
      title: 'blogPreview'
    }
  },
  {
    path: '/view-blog',
    name: 'ViewBlog',
    component: ViewBlog,
    meta: {
      title: 'ViewBlog'
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
