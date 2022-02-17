<template>
    <v-card class="elevation-8" width="700">
            <v-text-field label="AddPrice" required class="pt-10"></v-text-field>
            <v-text-field label="AddPrice" required class="pt-10"></v-text-field>
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

@Component({
    components: {

    },
})

export default class AddProductPrice extends Vue {


};
</script>
<style scoped>

</style>