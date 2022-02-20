<template>
    <v-container>
        <v-row class="d-flex flex-row justify-center">
            <v-col cols="12">
                <v-tabs class="d-flex justify-center" v-model="$store.state.tab">
                    <v-tab>Product Info</v-tab>
                    <v-tab>Pricing</v-tab>
                </v-tabs>
                <v-tabs-items v-model="$store.state.tab" class="d-flex justify-center py-10 px-10">
                    <v-form ref="form" @submit.prevent="submit">
                        <v-tab-item
                            transition="fade-transition"
                            class="tabitem elevation-4 px-10 py-10"
                        >
                            <v-text-field
                                type="input"
                                label="Product Name"
                                mandatory
                                v-model="$store.state.productName"
                            ></v-text-field>
                            <v-select
                                label="Size"
                                required
                                :items="$store.state.options"
                                v-model="$store.state.productSize"
                                :value="$store.state.options"
                            ></v-select>
                            <v-label class="ml-0 pl-0">
                                <span>Please Select a Gender</span>
                            </v-label>
                            <v-radio-group v-model="$store.state.radioValue" mandatory row>
                                <v-radio label="Male" value="male"></v-radio>
                                <v-radio label="Female" value="female"></v-radio>
                            </v-radio-group>
                            <v-select
                                label="Color"
                                required
                                :items="$store.state.colors"
                                v-model="$store.state.productColor"
                            ></v-select>
                        </v-tab-item>
                        <v-tab-item
                            transition="fade-transition"
                            class="tabitem elevation-4 px-10 py-10"
                        >
                            <v-text-field
                                label="Price"
                                required
                                class="pt-10"
                                v-model="$store.state.productPrice"
                            ></v-text-field>
                            <v-text-field
                                label="Tax"
                                required
                                v-model="$store.state.productTax"
                                class="mb-10"
                            ></v-text-field>
                            <router-link to="/products" class="button">
                                <v-btn
                                    class="blue accent-2 white--text"
                                    @click="clearProduct"
                                >Cancel</v-btn>
                            </router-link>
                            <router-link
                                to="/products"
                                class="button"
                                v-if="$store.state.addButtonToggle"
                            >
                                <v-btn
                                    type="submit"
                                    @click="submit"
                                    class="blue accent-2 white--text"
                                >Submit</v-btn>
                            </router-link>
                            <router-link to="/products" class="button" v-else>
                                <v-btn
                                    type="update"
                                    @click="update"
                                    class="blue accent-2 white--text"
                                >Update</v-btn>
                            </router-link>
                        </v-tab-item>
                    </v-form>
                </v-tabs-items>
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

export default class AddProducts extends Vue {
    async submit() {
        this.$store.state.totalprice = parseInt(this.$store.state.productPrice) + (parseInt(this.$store.state.productPrice) * (parseInt(this.$store.state.productTax) / 100))
        const data = {
            name: this.$store.state.productName, size: this.$store.state.productSize, gender: this.$store.state.radioValue,
            color: this.$store.state.productColor, totalprice: this.$store.state.totalprice, price: this.$store.state.productPrice,
            tax: this.$store.state.productTax
        }
        const response = await axios.post("http://localhost:3000/products", data)
        console.log(data)
        this.$store.dispatch("Products")
    }

    update() {
        this.$store.dispatch("UpdateProduct");
    }
    clearProduct() {
        this.$store.dispatch("AddProduct")
    }

};
</script>
<style scoped>
.tabitem {
    width: 600px;
    height: 400px;
}
.button {
    text-decoration: none;
    margin: 20px;
}
</style>