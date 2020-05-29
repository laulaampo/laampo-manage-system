<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {getHistoryToday,getWordInfo} from '../src/api/index'
export default {
  name: "App",
  components: {
    
  },
  async mounted(){
    await getHistoryToday(1,2,24)
          .then(res=>console.log(res))
          .catch(err => console.log(err))

    await getWordInfo('刘')
          .then(res => console.log(res))
          .catch(err => console.log(err))
  }
};
</script>

<style scoped>
</style>
