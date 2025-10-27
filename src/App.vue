<script setup>
import { ref, onMounted, watch } from 'vue'
import {PromptManager} from './api/PromptEvaluator'
import PromptInterface from './components/LeftSide/PromptInterface.vue'
import Marks from './components/RigthSide/Marks.vue'
import Suggestions from './components/RigthSide/Suggestions.vue'

const marks = ref(0)
const topic = ref('personal')
const suggestions = ref([])
const promtManger = new PromptManager()
const context = ref(null)
const isLoading = ref(true)
const resultsFetched = ref(true)
const data = ref('')
async function fetchContext() {
  console.log('Loading context...', context.value)
  try {
    await new Promise(resolve => setTimeout(resolve, 500))
    context.value = await promtManger.getContext(topic.value)
    console.log('Context loaded:', context.value)
  } catch (error) {
    console.error('Error loading context:', error)
  } finally {
    isLoading.value = false
  }
}
onMounted(async () => {
  await fetchContext()

})

watch(topic,async()=>{
  isLoading.value = true
  fetchContext()
})
const setType = (type)=>{
  topic.value = type
}

const fetchResults = async () => {
  resultsFetched.value = false
  const response = await promtManger.getEvaluation(data.value)
  const jsonResponse = JSON.parse('{'+response.split('{')[1].replace('```','').trimEnd())
  resultsFetched.value = true
  marks.value = jsonResponse['score']
  suggestions.value = jsonResponse['feedback']

  console.log(marks.value,suggestions.value)
}

</script>

<template>
  <div class="app-container">
    <div class="left-panel">
      <PromptInterface :message="context" :isLoading="isLoading" v-model:data="data" :fetchResults="fetchResults" :topic="topic" :setType="setType" :resultsFetched="resultsFetched"/>
    </div>
    <div class="right-panel">
      <Marks :marks="marks" :resultsFetched="resultsFetched"/>
      <Suggestions :suggestions="suggestions" :resultsFetched="resultsFetched"/>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
  background-color: #f8f9fa;
}

.left-panel {
  flex: 1;
  background-color: white;
  padding: 0;
  border-right: 1px solid #e0e0e0;
}

.right-panel {
  flex: 1;
  background-color: white;
  padding: 0;
  display: flex;
  flex-direction: column;
}
</style>