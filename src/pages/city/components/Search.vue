<!--  -->
<template>
<div>
    <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
    </div>
    <div class="search-content" ref="search" v-show="keyword">
        <ul>
            <li class="search-item border-bottom" v-for="item in list" :key="item.id"
                @click="handleCityClick(item.name)">{{item.name}}</li>
            <li class="search-item border-bottom"  v-show="!list.length">没有找到对应的城市/地区</li>
        </ul>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Bscroll from 'better-scroll'

export default {
//import引入的组件需要注入到对象中才能使用
name:'CitySearch',
props:{
    cities:Object
},
components: {},
data() {
//这里存放数据
return {
    keyword:'',
    list:[],
    timer:null
};
},
//监听属性 类似于data概念
computed: {
   
},
//监控data中的数据变化
watch: {
    keyword(){
        if(this.timer){
            clearTimeout(this.timer);
        }
        if(!this.keyword){
            this.list=[]
            return
        }
        this.timer=setTimeout(()=>{
            const result=[]
            for(let i in this.cities){
                this.cities[i].forEach((value) => {
                    if(value.spell.indexOf(this.keyword) > -1 ||
                    value.name.indexOf(this.keyword) > -1){
                        result.push(value);
                    }
                    
                });
            }
            this.list=result
            console.log(result)
        },100)
        console.log(this.list)
    }
},
//方法集合
methods: {
    handleCityClick(city){
        this.$store.dispatch('changeCity',city);
        this.$router.push("/");
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
     this.scroll = new Bscroll(this.$refs.search)
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
.search{
    height: .72rem;
    padding:0 .1rem;
    background: steelblue;
}
.search-input{
    box-sizing: border-box;
    height: .62rem;
    line-height: .62rem;
    width: 100%;
    text-align: center;
    border-radius:.6rem;
    color:#666;
    padding:0 .1rem;

}
.search-content{
    overflow: hidden;
    z-index:1;
    position:absolute;
    top:1.58rem;
    left:0;
    right:0;
    bottom:0;
   background:#eee;
   text-align: left;
}
.search-item{
    line-height: .62rem;
    padding-left:.2rem;
    background:#fff;
    color:#666;

}
</style>
