

<template>
  <div class="container">
    <div class="left"><PromptInterface/></div>
    <div class="right">
      <Marks/>
      <Suggestions/>
    </div>
  </div>
</template>


<style scoped>
.container{
  display: flex;
  gap: 50px;
}
.left{
  display: flex;
  width: 70%;
}
.right{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 30%;
}
</style>

