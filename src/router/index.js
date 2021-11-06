import { createRouter, createWebHistory } from "vue-router";
import Dog from "../views/Dog.vue";
import MathStuffs from "../views/MathStuffs.vue";
import Profile from "../views/Profile.vue";
import Skills from "../views/Skills.vue";
import Work from "../views/Work.vue";
// Math
import PrimeFactors from "../views/Math/PrimeFactors.vue";

const routes = [
  {
    path: "/",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/math-stuffs",
    name: "Math Stuffs",
    component: MathStuffs,
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
    name: "Dog",
    component: Dog,
  },

  // Lower Level

  {
    path: "/prime-factors",
    name: "Prime Factors",
    component: PrimeFactors,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
