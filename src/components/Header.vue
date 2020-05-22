<template>
  <div class="header box">
    <div class="header_left box">
      <div class="collapse-btn" @click="collapseChage">
        <i v-show="!collapse" class="el-icon-s-fold"></i>
        <i v-show="collapse" class="el-icon-s-unfold"></i>
      </div>
      <div class="logo">后台管理系统</div>
    </div>
    <div class="header_right">
      <!-- 全屏 -->
      <div>
        <el-tooltip effect="light" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
          <i class="el-icon-rank"></i>
        </el-tooltip>
      </div>
      <!-- 通知 -->
      <div class="btn-bell">
        <el-tooltip effect="light" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
          <router-link to="/tabs">
            <i class="el-icon-bell"></i>
          </router-link>
        </el-tooltip>
        <span class="btn-bell-badge" v-if="message"></span>
      </div>
      <!-- 头像 -->
      <img src="../assets/img/header-doge.jpg" alt="header" />
      <!-- 用户名 -->
      <p>你好，{{username}}</p>
      <el-dropdown class="user-name" trigger="click">
        <span class="el-dropdown-link">
          <i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <a href="https://github.com/laulaampo" target="_blank">
            <el-dropdown-item>我的GitHub</el-dropdown-item>
          </a>
          <span @click="logout">
            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
          </span>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import bus from "./bus";
export default {
  data() {
    return {
      collapse: false,
      fullscreen: false,
      message: 2,
      username: "undefind",
      defualt_name: "nobody"
    };
  },
  methods: {
    collapseChage() {
      this.collapse = !this.collapse;
      bus.$emit("collapse", this.collapse);
    },
    logout() {
      localStorage.removeItem("ms_username");
      this.$router.push("/login");
      this.$message({
          showClose: true,
          message: '已退出登录'
        });
    }
  },
  created() {
    this.username = localStorage.getItem("ms_username");
    bus.$emit("collapse", false);
  },
  components: {}
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 80px;
  background: #272829;
  color: #fff;
}
.box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header_left,
.header_left i {
  padding-left: 15px;
  margin-right: 24px;
  font-size: 24px;
  width: 18%;
  justify-content: flex-start;
}
.header_right {
  width: 15%;
}
.header_right img {
  height: 32px;
  width: 32px;
  border-radius: 50%;
}
.header_right div,
img,
p {
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  margin: 0 9px;
}
.header_right div i {
  color: #fff !important;
  font-size: 16px;
}
</style>
