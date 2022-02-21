<template>
    <v-container fluid>
        <v-row class="d-flex flex-row" id="rowMain" self-align>
            <v-col v-for="product in $store.state.products" :key="product.name" cols="3">
                <v-card
                    class="elevation-3 d-flex flex-column align-center justify-space-around"
                    id="taskcard"
                >
                    <div>
                        <v-card-title class="d-flex justify-space-around">{{ product.name }}</v-card-title>
                        <v-card-text>
                            <v-icon>mdi-box</v-icon>
                            <h5>Total THC : 0</h5>
                            <h5>Total CBD : 0</h5>
                            <!-- <h3>{{ product.units }} units Available</h3> -->
                            <h3>Rs.{{ product.price }} per unit</h3>
                            <v-btn
                                class="blue accent-4 white--text my-4"
                                @click="select(product.id)"
                            >Select</v-btn>
                        </v-card-text>
                        <v-overlay
                            v-model="dialog"
                            :absolute="absolute"
                            :opacity="opacity"
                            v-show="activeOverlayId === product.id"
                            class="my-3 d-flex-column justify-center"
                        >
                            <v-card-title class="d-flex justify-space-around">
                                <h3>{{ product.name }}</h3>
                            </v-card-title>
                            <v-card-text class="mt-6">
                                <v-icon
                                    @click="clicked(product, 'subtract')"
                                    :disabled="count == 0"
                                >mdi-minus</v-icon>
                                <span class="h2 px-3">{{ count }}</span>
                                <v-icon
                                    @click="clicked(product, 'add')"
                                    :disabled="count == unit"
                                >mdi-plus</v-icon>
                                <br />
                                <v-btn
                                    class="blue accent-4 white--text mt-6"
                                    @click="addToCart(product, count)"
                                >ADD TO CART</v-btn>
                            </v-card-text>
                        </v-overlay>
                    </div>
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
    absolute = true
    unit = null
    opacity = 0.85
    count = 0
    dialog = false
    activeOverlayId = 0

    select(productId: number) {
        this.dialog = true
        this.activeOverlayId = productId
    }
    addToCart(product: any, count: number) {
        this.dialog = false
        this.$store.dispatch('addToCart', { product, count})
        this.count = 0
    }
    clicked(product: any, func: string) {
        if (func == 'subtract') {
            --this.count

        }
        else if (func == 'add') {
            this.unit = product.units
            ++this.count;
        }
    }
};
</script>
<style scoped>
#taskcard {
    min-height: 250px;
}
#rowMain{
        height: 75vh;
    overflow-y: scroll;
}
::-webkit-scrollbar {
  height: 12px;
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 0px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #448aff;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #448aff;
}
</style>