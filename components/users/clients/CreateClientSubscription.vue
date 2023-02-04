<template>
  <v-card>
    <v-card-text>
      <p class="tw-text-xl tw-font-semibold mb-6">Subscription</p>
      <v-btn
        v-if="!showSubscriptions"
        color="primary"
        rounded="pill"
        @click="showSubscriptions = true"
        flat
        ><v-icon class="mr-1">mdi-plus</v-icon>Add Subscription</v-btn
      >
      <div v-else>
        <div>
          <v-select
            label="Subscriptions"
            density="compact"
            variant="outlined"
            :items="['Weekly', 'Monthly', 'Quarterly', 'Yearly']"
          ></v-select>
        </div>
        <v-row class="mb-2">
          <v-col>
            <b>Start of Subscription:</b> <br />
            February 4, 2023
          </v-col>
          <v-col>
            <b>End of Subscription:</b> <br />
            February 4, 2023
          </v-col>
        </v-row>
        <div>
          <v-btn class="mr-2" color="primary" rounded="pill" size="small" flat
            >Save</v-btn
          >
          <v-btn
            color="primary"
            rounded="pill"
            variant="outlined"
            @click="showSubscriptions = false"
            size="small"
            >Cancel</v-btn
          >
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const showSubscriptions = ref(false);
</script>

<script lang="ts">
export default defineComponent({
  name: "create-client-subscription",
});
</script>
