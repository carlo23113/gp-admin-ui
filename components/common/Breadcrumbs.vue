<template>
  <v-breadcrumbs :items="breadcrumbs">
    <template v-slot:title="{ item }">
      <div :class="['hover:tw-underline tw-cursor-pointer', !item.disabled ? 'tw-text-gray-400' : '']" @click="navigateTo(item.link)">
        {{ item.title }}
      </div>
    </template>
  </v-breadcrumbs>
</template>

<script setup lang="ts">
defineProps<{
    breadcrumbs: Array<Breadcrumb>
}>();
</script>

<script lang="ts">
import { Breadcrumb } from "@/types/components";
export default defineComponent({
  name: "breadcrumbs",
});
</script>
