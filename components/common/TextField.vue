<template>
  <v-text-field
    :type="type"
    :rules="validations"
    :label="label"
    :prepend-inner-icon="prependInnerIcon"
    variant="outlined"
    density="compact"
    color="primary"
    clearable
    @input="$emit('update:textValue', $event.target.value)"
  ></v-text-field>
</template>

<script lang="ts">
export default defineComponent({
  name: "text-field",
});
</script>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  prependInnerIcon: {
    type: String,
    required: false,
  },
  model: {
    type: String,
    required: false,
  },
  validations: {
    type: Array<any>,
    required: false,
  },
  textValue: {
    type: String,
    required: true,
  },
});
</script>
