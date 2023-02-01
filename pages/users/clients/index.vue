<template>
  <div>
    <table-header label="Client" @clickedNewBtn="createModal = true"></table-header>
    <loader v-if="loading"></loader>
    <v-card elevation="2" v-else>
      <table-component :headers="headers" :data="clients"></table-component>
      <paginator
        v-model:page="paginatorInfo.currentPage"
        v-bind="paginatorInfo"
      ></paginator>
    </v-card>
    <CreateClientModal v-model:activator="createModal"></CreateClientModal>
  </div>
</template>

<script setup lang="ts">
const clientStore = useClientsStore();
const { clients, headers, paginatorInfo, loading } = storeToRefs(clientStore);

const createModal = ref(false);

definePageMeta({
  middleware: "auth",
});

const newClient = () => {
  navigateTo("/users/clients/create")
}
</script>

<script lang="ts">
import { TableComponent, Paginator, Loader, TableHeader } from "@/components/common";
import { CreateClientModal } from "~~/components/users";
import { useClientsStore } from "~~/stores";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "clients",
});
</script>
