import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/players",
    name: "Players",
    component: () =>
      import(/* webpackChunkName: "players" */ "../views/Players.vue")
  },
  {
    path: "/about",
    name: "History",
    component: () =>
      import(/* webpackChunkName: "history" */ "../views/History.vue")
  },
  {
    path: "/game",
    name: "Game",
    component: () =>
      import(/* webpackChunkName: "game" */ "../views/Game.vue")
  },
  {
    path: "/modes",
    name: "Modes",
    component: () =>
      import(/* webpackChunkName: "modes" */ "../views/Modes.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
