<template>
    <v-card class="elevation-8" width="700">
            <v-text-field label="Product Id" required class="pt-10"></v-text-field>
            <v-text-field label="Product Name" required></v-text-field>
            <v-select label="Size" required :items="$store.state.options"></v-select>
            <v-label class="ml-0 pl-0">
                <span>Please Select a Gender</span>
            </v-label>
            <v-radio-group v-model="$store.state.radio_value" mandatory row>
                <v-radio label="Male" value="male"></v-radio>
                <v-radio label="Female" value="female"></v-radio>
            </v-radio-group>
            <v-select label="Color" required :items="$store.state.colors"></v-select>
            <v-btn>Cancel</v-btn>
            <v-btn>Submit</v-btn>
    </v-card>

    <!-- 
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>-->
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import store from "@/store";
import AddProductPrice from './AddProductPrice.vue';

@Component({
    components: {
        AddProductPrice
    },
})

export default class AddProductForm extends Vue {


};
</script>
<style scoped>
.labelgender {
    left: 0px !important;
    right: auto !important;
    position: absolute !important;
}
</style>