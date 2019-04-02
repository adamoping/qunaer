<!--  -->
<template>
<div class='weekend-container'>
    <div class="recommend-title">
        周末去哪儿
    </div>
    <ul>
        <li class="item border-bottom" v-for="item in list" :key="item.id">
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl" alt=""/>
            </div>
            <div class="item-info">
                <p class="item-title">{{item.item}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'HomeWeekend',
props:{
    list:Array
},
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
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
<style scoped>
.weekend-container{
    text-align: left;
}
.recommend-title{
    line-height: .8rem;
    background: #eee;
    margin-top:.2rem;
    text-indent:.2rem   
}
.item-img-wrapper{
    height:0;
    overflow: hidden;
    padding-bottom:33.9%;
}

.item-img{
    width: 100%;
   
}
.item-info{
    padding:.1rem;
}
.item-title{
    line-height: .54rem;
    font-size:.32rem;
}
.item-desc{
    line-height: .4rem;
    color:#ccc;
}


</style>

