<template>
  <QRCodeVue3
    :width="150"
    :height="150"
    :value="value"
    :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
    :dotsOptions="{
      type: 'rounded',
      color: 'black',
    }"
  />
</template>

<script setup lang="ts">
defineProps<{
    value: string;
}>();
</script>

<script lang="ts">
import QRCodeVue3 from "qrcode-vue3";

export default defineComponent({
  name: "qr-generator",
  components: {
    QRCodeVue3,
  },
});
</script>
