<template>
  <v-card
    min-width="200"
    height="480"
    class="ml-3 blue accent-1 rounded-xl d-flex align-center flex-column"
  >
    <v-card-title>
      <v-icon color="white" large text-center>mdi-tools</v-icon>
    </v-card-title>
    <v-card-text>
      <h3 class="white--text mb-4">SYSTEM SETTINGS</h3>
      <ul
        class="white--text menulist"
        v-for="(value, key, index) in $store.state.systemsettings"
        :key="index"
      >
        <li>{{ key }}</li>
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
export default class SystemSettingsCard extends Vue {}
</script>
<style scoped>
.menulist_name {
  text-decoration: none;
}
</style>
