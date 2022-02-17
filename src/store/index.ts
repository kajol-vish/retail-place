import axios from "axios";
import Vue from "vue";
import Vuex, { Store } from "vuex";

Vue.use(Vuex);

export interface State {
  headers: any
  products: [];
  productId: string;
  productName: string;
  productSize: string;
  productColor: string;
  productPrice: string;
  productTax: string;
  totalprice: number;

  search: string;
  tab: null;
  select: null;
  options: string[];
  colors: string[];
  radioValue: string;

  addButtonToggle: boolean;
  drawer: boolean;
  inventory: any;
  dashboard: any;
  permission:any;
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
    productId: '',
    productName: '',
    productSize: '',
    productColor: '',
    radioValue: '',
    productPrice: '',
    productTax: '',
    totalprice: 0,

    search: '',
    tab: null,
    select: null,
    options: ['28', '30', '32', '34'],
    colors: ['Green', 'Red', 'Blue', 'Purple', 'Yellow'],

    drawer: false,
    addButtonToggle: true,

    inventory: {},
    dashboard: {},
    permission:{},
    money: {},
    retail: {},
    reports: {},
    location: {},
    systemsettings: {},
    support: {}
  },
  mutations: {
    ADDPRODUCT: (state) => {
      state.productName = '',
        state.productSize = '',
        state.productColor = '',
        state.radioValue = '',
        state.productPrice = '',
        state.productTax = ''
    },
    EDITBUTTON: (state, item) => {
      state.addButtonToggle = !state.addButtonToggle,
        state.productId = item.id,
        state.productName = item.name,
        state.productSize = item.size,
        state.productColor = item.color,
        state.radioValue = item.gender,
        state.productPrice = item.price,
        state.productTax = item.tax
    },
    INVENTORY: (state, response) => {
      state.inventory = response
    },
    DASHBOARD: (state, response) => {
      state.dashboard = response
    },
    PERMISSION: (state, response) => {
      state.permission = response
    },
    MONEY: (state, response) => {
      state.money = response
    },
    RETAIL: (state, response) => {
      state.retail = response
    },
    REPORTS: (state, response) => {
      state.reports = response
    },
    LOCATION: (state, response) => {
      state.location = response
    },
    SYSTEMSETTINGS: (state, response) => {
      state.systemsettings = response
    },
    SUPPORT: (state, response) => {
      state.support = response
    },
    PRODUCTS: (state, response) => {
      state.products = response
    },
    HEADERS: (state, resp) => {
      state.headers = resp
    }
  },
  actions: {
    async Inventory({ commit }) {
      const response = await axios.get('http://localhost:3000/inventorytools');
      commit("INVENTORY", response.data)
      const response1 = await axios.get('http://localhost:3000/permission');
      commit("PERMISSION", response1.data)
    },

    async Dashboard({ commit }) {
      const response = await axios.get('http://localhost:3000/dashboard');
      commit("DASHBOARD", response.data)
    },
    async Money({ commit }) {
      const response = await axios.get('http://localhost:3000/money');
      commit("MONEY", response.data)
    },
    async Retail({ commit }) {
      const response = await axios.get('http://localhost:3000/retail');
      commit("RETAIL", response.data)
    },
    async Reports({ commit }) {
      const response = await axios.get('http://localhost:3000/reports');
      commit("REPORTS", response.data)
    },
    async Location({ commit }) {
      const response = await axios.get('http://localhost:3000/location');
      commit("LOCATION", response.data)
    },
    async SystemSettings({ commit }) {
      const response = await axios.get('http://localhost:3000/systemsettings');
      commit("SYSTEMSETTINGS", response.data)
    },
    async Support({ commit }) {
      const response = await axios.get('http://localhost:3000/support');
      commit("SUPPORT", response.data)
    },
    async Products({ commit }) {
      const response = await axios.get('http://localhost:3000/products');
      commit("PRODUCTS", response.data)
      const resp = await axios.get('http://localhost:3000/headers')
      commit("HEADERS", resp.data)
    },
    EditProduct({ commit }, item) {
      commit("EDITBUTTON", item)
    },
    DeleteProduct({ commit }, item) {
      commit("DELETEBUTTON", item)
    },
    AddProduct({ commit }) {
      commit("ADDPRODUCT")
    },
    async UpdateProduct({ commit }) {
      this.state.totalprice = parseInt(this.state.productPrice) + (parseInt(this.state.productPrice) * (parseInt(this.state.productTax) / 100))
      const data = {
        id: this.state.productId, name: this.state.productName, size: this.state.productSize,
        gender: this.state.radioValue, color: this.state.productColor, totalprice: this.state.totalprice,
        price: this.state.productPrice, tax: this.state.productTax
      }
      const response = await axios.put(`http://localhost:3000/products/${this.state.productId}/`, data)
      commit("ADDPRODUCT");
    }

  },
  modules: {},
});
