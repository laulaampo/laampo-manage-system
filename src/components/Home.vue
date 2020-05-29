<template>
  <div class="wrapper">
    <Header />
    <LeftNav />
    <div class="content-box" :class="{'nav-collapse':isCollapse}">
      <Tags />
      <transition name="move" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
    <el-backtop target=".wrapper"></el-backtop>
  </div>
</template>

<script>
import bus from "./bus";
import Header from "./Header";
import LeftNav from "./LeftNav";
import Tags from "./Tags";
export default {
  data() {
    return {
      isCollapse: false,
      tagList:[]
    };
  },
  methods: {},
  components: {
    Header,
    LeftNav,
    Tags
  },
  created() {
    bus.$on("collapse", msg => {
      this.isCollapse = msg;
    });
    bus.$on('tag-list',(msg)=>{
      msg.forEach(item => this.tagList.push(item))
    })
  }
};
</script>

<style scoped>
.content-box {
  position: absolute;
  left: 241px;
  top: 80px;
  right: 0;
  bottom: 0;
  transition: left 0.3s linear;
  padding-bottom: 30px;
  height: calc(100% - 110px);
  width: auto;
  background: #f0f0f0;
  overflow-y: scroll;
  overflow-x: hidden;
}
.nav-collapse {
  left: 65px;
}
</style>
