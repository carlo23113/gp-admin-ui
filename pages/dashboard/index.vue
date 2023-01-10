<template>
  <div>
    <v-row>
      <v-col v-for="(card, i) in cards" :key="i" cols="12" lg="3" md="6" sm="12">
        <item-card v-bind="card"></item-card>
      </v-col>
      <v-col cols="12">
        <sales-chart></sales-chart>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <sales-per-branch-chart></sales-per-branch-chart>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <new-clients-per-branch-chart></new-clients-per-branch-chart>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import {
  ItemCard,
  NewClientsPerBranchChart,
  SalesPerBranchChart,
  SalesChart,
} from "@/components/dashboard";

definePageMeta({
  middleware: "auth",
});


const cards = [
  {
    cardTitle: "Clients",
    icon: "mdi-account",
    accentColor: "#e91e6251",
    isPositive: true
  },
  {
    cardTitle: "Sales",
    icon: "mdi-currency-php",
    accentColor: "#ff990046",
    isPositive: true
  },
  {
    cardTitle: "Branches",
    icon: "mdi-home-variant",
    accentColor: "#2195f343",
    isPositive: false
  },
  {
    cardTitle: "Staffs",
    icon: "mdi-clipboard-account",
    accentColor: "#4caf4f50",
    isPositive: true
  },
];
</script>

<script lang="ts">
export default defineComponent({
  name: "dashboard-page",
});
</script>
