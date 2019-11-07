<template>
    <div class="sn-must-page">
        <!--    顶部搜索-->
        <div class="sn-must-top">
            <a href='#'></a>
            <img src="../assets/images/tittle.png" alt="" />
        </div>
        <!--    顶部导航-->
        <div class="sn-must-nav">
            <ul>
                <li>精选</li>
                <li>家电</li>
                <li>酷机</li>
                <li>超市</li>
                <li>穿搭</li>
            </ul>
        </div>
        <sn-must-floor></sn-must-floor>
    </div>
</template>

<script>
    import snMustFloor from './sn-must-floor'
    export default {
        name: "sn-must-page",
        components:{
            snMustFloor
        },
    }
</script>

<style scoped>
    .sn-must-page{
        background-color: #F3F3F3;
    }
    .sn-must-top{
        width: 100%;
        height: 0.5rem;
        font-size: 0.14rem;
        /*background-color: pink;*/
        overflow: hidden;
        background-color: white;
    }
    .sn-must-top a{
        display: block;
        position: absolute;
        width: 0.15rem;
        height: 0.15rem;
        border-left: 0.01rem solid #6F6F6F;
        border-bottom: 0.01rem solid #6F6F6F;
        left: 0.15rem;
        top: 0.15rem;
        transform: rotate3d(0,0,1,45deg);
    }
    .sn-must-top img{
        width: 1rem;
        display: block;
        margin: 0.1rem auto;
    }
    .sn-must-nav{
        width: 100%;
        height: 0.6rem;
        background-color: #FF342D;
        display: flex;
        font-size: 0.17rem;
    }
    .sn-must-nav ul{
        width: 100%;
    }
    .sn-must-nav li{
        width: 20%;
        height: 0.6rem;
        display: inline-block;
        text-align: center;
        box-sizing: border-box;
        padding-top: 0.35rem;
        color: #FFEFEF;
    }
    .sn-must-nav li:nth-child(1){
        background-image: url("../assets/images/155117928298268957.png");
        background-repeat: no-repeat;
        background-size: 0.3rem;
        background-position: 0.2rem 0.05rem;
    }
    .sn-must-nav li:nth-child(2){
        background-image: url("../assets/images/155117929720977273.png");
        background-repeat: no-repeat;
        background-size: 0.3rem;
        background-position: 0.22rem 0.05rem;
    }
    .sn-must-nav li:nth-child(3){
        background-image: url("../assets/images/151384323374513944.png");
        background-repeat: no-repeat;
        background-size: 0.3rem;
        background-position: 0.22rem 0.05rem;
    }
    .sn-must-nav li:nth-child(4){
        background-image: url("../assets/images/151375579188137688.png");
        background-repeat: no-repeat;
        background-size: 0.3rem;
        background-position: 0.24rem 0.05rem;
    }
    .sn-must-nav li:nth-child(5){
        background-image: url("../assets/images/151375580058931338.png");
        background-repeat: no-repeat;
        background-size: 0.3rem;
        background-position: 0.24rem 0.05rem;
    }
</style>