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
        style="background-color: white"
      ></v-text-field>
    </div>
    <div>
      <v-btn color="primary" flat @click="create">
        <v-icon class="mr-2">mdi-plus</v-icon> New {{ label }}
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();

const emit = defineEmits<{
  (e: "clicked-new-btn"): void
}>();

const layoutStore = useLayoutsStore();
const { currentTitle } = storeToRefs(layoutStore);

const create = () => {
  currentTitle.value = "Create " + props.label;
  emit("clicked-new-btn");
}
</script>

<script lang="ts">
import { useLayoutsStore } from '~~/stores';
import { storeToRefs } from 'pinia';
import { labeledStatement } from '@babel/types';

export default defineComponent({
  name: "table-header",
});
</script>

<style lang="scss" scoped>
@import url("@/assets/css/components/common/table/table.css");
</style>
