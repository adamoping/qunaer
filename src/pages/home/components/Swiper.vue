<!--  -->
<template>
<div class='wrapper'>
    <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide v-for="item in list" :key="item.id">
            <img class="swipe-img" :src="item.imgUrl"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
//import引入的组件需要注入到对象中才能使用
name:'HomeSwiper',
props:{
    list:Array
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
        loop:true
       
    }
};
},
//监听属性 类似于data概念
computed: {
    showSwiper(){
        return this.list.length
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    console.log(this.list.length)
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
<style scoped>
 
.wrapper{
    overflow:hidden;
    width: 100%;
    height: 0;
    padding-bottom:26%;
}

.swipe-img{
    width:100%;

}

</style>
