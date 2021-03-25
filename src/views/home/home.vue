<template>
  <div id="home">
    <div id="exhibition">
      <div id="exhibition_top_left">
        <h1>提升学历<span>不</span>再是<span>难</span>事</h1>
        <h2>成人专科/本科学历</h2>    
        <h3>高含金量名校文凭，解决上班族学历难题</h3>
      </div>
      <div id="exhibition_top_right"></div>
      <div id="exhibition_bottom">
        <div class="exhibition_bottom_item" v-for="(item,index) in arr" :key="index">
          <div class="exhibition_bottom_item img">{{item.img}}{{index+1}}</div>
          <h4>{{item.h4}}</h4>
          <div class="wire"></div>
          <div class="exhibition_bottom_item qm left"></div>
          <p class="exhibition_bottom_item content">{{item.content}}</p>
          <div class="exhibition_bottom_item qm right"></div>
        </div>
      </div>

    </div>
    <div id="education">
      <h1 id="education_title">量身定制学历提升所属方案</h1>
      <h2 id="education_title_vice">无论你现在是什么学历,都能考名校专/本科</h2>
      <div id="education_rectangle">
        <div class="education_rectangle_img" >
           <!-- v-for="(item,index) in education_img_url" :key="item" :style="" -->
           <!-- -->
        </div>
        <div class="education_rectangle_img">
           <!-- v-for="(item,index) in education_img_url" :key="item" :style="" -->
        </div>
        <div class="education_rectangle_img">
           <!-- v-for="(item,index) in education_img_url" :key="item" :style="" -->
        </div>
        <div class="education_rectangle_img">
           <!-- v-for="(item,index) in education_img_url" :key="item" :style="" -->
        </div>
      </div>
    </div>
  </div> 
</template>
<script>
export default {
  name:'home',
  data() {
    return {
      arr:[{img:"优势",h4:"国家认可 正规学历",content:"由教育部备案，重点大学颁发的正规证书，学信网终身可查，全国企事业单位均认可"},
        {img:"优势",h4:"高含金量 仅次统招",content:"含金量仅次于统招，国企、外企与合资企业均认可，参加公职考试、出国留学升职加薪的硬文凭"},
        {img:"优势",h4:"学费低 人人都能学",content:"不管你是职场精英，还是准备就业的新人，都可申请学费分期，减轻经济压力"},
        {img:"优势",h4:"时间短 适合上班族",content:"985/211重点学府+专业报考平台，合理分配上班族的时间，圆您名校本科梦想"},],
      education_img_url:[{img_url_big:"../../assets/img/home/首页-修改1/矩形.png",img_url:"../../assets/img/home/首页-修改1/椭圆形.png",path:"",title:"本科"},]
    }
  },
}
</script>

<style lang="scss" scoped>
#exhibition{
  width: 100%;
  min-width: 1903px;
  height: 694px;
  min-height: 694px;
  opacity: 1;
  background: url("../../assets/img/home/首页-修改1/位图_4.png") 0 0/100% 100%;
  position: relative;
  #exhibition_top_left{
    position: relative;
    display: inline-block;
    // height: 400px;
    left: 19%;
    h1{
    margin-top: 98px;
    display: inline-block;
    width: 646px;
    height: 65px;
    opacity: 1;
    font-size: 65px;
    font-family: SourceHanSansCN, SourceHanSansCN-Heavy;
    font-weight: 800;
    text-align: left;
    color: #dae3ff;
    line-height: 65px;
    letter-spacing: 6px;
      span{
        color:#FFFFFF;
      }
    }
    h2{
      height: 56px;
      opacity: 1;
      font-size: 56px;
      font-family: SourceHanSansCN, SourceHanSansCN-Bold;
      font-weight: 700;
      text-align: left;
      color: #e1d0b8;
      line-height: 56px;
      letter-spacing: 5px;
      margin-top: 42px;
    }
    h3{
      display: inline-block;
      width: 472px;
      height: 54px;
      opacity: 1;
      background: #e1d0b8;
      border-radius: 36px;
      opacity: 1;
      font-size: 20px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 600;
      text-align: center;
      color: #142342;
      line-height: 54px;
      margin-top: 25px;
    }
  }
  #exhibition_top_right{
    width: 502px;
    height: 342px;
    // margin-top: 98px;
    position: absolute;
    top: 57px;
    left:56%;
    display: inline-block;
    background: url("../../assets/img/home/首页-修改1/编组 8.png") 0 0/100% 100%;
  }
  #exhibition_bottom{
    min-width: 1180px;
    width: 1180px;
    height: 186px;
    margin-left: 19%;
    margin-top: 114px;
    opacity: 1;
    display: flex;
    justify-content:space-between;
    align-items:center ;
    .exhibition_bottom_item{
      width: 280px;
      height: 166px;
      opacity: 1;
      background-color: #343763;
      border-radius: 4px;
      box-shadow: 0px 6px 10px 0px #2b2926; 
      .img{
        width: 225px;
        height: 38px;
        position: relative;
        top: -22px;
        left: 50%;
        margin-left: -112.5px;
        box-shadow:none;
        border: none;
        background: url("../../assets/img/home/首页-修改1/编组 10@2x.png") 0 0/100% 100%;
        opacity: 1;
        font-size: 20px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        text-align: center;
        color: #ffffff;
        line-height: 30px;
      }
      
    }
    h4{
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: center;
      color: #ffffff;
      line-height: 20px;
    }
    .wire{
      margin: 10px auto;
      margin-bottom: 20px;
      width: 44px;
      height: 1px;
      background: #ffffff;
    }
    .content{
      width: 224px;
      height: 60px;
      opacity: 1;
      font-size: 14px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: center;
      color: #d6d7df;
      line-height: 20px;
      margin-left: 4px;
      box-shadow:none;
      border: none;
      display: inline-block;
    }
    span{
      font-size: 50px;
      color:  #519af7;;
    }
    .qm.left,.qm.right{
      box-shadow:none;
      border: none;
      border-radius:0px !important;
      width: 12px;
      height: 10px;
    }
    .qm.left{
      margin-left:12px ;
      background: url("../../assets/img/home/首页-修改1/_.png");
    }
    .qm.right{
      display: inline-block;
      margin-right: 12px;
      margin-top:50px;
      background: url("../../assets/img/home/首页-修改1/_备份.png");
    }
  }
}
#education{
  padding-top: 100px;
  min-width: 1903px;
  width: 100%;
  height: 800px;
  background: url("../../assets/img/home/首页-修改1/位图_3.png") 0 0 / 100% 100%;
  #education_title{
    opacity: 1;
    font-size: 44px;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    text-align: center;
    color: #ffffff;
    line-height: 62px;
    letter-spacing: 4px;
    text-shadow: 0px 2px 4px 0px #d14848; 
  }
  #education_title_vice{
    opacity: 1;
    font-size: 26px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: center;
    color: #ffffff;
    line-height: 37px;
    letter-spacing: 2px;
    margin-top: 21px;
  }
  #education_rectangle{
    margin: 44px 19%;
    width: 1180px;
    min-width: 1180px;
    height: 400px;
    display: flex;
    justify-content:space-between;
    align-items:center ;
  }
  .education_rectangle_img{
    width: 280px;
    height: 400px;
    background: url("../../assets/img/home/首页-修改1/矩形.png");
    background-repeat:no-repeat;   
    background-position: center;   
    background-size: 100% 100%;
  }
}
</style>