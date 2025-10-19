<script setup>
import { ref } from 'vue';

const suggestions = ref([
' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint debitis consequatur eaque iusto, dolor magnam a quia odit voluptatibus aperiam provident amet labore. Nostrum, hic repellat. Ut, similique quas.',
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere id laudantium excepturi nulla nemo aspernatur voluptate, porro delectus temporibus voluptas animi repudiandae voluptatibus aliquid expedita exercitationem blanditiis modi maxime!'

])
</script>

<template>
  <div class="suggestions">
    <p v-for="value in suggestions">{{ value }}</p>
  </div>
</template>