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
                <v-simple-table fixed-header id="tableContainer">
                    <thead>
                        <tr>
                            <th class="text-left">Name</th>
                            <th class="text-left">Quantity</th>
                            <th class="text-left">Price Per Product</th>
                            <th class="text-left">Total Price</th>
                        </tr>
                    </thead>
                    <tbody id="table-body">
                        <tr v-for="(product,index) in $store.state.addProductCart" :key="index">
                            <td>{{ product.name }}</td>
                            <td>{{ product.unit }}</td>
                            <td>{{ product.price }}</td>
                            <td>{{ product.totalprice }}</td>
                        </tr>
                        {{$store.state.addProductCart.id}}
                    </tbody>
                </v-simple-table>
                <v-divider></v-divider>
            </v-col>
        </v-row>
        <v-row class="mb-0 pb-0">
            <v-col cols="12" class="mb-0 pb-0">
                <v-row>
                    <v-col cols="12" class="d-flex flex-row text1">
                        <span >Taxes</span>
                        <h2>{{ $store.state.totalTax }}</h2>
                    </v-col>
                    <v-col cols="12" class="d-flex flex-row text1">
                        <span>Total Price</span>
                        <h2>{{ $store.state.totalAmount }}</h2>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" class="mb-0 pb-0">
        <router-link to="/">
                <v-btn x-large color="blue accent-4" @click="submitCartData()">Submit</v-btn>
                </router-link>
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
submitCartData(){
    // const data = this.$store.state.addProductCart
    // const response= await axios.post("http://localhost:3000/cartProduct", data)
    // const response1= await axios.get("http://localhost:3000/cartProduct")
    // this.$store.dispatch('getCartData',response1.data)
    console.log(this.$store.state.addProductCart)
}

};
</script>
<style scoped>
.cardContainer {
    min-height: 74vh;
}
#tableContainer{
    min-height:370px;
     overflow-y: scroll;
}
.text1{
justify-content: space-between
}

</style>