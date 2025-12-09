<template>
  <div class="grid-container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  columns: {
    type: Number,
    default: 3
  }
})
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
