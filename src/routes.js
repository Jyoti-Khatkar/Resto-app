import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";
import AddRestaurant from "./components/AddRestaurant.vue";
import RestaurantList from "./components/RestaurantList.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "signup-page",
    path: "/sign-up",

    component: SignUp,
  },
  {
    name: "login-page",
    path: "/login",

    component: Login,
  },
  {
    name: "home-page",
    path: "/",

    component: Home,
  },
  {
    name: "add-restaurent-page",
    path: "/add",
    component: AddRestaurant,
  },
  {
    name: "restaurent-list",
    path: "/list",
    component: RestaurantList,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
