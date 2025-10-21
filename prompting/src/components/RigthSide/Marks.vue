<script setup>
const props = defineProps({
  marks:Number
})
</script>

<template>
      <div class="results-summary-container__result">
        <div class="heading-tertiary">Your Result</div>
        <div class="result-box">
          <div class="heading-primary">{{ props.marks }}</div>
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