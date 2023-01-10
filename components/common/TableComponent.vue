<template>
    <!-- <div class="card-header">
      <div class="search">
        <v-text-field label="Search" density="compact" prepend-inner-icon="mdi-magnify" variant="outlined" clearable
          color="primary" hide-details rounded></v-text-field>
      </div>
      <div>
        <v-btn color="primary" flat> <v-icon class="mr-2">mdi-plus</v-icon> New Admin </v-btn>
      </div>
    </div> -->
    <v-table>
      <thead>
        <tr>
          <th v-for="(header, i) in headers" :key="i" class="text-left">
            {{ header.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(d, index) in data" :key="index">
          <td v-for="(header, h) in headers" :key="h">
            {{ d[header.value] }}
          </td>
        </tr>
      </tbody>
    </v-table>
    <div v-if="!data.length" class="empty-state">
      <div>
        <img src="@/assets/svgs/no-data.svg" width="200" />
        <div class="no-data-text">
          No data found...
        </div>
      </div>
    </div>
</template>



<script setup lang="ts">
defineProps<{
  headers: Header[];
  data: Array<any>;
}>();


const page: Ref<number> = ref(1);

</script>
<script lang="ts">
import { Ref } from "vue";
import { Header } from "~~/types";
export default defineComponent({
  name: "table-component",
});
</script>

<style lang="scss" scoped>
@import url("@/assets/css/components/common/table/table.css");
</style>