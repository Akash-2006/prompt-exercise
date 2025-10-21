<script setup>
import { ref, onMounted } from 'vue'
import {PromptManager} from './api/PromptEvaluator'
import PromptInterface from './components/LeftSide/PromptInterface.vue'
import Marks from './components/RigthSide/Marks.vue'
import Suggestions from './components/RigthSide/Suggestions.vue'

const marks = ref(0)
const suggestions = ref('')
const promtManger = new PromptManager()
const context = ref(null)
const isLoading = ref(true)
const data = ref('')
onMounted(async () => {
  console.log('Loading context...', context.value)
  try {
    await new Promise(resolve => setTimeout(resolve, 500))
    context.value = await promtManger.getContext("personal life")
    console.log('Context loaded:', context.value)
  } catch (error) {
    console.error('Error loading context:', error)
  } finally {
    isLoading.value = false
  }
})

const fetchResults = async () => {
  const response = await promtManger.getEvaluation(data.value)
  const jsonResponse = JSON.parse('{'+response.split('{')[1].replace('```','').trimEnd())

  marks.value = jsonResponse['score']
  suggestions.value = jsonResponse['feedback']

  console.log(marks.value,suggestions.value)
}

</script>

<template>
  <div class="h-screen flex">
    <div class="flex-1 bg-blue-50"><PromptInterface :message="context" :isLoading="isLoading" v-model:data="data" :fetchResults="fetchResults"/></div>
    <div class="flex-1 bg-gray-50 flex flex-col">
      <Marks :marks="marks"/>
      <Suggestions :suggestions="suggestions"/>
    </div>
  </div>
</template>


<style scoped>
.container{
  height: 100vh;
  display: flex;
  background-color: #bdbbbb98;
  justify-content: space-evenly;
  align-items: center;
}
.left{
  padding: 25px;
  border-radius: 3%;
  width: 60%;
  height: 90%;
    background-color: #ffff;
    box-shadow: 2px #aea9a9;
}
.right{
  border-radius: 3%;
  padding: 25px;
  width: 30%;
  height: 90%;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>