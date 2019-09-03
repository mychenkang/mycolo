<template>
  <!-- <Container type="card-full"> -->
  <div class="not">
    <img src="../img/404/cover@2x.png">
    <el-button class="dd-mt"
               @click='$router.push({path:"table"})'>返回首页</el-button>
  </div>
  <!-- </Container> -->
</template>

<style scoped lang='scss'>
.not {
  background-color: #555;
  display: flex;
  height: 100%;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  img {
    width: 300px;
  }
}
</style>