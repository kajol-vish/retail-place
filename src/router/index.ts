import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Products from "../components/NavComponents/Inventory/Products/Products.vue"
import AddProductComponent from "../components/NavComponents/Inventory/Products/ProductForm/AddProductComponent.vue"
import PermissionComponent from '../components/NavComponents/Permission/PermissionComponent/PermissionComponent.vue'
import PosComponent from '../components/NavComponents/Retail/PointOfSale/PosComponent.vue'
import ReportsToolComponent from '../components/NavComponents/Reports/ReportsTools/ReportsToolComponent.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path:"/products",
    name:"Products",
    component:Products
  },
  {
    path:"/add-products",
    name:"AddProducts",
    component:AddProductComponent
  },
  {
    path:"/permission",
    name:"Permission",
    component:PermissionComponent
  },
  {
    path:"/pointofsale",
    name:"Point Of Sale",
    component:PosComponent
  },
  {
    path:"/report-tool",
    name:"Report Tool",
    component:ReportsToolComponent
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
