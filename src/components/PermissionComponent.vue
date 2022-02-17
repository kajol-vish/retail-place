<template>
    <v-container>
        <v-row class="d-flex flex-column justify-center">
            <v-col cols="12">
                <h2 class="my-0">PERMISSION</h2>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
                <v-card class="elevation-5">

                </v-card>
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
    },
})

export default class AddProducts extends Vue {
   

};
</script>
<style scoped>

</style>