import { createRouter, createWebHistory } from "vue-router";
import Profile from "../views/Profile.vue";
import Work from "../views/Work.vue";

const routes = [
  {
    path: "/",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/work",
    name: "Work",
    component: Work
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
