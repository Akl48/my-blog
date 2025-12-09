<template>
  <div class="button-group">
    <button 
      v-for="(btn, index) in buttons" 
      :key="index"
      class="custom-btn"
      :style="{ backgroundColor: btn.color }"
      @click="btn.action"
    >
      {{ btn.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  buttons: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.button-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 20px 0;
}

.custom-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.2s, box-shadow 0.2s;
}

.custom-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.custom-btn:active {
  transform: translateY(0);
}
</style>
