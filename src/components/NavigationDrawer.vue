<template>
    <v-row id="menubar" v-show="$store.state.drawer" class="blue accent-2 px-3">
        <v-col class="mt-10 mb-1 d-flex" height="480" id="menubarcol">
            <!--------------------------------Dashboard Section Start--------------------------------->
            <v-card
                min-width="200"
                height="480"
                class="ml-3 blue accent-1 rounded-xl d-flex align-center flex-column"
            >
                <v-card-title>
                    <v-icon color="white" large text-center>mdi-newspaper-variant-outline</v-icon>
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

            <!--------------------------------Dashboard Section End----------------------------------->

            <!--------------------------------Inventory Section Start--------------------------------->
            <v-card
                min-width="400"
                height="480"
                class="ml-3 blue accent-1 rounded-xl d-flex align-center flex-column"
            >
                <v-card-title>
                    <v-icon color="white" large text-center>mdi-newspaper-variant-outline</v-icon>
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
                                    <!-- <li
                                    >{{ key1 }}||{{ value1 }}||{{ index }}</li>-->
                                    <ul class="white--text" v-for="(item, id) in value1" :key="id">
                                        <!-- <li>{{ item.name }}</li> -->
                                        <li v-if="item.name === 'Products'">
                                            <router-link
                                                to="/products"
                                                class="white--text menulist_name d-flex justify-content-left"
                                            >{{ item.name }}</router-link>
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
                                    <ul class="white--text" v-for="(item, id) in value1" :key="id">
                                        <li>{{ item.name }}</li>
                                    </ul>
                                </li>
                            </ul>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
            <!--------------------------------Inventory Section End--------------------------------->
            <!--------------------------------Money Section Start--------------------------------->
            <v-card
                min-width="200"
                height="480"
                class="ml-3 blue accent-1 rounded-xl d-flex align-center flex-column"
            >
                <v-card-title>
                    <v-icon color="white" large text-center>mdi-cash-multiple</v-icon>
                </v-card-title>
                <v-card-text>
                    <h3 class="white--text mb-4">MONEY</h3>
                    <ul
                        class="white--text menulist"
                        v-for="(value, key) in $store.state.money"
                        :key="value"
                    >
                        <li>{{ key }}</li>
                    </ul>
                    </v-card-text>
            </v-card>
            <PermissionCard/>
            <!--------------------------------Money Section End--------------------------------->
            <!--------------------------------Retail Section Start ---------------------------------->
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
                        <li>{{ value }}</li>
                        <ul class="white--text" v-for="(item, item1) in data" :key="item1">
                            <li>{{ item }}</li>
                        </ul>
                    </ul>
                </v-card-text>
            </v-card>
            <!--------------------------------Money Section End ---------------------------------->
            <!--------------------------------Report Section Start ---------------------------------->
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
                        v-for="(value, key) in $store.state.reports"
                        :key="value"
                    >
                        <li>{{ key }}</li>
                    </ul>
                </v-card-text>
            </v-card>
            <!--------------------------------Reports Section End ---------------------------------->
            <!--------------------------------Location Section Start ---------------------------------->
            <v-card
                min-width="200"
                height="480"
                class="ml-3 blue accent-1 rounded-xl d-flex align-center flex-column"
            >
                <v-card-title>
                    <v-icon color="white" large text-center>mdi-map-marker</v-icon>
                </v-card-title>
                <v-card-text>
                    <h3 class="white--text mb-4">LOCATION</h3>
                    <ul
                        class="white--text menulist"
                        v-for="(value, key) in $store.state.location"
                        :key="value"
                    >
                        <li>{{ key }}</li>
                    </ul>
                </v-card-text>
            </v-card>
            <!--------------------------------Location Section End ---------------------------------->
            <!--------------------------------System Setting Section Start ---------------------------------->
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
                        v-for="(value, key) in $store.state.systemsettings"
                        :key="value"
                    >
                        <li>{{ key }}</li>
                    </ul>
                </v-card-text>
            </v-card>
            <!--------------------------------System Setting Section End ---------------------------------->
            <!--------------------------------Support Section Start ---------------------------------->
            <v-card
                min-width="200"
                height="480"
                class="ml-3 blue accent-1 rounded-xl d-flex align-center flex-column"
            >
                <v-card-title>
                    <v-icon color="white" large text-center>mdi-lifebuoy</v-icon>
                </v-card-title>
                <v-card-text>
                    <h3 class="white--text mb-4">Support</h3>
                    <ul
                        class="white--text menulist"
                        v-for="(value, key) in $store.state.support"
                        :key="value"
                    >
                        <li>{{ key }}</li>
                    </ul>
                </v-card-text>
            </v-card>
            <!--------------------------------Support Section End ---------------------------------->
        </v-col>
    </v-row>
</template>

<script lang="ts">
// import Vue from "vue";
import { Vue, Component } from 'vue-property-decorator';
import store from "@/store";
import PermissionCard from './PermissionCard.vue'

@Component({
    components: {
PermissionCard
    },
})

export default class NavigationDrawer extends Vue {


};
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
