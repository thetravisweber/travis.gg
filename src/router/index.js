import { createRouter, createWebHistory } from "vue-router";
import Profile from "../views/Profile.vue";
import Work from "../views/Work.vue";
import Dog from "../views/Dog.vue";

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
  {
    path: "/dog",
    name: "Dork",
    component: Dog
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
