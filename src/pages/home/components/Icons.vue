<!--  -->
<template>
<div class='icons'>
    <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) in pages" :key="index">
            <div class="icon" v-for="item in page" :key="item.id">
                <div class="icon-img">
                    <img class="icon-img-content" :src="item.imgUrl" alt="景点门票" style="opacity:1;"/>
                </div>
                <p class="icon-desc">{{item.desc}}</p>
            </div>
        </swiper-slide>
    </swiper>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
//import引入的组件需要注入到对象中才能使用
name:'HomeIcons',
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
    pages(){
        const pages=[];
        this.list.forEach((item,index) => {
            const page=Math.floor(index/8);
            if(!pages[page]){
                pages[page]=[];
            }
            pages[page].push(item)
        });
        return pages;
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
<style  scoped>
.icons{
    height:0;
    padding-bottom:50%;
    overflow: hidden;  
}
.icon{
    float:left;
    width: 25%;
    padding-bottom:25%;
    position: relative;
    height: 0;
}
.icon-img{
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:.44rem;
    box-sizing: border-box;
    padding:.1rem;
   
}
.icon-img-content{
    height: 100%;
    display:block;
    margin:0 auto;
}
.icon-desc{
    position: absolute;
    left:0;
    right:0; 
    bottom:0;
    height: .44rem;
    line-height: .44rem;
    color:#333;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

}

</style>
