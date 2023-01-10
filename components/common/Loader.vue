<template>
    <v-progress-circular class="loader" :size="50" color="primary" indeterminate></v-progress-circular>
</template>

<script lang="ts">
export default defineComponent({
    name: "loader"
})
</script>

<style lang="scss">
.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
}
</style>