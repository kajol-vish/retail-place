<template>
    <v-container fluid>
        <v-row class="d-flex flex-row " id="rowMain" self-align>
           <v-col v-for="(product, id) in $store.state.products" :key="id" cols="3">
                <v-card class="elevation-3 taskcard d-flex flex-column align-center">
                    <v-card-title>
                        <h3>{{ product.name }}</h3>
                    </v-card-title>
                    <v-card-text>
                        <v-icon>mdi-box</v-icon>
                        <h5>Total THC : 0</h5>
                        <h5>Total CBD : 0</h5>
                        <h3>{{product.units}} units Available</h3>
                        <h3>Rs.{{product.totalprice}} per units</h3>
                        <v-btn class="blue accent-4 white--text" @click="select(product)">Select</v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import store from "@/store";
import axios from 'axios';

@Component({
    components: {

    },
})

export default class PointOfSaleFirst extends Vue {
    select(product:any){
        console.log(product)
        
    }

};
</script>
<style scoped>
.taskcard{
    min-height: 200px;
    overflow-y: scroll;
}
</style>