import { createRouter, createWebHistory } from "vue-router";
import Profile from "../views/Profile.vue";
import Skills from "../views/Skills.vue";
import Work from "../views/Work.vue";
import Dog from "../views/Dog.vue";
import ShowingJames from "../views/ShowingJames.vue";

const routes = [
  {
    path: "/",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/work",
    name: "Work",
    component: Work,
  },
  {
    path: "/skillz",
    name: "Skillz",
    component: Skills,
  },
  {
    path: "/dog",
    name: "Dork",
    component: Dog,
  },
  {
    path: "/teaching",
    name: "Hello, James",
    component: ShowingJames,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
