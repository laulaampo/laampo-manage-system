<template>
  <div class="leftNav">
    <el-menu
      class="sidebar-el-menu"
      :collapse="collapse"
      background-color="#fff"
      text-color="#909399"
      active-text-color="#409eff"
      unique-opened
      menu-trigger="click"
      router
      :default-active="selectPath"
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
import bus from "./bus";
export default {
  data() {
    return {
      selectPath: null,
      collapse: null,
      items: [
        {
          icon: "el-icon-s-home",
          index: "dashboard",
          title: "系统首页"
        },
        {
          icon: "el-icon-s-grid",
          index: "table",
          title: "基础表格"
        },
        {
          icon: "el-icon-document-copy",
          index: "tabs",
          title: "tab选项卡"
        },
        {
          icon: "el-icon-date",
          index: "3",
          title: "表单相关",
          subs: [
            {
              index: "form",
              title: "基本表单"
            },
            {
              index: "3-2",
              title: "三级菜单",
              subs: [
                {
                  index: "editor",
                  title: "富文本编辑器"
                },
                {
                  index: "markdown",
                  title: "markdown编辑器"
                }
              ]
            },
            {
              index: "upload",
              title: "文件上传"
            }
          ]
        },
        {
          icon: "el-icon-picture-outline-round",
          index: "icon",
          title: "自定义图标"
        },
        {
          icon: "el-icon-s-data",
          index: "charts",
          title: "schart图表"
        },
        {
          icon: "el-icon-rank",
          index: "6",
          title: "拖拽组件",
          subs: [
            {
              index: "drag",
              title: "拖拽列表"
            },
            {
              index: "dialog",
              title: "拖拽弹框"
            }
          ]
        },
        {
          icon: "el-icon-basketball",
          index: "i18n",
          title: "国际化功能"
        },
        {
          icon: "el-icon-warning-outline",
          index: "7",
          title: "错误处理",
          subs: [
            {
              index: "permission",
              title: "权限测试"
            },
            {
              index: "404",
              title: "404页面"
            }
          ]
        },
        {
          icon: "el-icon-milk-tea",
          index: "/thanks",
          title: "感谢作者"
        }
      ]
    };
  },
  methods: {},
  components: {},
  created() {
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
    // 根据路径 设置默认选中的框
    const { path } = this.$route;
    this.selectPath = path.slice(1);
  }
};
</script>

<style scoped>
.leftNav {
  display: block;
  position: absolute;
  left: 0;
  top: 80px;
  bottom: 0;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 240px;
}
.leftNav > ul {
  height: 100%;
}
</style>
