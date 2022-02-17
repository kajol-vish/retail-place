<template>
    <v-container fluid class="cardContainer">
        <v-row class="d-flex flex-column justify-center" id="rowMain">
            <v-col cols="12">
              <h1>Shopping Cart</h1>
              <v-divider></v-divider>
            </v-col>
            <v-col>
                <v-card class="elevation-8 grey">

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

export default class PointOfSaleSecond extends Vue {

};
</script>
<style scoped>
.cardContainer{
    height: 70vh;
}
</style>