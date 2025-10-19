<script setup>
import { onMounted, ref } from 'vue';

const score = ref(0)
let interval; 

const scoreAnimation = ()=>{
 if(score.value >= 80){ 
      clearInterval(interval)
    }else{
      score.value = score.value + 1; 
    }
}

onMounted(()=>{
  interval = setInterval(scoreAnimation, 50) 
})
</script>

<template>
<!-- From Uiverse.io by sabbircoder07 --> 
      <div class="results-summary-container__result">
        <div class="heading-tertiary">Your Result</div>
        <div class="result-box">
          <div class="heading-primary">{{ score }}</div>
          <p class="result">of 100</p>
        </div>
  
      </div>
</template>


<style>
.results-summary-container__result{
  width: 100%;
  height: 30%;
  border: 2px solid black;
}
</style>