<script setup>
const props = defineProps({
  topic:String,
  setType:Function
})
</script>

<template>
<select :name="props.topic" @change="props.setType($event.target.value)">
  <option value="personal">Personal</option>
  <option value="technology">Technology</option>
  <option value="Time pass">Time Pass</option>
  <option value="communication">Communication</option>
</select>
</template>

<style>
</style>