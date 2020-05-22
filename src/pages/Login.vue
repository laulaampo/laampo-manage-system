<template>
  <div class="wrapper">
    <div class="login-content">
      <div class="content-header">欢迎登录后台管理系统</div>
      <div class="form">
        <el-form
          status-icon
          ref="login"
          label-width="140px"
          class="demo-ruleForm"
          :model="info"
          :rules="rules"
          validate-on-rule-change
          name="info"
        >
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="info.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="info.password"
              placeholder="请输入密码"
              @keyup.enter.native="login"
            ></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button @click="resetForm('login')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 9, message: "用户名应该3-9个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, max: 9, message: "密码应该4-9个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login() {
      this.$refs.login.validate(valid => {
        if (valid) {
          this.$message.success("登录成功");
          localStorage.setItem("ms_username", this.info.username);
          this.$router.push("/");
        } else {
          this.$message.error("请输入账号和密码");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs.login.resetFields(formName);
    }
  },
  components: {}
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../assets/img/login-bg.jpg") no-repeat;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-content {
  width: 500px;
  height: 450px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.4);
}
.content-header {
  width: 100%;
  height: 59px;
  line-height: 60px;
  text-indent: 20px;
  color: #2e2b2b;
  border-bottom: 1px solid #fff;
  font-size: 18px;
  font-weight: 800;
}
.form {
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transform: translateX(-60px);
}
.form button{
  transform: translateX(-30px);
  margin-left: 50px;
}
</style>
