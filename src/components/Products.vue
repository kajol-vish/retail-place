<template>
    <v-container>
        <v-row class="d-flex flex-column justify-center">
            <v-col cols="12">
                <h2 class="my-0">Products</h2>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
                <v-col cols="8">
                    <v-card>
                        <v-card-title>
                            <v-text-field
                                v-model="$store.state.search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-card-title>
                        <v-data-table
                            :headers="$store.state.headers"
                            :items="$store.state.products"
                            :search="$store.state.search"
                        >
                            <template v-slot:[`item.actions`]="{ item }">
                                <router-link to="/addproducts">
                                    <v-icon small class="mr-2" @click="editProduct(item)">mdi-pencil</v-icon>
                                </router-link>
                                <v-icon small @click="deleteProduct(item.id)">mdi-delete</v-icon>
                            </template>
                        </v-data-table>
                        <router-link to="/addproducts">
                            <v-btn
                                class="ma-2 blue accent-4 white--text text-decoration-none"
                                @click="addproduct"
                            >Add Product</v-btn>
                        </router-link>
                    </v-card>
                </v-col>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AddProductPrice from './AddProductPrice.vue';
import AddProductForm from './AddProductForm.vue';
import store from "@/store";
import axios from 'axios';

@Component({
    components: {
        AddProductPrice,
        AddProductForm
    },
})

export default class Products extends Vue {

    editProduct(item: any) {
        this.$store.dispatch("EditProduct", item);
    }
    async deleteProduct(item: number) {
        await axios.delete(`http://localhost:3000/products/${item}`)
        const response = await axios.get("http://localhost:3000/products")
        this.$store.dispatch("Products", response);
    }
    addproduct(item:any) {
        this.$store.dispatch("AddProduct",item);
    }
   async beforeCreate(){
const response = await axios.get("http://localhost:3000/products")
        this.$store.dispatch("Products", response);
    }
};
</script>
<style scoped>
</style>