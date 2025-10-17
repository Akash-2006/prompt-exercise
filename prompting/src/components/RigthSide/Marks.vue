<script setup>
const score = 80

</script>

<template>
<!-- From Uiverse.io by sabbircoder07 --> 
   <div class="results-summary-container">
      </div>
      <div class="results-summary-container__result">
        <div class="heading-tertiary">Your Result</div>
        <div class="result-box">
          <div class="heading-primary">{{ score }}</div>
          <p class="result">of 100</p>
        </div>
  
      </div>
</template>


<style>

/* From Uiverse.io by sabbircoder07 */ 
.results-summary-container {
  font-family: "Hanken Grotesk", sans-serif;
  display: flex;
  width: 320px;
  border-radius: 30px;
  backface-visibility: hidden;
}

.heading-primary,
.heading-secondary,
.heading-tertiary {
  text-transform: capitalize;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.heading-primary {
  font-size: 36px;
  font-weight: 600;
  transform: scale(1.6);
}

.heading-secondary {
  font-size: 24px;
  font-weight: 600;
  margin-top: 20px;
  letter-spacing: 2px;
}

.heading-tertiary {
  font-size: 20px;
  font-weight: 500;
}

.paragraph {
  font-size: 17px;
  line-height: 1.4;
  color: hsl(221, 100%, 96%);
}

.paragraph-text-box {
  width: 100%;
}

.text-center {
  text-align: center;
}

.margin-1 {
  margin-bottom: 10px;
}

.results-summary-container__result {
  border: 2px black solid;
  width: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 30px;
  .result-box {
  width: 160px;
  height: 160px;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.result {
  margin-top: -8px;
  font-size: 16px;
  font-weight: 400;
}
}

.btn {
  width: 240px;
  padding: 10px;
  border: none;
  border-radius: 100px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 500;
  cursor: pointer;
  margin: 20px 0 2px 0;
  transition: all 0.3s;
  border: 2px;
}

</style>