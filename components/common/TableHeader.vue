<template>
  <div class="tw-flex tw-mt-2 tw-mb-8 tw-justify-between tw-items-center">
    <div class="tw-flex tw-items-center tw-w-1/3 tw-gap-4">
      <div class="tw-w-full">
        <v-text-field
          :label="'Search ' + label"
          density="compact"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          clearable
          color="primary"
          hide-details
          style="background-color: white"
        ></v-text-field>
      </div>
      <v-btn color="primary" variant="outlined" flat>
        <v-icon class="mr-2">mdi-filter</v-icon> Filter
      </v-btn>
    </div>
    <v-btn color="primary" flat @click="create">
      <v-icon class="mr-2">mdi-plus</v-icon> <span>New {{ label }}</span>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
}>();

const emit = defineEmits<{
  (e: "clicked-new-btn"): void;
}>();

const create = () => {
  emit("clicked-new-btn");
};
</script>

<script lang="ts">
export default defineComponent({
  name: "table-header",
});
</script>
