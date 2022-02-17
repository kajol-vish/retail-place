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
                    <PointOfSaleFirst></PointOfSaleFirst>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card class="elevation-8">
                    <PointOfSaleSecond></PointOfSaleSecond>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import store from "@/store";
import axios from 'axios';
import PointOfSaleFirst from './pointOfSaleFirst.vue';
import PointOfSaleSecond from './PointOfSaleSecond.vue';

@Component({
    components: {
        PointOfSaleFirst,
        PointOfSaleSecond
    },
})

export default class PointOfSale extends Vue {

};
</script>
<style scoped>
#rowmain {
    min-height: 100vh;
}
</style>