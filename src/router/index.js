import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import AboutView from "../views/About.vue";
import ResumeView from "../views/Resume.vue";
import ProjectsView from "../views/Projects.vue";
import ContactView from "../views/Contact.vue";
import ErrorView from "../views/Error.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "About",
      component: AboutView,
    },
    {
      path: "/resume",
      name: "Resume",
      component: ResumeView,
    },
    {
      path: "/projects",
      name: "Projects",
      component: ProjectsView,
    },
    {
      path: "/contact",
      name: "Contact",
      component: ContactView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Error Page",
      component: ErrorView,
    },
  ],
});

export default router;
