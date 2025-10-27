<script setup>
const props = defineProps({
  marks:Number,
  resultsFetched:Boolean
})
</script>

<template>
  <div class="marks-container" v-if="resultsFetched">
    <div class="result-header">Your Result</div>
    <div class="score-display">
      <span class="score-number">{{ props.marks || 0 }}</span>
    </div>
    <div class="score-label">of 100</div>
    
    <!-- Progress Bar -->
    <div class="progress-container">
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: (props.marks || 0) + '%' }"></div>
      </div>
    </div>
  </div>

  <div class="loading-container" v-else>
    <div class="loading-skeleton">
      <div class="skeleton-circle"></div>
      <div class="skeleton-content">
        <div class="skeleton-line skeleton-line-short"></div>
        <div class="skeleton-line skeleton-line-long"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marks-container {
  padding: 30px;
  border-bottom: 1px solid #e0e0e0;
}

.result-header {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.score-display {
  margin-bottom: 8px;
}

.score-number {
  font-size: 48px;
  font-weight: bold;
  color: #333;
}

.score-label {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.progress-container {
  width: 100%;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: #333;
  border-radius: 4px;
  transition: width 0.3s ease-in-out;
}

/* Loading skeleton styles */
.loading-container {
  padding: 30px;
  border-bottom: 1px solid #e0e0e0;
}

.loading-skeleton {
  display: flex;
  align-items: center;
  gap: 12px;
}

.skeleton-circle {
  width: 48px;
  height: 48px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 50%;
}

.skeleton-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skeleton-line {
  height: 20px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 10px;
}

.skeleton-line-short {
  width: 112px; /* equivalent to w-28 */
}

.skeleton-line-long {
  width: 144px; /* equivalent to w-36 */
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>