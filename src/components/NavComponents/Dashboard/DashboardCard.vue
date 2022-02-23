<template>
  <v-card
    min-width="200"
    height="480"
    class="ml-3 blue accent-1 rounded-xl d-flex align-center flex-column"
  >
    <v-card-title>
      <v-icon color="white" large text-center
        >mdi-newspaper-variant-outline</v-icon
      >
    </v-card-title>
    <v-card-text>
      <h3 class="white--text mb-4">DASHBOARD</h3>
      <ul
        class="white--text menulist"
        v-for="(value, key) in $store.state.dashboard"
        :key="value"
      >
        <li>{{ key }}</li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {},
})
export default class DashboardCard extends Vue {}
</script>
<style scoped></style>
