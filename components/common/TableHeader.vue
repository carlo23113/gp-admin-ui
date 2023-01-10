<template>
  <div class="table-header">
    <div class="search">
      <v-text-field
        :label="'Search ' + label"
        density="compact"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        clearable
        color="primary"
        hide-details
        rounded
      ></v-text-field>
    </div>
    <div>
      <v-btn color="primary" flat @click="$emit('clicked-new-btn')">
        <v-icon class="mr-2">mdi-plus</v-icon> New {{ label }}
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<script lang="ts">
export default defineComponent({
  name: "table-header",
});
</script>

<style lang="scss" scoped>
@import url("@/assets/css/components/common/table/table.css");
</style>
