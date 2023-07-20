<template>
  <v-card
    min-width="400"
    height="480"
    class="ml-3 blue accent-1 rounded-xl d-flex align-center flex-column"
  >
    <v-card-title>
      <v-icon color="white" large text-center
        >mdi-newspaper-variant-outline</v-icon
      >
    </v-card-title>
    <v-card-text>
      <h3 class="white--text mb-4">INVENTORY</h3>
      <v-row class="mx-0">
        <v-col cols="6" class="mt-0 mx-0 px-0">
          <ul
            class="white--text"
            v-for="(value1, key1, index) in $store.state.inventory"
            :key="index"
          >
            <li v-if="index === 0 || index === 1">
              {{ key1 }}
              <ul class="white--text" v-for="(item, id) in value1" :key="id">
                <li v-if="item.name === 'Products'">
                  <router-link
                    to="/products"
                    class="text-indigo-darken-2 menulist_name d-flex justify-content-left"
                    >{{ item.name }}</router-link
                  >
                </li>
                <li v-else>{{ item.name }}</li>
              </ul>
            </li>
          </ul>
        </v-col>
        <v-col cols="6" class="mt-0 mx-0 px-0">
          <ul
            class="white--text menulist"
            v-for="(value1, key1, index) in $store.state.inventory"
            :key="index"
          >
            <li v-if="index === 2 || index === 3">
              {{ key1 }}
              <ul
                class="text-indigo-darken-2"
                v-for="(item, id) in value1"
                :key="id"
              >
                <li>{{ item.name }}</li>
              </ul>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {},
})
export default class InventoryCard extends Vue {}
</script>
<style scoped></style>
