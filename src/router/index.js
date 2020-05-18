import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/education",
    name: "Education",
    component: () =>
      import(/* webpackChunkName: "education" */ "../views/Education.vue")
  },
  {
    path: "/freedomwall",
    name: "FreedomWall",
    component: () =>
      import(/* webpackChunkName: "blog" */ "../views/Freedomwall.vue")
  },
  {
    path: "/projects",
    name: "Projects",
    component: () =>
      import(/* webpackChunkName: "projects" */ "../views/Projects.vue")
  },
  {
    path: "*", 
    name: 'NotFound',
    component: () => import('@/components/NotFound.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
