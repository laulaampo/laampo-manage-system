<template>
  <div class="wrapper">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-document-copy"></i> tab选项卡
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <section class="container">
      <el-tabs v-model="activeName">
        <el-tab-pane label="未读消息" name="read">
          <el-table :data="unread" style="width: 100%" :show-header="false" class="unread">
            <el-table-column prop="title"></el-table-column>
            <el-table-column prop="date" width="180"></el-table-column>
            <el-table-column width="120">
              <template slot-scope="scope">
                <el-button size="small" @click="handleRead(scope.$index)">标为已读</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="handle-row">
            <el-button type="primary" @click="allRead" size="small">全部标为已读</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已读消息" name="unread">
          <el-table :data="read" style="width: 100%" :show-header="false">
            <el-table-column prop="title"></el-table-column>
            <el-table-column prop="date" width="180"></el-table-column>
            <el-table-column width="120">
              <template slot-scope="scope">
                <el-button size="small" type="danger" @click="handleDel(scope.$index)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="handle-row">
            <el-button type="danger" @click="allDel" size="small">删除全部</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="回收站" name="recycle">
          <el-table :data="recycle" style="width: 100%" :show-header="false">
            <el-table-column prop="title"></el-table-column>
            <el-table-column prop="date" width="180"></el-table-column>
            <el-table-column width="120">
              <template slot-scope="scope">
                <el-button size="small" plain @click="handleRestore(scope.$index)">还原</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="handle-row">
            <el-button type="danger" @click="clearRecycle" size="small">清空回收站</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "read",
      unread: [
        {
          date: "2020-05-19 20:00:00",
          title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护"
        },
        {
          date: "2020-05-19 21:00:00",
          title: "今晚12点整发大红包，先到先得"
        }
      ],
      read: [
        {
          date: "2020-05-19 20:00:00",
          title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护"
        }
      ],
      recycle: [
        {
          date: "2020-05-19 20:00:00",
          title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护"
        }
      ]
    };
  },
  methods: {
    handleRead(index) {
      const readItem = this.unread.splice(index, 1);
      this.read = readItem.concat(this.read);
    },
    handleDel(index) {
      const delItem = this.read.splice(index, 1);
      this.recycle = delItem.concat(this.recycle);
    },
    handleRestore(index) {
      const restoreItem = this.recycle.splice(index, 1);
      this.read = restoreItem.concat(this.read);
    },
    allRead() {
      const newRead = this.read.concat(this.unread);
      this.read = newRead;
      this.unread = [];
    },
    allDel() {
      const newRecycle = this.recycle.concat(this.read);
      this.recycle = newRecycle;
      this.read = [];
    },
    clearRecycle() {
      this.recycle = [];
    }
  }
};
</script>

<style scoped>
.container {
  width: 98%;
  height: auto;
  margin: 10px 0 0 10px;
  background: #fff;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 10px;
}
.handle-row {
  text-align: right;
  margin: 20px 30px 0 0;
}
.el-table.unread {
  color: #409eff;
}
</style>
