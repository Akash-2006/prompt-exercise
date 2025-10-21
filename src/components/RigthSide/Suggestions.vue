<script setup>

const props = defineProps({
  suggestions: [String, Array]
})
</script>

<template>
  <div class="suggestions-container">
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
</style>