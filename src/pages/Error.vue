<template>
  <div class="wrapper">
    <div class="content">
      <div class="bgimg"></div>
      <p>呜呼~你访问的页面不存在~</p>
      <div class="btns">
        <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
        <el-button type="primary" @click="$router.go(-1)">返回上一页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped>
.wrapper ,.wrapper .content{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper .content{
  flex-direction: column;
}
.content div,p{
  margin-bottom: 30px;
}
.wrapper .bgimg {
  width: 500px;
  height: 400px;
  background: url("../assets/img/404logo.png") no-repeat;
  background-size: 100% 100%;
}
.wrapper p {
  font-size: 24px;
  font-weight: 600;
}
.wrapper .content .btns{
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
