<template>
  <div class="wrapper">
    <Header />
    <LeftNav />
    <div class="content-box" :class="{'nav-collapse':isCollapse}">
      <router-view></router-view>
    </div>
    <el-backtop target=".wrapper"></el-backtop>
  </div>
</template>

<script>
import bus from './bus'
import Header from './Header'
import LeftNav from './LeftNav'
export default {
  data () {
    return {
      isCollapse:false
    }
  },
  methods: {

  },
  components: {
    Header,
    LeftNav
  },
  created(){
    bus.$on("collapse", msg => {
      this.isCollapse = msg;
    });
  }
}
</script>

<style scoped>
  .content-box{
    position: absolute;
    left: 250px;
    top: 80px;
    right: 0;
    bottom: 0;
    padding-bottom: 30px;
    transition: left .3s linear;
  }
  .nav-collapse{
    left:65px;
  }
</style>
