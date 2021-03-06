import Vue from 'vue'
// import VueRouter from 'vue-router'
import App from './App.vue'

import Ionic from "@ionic/vue"
import "@ionic/core/css/core.css"
import "@ionic/core/css/ionic.bundle.css"


// Vue.use(VueRouter)

// router
import { IonicVueRouter } from "@ionic/vue";
Vue.use(IonicVueRouter);

Vue.config.productionTip = false
Vue.use(Ionic);

const router = new IonicVueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "@/components/HomePage"),
    },
    {
      path: "/new-item",
      name: "new-item",
      component: () =>
        import(/* webpackChunkName: "new-item" */ "@/components/NewItemPage"),
    }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
