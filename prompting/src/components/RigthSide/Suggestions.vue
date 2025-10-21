<script setup>

const props = defineProps({
  suggestions:Array
})
</script>

<template>
  <div class="suggestions">
    <p v-for="value in props.suggestions">{{ value }}</p>
  </div>
</template>