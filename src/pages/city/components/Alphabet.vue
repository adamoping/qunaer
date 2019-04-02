<!--  -->
<template>
<ul class='list'>
    <li class="item" v-for="item of letters" :key="item" :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
        >
        {{item}}
    </li>
</ul>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'CityAlphabet',
props:{
    cities:Object
},
components: {},
data() {
//这里存放数据
return {
    touchStatus:false,
    startY:0,
    timer:null
};
},
//监听属性 类似于data概念
computed: {
     letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    handleLetterClick(e){
        this.$emit('change',e.target.innerText)
    },
    handleTouchStart(){
        this.touchStatus=true;
    },
    handleTouchMove(e){
        console.log('haha');
        if(this.touchStatus){
            if(this.timer){
                clearTimeout(this.timer);
            }
                this.timer=setTimeout(() =>{
                    const touchY = e.touches[0].clientY - 79
                    const index = Math.floor((touchY - this.startY) / 20)
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit('change', this.letters[index])
                    }
                },16)
            
        }
    },
    handleTouchEnd () {
      this.touchStatus = false
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
updated() {
    this.startY = this.$refs['A'][0].offsetTop
}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
.list{
    display:flex;
    flex-direction: column;
    justify-content: center;
    position:absolute;
    top:1.58rem;
    right:0;
    bottom:0;
    width: .4rem;
    text-align: center;
    line-height: .4rem;
    color:blue;
}

</style>