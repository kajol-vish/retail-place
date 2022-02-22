<template>
  <v-container class="container-class">
    <v-row class="d-flex flex-column justify-center">
      <v-col cols="12">
        <h2 class="my-0">Report Tool</h2>
      </v-col>
    </v-row>
    <v-row class="elevation-5 py-2 mt-12 table-container">
      <v-col cols="12">
        <div class="data-table">
          <v-row class="table-header">
            <v-col class="flex-container d-flex flex-row">
              <h4 class="cell">S.No</h4>
            </v-col>
            <v-col class="flex-container d-flex flex-row">
              <h4 class="cell">Product Name</h4>
            </v-col>
            <v-col class="flex-container d-flex flex-row">
              <h4 class="cell">Product Color</h4>
            </v-col>
            <v-col class="flex-container d-flex flex-row">
              <h4 class="cell">Quantity</h4>
            </v-col>
            <v-col class="flex-container d-flex flex-row">
              <h4 class="cell">Total Price</h4>
            </v-col>
          </v-row>
          <div>
            <v-row
              v-for="(product, index) in $store.state.submitCart[0]"
              :key="index"
              class="table-data"
            >
              <v-col class="flex-container d-flex flex-row">
                <h5 class="cell">{{ index + 1 }}</h5>
              </v-col>
              <v-col class="flex-container d-flex flex-row">
                <h5 class="cell">{{ product.name }}</h5>
              </v-col>
              <v-col class="flex-container d-flex flex-row">
                <h5 class="cell">{{ product.color }}</h5>
              </v-col>
              <v-col class="flex-container d-flex flex-row">
                <h5 class="cell">{{ product.unit }}</h5>
              </v-col>
              <v-col class="flex-container d-flex flex-row">
                <h5 class="cell">{{ product.totalprice }}</h5>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import store from "@/store";
import axios from "axios";

@Component({})
export default class reportToolComponent extends Vue {
  serial = 0;
   beforeCreate() {
    this.$store.dispatch('getCartData')
   }
  created(){
this.$store.dispatch('getCartData')
  }
}
</script>
<style scoped>
.container-class{
    width:100vw;
}
.flex-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}

.flex-container > div {
  background-color: #f1f1f1;
  margin: 10px;
  padding: 12px;
  text-align: center;
}

.table-header {
  background-color: #f1f1f1;
}
.table-container {
  max-width: 100vw;
  overflow-x: scroll;
  max-height: 70vh;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  height: 12px;
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 0px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #448aff;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #448aff;
}
.cell {
  height: 60px;
  width: 250px;
  margin: 20px;
  padding: 20px;
  font-size: 18px;
}
.table-data,
.table-header {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  width: fit-content;
  border-bottom:solid #999 1px;
}
</style>
