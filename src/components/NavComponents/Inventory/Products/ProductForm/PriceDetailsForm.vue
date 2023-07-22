<template>
  <v-tab-item
    transition="fade-transition"
    class="tabitem elevation-4 px-10 py-10"
  >
    <v-text-field
      label="Price"
      required
      class="pt-10"
      v-model="$store.state.productPrice"
      :disabled="!$store.state.productPriceSwitch"
    ></v-text-field>
    <v-text-field
      label="Tax"
      required
      v-model="$store.state.productTax"
      :disabled="!$store.state.productTaxSwitch"
      class="mb-10"
    ></v-text-field>
    <router-link to="/products" class="white--text text-decoration-none px-5">
      <v-btn class="blue accent-2 white--text" @click="clearProduct"
        >Cancel</v-btn
      >
    </router-link>
    <router-link
      to="/products"
      class="white--text text-decoration-none px-5"
      v-if="$store.state.addButtonToggle"
    >
      <v-btn type="submit" @click="submit" class="blue accent-2 white--text"
        >Submit</v-btn
      >
    </router-link>
    <router-link
      to="/products"
      class="white--text text-decoration-none px-5"
      v-else
    >
      <v-btn type="update" @click="update" class="blue accent-2 white--text"
        >Update</v-btn
      >
    </router-link>
  </v-tab-item>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import axios from "axios";
import store from "@/store";

@Component({
  components: {},
})
export default class PriceDetailsForm extends Vue {
  async submit() {
    this.$store.state.totalprice =
      parseInt(this.$store.state.productPrice) +
      parseInt(this.$store.state.productPrice) *
        (parseInt(this.$store.state.productTax) / 100);
    const data = {
      name: this.$store.state.productName,
      size: this.$store.state.productSize,
      gender: this.$store.state.radioValue,
      color: this.$store.state.productColor,
      totalprice: this.$store.state.totalprice,
      price: this.$store.state.productPrice,
      tax: this.$store.state.productTax,
    };
    const response = await axios.post("http://localhost:3000/products", data);
    this.$store.dispatch("Products");
  }

  update() {
    this.$store.dispatch("UpdateProduct");
  }
  clearProduct() {
    this.$store.dispatch("AddProduct");
  }
}
</script>
<style scoped></style>
