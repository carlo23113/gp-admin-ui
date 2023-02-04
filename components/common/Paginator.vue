<template>
  <div class="paginator-container">
    <div class="paginator">
      Show
      <v-select
        v-model="page"
        density="compact"
        variant="outlined"
        style="margin-bottom: -20px"
        color="primary"
      ></v-select>
      entries. Showing rows 1 to {{ count }} of {{ total }}
    </div>
    <v-pagination
      color="primary"
      :length="lastPage"
      rounded="circle"
      size="small"
      @update="$emit('update:page', $event.target.value)"
    ></v-pagination>
  </div>
</template>

<script setup lang="ts">
interface PaginatorInfo {
  count?: number;
  total?: number;
  currentPage?: number;
  lastPage?: number;
}

const props = withDefaults(defineProps<PaginatorInfo>(), {
  count: 0,
  total: 0,
  currentPage: 0,
  lastPage: 0
})

const page = props.currentPage;

</script>

<script lang="ts">
export default defineComponent({
  name: "pagintor",
});
</script>

<style lang="scss" scope>

.paginator-container {
  @apply tw-flex tw-items-center tw-justify-between tw-mt-6 tw-px-4 tw-pb-4;

  .paginator {
    @apply tw-flex tw-gap-3 tw-items-center;
  }
}
</style>
