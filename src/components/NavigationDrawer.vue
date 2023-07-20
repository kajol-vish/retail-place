<template>
  <v-row
    id="menubar"
    v-show="$store.state.drawer"
    class="blue accent-2 px-3"
    @click="$store.state.drawer = !$store.state.drawer"
  >
    <v-col class="mt-10 mb-1 d-flex" height="480" id="menubarcol">
      <DashboardCard />
      <InventoryCard />
      <RetailCard />
      <PermissionCard />
      <ReportsCard />
      <MoneyCard />
      <LocationCard />
      <SystemSettingsCard />
      <SupportCard />
    </v-col>
  </v-row>
</template>

<script lang="ts">
// import Vue from "vue";
import { Vue, Component } from "vue-property-decorator";
import store from "@/store";
import InventoryCard from "./NavComponents/Inventory/InventoryCard.vue";
import PermissionCard from "./NavComponents/Permission/PermissionCard/PermissionCard.vue";
import DashboardCard from "./NavComponents/Dashboard/DashboardCard.vue";
import MoneyCard from "./NavComponents/Money/MoneyCard.vue";
import RetailCard from "./NavComponents/Retail/RetailCard.vue";
import ReportsCard from "./NavComponents/Reports/ReportsCard.vue";
import LocationCard from "./NavComponents/Location/LocationCard.vue";
import SystemSettingsCard from "./NavComponents/SystemSettings/SystemSettingsCard.vue";
import SupportCard from "./NavComponents/Support/SupportCard.vue";

@Component({
  components: {
    DashboardCard,
    InventoryCard,
    PermissionCard,
    MoneyCard,
    RetailCard,
    ReportsCard,
    LocationCard,
    SystemSettingsCard,
    SupportCard,
  },
})
export default class NavigationDrawer extends Vue {}
</script>
<style>
#menubar {
  background-color: #007df3;
  max-height: 480px;
  display: flex;
  overflow-x: scroll;
}
#menubarcol {
  overflow-x: scroll;
  overflow-y: hidden;
}
.menulist_name {
  text-decoration: none;
}
ul {
  text-align: left;
  list-style-type: none;
}
li {
  margin-top: 0;
}
::-webkit-scrollbar {
  height: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(255, 255, 255);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #fff;
}
</style>
