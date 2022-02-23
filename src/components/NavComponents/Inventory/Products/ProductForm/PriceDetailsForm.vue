<template>
    <v-card class="elevation-8" width="700">
            <v-text-field label="AddPrice" required class="pt-10"></v-text-field>
            <v-text-field label="AddPrice" required class="pt-10"></v-text-field>
    </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import store from "@/store";

@Component({
    components: {

    },
})

export default class PriceDetailsForm extends Vue {
};
</script>
<style scoped>

</style>