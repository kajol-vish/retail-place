<template>
  <v-tab-item
    transition="fade-transition"
    class="tabitem elevation-4 px-10 py-10"
  >
    <v-text-field
      type="input"
      label="Product Name"
      mandatory
      v-model="$store.state.productName"
      :disabled="!$store.state.productNameSwitch"
    ></v-text-field>
    <v-select
      label="Size"
      required
      :items="$store.state.options"
      v-model="$store.state.productSize"
      :value="$store.state.options"
      :disabled="!$store.state.productSizeSwitch"
    ></v-select>
    <v-label class="ml-0 pl-0">
      <span>Please Select a Gender</span>
    </v-label>
    <v-radio-group
      v-model="$store.state.radioValue"
      mandatory
      row
      :disabled="!$store.state.GenderSwitch"
    >
      <v-radio label="Male" value="male"></v-radio>
      <v-radio label="Female" value="female"></v-radio>
    </v-radio-group>
    <v-select
      label="Color"
      required
      :items="$store.state.colors"
      v-model="$store.state.productColor"
      :disabled="!$store.state.productColorSwitch"
    ></v-select>
  </v-tab-item>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import store from "@/store";
import AddProductPrice from "./AddProductPrice.vue";

@Component({
  components: {},
})
export default class InfoDetailsForm extends Vue {}
</script>
<style scoped>

</style>
