<template>
  <v-card elevation="0">
    <v-card-title id="title">
      <div class="icon-container">
        <v-icon size="25">mdi-home-variant</v-icon>
      </div>
      <div>Sales per Branch</div>
    </v-card-title>
    <v-card-text>
      <DoughnutChart :chartData="testData" />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { DoughnutChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: "clients-per-branch-chart",
  components: { DoughnutChart },
  setup() {
    const testData = {
      labels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
      datasets: [
        {
          data: [30, 40, 60, 70, 5],
          backgroundColor: [
            "#77CEFF",
            "#0079AF",
            "#123E6B",
            "#97B0C4",
            "#A5C8ED",
          ],
        },
      ],
    };

    return { testData };
  },
});
</script>

<style lang="scss" scoped>
@import "./style.css";
</style>
