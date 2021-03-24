<template>
  <div>
    <div id="head_top">
      <span id="head_top_welcome">您好，欢迎访问北上快马官方网站！</span>
      <span id="head_top_phone">咨询热线：0591-88626767</span>
      <span id="head_top_title">北上快马</span>
    </div>
    <div id="main_menu">
      <div id="logo">

      </div>
      <Tab-ber> 
        <tab-ber-item path="/home" activeColor="#D91F23">
          <div slot="name-text">首页</div>
        </tab-ber-item>
        
        <tab-ber-item path="/junior" activeColor="#D91F23">
          <div slot="name-text">专科</div>
        </tab-ber-item>
        
        <tab-ber-item  path="/undergraduate" activeColor="#D91F23" >
          <div slot="name-text">本科</div>
        </tab-ber-item>

        <tab-ber-item path="/graduate" activeColor="#D91F23">
          <div slot="name-text">在职研究生</div>
        </tab-ber-item>
         <tab-ber-item path="/credential" activeColor="#D91F23">
          <div slot="name-text">职业证书</div>
        </tab-ber-item>
         <tab-ber-item path="/announcement" activeColor="#D91F23">
          <div slot="name-text">教学公告</div>
        </tab-ber-item>
        <tab-ber-item path="/about" activeColor="#D91F23">
          <div slot="name-text">关于我们</div>
        </tab-ber-item>
      </Tab-ber>
    </div>
    
  </div>
</template>

<script>

import TabBer from './tabber/tabber'
import TabBerItem from './tabber/TabBarItem'
export default {
  name:"MainTabBar",
  components:{
    TabBer,
    TabBerItem
  }
  
}
</script>

<style lang="scss" scoped>
#head_top{
  width: 100%;
  height: 26px;
  opacity: 1;
  background: #d96464;
  // padding: 0 19%;
  span{
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: right;
    color: #ffffff;
    line-height: 26px;
    letter-spacing: 0px;
  }
  #head_top_welcome{
    position: absolute;
    left: 19%;
  }
  #head_top_phone{
    position: absolute;
    left:35%;
  }
  #head_top_title{
    position: absolute;
    left: 78%;
  }
}
#main_menu{
  height: 78px;
  opacity: 1;
  background: #ffffff;  
  border: 1px solid #e6e6e6;
  width: 100%;
  // padding: 0 19%;
  #logo{
    width: 176px;
    height: 66px;
    position: absolute;
    top: 32px;
    left: 19%;
    opacity: 1;
    background-image: url("../assets/img/logo.png") ;
    background-size: cover;
  }
}

</style>