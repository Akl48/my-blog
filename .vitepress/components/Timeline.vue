<template>
  <div class="timeline">
    <div v-for="(item, index) in items" :key="index" class="timeline-item">
      <div class="timeline-marker">{{ index + 1 }}</div>
      <div class="timeline-content">
        <h4>{{ item.title }}</h4>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.timeline {
  position: relative;
  padding: 20px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #667eea;
}

.timeline-item {
  position: relative;
  padding-left: 80px;
  margin-bottom: 30px;
}

.timeline-marker {
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #667eea;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.timeline-content h4 {
  margin: 0 0 5px 0;
  color: #333;
}

.timeline-content p {
  margin: 0;
  color: #666;
}
</style>
