<template>
  <v-card
    min-width="200"
    height="480"
    class="ml-3 blue accent-1 rounded-xl d-flex align-center flex-column"
  >
    <v-card-title>
      <v-icon color="white" large text-center>mdi-file-chart-outline</v-icon>
    </v-card-title>
    <v-card-text>
      <h3 class="white--text mb-4">REPORTS</h3>
      <ul
        class="white--text menulist"
        v-for="(value, key, index) in $store.state.reports"
        :key="index"
      >
        <router-link
          to="/report-tool"
          class="text-indigo-darken-2 menulist_name"
        >
          <li>{{ key }}</li>
        </router-link>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import store from "@/store";

@Component({
  components: {},
})
export default class ReportsCard extends Vue {}
</script>
<style scoped>
.menulist_name {
  text-decoration: none;
}
</style>
