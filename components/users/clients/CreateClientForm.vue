<template>
  <div>
    <v-form v-model="formValid">
      <p class="mb-6">Client Details</p>
      <v-row>
        <v-col cols="12" lg="3" md="4" sm="6">
          <text-field v-model:textValue="value" label="First Name" type="text"></text-field>
        </v-col>
        <v-col cols="12" lg="3" md="4" sm="6">
          <text-field v-model:textValue="value" label="Last Name" type="text"></text-field>
        </v-col>
        <v-col cols="12" lg="3" md="4" sm="6">
          <text-field v-model:textValue="value" label="Email" type="text"></text-field>
        </v-col>
        <v-col cols="12" lg="3" md="4" sm="6">
          <text-field v-model:textValue="value" label="Contact Number" type="text"></text-field>
        </v-col>
        <v-col cols="12" lg="2" md="3" sm="6">
          <text-field v-model:textValue="value" label="Birth Date" type="date"></text-field>
        </v-col>
        <v-col cols="12" lg="2" md="3" sm="3">
          <text-field v-model:textValue="value" label="Age" type="number"></text-field>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script setup lang="ts">
const formValid = ref(false);
const value = ref("");
</script>

<script lang="ts">
import { TextField } from "~~/components/common";
export default defineComponent({
  name: "create-client-form",
});
</script>
