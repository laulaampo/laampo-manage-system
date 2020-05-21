<template>
  <div id="app">
    <Header />
    <LeftNav />
    <div class="container">
      <keep-alive>
        <router-view  ></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
export default {
  name: "App",
  components: {
    Header,
    LeftNav
  }
};
</script>

<style scoped>
  .container{
    margin-left: 250px;
  }
</style>
