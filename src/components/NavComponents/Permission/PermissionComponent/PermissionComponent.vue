<template>
  <v-container>
    <v-row class="d-flex flex-column justify-center">
      <v-col cols="12">
        <h2 class="my-0">PERMISSION</h2>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <v-card class="elevation-5" height="600" width="400">
          <div class="px-12 py-6">
            <v-switch
              label="Products"
              @change="isDisabled($event, 'mainProduct')"
              v-model="$store.state.productSwitch"
            ></v-switch>
            <div class="pl-10 ml-8">
              <v-switch
                label="Edit Product"
                class="childlevel"
                @change="isDisabled($event, 'editProduct')"
                :disabled="$store.state.productSwitch == false"
                v-model="$store.state.editSwitch"
              ></v-switch>
              <div class="childlevel pl-10 ml-8">
                <v-switch
                  label="Product Name"
                  class="subchildlevel"
                  :disabled="$store.state.editSwitch == false"
                  @change="isDisabled($event, 'NameField')"
                  v-model="$store.state.productNameSwitch"
                ></v-switch>
                <v-switch
                  label="Size"
                  class="subchildlevel"
                  :disabled="$store.state.editSwitch == false"
                  @change="isDisabled($event, 'sizeField')"
                  v-model="$store.state.productSizeSwitch"
                ></v-switch>
                <v-switch
                  label="Gender"
                  class="subchildlevel"
                  :disabled="$store.state.editSwitch == false"
                  @change="isDisabled($event, 'genderField')"
                  v-model="$store.state.GenderSwitch"
                ></v-switch>
                <v-switch
                  label="Color"
                  class="subchildlevel"
                  :disabled="$store.state.editSwitch == false"
                  @change="isDisabled($event, 'colorField')"
                  v-model="$store.state.productColorSwitch"
                ></v-switch>
                <v-switch
                  label="Price"
                  class="subchildlevel"
                  :disabled="$store.state.editSwitch == false"
                  @change="isDisabled($event, 'priceField')"
                  v-model="$store.state.productPriceSwitch"
                ></v-switch>
                <v-switch
                  label="Tax"
                  class="subchildlevel"
                  :disabled="$store.state.editSwitch == false"
                  @change="isDisabled($event, 'taxField')"
                  v-model="$store.state.productTaxSwitch"
                ></v-switch>
              </div>
              <v-switch
                label="Delete Product"
                class="childlevel"
                @change="isDisabled($event, 'deleteProduct')"
                :disabled="$store.state.productSwitch == false"
                v-model="$store.state.deleteSwitch"
              ></v-switch>
              <v-switch
                label="Add Product"
                class="childlevel"
                @change="isDisabled($event, 'addProduct')"
                :disabled="$store.state.productSwitch == false"
                v-model="$store.state.addSwitch"
              ></v-switch>
            </div>
          </div>
          <router-link to="/products" class="button text-decoration-none">
            <v-btn class="blue accent-2 white--text">Save</v-btn>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AddProductPrice from "./AddProductPrice.vue";
import AddProductForm from "./AddProductForm.vue";
import store from "@/store";
import axios from "axios";

@Component({
  components: {},
})
export default class PermissionComponent extends Vue {
  isDisabled(event: Event, switchVar: string) {
    this.$store.dispatch("isDisabled", { event, switchVar });
  }
}
</script>
<style scoped>
.childlevel {
  margin-bottom: 0;
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 0;
}
.subchildlevel {
  margin-bottom: 0;
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
