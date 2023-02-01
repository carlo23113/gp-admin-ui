<template>
  <div>
    <loader v-if="loading"></loader>
    <v-card v-else>
      <table-component :headers="headers" :data="admins"></table-component>
      <paginator
        v-model:page="paginatorInfo.currentPage"
        v-bind="paginatorInfo"
      ></paginator>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const adminStore = useAdminsStore();
const { admins, headers, paginatorInfo, loading } = storeToRefs(adminStore);

definePageMeta({
  middleware: "auth",
});

</script>

<script lang="ts">
import { TableComponent, Paginator, Loader } from "@/components/common";
import { useAdminsStore } from "~~/stores";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "admins",
});
</script>
