<template>
  <div class="feature-card">
    <div class="feature-icon">{{ icon }}</div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    default: '✨'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.feature-card {
  padding: 20px;
  border-radius: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2em;
  margin-bottom: 10px;
}

.feature-card h3 {
  margin: 10px 0;
  font-size: 1.2em;
}

.feature-card p {
  margin: 0;
  opacity: 0.9;
}
</style>
