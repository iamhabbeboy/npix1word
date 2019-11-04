import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let lazyLoader = function(page: string) {
  return () => import(`@/views/${page}.vue`)
}

const routes = [
  {
    path: "/",
    name: "home",
    component: lazyLoader('Home')
  },
  {
    path: "/game",
    name: "game",
    component: lazyLoader('Game')
  }
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
