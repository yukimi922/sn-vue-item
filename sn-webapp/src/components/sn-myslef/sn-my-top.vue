<template>
    <div class="sn-my">
        <div class="sn-my-top">我的易购<span><img src='../../assets/images/setting.png' alt=""></span></div>
        <div class="sn-top-info">
            <!--                头像-->
            <div class="sn-my-head">
                <img src="../../assets/images/0000000000_01_240x240.jpg" alt="">
            </div>
<!--            信息-->
            <div class="sn-top-tel">
                <p>{{tel}}</p>
                <a>生态值227</a>
            </div>
<!--            会员码-->
            <div class="sn-top-code">
                <img src="../../assets/images/qr-icon.png" alt="">
            </div>
        </div>
<!--        头部关注列表-->
        <div class="sn-top-money">
            <sn-top-list :key="i" v-for="(n,i) in list" :data="n"></sn-top-list>
        </div>
<!--        优惠券-->
        <div class="sn-top-sale">
            <div>
                <img src="../../assets/images/vip.png" alt="">
            </div>
            <div>
                【免费】您可领一张运费卷
            </div>
            <div>
                <p>立即领取<span></span></p>
            </div>
        </div>
    </div>
</template>

<script>
    import snTopList from './sn-top-list'
    export default {
        name: "sn-my-top",
        data(){
            return{
                tel:localStorage.getItem('token'),
                list:[
                    {
                        num:0,
                        title:'优惠券'
                    },
                    {
                        num:0,
                        title:'领云钻'
                    },
                    {
                        num:0,
                        title:'足迹'
                    },
                    {
                        num:0,
                        title:'我的关注'
                    }

                ]
            }
        },
        components:{
            snTopList
        }
    }
</script>

<style scoped>
    .sn-top-sale div:nth-child(1){
        width: 10%;
        height: 0.5rem;
        margin-left: 0.1rem;
        margin-top: 0.07rem;
    }
    .sn-top-sale div:nth-child(1) img{
        width: 100%;
        margin-top: 0.03rem;
    }
    .sn-top-sale div:nth-child(2){
        width: 60%;
        line-height: 0.4rem;
        font-size: 0.12rem;
    }
    .sn-top-sale div:nth-child(3){
      line-height: 0.4rem;
    }
    .sn-top-sale div:nth-child(3) p span{
        display: inline-block;
        width: 0.07rem;
        height: 0.07rem;
        border-right: 0.01rem solid #6F6F6F;
        border-bottom: 0.01rem solid #6F6F6F;
        transform: rotate3d(0,0,1,-45deg);
        margin-left: 0.05rem;
    }
    .sn-top-sale{
        width: 95%;
        height: 0.45rem;
        position: absolute;
        bottom: -0.4rem;
        left: 0.1rem;
        background-color: white;
        border-radius: 0.1rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;

    }
    .sn-top-money{
        width: 100%;
        height: 0.5rem;
        display: flex;
        margin-bottom: 0.1rem;
    }
    .sn-top-code{
       width: 0.6rem;
        height: 0.6rem;
        position: absolute;
        right: 0.1rem;
    }
    .sn-top-code img{
        width: 100%;
    }
    .sn-top-tel a{
        display: inline-block;
        background-color: rgba(0,0,0,.2);
        font-size: 0.1rem;
        border-radius: 0.1rem;
        padding: 0 0.05rem;
        color: white;
    }
    .sn-top-tel p{
        margin: 0.1rem 0 0.05rem 0;
    }
    .sn-top-tel{
        width: 40%;
        height: 0.9rem;
        box-sizing: border-box;
        padding-left: 0.1rem;
    }
    .sn-top-info{
        width: 90%;
        height: 0.8rem;
        margin: 0.1rem auto 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        position: relative;
        overflow: hidden;
    }
    .sn-my-head{
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        overflow: hidden;
    }
    .sn-my-head img{
        width: 100%;
        display: block;
    }
    .sn-my{
        width: 100%;
        background-color: #FFDB47;
        position: relative;
    }
    .sn-my-top{
        width: 100%;
        height: 0.4rem;
        text-align: center;
        overflow: hidden;
        position: relative;
        line-height: 0.4rem;
        font-size: 0.18rem;
        font-weight: 700;
        font-family: "Microsoft YaHei UI";
    }
    .sn-my-top span{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        right: 0.2rem;
        top: 0.1rem;
    }
    .sn-my-top span img{
        width: 100%;
        display: block;
    }
</style>