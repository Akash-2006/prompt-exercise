<script setup>

const props = defineProps({
  suggestions: [String, Array],
  resultsFetched:Boolean
})
</script>

<template>
  <div class="suggestions-container" v-if="resultsFetched">
    <div class="feedback-content" v-if="props.suggestions">
      <!-- Handle if suggestions is a string -->
      <p v-if="typeof props.suggestions === 'string'" class="suggestion-text">
        {{ props.suggestions }}
      </p>
      <!-- Handle if suggestions is an array -->
      <template v-else-if="Array.isArray(props.suggestions)">
        <p v-for="(suggestion, index) in props.suggestions" :key="index" class="suggestion-text">
          {{ suggestion }}
        </p>
      </template>
    </div>
    <div v-else class="no-feedback">
      <p class="placeholder-text">Submit your prompt to see detailed feedback and suggestions for improvement.</p>
    </div>
  </div>
  <div class="loading-container" v-else>
    <div class="loading-skeleton">
      <div class="skeleton-circle"></div>
      <div class="skeleton-content">
        <div class="skeleton-line skeleton-line-short"></div>
        <div class="skeleton-line skeleton-line-long"></div>
        <div class="skeleton-line skeleton-line-medium"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.suggestions-container {
  flex: 1;
  padding: 30px;
  overflow-y: auto;
}

.feedback-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.suggestion-text {
  font-size: 14px;
  line-height: 1.6;
  color: #333;
  margin: 0;
  text-align: justify;
}

.no-feedback {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.placeholder-text {
  color: #999;
  font-style: italic;
  text-align: center;
  font-size: 14px;
  line-height: 1.5;
}

/* Loading skeleton styles */
.loading-container {
  padding: 30px;
  flex: 1;
}

.loading-skeleton {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.skeleton-circle {
  width: 48px;
  height: 48px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 50%;
  flex-shrink: 0;
}

.skeleton-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
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

.skeleton-line-medium {
  width: 128px; /* medium width for variety */
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