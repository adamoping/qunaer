<!--  -->
<template>
<div class='header'>
    <div class="header-left">
        <div class="back-icon iconfont icon-det"></div>
    </div>
    <div class="header-input">
        <span class="iconfont icon-sousuo"></span>
        输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
        <div class="header-right">
            {{this.city}}
            <span class="iconfont icon-moreunfold"></span>
        </div>
    </router-link>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {mapState} from 'vuex'
export default {
//import引入的组件需要注入到对象中才能使用
name:'HomeHeader',
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {
    ...mapState(['city'])
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
<style lang="" scoped>
.header{
    line-height: .86rem;
    display: flex;
    background: #00bcd4;
    color: #fff;
}
.header-left{
    width: .64rem;
    float:left;
}
.back-icon{
   text-align: center;
   font-size: .4rem;
   
}
.header-input{
    flex:1;
    background: #fff;
    border-radius:.1rem;
    margin-top:.12rem;
    height:.64rem;
    line-height:.64rem;
    margin-left:.2rem;
    color:#ccc;
  
}
.header-right{
    min-width: 1.04rem;
    padding:0 .1rem;
    float:right;
    text-align: center;
    color:white;
}

</style>


