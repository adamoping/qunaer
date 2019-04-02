<!--  -->
<template>
<div class='banner' @click="handleBannerClick">
    <img class="banner-img" :src="bannerImg"/>
    <div class="banner-info">
        <div class="banner-title">
            {{this.sightName}}
        </div>
        <span class="banner-number"></span>
        <span class="iconfont icon-moreunfold" >{{this.bannerImgs.length}}</span>
    </div>
    <div v-show="showGallery">
    <common-gallery ref="gallaryImg" :imgs="bannerImgs"
        
        @close="handleGalleryClick">
    </common-gallery>
    </div>
</div>
</template>
<script>
import CommonGallery from '@/components/Gallery'
export default {
//import引入的组件需要注入到对象中才能使用
name:'DetailBanner',
props:{
    sightName:String,
    bannerImg:String,
    bannerImgs:Array
},
components: {
    CommonGallery
},
data() {
//这里存放数据
return {
    showGallery:false    
};
},
methods: {
    handleBannerClick(){
        this.showGallery=true
    },
    handleGalleryClick(){
       
        this.showGallery = false;  
         console.log('父级',this.showGallery);     
    }

},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合

//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {
    
}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
.banner{
    overflow: hidden;
    position: relative;
    height: 0;
    padding-bottom:55%
    
}
.banner-img{
    width:100%;
}
.banner-info{
    display:flex;
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    line-height: .6rem;
    color:#fff;
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.8));
}
.banner-title{
    flex:1;
    font-size:.32rem;
    padding:0 .2rem;
}
.banner-number{
    padding:0 .4rem;
    margin-top:.2rem;
    height: .4rem;
    line-height: .4rem;
    border-radius:.2rem;
    font-size:.24rem; 
}

</style>


