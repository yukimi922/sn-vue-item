<template>
    <div class="sn-my-order">
        <div class="sn-order-head">
            <p>我的订单</p>
            <p>查看全部<span><img src="../../assets/images/next.png" alt=""></span></p>
        </div>
<!--        订单列表-->
        <div class="sn-order-list">
            <sn-order-list :key="i" v-for="(n,i) in order" :data="n"></sn-order-list>
        </div>
    </div>
</template>

<script>
    import snOrderList from './sn-order-list'
    // import api from "../../api/api";
    export default {
        name: "sn-my-order",
        components:{
            snOrderList
        },
        data(){
          return{
              order:[
                  {
                      title:'待支付',
                      num:0,
                      src:'./images/order-icon01.png'
                  },
                  {
                      title:'待收货',
                      num:0,
                      src:'./images/order-icon02.png'
                  },
                  {
                      title:'评价有礼',
                      num:0,
                      src:'./images/order-icon03.png'
                  },
                  {
                      title:'退换/售后',
                      num:0,
                      src:'./images/order-icon04.png'
                  },
                  {
                      title:'常购清单',
                      num:0,
                      src:'./images/order-icon05.png'
                  }
              ]
          }
        },

    }
</script>

<style scoped>

    .sn-order-list{
        width: 100%;
        display: flex;
        font-size: 0.14rem;
        margin-bottom: 0.1rem;
    }
    .sn-order-head p:nth-child(2) span img{
        width: 100%;
    }
    .sn-order-head p:nth-child(2) span{
        display: inline-block;
        width: 0.1rem;
        height: 0.1rem;
        margin-left: 0.1rem;
    }
    .sn-order-head p:nth-child(1){
        font-family: PingFangSC-Semibold;
        font-size: 0.16rem;
        color: #222;
        letter-spacing: 0;
        font-weight: 700;
    }
    .sn-order-head{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .sn-my-order{
        width: 90%;
        background-color: white;
        margin: 0.5rem auto 0.1rem;
        border-radius: 0.1rem;
        padding: 0.1rem;
    }
</style>