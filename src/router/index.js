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
    meta: { transition: 'fade-in-up' },
    component: () => import("@/views/About.vue")
  },
  {
    path: "/education",
    name: "Education",
    component: () => import("@/views/Education.vue")
  },
  {
    path: "/freedomwall",
    name: "FreedomWall",
    meta: { transition: 'fade-in-up' },
    component: () => import("@/views/Freedomwall.vue")
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@/views/Projects.vue")
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

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  NProgress.configure({ easing: 'ease', speed: 2000, showSpinner: false })
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router;
