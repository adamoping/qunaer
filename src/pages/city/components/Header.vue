<!--  -->
<template>
<div class='header'>
    城市选择
    <router-link to="/">
        <div class="header-back iconfont icon-huiyuan"></div>
    </router-link>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    name:"CityHeader"
}
</script>
<style  scoped>
.header{
    height: .86rem;
    line-height: .86rem;
    overflow: hidden;
    text-align: center;
    color:#fff;
    background-color: steelblue;
    font-size:.32rem;
    position: relative;

}
.header-back{
    color:white;
    font-size:.5rem;
    position: absolute;
    top:0;
    left:0;
    width: .64rem;
    text-align: center;
}

</style>