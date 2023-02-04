<template>
  <v-text-field
    :type="type"
    :rules="validations"
    :label="label"
    :prepend-inner-icon="prependInnerIcon"
    :placeholder="placeholder"
    variant="outlined"
    density="compact"
    color="primary"
    :disabled="disabled"
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
  placeholder: {
    type: String,
    required: false,
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
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false
  }
});
</script>
