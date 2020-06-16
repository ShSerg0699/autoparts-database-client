import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/view",
    name: "ViewTables",
    component: () => import("../views/ViewTables")
  },
  {
    path: "/edit",
    name: "Edit",
    component: () => import("../views/Edit")
  },
  {
    path: "/requests",
    name: "Requests",
    component: () => import("../views/Requests")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
