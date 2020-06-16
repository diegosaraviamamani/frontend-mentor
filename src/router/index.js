import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import RetoA from "../views/RetoA";
import RetoB from "../views/RetoB";
import RetoC from "../views/RetoC";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/reto-a", name: "RetoA", component: RetoA },
  { path: "/reto-b", name: "RetoB", component: RetoB },
  { path: "/reto-c", name: "RetoC", component: RetoC },
];

const router = new VueRouter({
  routes,
});

export default router;
