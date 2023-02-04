<template>
  <section>
    <div v-once class="tw-mb-7 tw-flex tw-justify-between tw-items-center">
      <Breadcrumbs :breadcrumbs="breadcrumbs"></Breadcrumbs>
      <div>
        <v-btn class="mr-4" color="primary" variant="outlined" rounded="pill"
          >Cancel</v-btn
        >
        <v-btn color="primary" rounded="pill">Save</v-btn>
      </div>
    </div>
    <div class="tw-px-4">
      <v-row>
        <v-col cols="8">
          <v-row>
            <v-col cols="12">
              <create-client-form></create-client-form>
            </v-col>
            <v-col cols="12">
              <create-client-subscription></create-client-subscription>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-title>
              <p class="tw-text-xl tw-font-semibold">Client QR Code</p>
            </v-card-title>
            <v-card-text
              v-if="newClientInfo.first_name"
              class="tw-grid tw-place-content-center tw-mt-4"
            >
              <QrGenerator
                :value="
                  newClientInfo.first_name + ' ' + newClientInfo.last_name
                "
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script setup lang="ts">
const clientStore = useClientsStore();
const { newClientInfo } = storeToRefs(clientStore);

const breadcrumbs: Array<Breadcrumb> = [
  {
    title: "Clients",
    disabled: false,
    link: "/users/clients",
  },
  {
    title: "Create Client",
    disabled: true,
  },
];
</script>

<script lang="ts">
import { CreateClientForm, CreateClientSubscription } from "~~/components/users";
import { Breadcrumbs, QrGenerator } from "@/components/common";
import { Breadcrumb } from "~~/types/components";
import { useClientsStore } from "~~/stores";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "create-client",
});
</script>
