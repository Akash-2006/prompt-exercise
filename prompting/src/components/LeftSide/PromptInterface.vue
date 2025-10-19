<script setup>
import { ref } from 'vue';

const data = ref('');
const display = ref(false);
const submit = () => {
  display.value = true;  // Show the data on submit
};
</script>

<template>
  <div class="prompt-container">
    <div class="prompt">
      <div class="heading">
        <h1>Prompt question</h1>
      </div>
      <div class="content">
        <h3>Read the below context and write the prompt on the right side you will see the points and marks</h3>
        <textarea id="" v-model="data" placeholder="Enter your prompt here..."></textarea>
        <div class="button-container">
          <button @click="submit">Click to Submit</button>
        </div>
        <p v-if="display" class="displayed-text">{{ data }}</p>
        <p v-else></p>  
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
</style>