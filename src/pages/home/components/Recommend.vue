<!--  -->
<template>
<div class='recommend-container'>
    <div class="recommend-title">猜你喜欢</div>
    <ul>
        <router-link tag="li" class="item border-bottom"
            v-for="item in list" :key="item.id" to="/detail/">
            <img class="item-img"
                :src="item.imgUrl"/>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </router-link>
        
    </ul>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'HomeRecommend',
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
.recommend-container{
    text-align: left;
}
.recommend-title{
    line-height: .8rem;
    background: #eee;
    margin-top:.2rem;
    text-indent:.2rem   
}
.item{
    display: flex;
    height: 1.9rem;
    overflow: hidden;
     
}
.item-img{
    width: 1.7rem;
    height:1.7rem;
    padding:.1rem;
    background-size: contain;
}
img{
    background-size: contain;
}
.item-info{
    flex:1;
    padding:.1rem;
}
.item-title{
    line-height: .54rem;
    font-size:.32rem;
}
.item-desc{
    line-height: .4rem;
    color:#ccc;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.item-button{
    margin-top:.2rem;
    background: #ff9300;
    padding:0 .1rem;
    border-radius: .06rem;
    color:#fff;
    line-height: .44rem;
}

</style>

