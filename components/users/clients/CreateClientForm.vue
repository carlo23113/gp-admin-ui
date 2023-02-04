<template>
  <v-card>
    <v-card-text>
      <v-form v-model="formValid">
        <p class="tw-text-xl tw-font-semibold mb-6">Client Info</p>
        <v-row>
          <v-col
            v-for="field in newClientFields"
            :key="field.id"
            cols="12"
            :md="field.md"
          >
            <TextField
              v-model:textValue="newClientInfo[field.model]"
              v-bind="field"
              :disabled="canEdit"
            ></TextField>
          </v-col>
          <v-col cols="12" md="4">
            <v-autocomplete
              label="Branch"
              density="compact"
              variant="outlined"
              :disabled="canEdit"
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-form>
      <div>
        <v-btn
          v-if="canEdit"
          class="mr-2"
          flat
          color="primary"
          rounded="pill"
          size="small"
          @click="canEdit = false"
          >Edit</v-btn
        >
        <v-btn
          v-else
          class="mr-2"
          flat
          color="primary"
          rounded="pill"
          size="small"
          >Save</v-btn
        >
        <v-btn
          v-if="canEdit"
          color="primary"
          rounded="pill"
          variant="outlined"
          size="small"
          >Clear</v-btn
        >
        <v-btn
          v-else
          color="primary"
          rounded="pill"
          variant="outlined"
          size="small"
          @click="canEdit = true"
          >Cancel</v-btn
        >
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const formValid = ref(false);
const clientStore = useClientsStore();
const { newClientInfo } = storeToRefs(clientStore);
const canEdit = ref(true);

const newClientFields = [
  {
    id: 1,
    label: "First Name*",
    model: "first_name",
    type: "text",
    md: 4,
    required: true,
  },
  {
    id: 2,
    label: "Middle Name",
    model: "middle_name",
    type: "text",
    md: 4,
    required: false,
  },
  {
    id: 3,
    label: "Last Name*",
    model: "last_name",
    type: "text",
    md: 4,
    required: false,
  },
  {
    id: 4,
    label: "Email Address*",
    model: "email",
    placeholder: "juandelacruz@email.com",
    type: "text",
    md: 6,
    required: false,
  },
  {
    id: 5,
    label: "Password*",
    model: "password",
    type: "password",
    md: 6,
    required: false,
  },
  {
    id: 6,
    label: "Birth Date*",
    model: "birthdate",
    type: "date",
    md: 4,
    required: false,
  },
  {
    id: 7,
    label: "Age",
    model: "age",
    type: "number",
    md: 4,
    required: false,
  },
];
</script>

<script lang="ts">
import { TextField } from "~~/components/common";
import { useClientsStore } from "~~/stores";
import { storeToRefs } from "pinia";
import { client } from "process";

export default defineComponent({
  name: "create-client-form",
});
</script>
