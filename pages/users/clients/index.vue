<template>
  <div>
    <table-header label="Client" @clickedNewBtn="newClient"></table-header>
    <loader v-if="loading"></loader>
    <v-card v-else>
      <table-component :headers="headers" :data="clients"></table-component>
      <paginator
        v-model:page="paginatorInfo.currentPage"
        v-bind="paginatorInfo"
      ></paginator>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const clientStore = useClientsStore();
const { clients, headers, paginatorInfo, loading } = storeToRefs(clientStore);

definePageMeta({
  middleware: "auth",
});

const newClient = () => {
  navigateTo("/users/clients/create")
}
</script>

<script lang="ts">
import { TableComponent, Paginator, Loader, TableHeader } from "@/components/common";
import { useClientsStore } from "~~/stores";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "clients",
});
</script>
