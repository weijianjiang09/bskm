<template>
  <div id="app">
    <el-container>
      <el-header><main-tab-bar></main-tab-bar></el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>

import MainTabBar from './components/MainTabBar'

export default {
  name:'App',
  components:{
    MainTabBar
  }
}

</script>
<style lang="scss" scoped>

.el-header,.el-footer,.el-main {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow:visible;
}
.el-header{
  height: 104px !important;
}
@import './assets/css/base.css';

</style>
