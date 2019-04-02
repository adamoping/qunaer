<!--  -->
<template>
<div class=''>
    <router-link to="/" tag="div" class="header-abs" v-show="showAbs">返回</router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
     <router-link to="/"><span class="iconfont icon-dianzan flml20"></span></router-link>   
        景点详情</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'DetailHeader',
components: {},
data() {
//这里存放数据
return {
    showAbs:true,
    opacityStyle:{
        opacity:0
    }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    handleScroll(){
        const top=document.documentElement.scrollTop 
       
        if(top>60){
            let opacity = top/140;
            opacity = opacity > 1 ? 1 : opacity;
            this.opacityStyle={opacity};
            this.showAbs=false;
        }else{
            this.showAbs=true;
        }
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
     window.addEventListener('scroll', this.handleScroll)
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {
    window.addEventListener('scroll', this.handleScroll)
}, //如果页面有keep-alive缓存功能，这个函数会触发
deactivated(){
    window.removeEventListener('scroll', this.handleScroll)
}
}
</script>
<style scoped>



.header-abs{
    position: absolute;
    color:white;
    text-align: center;
    line-height: .8rem;
    left:.2rem;
    top:.2rem;
    width: .8rem;
    height: .8rem;
    border-radius:.4rem;
    background: rgba(0,0,0,.8)
}
.header-fixed{
    /* position:relative;
    height: 1.2rem;
    line-height: 1.2rem;
    overflow: hidden;
    text-align: center;
    color:#fff;
    background-color: steelblue;
    font-size:.32rem;
    top:-4.2rem; */
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 0.86rem;
    line-height: 0.86rem;
    text-align: center;
    color: #fff;
    background: #00bcd4;
    font-size: 0.32rem;
   
}
.flml20{
    position: absolute;
    /* margin-right: 3rem; */
    margin-left: -2rem;
}
</style>

