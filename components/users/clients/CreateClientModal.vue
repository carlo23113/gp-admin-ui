<template>
  <v-dialog v-model="dialog" width="800" persistent>
    <v-card>
      <v-card-title> New Client </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col v-for="field in newClientFields" :key="field.id" cols="12" :md="field.md">
              <v-text-field
                :label="field.label"
                :type="field.type"
                variant="outlined"
                density="comfortable"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const props = defineProps(["activator"]);
const emit = defineEmits(["update:activator"]);
const newClientFields = [
  {
    id: 1,
    label: "First Name*",
    model: "firstName",
    type: "text",
    md: 4,
    required: true
  },
  {
    id: 2,
    label: "Middle Name",
    model: "middleName",
    type: "text",
    md: 4,
    required: false
  },
  {
    id: 3,
    label: "Last Name*",
    model: "lastName",
    type: "text",
    md: 4,
    required: false
  },
  {
    id: 4,
    label: "Email Address*",
    model: "emailAddress",
    type: "text",
    md: 6,
    required: false
  },
  {
    id: 5,
    label: "Password*",
    model: "password",
    type: "password",
    md: 6,
    required: false
  },
  {
    id: 6,
    label: "Birth Date*",
    model: "birthDate",
    type: "date",
    md: 6,
    required: false
  },
  {
    id: 7,
    label: "Age",
    model: "age",
    type: "number",
    md: 6,
    required: false
  },
]

const dialog = computed({
  get() {
    return props.activator;
  },
  set(newValue) {
    emit("update:activator", newValue);
  },
});
</script>

<script lang="ts">
import { computed } from "vue";
export default defineComponent({
  name: "create-client-modal",
});
</script>
