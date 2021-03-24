<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :style="cativeStyle"><slot name="name-text"></slot></div>
  </div>
   
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:String,
    activeColor:{
        type:String,
        default:'red'
    }
    },
  data() {
    return {
      // isActive:true
    }
  },
  methods: {
    itemClick(){ 
      console.log(this.$route)
      if(this.$route.path!=this.path)
      this.$router.push(this.path)
      // 不显示错误信息
      // this.$router.push(this.path).catch (err=> {})
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path)!=-1
    },
    cativeStyle(){
      return this.isActive ?{color: this.activeColor ,  'border-bottom':'#d91f23 solid 2px' } : {}
    }
  },
  
}
</script>

<style scoped>
 .tab-bar-item{
    color: #333333;
    opacity: 1;
    font-size: 16px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: center;
    color: #333333;
    line-height: 76px;
    letter-spacing: 0px;
    margin-right:42px ;
  }
  .tab-bar-item:hover{
     cursor:Pointer;
  }
</style>