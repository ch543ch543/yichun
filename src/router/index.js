import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CV from "../views/CV.vue";
import CVpage from "../views/CVpage.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Projects from "../views/Projects.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cv",
    name: "CV",
    component: CV
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/yichun-cv",
    name: "CVpage",
    component: CVpage
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/work",
    name: "Projects",
    component: Projects
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
