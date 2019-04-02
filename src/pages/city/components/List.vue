<!--  -->
<template>
<div class='list' ref="wrapper">
    <div>
    <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
            <div class="button-wrapper">
                   <div class="button">{{this.city}}</div>
            </div>
        </div>
    </div>

    <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
            <div class="button-wrapper" v-for="item in hot" :key="item.id" @click="handleCityClick(item.name)">
                   <div class="button">{{item.name}}</div>
            </div>
        </div>
    </div>

    <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
            <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" 
                @click="handleCityClick(innerItem.name)">
                    {{innerItem.name}}
            </div>
        </div>
    </div>
    </div>     
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Bscroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
export default {
//import引入的组件需要注入到对象中才能使用
name:'CityList',
props:{
    hot:Array,
    cities:Object,
    letter:String
},
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
watch: {
    letter(){
        if (this.letter) {
                const element =  this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
    }
},
//方法集合
methods: {
    handleCityClick(city){
        this.changeCity(city)
        this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    this.scroll=new Bscroll(this.$refs.wrapper)
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
.border-topbottom ::before
{
     border-color:#ccc;
}
.border-topbottom::after{
    border-color:#ccc;
}
.border-bottom ::before
{
     border-color:#ccc;
}
.list{
    position: absolute;
    top:1.58rem;
    left:0;
    right:0;
    bottom:0;
    overflow: hidden;
    text-align: left;
}
.title{
    line-height: .56rem;
    background:#eee;
    padding-left:.2rem;
    color:#666;
    font-size:.26rem;
}
.button-list{
    padding:.1rem .6rem .1rem .1rem;
    overflow: hidden;

}
.button-wrapper{
    width: 33.33%;
    float: left;
}
.button{
    text-align: center;
    margin:.1rem;
    border:.02rem solid #ccc;
    border-radius: .06rem;
}
.item-list .item{
    line-height: .76rem;
    color:#666;
    padding-left:.2rem;
}

</style>