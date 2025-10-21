<script setup>
import { onMounted, ref, watch } from 'vue';
const display = ref(false);
const text = ref('');
const userInput = ref('');

const submit = () => {
  if (props.fetchResults) {
    props.fetchResults(userInput.value);
  }
};

const props = defineProps({
  message: String,
  isLoading: Boolean,
  data: String,
  fetchResults: Function
})

const emit = defineEmits(['update:data'])

// Watch for props.data changes and sync with local input
watch(() => props.data, (newData) => {
  userInput.value = newData || '';
}, { immediate: true })

// Watch for local input changes and emit to parent
watch(userInput, (newValue) => {
  emit('update:data', newValue);
})

// Watch for message changes and start streaming animation
watch(() => props.message, (newMessage) => {
  if (newMessage && !props.isLoading) {
    text.value = ''; 
    let interval;
    const words = newMessage.split(' ');
    let currentIndex = 0;
    
    const streaming = () => {
      if (currentIndex >= words.length) {
        clearInterval(interval);
      } else {
        text.value += (currentIndex > 0 ? ' ' : '') + words[currentIndex];
        currentIndex++;
      }
    };
    
    interval = setInterval(streaming, 100);
  }
}, { immediate: true })




</script>

<template>
  <div class="prompt-interface">
    <div class="header-section">
      <h1 class="main-title">Prompt question</h1>
      <div class="title-underline"></div>
    </div>
    
    <div class="content-section">
      <h3 class="instruction-text">Read the below context and write the prompt on the right side you will see the points and marks</h3>
      
      <div class="context-area">
        <p v-if="!props.isLoading && props.message && props.message.trim()" class="context-text">{{ text }}</p>
        <div v-else-if="props.isLoading" class="loading-skeleton">
          <div class="skeleton-header"></div>
          <div class="skeleton-line"></div>
          <div class="skeleton-line short"></div>
        </div>
        <p v-else class="no-context">No context available</p>
      </div>
      
      <div class="input-section">
        <textarea 
          :disabled="props.isLoading" 
          v-model="userInput" 
          placeholder="Enter your prompt"
          class="prompt-textarea"
        ></textarea>
        
        <button @click="submit" class="submit-button">
          Click to Submit
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prompt-interface {
  height: 100vh;
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
}

.header-section {
  margin-bottom: 40px;
}

.main-title {
  font-size: 48px;
  font-weight: bold;
  color: #333;
  margin: 0;
  margin-bottom: 8px;
  font-family: 'Times New Roman', serif;
}

.title-underline {
  width: 100%;
  height: 3px;
  background-color: #333;
  margin-bottom: 30px;
}

.content-section {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.instruction-text {
  font-size: 16px;
  color: #333;
  margin: 0 0 30px 0;
  line-height: 1.5;
  font-weight: normal;
}

.context-area {
  margin-bottom: 40px;
}

.context-text {
  font-size: 15px;
  line-height: 1.6;
  color: #333;
  margin: 0;
  text-align: justify;
}

.no-context {
  color: #666;
  font-style: italic;
}

.input-section {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.prompt-textarea {
  width: 100%;
  height: 300px;
  padding: 15px;
  font-size: 14px;
  border: 2px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  font-family: inherit;
  line-height: 1.5;
  margin-bottom: 20px;
}

.prompt-textarea:focus {
  outline: none;
  border-color: #666;
}

.prompt-textarea:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.submit-button {
  background-color: #e0e0e0;
  border: none;
  padding: 12px 24px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background-color: #d0d0d0;
}

.submit-button:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

/* Loading skeleton styles */
.loading-skeleton {
  padding: 20px 0;
  margin-bottom: 20px;
}

.skeleton-header {
  height: 20px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 60%;
}

.skeleton-line {
  height: 16px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 8px;
  width: 100%;
}

.skeleton-line.short {
  width: 75%;
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