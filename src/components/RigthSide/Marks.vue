<script setup>
const props = defineProps({
  marks:Number
})
</script>

<template>
  <div class="marks-container">
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
</style>