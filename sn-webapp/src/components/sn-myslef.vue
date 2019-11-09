<template>
    <div class="sn-my-page">
<!--        个人主页头部-->
        <sn-my-top></sn-my-top>
<!--        订单信息-->
        <sn-my-order></sn-my-order>
        <!--        必备工具-->
        <sn-my-tool></sn-my-tool>
<!--        好货推荐-->
        <div class="sn-goods-recommen">
            <p>
                <span>
                    <img src="./../assets/images/guessTitle-icon.png" alt="">
                </span>
                好货推荐
                <span>
                    <img src="./../assets/images/guessTitle-icon.png" alt="">
                </span>
            </p>
        </div>
    </div>
</template>

<script>
    import snMyOrder from './sn-myslef/sn-my-order'
    import snMyTop from './sn-myslef/sn-my-top'
    import snMyTool from './sn-myslef/sn-my-tool'
    export default {
        name: "sn-myslef",
        components:{
            // eslint-disable-next-line vue/no-unused-components
            snMyTop,snMyOrder,snMyTool
        }
    }
</script>

<style scoped>
    .sn-my-page{
        width: 100%;
        font-size: 0.14rem;
        background-color: #F2F2F2;
        height: 8rem;
    }
    .sn-goods-recommen{
        width: 100%;
        height: 0.4rem;
        margin-top: 0.1rem;
        text-align: center;
        line-height: 0.4rem;
        font-family: PingFangSC-Semibold;
        font-size: 0.16rem;
        color: #222;
        letter-spacing: 0;
        font-weight: 700;
    }
    .sn-goods-recommen span:nth-child(1){
        display: inline-block;
        width: 0.3rem;
    }
    .sn-goods-recommen span:nth-child(1) img{
        width: 100%;
    }
    .sn-goods-recommen span:nth-child(2){
        display: inline-block;
        width: 0.3rem;
    }
    .sn-goods-recommen span:nth-child(2) img{
        width: 100%;
        transform: rotate3d(0,0,1,180deg);
    }
</style>