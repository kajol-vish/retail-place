<template>
  <v-app max-width="100%">
    <v-app-bar app class="blue accent-2 elevation-0" dark>
      <div class="d-flex align-center">
        <v-btn class fab dark small color="red">
          <h2>KV</h2>
        </v-btn>
      </div>
      <v-toolbar-title class="white--text text-h6 ml-3"
        >Retail Place</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        @click="$store.state.drawer = !$store.state.drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main class="mainc">
      <navigation-drawer id="mainmenu"></navigation-drawer>
      <v-row id="mainrow" v-show="!$store.state.drawer">
        <router-view />
      </v-row>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";

export default Vue.extend({
  name: "App",
  components: {
    NavigationDrawer,
  },
  data: () => ({}),

  beforeCreate() {
    this.$store.dispatch("Inventory");
    this.$store.dispatch("Dashboard");
    this.$store.dispatch("Money");
    this.$store.dispatch("Retail");
    this.$store.dispatch("Reports");
    this.$store.dispatch("Location");
    this.$store.dispatch("SystemSettings");
    this.$store.dispatch("Support");
    this.$store.dispatch("Products");
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.mainc {
  display: flex;
  flex: 1;
  max-width: 100%;
  background: url("./assets/bg1.jpg");
  background-size: cover;
  justify-items: center;
}
/* #mainmenu{
  position: absolute;
} */
#mainrow {
  flex-direction: column;
}
</style>
