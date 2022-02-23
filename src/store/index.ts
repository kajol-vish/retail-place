import axios from "axios";
import Vue from "vue";
import Vuex, { Store } from "vuex";

Vue.use(Vuex);

export interface State {
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
  productUnit: number;
  productPriceSwitch: boolean;
  productTaxSwitch: boolean;

  timestamp: any;
  dateTime: any;
  submitCart: any[];

  addButtonToggle: boolean;
  drawer: boolean;
  inventory: any;
  dashboard: any;
  permission: any;
  money: any;
  retail: any;
  reports: any;
  location: any;
  systemsettings: any;
  support: any;
}

export default new Vuex.Store<State>({
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
      state.submitCart=[]
      console.log(payload,"payload")
      state.submitCart.push(payload);

    },
    addToCart: (state, { product, count }) => {
      const temp = state.addProductCart.filter((item: any) => {
        return item.id === product.id;
      });

      if (temp.length == 0) {
        state.totalAmount = 0;
        state.totalTax = 0;
        product.unit = count;
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
            item.unit = item.unit + count;
            product.totalprice =
              parseFloat(product.price) * parseInt(product.unit);
          }
          state.totalTax = state.totalTax + parseFloat(item.tax);
          state.totalAmount = state.totalAmount + parseFloat(item.totalprice);
        });
      }
    },
    ADDPRODUCT: (state) => {
      (state.productName = ""),
        (state.productSize = ""),
        (state.productColor = ""),
        (state.radioValue = ""),
        (state.productPrice = ""),
        (state.productTax = "");
      state.addButtonToggle = true;
    },
    EDITBUTTON: (state, item) => {
      (state.addButtonToggle = false),
        (state.productId = item.id),
        (state.productName = item.name),
        (state.productSize = item.size),
        (state.productColor = item.color),
        (state.radioValue = item.gender),
        (state.productPrice = item.price),
        (state.productTax = item.tax);
    },
    INVENTORY: (state, response) => {
      state.inventory = response;
    },
    DASHBOARD: (state, response) => {
      state.dashboard = response;
    },
    PERMISSION: (state, response) => {
      state.permission = response;
    },
    MONEY: (state, response) => {
      state.money = response;
    },
    RETAIL: (state, response) => {
      state.retail = response;
    },
    REPORTS: (state, response) => {
      state.reports = response;
    },
    LOCATION: (state, response) => {
      state.location = response;
    },
    SYSTEMSETTINGS: (state, response) => {
      state.systemsettings = response;
    },
    SUPPORT: (state, response) => {
      state.support = response;
    },
    PRODUCTS: (state, response) => {
      state.products = response;
    },
    HEADERS: (state, resp) => {
      state.headers = resp;
    },
  },
  actions: {
    async Inventory({ commit }) {
      const response = await axios.get("http://localhost:3000/inventorytools");
      commit("INVENTORY", response.data);
      const response1 = await axios.get("http://localhost:3000/permission");
      commit("PERMISSION", response1.data);
    },

    async Dashboard({ commit }) {
      const response = await axios.get("http://localhost:3000/dashboard");
      commit("DASHBOARD", response.data);
    },
    async Money({ commit }) {
      const response = await axios.get("http://localhost:3000/money");
      commit("MONEY", response.data);
    },
    async Retail({ commit }) {
      const response = await axios.get("http://localhost:3000/retail");
      commit("RETAIL", response.data);
    },
    async Reports({ commit }) {
      const response = await axios.get("http://localhost:3000/reports");
      commit("REPORTS", response.data);
    },
    async Location({ commit }) {
      const response = await axios.get("http://localhost:3000/location");
      commit("LOCATION", response.data);
    },
    async SystemSettings({ commit }) {
      const response = await axios.get("http://localhost:3000/systemsettings");
      commit("SYSTEMSETTINGS", response.data);
    },
    async Support({ commit }) {
      const response = await axios.get("http://localhost:3000/support");
      commit("SUPPORT", response.data);
    },
    async Products({ commit }) {
      const response = await axios.get("http://localhost:3000/products");
      commit("PRODUCTS", response.data);
      const resp = await axios.get("http://localhost:3000/headers");
      commit("HEADERS", resp.data);
    },
    EditProduct({ commit }, item) {
      commit("EDITBUTTON", item);
    },
    DeleteProduct({ commit }, item) {
      commit("DELETEBUTTON", item);
    },
    AddProduct({ commit }) {
      commit("ADDPRODUCT");
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
      commit("ADDPRODUCT");
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
