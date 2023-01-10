<template>
  <v-card elevation="0">
    <v-card-text class="card-container">
      <div>
        <div class="title">
          {{ cardTitle }}
        </div>
        <div><span class="amount">
            500
          </span><span :class="['percentage', isPositive ? 'positive' : 'negative']">+3%</span>
        </div>

      </div>
      <div class="icon-container" :style="{ 'background-color': accentColor }">
        <v-icon size="25">{{ icon }}</v-icon>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
export default defineComponent({
  name: "item-card",
});
</script>

<script setup lang="ts">
defineProps({
  cardTitle: String,
  icon: String,
  accentColor: String,
  isPositive: Boolean
});
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon-container {
    width: 2.5rem;
    height: 2.5rem;
    display: grid;
    place-content: center;
    border-radius: 5px;
  }

  .title {
    font-size: 1.1em;
    color: #616161;
    font-weight: 500;
  }

  .amount {
    font-weight: 700;
    font-size: 1.5em;
    line-height: 1.5;

  }

  .percentage {
    font-size: 1em;
    font-weight: 600;
  }

  .positive {
    color: #00E676;
  }

  .negative {
    color: #FF1744;
  }
}
</style>
