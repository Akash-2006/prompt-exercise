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
  <div class="prompt-container">
    <div class="prompt">
      <div class="heading">
        <h1>Prompt question</h1>
      </div>
      <div class="content">
        <h3>Read the below context and write the prompt on the right side you will see the points and marks</h3>
        <p v-if="!props.isLoading && props.message && props.message.trim()">{{ text }}</p>
        <div v-else-if="props.isLoading" class="loading-skeleton">
          <div class="skeleton-header"></div>
          <div class="skeleton-line"></div>
          <div class="skeleton-line short"></div>
        </div>
        <p v-else class="text-gray-500">No context available</p>
        <textarea :disabled="props.isLoading" v-model="userInput" placeholder="Enter your prompt here..."></textarea>
        <div class="button-container">
          <button @click="submit">Click to Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .prompt-container{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .prompt{
    width: 90%;
  }

  textarea{
    width: 70%;
    height: 30vh;
    padding: 10px;
  }

  .heading{
    font-size: 34px;
    border-bottom: 3px black solid;
    height: 30vh;
    display: flex;
    align-items: end;
  }

  .content{
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
  .button-container{
    margin-top: 20px;
  }

  button{
    height: 40px;
    width: 150px;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
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