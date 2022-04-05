import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/app";
import "firebase/auth";
// import Vue from 'vue';

// import Vue2Editor from 'vue2-editor'

// Vue.use(Vue2Editor);
// Vue.config.productionTip = false;

let app;

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    createApp(App).use(store).use(router).mount('#app')
  }
});


