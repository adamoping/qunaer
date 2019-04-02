<!--  -->
<template>
<div class=''>
    <home-header></home-header>   
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import HomeHeader from './components/Header'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeSwiper from './components/Swiper'
import HomeWeekend from './components/Weekend'
import { mapState} from 'vuex'
export default {
//import引入的组件需要注入到对象中才能使用
name:'Home',
components: {
    HomeHeader,
    HomeIcons,
    HomeRecommend,
    HomeSwiper,
    HomeWeekend
},
data() {
//这里存放数据
return {
    lastcity:'',
    swiperList:[],
    iconList:[],
    recommendList:[],
    weekendList:[]
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
    getHomeInfo(){
        this.$http('/api/index.json?city='+this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
        res = res.data
      if (res.ret && res.data){
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
      
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
     this.getHomeInfo()
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {
    if (this.lastcity !== this.city) {
      this.lastcity = this.city
      this.getHomeInfo()
    }
}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>


</style>