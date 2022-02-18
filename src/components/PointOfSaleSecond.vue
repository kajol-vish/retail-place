<template>
    <v-container fluid class="cardContainer">
        <v-row class="d-flex flex-column justify-center" id="rowMain">
            <v-col cols="12">
                <v-app-bar color="blue accent-2" dense dark>
                    <v-icon>mdi-cart</v-icon>

                    <v-toolbar-title>Shopping Cart</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </v-app-bar>
                <v-divider></v-divider>
                <v-simple-table fixed-header>
                    <thead>
                        <tr>
                            <th class="text-left">Name</th>
                            <th class="text-left">Quantity</th>
                            <th class="text-left">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in $store.state.addProductCart" :key="product.id">
                            <td>{{ product.name }}</td>
                            <td>{{ product.unit }}</td>
                            <td>{{ product.price }}</td>
                            <td>{{ product.totalprice }}</td>
                        </tr>
                    </tbody>
                    <v-divider></v-divider>
                    <div>
                        <tr>
                            <td>Taxes</td>
                            <td></td>
                            <td></td>
                            <td>{{ $store.state.totalTax }}</td>
                        </tr>
                        <v-divider></v-divider>
                        <tr>
                            <td>Total Price</td>
                            <td></td>
                            <td></td>
                            <td>{{ $store.state.totalAmount }}</td>
                        </tr>
                    </div>
                </v-simple-table>
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

export default class PointOfSaleSecond extends Vue {


};
</script>
<style scoped>
.cardContainer {
    height: 70vh;
}
</style>