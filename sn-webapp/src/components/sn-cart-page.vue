<template>
    <div class="sn-cart">
<!--        编辑购物车-->
        <div class="sn-cart-top">
            <label></label>
            <label class="sn-cart-cen">购物车</label>
            <label class="sn-cart-rig">编辑</label>
        </div>
<!--        店铺信息-->
        <div class="sn-cart-products">
            <sn-cart-products :data="data.shops" ></sn-cart-products>
        </div>
<!--        没有更多了-->
        <div class="sn-cart-nomore">
            <img src="../assets/images/reach-bottom.png" alt="">
        </div>
    </div>
</template>

<script>
    import api from "../api/api";
    import snCartProducts from "./sn-carts-products"
    export default {
        name: "sn-cart-page",
        components:{
            snCartProducts
        },
        data(){
            return {
                data:[]
            }
        },
        methods:{
          async  _initData(){
              let a = await api.getCartData()
              this.data = a
              // eslint-disable-next-line no-console
              console.log(this.data)
            },
        },
        beforeMount() {
            this._initData()
        }
    }
</script>

<style scoped>
    .sn-cart-nomore img{
        display: block;
        width: 2.5rem;
        margin: 0.5rem auto;
    }
    .sn-cart-nomore{
        width: 100%;
        height: 1rem;
        overflow: hidden;
    }
    .sn-cart{
        width: 100%;
        font-size: 0.14rem;
        overflow: hidden;
        background-color: #F5F5F9;
    }
    .sn-cart-top{
        width: 100%;
        position: fixed;
        height: 0.5rem;
        background-color: white;
        display: flex;
        justify-content: space-around;
    }
    .sn-cart-top label{
        width: 30%;
        height: 100%;
    }
    .sn-cart-cen{
        text-align: center;
        font-size: 0.18rem;
        line-height: 0.5rem;
    }
    .sn-cart-rig{
        text-align: right;
        line-height: 0.5rem;
        font-size: 0.16rem;
        color: blue;
    }
    .sn-cart-products{
        width: 95%;
        border-radius: 0.1rem;
        margin: 0.6rem auto 0;
    }
</style>