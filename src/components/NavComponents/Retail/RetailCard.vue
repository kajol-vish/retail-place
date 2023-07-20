<template>
  <v-card
    min-width="200"
    height="480"
    class="ml-3 blue accent-1 rounded-xl d-flex align-center flex-column"
  >
    <v-card-title>
      <v-icon color="white" large text-center>mdi-cart-outline</v-icon>
    </v-card-title>
    <v-card-text>
      <h3 class="white--text mb-4">RETAIL</h3>
      <ul
        class="white--text menulist"
        v-for="(data, value, index) in $store.state.retail"
        :key="index"
      >
        <li v-if="`${value}` === 'Point Of Sale'">
          <router-link
            to="/pointofsale"
            class="text-indigo-darken-2 menulist_name d-flex justify-content-left"
            >{{ value }}</router-link
          >
        </li>
        <li v-else>{{ value }}</li>

        <ul class="white--text" v-for="(item, item1) in data" :key="item1">
          <li>{{ item }}</li>
        </ul>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {},
})
export default class RetailCard extends Vue {}
</script>
<style scoped></style>
