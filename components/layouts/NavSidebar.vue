<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="sidebar"
    permanent
    width="225"
    color="grey-darken-3"
  >
    <div id="logo-container">
      <v-btn
        variant="text"
        icon
        size="small"
        elevation="0"
        @click="toggleSidebar()"
      >
        <v-icon size="x-large" color="white">mdi-menu</v-icon>
      </v-btn>
      <img id="logo" src="@/assets/images/logo.png" />
    </div>

    <v-list color="white" density="compact" nav>
      <v-list-subheader>Menu</v-list-subheader>
      <div v-for="(nav, i) in navLinks" :key="i">
        <v-list-item
          v-if="!nav.children?.length"
          class="tw-text-white"
          :prepend-icon="nav.icon"
          :to="nav.route"
          @click.stop="$emit('click', nav)"
        >
          <small>{{ nav.title }}</small>
        </v-list-item>
        <v-list-group v-else :value="nav.title">
          <template v-slot:activator="{ props }">
            <v-list-item
              class="tw-text-white"
              v-bind="props"
              :prepend-icon="nav.icon"
              :title="nav.title"
            ></v-list-item>
          </template>
          <v-list-item
            v-for="(child, index) in nav.children"
            class="tw-text-white"
            :key="index"
            :title="child.title"
            :to="child.route"
            @click.stop="$emit('click', child)"
          >
          </v-list-item>
        </v-list-group>
      </div>
      <v-list-item
        prepend-icon="mdi-logout"
        class="tw-text-white"
        title="Log Out"
        style="margin-top: auto"
        @click="logout()"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { ref } from "vue";
import { NavLink } from "@/types/layout";
import { useTheme } from "vuetify";

export default defineComponent({
  name: "nav-sidebar",
});
</script>

<script setup lang="ts">
const theme = useTheme();
const { onLogout } = useApollo();

defineProps({
  navLinks: {
    type: Array<NavLink>,
    required: true,
  },
});

const router = useRouter();

let drawer = ref(true);
let sidebar = ref(false);

const toggleSidebar = () => {
  sidebar.value = !sidebar.value;
};

const logout = () => {
  onLogout();
  router.push("/login");
};
</script>

<style lang="scss" scoped>
#logo-container {
  display: flex;
  align-items: center;
  padding: 0.5rem 0 0 0.5rem;

  #logo {
    max-width: 40%;
    max-height: 2rem;
    margin-left: 1.5rem;
  }
}
</style>
