<template>
  <div class="tags">
    <ul class="tag-list">
      <li
        class="tags-li"
        v-for="(item,index) in tagList"
        :key="index"
        :class="{'active':isActive(item.path)}"
      >
        <router-link
          class="tags-li-title"
          :to="item.path"
          :class="{'active':isActive(item.path)}"
        >{{item.title}}</router-link>
        <span class="tags-li-icon" @click="close(index)">
          <i class="el-icon-close"></i>
        </span>
      </li>
    </ul>
    <div class="tags-close-box">
      <el-dropdown @command="handleTag">
        <el-button size="mini" type="primary">
          标签选项
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu size="small" slot="dropdown">
          <el-dropdown-item command="Order">关闭其他</el-dropdown-item>
          <el-dropdown-item command="All">关闭所有</el-dropdown-item>
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
      tagList: []
    };
  },
  methods: {
    isActive(path) {
      // 根据选择tag的path动态添加删除active类名
      return path === this.$route.fullPath;
    },
    // 关闭标签
    close(index) {
      // delItem：当前删除的tag对象
      const delItem = this.tagList.splice(index,1)[0]
      // item：删除后active的tag对象 如果删除的tag后面还有 就用后面的 如果没有就往前
      const item = this.tagList[index] ? this.tagList[index] : this.tagList[index - 1]
      if(item){
        // 如果删掉的是当前path的tag 则跳转到新active的path
        delItem.path = this.$route.fullPath && this.$router.push(item.path)
      }else {
        // 没有tag了 就跳到'/'
        this.$router.push('/')
      }
      
    },
    // 关闭全部tags
    closeAll() {
      if (this.$route.fullPath === '/dashboard') return;
      this.tagList = [];
      this.$router.push("/");
    },
    // 关闭其他tags
    closeOrder() {
      const curItem = this.tagList.filter(item => {
        return item.path === this.$route.fullPath;
      });
      this.tagList = curItem;
    },
    handleTag(command) {
      command === "Order" ? this.closeOrder() : this.closeAll();
    },
    // 设置标签taglist
    setTags(route) {
      // 判断tagList里面是否有存在的新增的tag
      const isExist = this.tagList.some(item => item.path === route.fullPath);
      if (!isExist) {
        // 如果tag数超过8个则删除第一个
        if (this.tagList.length >= 8) {
          this.tagList.shift();
        }
        this.tagList.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.matched[1].components.default.name
        });
      }
      bus.$emit("tag-list", this.tagList);
    }
  },
  created() {
    // 初始化渲染的时候有当前的tag
    this.setTags(this.$route);
  },
  watch: {
    /* eslint-disable */
    $route(newValue, oldValue) {
      this.setTags(newValue);
    }
  }
};
</script>

<style scoped>
.tags {
  position: relative;
  height: 30px;
  overflow: hidden;
  background: #fff;
  width: calc(100% - 250px);
  padding-right: 250px;
  box-shadow: 0 5px 10px #ddd;
}
.tags ul {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.tags ul li {
  float: left;
  margin: 3px 5px 2px 3px;
  border-radius: 3px;
  font-size: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 23px;
  line-height: 23px;
  border: 1px solid #e9eaec;
  background: #fff;
  padding: 0 5px 0 12px;
  vertical-align: middle;
  color: #666;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
.tags ul li.active {
  background: #409eff;
  color: #fff;
}
.tags-li-title.active {
  color: #fff;
}
.tags-li-title {
  float: left;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 5px;
  color: #666;
  text-decoration: none;
}
.tags-close-box {
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding-top: 1px;
  text-align: center;
  width: 110px;
  height: 30px;
  background: #fff;
  box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
</style>
