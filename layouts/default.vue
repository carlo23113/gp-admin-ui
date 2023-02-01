<template>
  <v-layout>
    <nav-sidebar
      :nav-links="navLinks"
      @click="onClickNav($event)"
    ></nav-sidebar>
    <v-main>
      <app-bar :current-title="currentTitle" style="position: fixed"></app-bar>

      <div id="content">
        <slot></slot>
      </div>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">

const layoutStore = useLayoutsStore();
const { navLinks, currentTitle } = storeToRefs(layoutStore);
const route = useRoute();

onMounted(() => {
  let currentPath = route.path.split("/").reverse()[0];
  currentPath = currentPath[0].toUpperCase() + currentPath.substring(1);

  if (currentPath !== currentTitle.value) {
    currentTitle.value = currentPath;
  }
});

const onClickNav = (data: NavLink) => {
  if (data.title) {
    currentTitle.value = data.title;
  }
};
</script>

<script lang="ts">
import NavSidebar from "@/components/layouts/NavSidebar.vue";
import AppBar from "@/components/layouts/AppBar.vue";
import { onMounted } from "vue";
import { NavLink } from "@/types/layout";
import { useLayoutsStore } from "@/stores";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "default",
});
</script>

<style lang="scss" scoped>
#content {
  padding: var(--container-padding);
  min-height: 100vh;
  background-color: var(--primary-bg-color);
}
</style>
