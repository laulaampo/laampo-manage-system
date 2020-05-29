<template>
  <div class="wrapper">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-magic-stick"></i>
          星座运势
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="星座名称">
          <el-select v-model="formInline.cstName" placeholder="星座名称" @change="onSubmit">
            <el-option
              :label="item.label"
              :value="item.value"
              v-for="(item,index) in optionsXz"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="查询类型">
          <el-select v-model="formInline.selectType" placeholder="查询类型" @change="onSubmit">
            <el-option
              :label="item.label"
              :value="item.value"
              v-for="(item,index) in types"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item> -->
      </el-form>
      <div class="info-content" v-if="renderData.length !== 0">
        <!-- 今日运势 -->
        <el-collapse v-show="formInline.selectType === 'today' && formInline.cstName">
          <el-collapse-item title="展开查看运势..." name="1">
            <div class="info-item">
              星座名称:
              <span>{{renderData.name || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              速配星座:
              <span>{{renderData.QFriend || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              今日日期:
              <span>{{renderData.datetime || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              幸运颜色:
              <span>{{renderData.color || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              幸运数字:
              <span>{{renderData.number || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              今日寄语:
              <span>{{renderData.summary || '请选择星座哦~'}}</span>
            </div>
            <div class="info-nums">
              <span>工作指数：{{renderData.work || '请选择星座哦~'}}</span>
              <span>爱情指数：{{renderData.love || '请选择星座哦~'}}</span>
              <span>健康指数：{{renderData.health || '请选择星座哦~'}}</span>
              <span>金钱指数：{{renderData.money || '请选择星座哦~'}}</span>
            </div>
          </el-collapse-item>
        </el-collapse>
        <!-- 明日运势 -->
        <el-collapse v-show="formInline.selectType === 'tomorrow' && formInline.cstName">
          <el-collapse-item title="展开查看运势..." name="1">
            <div class="info-item">
              星座名称:
              <span>{{renderData.name || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              速配星座:
              <span>{{renderData.QFriend || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              明天日期:
              <span>{{renderData.datetime || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              幸运颜色:
              <span>{{renderData.color || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              幸运数字:
              <span>{{renderData.number || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              今日寄语:
              <span>{{renderData.summary || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              今日寄语:
              <span>{{renderData.summary || '请选择星座哦~'}}</span>
            </div>
            <div class="info-nums">
              <span>工作指数：{{renderData.work || '请选择星座哦~'}}</span>
              <span>爱情指数：{{renderData.love || '请选择星座哦~'}}</span>
              <span>健康指数：{{renderData.health || '请选择星座哦~'}}</span>
              <span>金钱指数：{{renderData.money || '请选择星座哦~'}}</span>
            </div>
          </el-collapse-item>
        </el-collapse>
        <!-- 本周运势 -->
        <el-collapse v-show="formInline.selectType === 'week' && formInline.cstName">
          <el-collapse-item title="展开查看运势..." name="1">
            <div class="info-item">
              星座名称:
              <span>{{renderData.name || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              本周时间:
              <span>{{renderData.date || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              年中周数:
              <span>{{renderData.weekth || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              LOVE:
              <span>{{renderData.love || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              STUDY:
              <span>{{renderData.job || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              MONEY:
              <span>{{renderData.money || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              WORK:
              <span>{{renderData.work || '请选择星座哦~'}}</span>
            </div>
          </el-collapse-item>
        </el-collapse>
        <!-- 本月运势 -->
        <el-collapse v-show="formInline.selectType === 'month' && formInline.cstName">
          <el-collapse-item title="展开查看运势..." name="1">
            <div class="info-item">
              您的星座是:
              <span>{{renderData.name || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              时间:
              <span>{{renderData.date|| '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              HEALTH
              <span>{{renderData.health || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              LOVE:
              <span>{{renderData.love || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              MONEY:
              <span>{{renderData.money || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              WORK:
              <span>{{renderData.work || '请选择星座哦~'}}</span>
            </div>
          </el-collapse-item>
        </el-collapse>
        <!-- 今年运势 -->
        <el-collapse v-show="formInline.selectType === 'year' && formInline.cstName">
          <el-collapse-item title="展开查看运势..." name="1">
            <div class="info-item">
              您的星座是:
              <span>{{renderData.name || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              今年是:
              <span>{{renderData.year + '年'|| '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              幸运石：
              <span>{{renderData.luckeyStone || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              健康运势:
              <span>{{renderData.health || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              感情运势:
              <span>{{renderData.mima || '请选择星座哦~'}}</span>
            </div>
            <div class="info-item">
              财运建议:
              <span>{{renderData.finance || '请选择星座哦~'}}</span>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import { getConstellation } from "../api/index";
export default {
  data() {
    return {
      formInline: {
        cstName: "",
        selectType: ""
      },
      renderData: {},
      optionsXz: [
        {
          value: "白羊座",
          label: "白羊座"
        },
        {
          value: "金牛座",
          label: "金牛座"
        },
        {
          value: "双子座",
          label: "双子座"
        },
        {
          value: "巨蟹座",
          label: "巨蟹座"
        },
        {
          value: "狮子座",
          label: "狮子座"
        },
        {
          value: "处女座",
          label: "处女座"
        },
        {
          value: "天秤座",
          label: "天秤座"
        },
        {
          value: "天蝎座",
          label: "天蝎座"
        },
        {
          value: "射手座",
          label: "射手座"
        },
        {
          value: "摩羯座",
          label: "摩羯座"
        },
        {
          value: "水瓶座",
          label: "水瓶座"
        },
        {
          value: "双鱼座",
          label: "双鱼座"
        }
      ],
      types: [
        {
          label: "今日运势",
          value: "today"
        },
        {
          label: "明日运势",
          value: "tomorrow"
        },
        {
          label: "本周运势",
          value: "week"
        },
        {
          label: "本月运势",
          value: "month"
        },
        {
          label: "今年运势",
          value: "year"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      const { cstName, selectType } = this.formInline;
      if(!cstName || !selectType) return
      getConstellation(cstName, selectType)
        .then(res => {
          this.renderData = res.data;
        })
        .catch(err => console.log(err));
    }
  },
  components: {}
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 15px;
}
.content {
  width: 90%;
  height: auto;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  margin: 10px 0 0 10px;
}
.info-item {
  padding: 8px;
  font-size: 20px;
  font-weight: bold;
}
.info-item span {
  font-size: 16px;
  color: #7c7777;
  margin-left: 40px;
  font-weight: 500;
}
.info-nums {
  font-size: 16px;
  color: brown;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
