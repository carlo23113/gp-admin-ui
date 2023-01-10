<template>
  <div>
    test
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue";

export default defineComponent({
  name: "index",
});
</script>

<script setup lang="ts">
onMounted(() => {
  navigateTo('/dashboard');
})
</script>
