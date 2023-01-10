<template>
  <v-app-bar
    :elevation="0"
    :color="theme.global.name.value === 'dark' ? '#0F0E0E' : 'primaryBgColor'"
  >
    <div id="app-bar">
      <page-title :current-title="currentTitle"></page-title>

      <!-- <div style="display: flex; align-items: center">
        <v-btn icon size="small" @click="toggleSidebar()">
          <v-icon size="x-large">mdi-menu</v-icon>
        </v-btn>
        <img id="logo" src="@/assets/images/logo.png" />
      </div> -->

      <v-avatar size="small">
        <v-img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        ></v-img>
      </v-avatar>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import mitt from "mitt";
import { useTheme } from "vuetify";
import PageTitle from "@/components/layouts/PageTitle.vue";

export default defineComponent({
  name: "app-bar",
});
</script>

<script setup lang="ts">
defineProps({
  currentTitle: {
    type: String,
    required: true,
  },
});

const emitter = mitt();
const theme = useTheme();

const toggleSidebar = () => {
  emitter.emit("toggle-sidebar");
  // toggleTheme();
};

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};
</script>

<style scoped>
#title {
  font-size: 1.5rem;
  font-weight: bold;
}

#app-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 var(--container-padding-x);
}

#logo {
  max-width: 50%;
  max-height: 2rem;
  margin-left: 1.5rem;
}
</style>
