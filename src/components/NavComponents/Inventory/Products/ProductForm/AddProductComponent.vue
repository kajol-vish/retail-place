<template>
  <v-container>
    <v-row class="d-flex flex-row justify-center">
      <v-col cols="12">
        <v-tabs class="d-flex justify-center" v-model="$store.state.tab">
          <v-tab>Product Info</v-tab>
          <v-tab>Pricing</v-tab>
        </v-tabs>
        <v-tabs-items
          v-model="$store.state.tab"
          class="d-flex justify-center py-10 px-10"
        >
          <v-form>
            <InfoDetailsForm />
           <PriceDetailsForm />
          </v-form>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import store from "@/store";
import axios from "axios";
import InfoDetailsForm from "./InfoDetailsForm.vue";
import PriceDetailsForm from "./PriceDetailsForm.vue";

@Component({
  components: {
    InfoDetailsForm,
    PriceDetailsForm
  },
})
export default class AddProductComponent extends Vue {
  
}
</script>
<style scoped>
.tabitem {
  width: 600px;
  height: 400px;
}
.button {
  text-decoration: none;
  margin: 20px;
}
</style>
