<template>
  <div class="content">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-s-grid"></i> 基础表格
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="table-card">
      <div class="handle-box">
        <el-button
          type="primary"
          icon="el-icon-delete"
          class="handle-del mr10"
          @click="delAllSelection"
        >批量删除</el-button>
        <el-select v-model="query.address" placeholder="地址" class="handle-select mr10" width="30">
          <el-option key="1" label="广东省" value="广东省"></el-option>
          <el-option key="2" label="湖南省" value="湖南省"></el-option>
        </el-select>
        <el-input v-model="query.name" placeholder="用户名" class="handle-input mr10"></el-input>
        <el-button type="primary" icon="el-icon-search" @click="handleSearch" class="mr10">搜索</el-button>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%"
        border
        header-cell-class-name="table-header"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="date" label="ID" width="180" align="center"></el-table-column>
        <el-table-column prop="name" label="用户名" width="180" align="center"></el-table-column>
        <el-table-column prop="money" label="账户余额" align="center"></el-table-column>
        <el-table-column prop="thumb" label="头像(查看大图)" align="center">
          <template slot-scope="scope">
            <el-image
              class="table-td-thumb"
              :src="scope.row.thumb"
              :preview-src-list="[scope.row.thumb]"
            ></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="地址" align="center"></el-table-column>
        <el-table-column prop="state" label="状态" align="center">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.state==='成功'?'success':(scope.row.state==='失败'?'danger':'')"
            >{{scope.row.state}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="注册时间" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope" align="center">
            <el-button
              type="text"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
            <el-button
              type="text"
              icon="el-icon-delete"
              class="red"
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background layout="prev, pager, next" :total="40"></el-pagination>
      </div>
      <!-- 编辑的弹框 -->
      <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
        <el-form label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="editVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveEdit">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: {
        address: "",
        name: "",
        pageIndex: 1,
        pageSize: 10
      },
      tableData: [],
      multipleSelection: [],
      delList: [],
      editVisible: false,
      pageTotal: 0,
      form: {},
      idx: -1,
      id: -1,
      eidtName: "张三"
    };
  },
  methods: {
    handleEdit(index, row) {
      this.editVisible = true;
      this.idx = index;
      this.form = row;
    },
    handleDelete(index, row) {
      this.$confirm("确定要删除吗？", "提示", {
        type: "warning"
      })
        .then(() => {
          this.$message.success("删除成功");
          this.tableData.splice(index, 1);
        })
        .catch(err => {
          console.log(err, row);
        });
    },
    delAllSelection() {
      let str = "";
      let delIdArr = [];
      const length = this.multipleSelection.length;
      this.delList = this.delList.concat(this.multipleSelection);
      for (let i = 0; i < length; i++) {
        str += this.multipleSelection[i].name;
      }
      this.multipleSelection.forEach(item => {
        delIdArr.push(item.id);
      });

      this.tableData = this.tableData.filter(item => {
        if (delIdArr.indexOf(item.id) === -1) return item;
      });

      this.$message.error(`删除了${str}`);
      this.multipleSelection = [];
    },
    handleSearch() {
      console.log("Search");
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    saveEdit() {
      this.editVisible = false;
      this.$message.success(`修改第 ${this.idx + 1} 行成功`);
      this.$set(this.tableData, this.idx, this.form);
    }
  },
  created() {
    this.tableData = [
      {
        id: 1,
        name: "张三",
        money: 123,
        address: "广东省东莞市长安镇",
        state: "成功",
        date: "2019-11-1",
        thumb: "https://lin-xin.gitee.io/images/post/wms.png"
      },
      {
        id: 2,
        name: "李四",
        money: 456,
        address: "广东省广州市白云区",
        state: "成功",
        date: "2019-10-11",
        thumb: "https://lin-xin.gitee.io/images/post/node3.png"
      },
      {
        id: 3,
        name: "王五",
        money: 789,
        address: "湖南省长沙市",
        state: "失败",
        date: "2019-11-11",
        thumb: "https://lin-xin.gitee.io/images/post/parcel.png"
      },
      {
        id: 4,
        name: "赵六",
        money: 1011,
        address: "福建省厦门市鼓浪屿",
        state: "成功",
        date: "2019-10-20",
        thumb: "https://lin-xin.gitee.io/images/post/notice.png"
      }
    ];
  }
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 15px;
}
.table-card {
  width: 98%;
  height: auto;
  margin: 10px 0 0 10px;
  background: #fff;
  box-sizing: border-box;
  padding: 15px;
}
.el-checkbox {
  text-align: center !important;
}
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  margin: 10px 0 0 10px;
  width: 120px;
}

.handle-input {
  margin: 10px 0 0 10px;
  width: 300px;
  display: inline-block;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-left: 10px;
}
.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
.pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 15px;
  margin-top: 30px;
}
</style>
