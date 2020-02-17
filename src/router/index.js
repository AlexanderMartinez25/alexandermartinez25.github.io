import Vue from "vue";
import VueRouter from "vue-router";
import Frutas from "../views/Frutas.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/frutas",
    name: "frutas",
    component: Frutas
  },
  {
    path: "/",
    name: "futbol",
    component: () =>
      import( /* webpackChunkName: "Futbol" */ "../views/Futbol.vue")
  },
  {
    path: "/fotos/:id?",
    name: "fotos",
    component: () =>
      import( /* webpackChunkName: "fotos" */ "../views/Fotos.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;