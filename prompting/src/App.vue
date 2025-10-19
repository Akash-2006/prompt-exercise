

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