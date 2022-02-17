import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../components/Products.vue"
import AddProducts from "../components/AddProducts.vue"
import PermissionComponent from '../components/PermissionComponent.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path:"/products",
    name:"Products",
    component:Products
  },
  {
    path:"/addproducts",
    name:"AddProducts",
    component:AddProducts
  },
  {
    path:"/permission",
    name:"Permission",
    component:PermissionComponent
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
