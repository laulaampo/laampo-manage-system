<template>
  <div class="wrapper">
    <Header />
    <LeftNav />
    <router-view style="margin-left:250px"></router-view>
  </div>
</template>

<script>
import Header from './Header'
import LeftNav from './LeftNav'
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    Header,
    LeftNav
  }
}
</script>

<style scoped>

</style>
