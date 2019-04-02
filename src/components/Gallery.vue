<!--  -->
<template>
<div class='container' @click="handleGalleryClick">
    <div class="wrapper">
        <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
            <img :src="item" alt="" class="gallery-img">
        </swiper-slide>
         <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
//import引入的组件需要注入到对象中才能使用
name:'CommonGallery',
props:{
    imgs:{
        type:Array,
        default(){
            return [];
        }
    }
},
components: {
    swiper,
    swiperSlide
},
data() {
//这里存放数据
return {
    swiperOption:{
         pagination:'.swiper-pagination',
                paginationType: 'fraction',
                observeParents: true,
                observer: true 
    }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    handleGalleryClick(){
        console.log('子级点击');
        this.$emit('close')
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style>
.container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    z-index:99;
    position:fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background: #000;
}
.wrapper{
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom:100%;
}
.swiper-pagination{
    color:#fff;
}
.gallery-img{
    width: 100%;
}
</style>


