// eslint-disable-next-line @typescript-eslint/ban-types
import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export interface stateData {
  headers: [];
  products: [];
  productId: string;
  productName: string;
  productSize: string;
  productColor: string;
  productPrice: string;
  productTax: string;
  totalprice: number;

  productCountCart: number;
  addProductCart: any;
  tableId: number;
  totalTax: number;
  totalAmount: number;

  search: string;
  tab: null;
  select: null;
  options: string[];
  colors: string[];
  radioValue: string;

  productSwitch: boolean;
  deleteSwitch: boolean;
  addSwitch: boolean;
  editSwitch: boolean;
  productNameSwitch: boolean;
  productSizeSwitch: boolean;
  productColorSwitch: boolean;
  GenderSwitch: boolean;
  productPriceSwitch: boolean;
  productTaxSwitch: boolean;
  productUnit: number;

  timestamp: any;
  dateTime: any;
  submitCart: any[];

  addButtonToggle: boolean;
  drawer: boolean;
  inventory: {};
  dashboard: {};
  permission: {};
  money: {};
  retail: {};
  reports: {};
  location: {};
  systemsettings: {};
  support: {};
}

export default new Vuex.Store<stateData>({
  state: {
    headers: [],
    products: [],
    productId: "",
    productName: "",
    productSize: "",
    productColor: "",
    radioValue: "",
    productPrice: "",
    productTax: "",
    productUnit: 0,
    totalprice: 0,

    productCountCart: 0,
    addProductCart: [],
    submitCart: [],
    timestamp: null,
    dateTime: null,
    tableId: 0,
    totalTax: 0,
    totalAmount: 0,

    deleteSwitch: true,
    addSwitch: true,
    editSwitch: true,
    productSwitch: true,
    productNameSwitch: true,
    productSizeSwitch: true,
    productColorSwitch: true,
    GenderSwitch: true,
    productPriceSwitch: true,
    productTaxSwitch: true,

    search: "",
    tab: null,
    select: null,
    options: ["28", "30", "32", "34"],
    colors: ["Green", "Red", "Blue", "Purple", "Yellow"],

    drawer: false,
    addButtonToggle: true,

    inventory: {},
    dashboard: {},
    permission: {},
    money: {},
    retail: {},
    reports: {},
    location: {},
    systemsettings: {},
    support: {},
  },
  mutations: {
    isDisabled: (state, { event, switchVar }) => {
      if (switchVar == "mainProduct") {
        state.productNameSwitch = event;
        state.productSizeSwitch = event;
        state.productColorSwitch = event;
        state.GenderSwitch = event;
        state.productPriceSwitch = event;
        state.productTaxSwitch = event;
        state.addSwitch = event;
        state.deleteSwitch = event;
        state.editSwitch = event;
        state.productSwitch = event;
      }
      if (switchVar == "editProduct") {
        state.productNameSwitch = event;
        state.productSizeSwitch = event;
        state.productColorSwitch = event;
        state.GenderSwitch = event;
        state.productPriceSwitch = event;
        state.productTaxSwitch = event;
      }
      if (switchVar == "NameField") {
        state.productNameSwitch = event;
      }
      if (switchVar == "sizeField") {
        state.productSizeSwitch = event;
      }
      if (switchVar == "colorField") {
        state.productColorSwitch = event;
      }
      if (switchVar == "genderField") {
        state.GenderSwitch = event;
      }
      if (switchVar == "priceField") {
        state.productPriceSwitch = event;
      }
      if (switchVar == "taxField") {
        state.productTaxSwitch = event;
      }
    },
    getCartData: (state, payload) => {
      state.submitCart = [];
      state.submitCart.push(payload);
    },
    addToCart: (state, { product, quantity }) => {
      const temp = state.addProductCart.filter((item: any) => {
        return item.id === product.id;
      });

      if (temp.length == 0) {
        state.totalAmount = 0;
        state.totalTax = 0;
        product.unit = quantity;
        product.totalprice = parseFloat(product.price) * parseInt(product.unit);
        state.addProductCart.push(product);
        state.addProductCart.forEach((item: any) => {
          state.totalTax = state.totalTax + parseFloat(item.tax);
          state.totalAmount = state.totalAmount + parseFloat(item.totalprice);
        });
      } else {
        state.totalAmount = 0;
        state.totalTax = 0;
        state.addProductCart.forEach((item: any) => {
          if (item.id == product.id) {
            item.unit = item.unit + quantity;
            product.totalprice =
              parseFloat(product.price) * parseInt(product.unit);
          }
          state.totalTax = state.totalTax + parseFloat(item.tax);
          state.totalAmount = state.totalAmount + parseFloat(item.totalprice);
        });
      }
    },
    AddProduct: (state) => {
      (state.productName = ""),
        (state.productSize = ""),
        (state.productColor = ""),
        (state.radioValue = ""),
        (state.productPrice = ""),
        (state.productTax = "");
      state.addButtonToggle = true;
    },
    EditButton: (state, item) => {
      (state.addButtonToggle = false),
        (state.productId = item.id),
        (state.productName = item.name),
        (state.productSize = item.size),
        (state.productColor = item.color),
        (state.radioValue = item.gender),
        (state.productPrice = item.price),
        (state.productTax = item.tax);
    },
    Inventory: (state, response) => {
      state.inventory = response;
    },
    Dashboard: (state, response) => {
      state.dashboard = response;
    },
    Permission: (state, response) => {
      state.permission = response;
    },
    Money: (state, response) => {
      state.money = response;
    },
    Retail: (state, response) => {
      state.retail = response;
    },
    Reports: (state, response) => {
      state.reports = response;
    },
    Location: (state, response) => {
      state.location = response;
    },
    SystemSettings: (state, response) => {
      state.systemsettings = response;
    },
    Support: (state, response) => {
      state.support = response;
    },
    Products: (state, response) => {
      state.products = response;
    },
    Headers: (state, resp) => {
      state.headers = resp;
    },
  },
  actions: {
    async Inventory({ commit }) {
      const response = await axios.get("http://localhost:3000/inventorytools");
      commit("Inventory", response.data);
      const response1 = await axios.get("http://localhost:3000/permission");
      commit("Permission", response1.data);
    },

    async Dashboard({ commit }) {
      const response = await axios.get("http://localhost:3000/dashboard");
      commit("Dashboard", response.data);
    },
    async Money({ commit }) {
      const response = await axios.get("http://localhost:3000/money");
      commit("Money", response.data);
    },
    async Retail({ commit }) {
      const response = await axios.get("http://localhost:3000/retail");
      commit("Retail", response.data);
    },
    async Reports({ commit }) {
      const response = await axios.get("http://localhost:3000/reports");
      commit("Reports", response.data);
    },
    async Location({ commit }) {
      const response = await axios.get("http://localhost:3000/location");
      commit("Location", response.data);
    },
    async SystemSettings({ commit }) {
      const response = await axios.get("http://localhost:3000/systemsettings");
      commit("SystemSettings", response.data);
    },
    async Support({ commit }) {
      const response = await axios.get("http://localhost:3000/support");
      commit("Support", response.data);
    },
    async Products({ commit }) {
      const response = await axios.get("http://localhost:3000/products");
      commit("Products", response.data);
      const resp = await axios.get("http://localhost:3000/headers");
      commit("Headers", resp.data);
    },
    EditProduct({ commit }, item) {
      commit("EditButton", item);
    },
    DeleteProduct({ commit }, item) {
      commit("DeleteProduct", item);
    },
    AddProduct({ commit }) {
      commit("AddProduct");
    },
    async UpdateProduct({ commit }) {
      this.state.totalprice =
        parseInt(this.state.productPrice) +
        parseInt(this.state.productPrice) *
          (parseInt(this.state.productTax) / 100);
      const data = {
        id: this.state.productId,
        name: this.state.productName,
        size: this.state.productSize,
        gender: this.state.radioValue,
        color: this.state.productColor,
        totalprice: this.state.totalprice,
        price: this.state.productPrice,
        tax: this.state.productTax,
      };
      const response = await axios.put(
        `http://localhost:3000/products/${this.state.productId}/`,
        data
      );
      console.log(response);
      commit("AddProduct");
    },
    isDisabled({ commit }, { event, switchVar }) {
      commit("isDisabled", { event, switchVar });
    },
    addToCart({ commit }, { product, count }) {
      commit("addToCart", { product, count });
    },
    async getCartData({ commit }): Promise<void> {
      const resp = await axios.get("http://localhost:3000/cartProduct");
      console.log("Action", resp.data);
      commit("getCartData", resp.data);
    },
  },
  modules: {},
});
