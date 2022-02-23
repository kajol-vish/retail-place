<template>
  <v-container fluid>
    <v-row class="d-flex flex-row justify-center" id="rowMain">
      <v-col cols="12">
        <h1>Point Of Sale</h1>
      </v-col>
    </v-row>
    <v-row class="d-flex flex-row justify-center">
      <v-col cols="8">
        <v-card class="elevation-8">
            <PosCardComponent />
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="elevation-8">
            <PosShoppingCart />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PosCardComponent from "./PosComponents/PosCardComponent.vue";
import PosShoppingCart from "./PosComponents/PosShoppingCart.vue";

@Component({
  components: {
      PosCardComponent,
      PosShoppingCart
  },
})
export default class PosComponent extends Vue {
  async beforeCreate() {
    // let maxId;
    // const data1 = await axios.get("http://localhost:3000/cartProduct");
    // for (let i = 1; i <= data1.data.length; i++) {
    //   maxId = Math.max(...data1.data[i].id);
    //    console.log(data1.data[i].id, "1maxId");
    //   const data2 = axios.delete(`http://localhost:3000/cartProduct/${i}`);
    // }
    // console.log(maxId, "maxId");
  }
}
</script>
<style scoped>
#rowmain {
  min-height: 100vh;
}
</style>
