<template>
    <div class="products">
        <div class="shop-info">
            <div class="sn-shop-check">
                <div class="check-img">
                    <input type="checkbox">
                    <img src="../assets/images/select.png" alt="" class="shop-check" />
                </div>
            </div>
            <div class="sn-shop-name">
                <div class="shop-img">

                </div>
<!--                店铺名-->
                <div class="shop-name">
                    <p>{{data.name}}<span></span></p>
                </div>
<!--                领劵-->
                <div class="shop-sale">

                </div>
            </div>
        </div>
<!--        <sn-goods-item :data="data.products"></sn-goods-item>-->
        <div :key="i" class="sn-goods-item" v-for="(n,i) in data.products">
<!--            商品单选框-->
            <div class="sn-goods-check">
                <div class="check-single">
                    <input type="checkbox">
                    <img src="../assets/images/select.png" alt="">
                </div>
            </div>
<!--            商品详情-->
            <div class="goods-item-detail">
                <div class="goods-img">
                    <img :src="n.img" alt="">
                </div>
                <div class="goods-detail">
                    <p>{{n.title}}</p>
<!--                    优惠券-->
                    <div class="goods-sale">
                        <span>{{n.sale}}</span>
                    </div>
                    <div class="goods-money">
                        <p>￥{{n.price}}.<span>{{n.pr2}}</span></p>
                        <div class="goods-num">
                            <button>-</button>
                            <input type="text" :value="n.total">
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import snGoodsItem from "./sn-goods-item"
    export default {
        name: "sn-cart-item",
        props:['data'],
        data(){
            return{
                num:''
            }
        },
        components:{
            // snGoodsItem
        },
        methods:{
            // add(){
            //         this.num++
            // }
        }
    }
</script>

<style scoped>
    .goods-num{
        width: 42%;
        height: 100%;
        display: flex;
        align-items: flex-end;
    }
    .goods-num input{
        width: 0.5rem;
        height: 0.18rem;
        border: none;
        outline: none;
        text-align: center;
        border-bottom: 0.01rem solid #6F6F6F;
        border-top: 0.01rem solid #6F6F6F;
    }
    .goods-num button{
        width: 0.2rem;
        height: 0.2rem;
    }
    .goods-money>p{
        align-self: flex-end;
        color: #f42;
        font-weight: 900;
        font-size: 0.14rem;
    }
    .goods-money>p>span{
        font-size: 0.12rem;
    }
    .goods-money{
        width: 100%;
        height: 0.35rem;
        display: flex;
        justify-content: space-between;
    }
    .goods-sale{
        width: 100%;
        height: 0.3rem;
    }
    .goods-sale span{
        display: inline-block;
        background-color: orangered;
        color: white;
        margin-top: 0.1rem;
        border-radius: 0.1rem;
        box-sizing: border-box;
        padding: 0 0.05rem;
        font-size: 0.12rem;
        font-weight: 700;
    }
    .goods-detail>p{
        font-size: 0.12rem;
        font-family: Microsoft YaHei,Arial,Helvetica,STHeiTi,sans-serif;
        font-weight: 700;
        line-height: 0.17rem;
    }
    .goods-detail{
        width: 70%;
        height: 100%;
        box-sizing: border-box;
        padding-left: 0.05rem;
    }
    .goods-img{
        width: 30%;
        height: 100%;
        position: relative;
    }
    .goods-img img{
        width: 100%;
        display: block;
    }
    .goods-img img:after{
        width: 1.1rem;
        height: 1.05rem;
        background-color: rgba(0,0,0,0.3);
        content: "";
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
    }
    .goods-item-detail{
        width:90% ;
        height: 1rem;
        display: flex;
        padding-bottom: 0.1rem;
    }
    .check-single{
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        left: 0.08rem;
        top: 0.4rem;
        border-radius: 50%;
        overflow: hidden;
    }
    .check-single input{
        width: 0.2rem;
        height: 0.2rem;
        appearance: none;
    }
    .check-single img{
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        left: 0;
        top: 0;
    }
    .sn-goods-check{
        width: 10%;
        height: 100%;
        overflow: hidden;
    }
    .sn-goods-item{
        width: 100%;
        display: flex;
        position: relative;
        padding: 0 0.2rem 0.1rem 0;
    }
    .shop-sale{
        width: 20%;
        height: 100%;
        background-image: url("../assets/images/usable-coupon.png");
        background-size: 0.5rem;
        background-repeat: no-repeat;
        background-position: 0.06rem 0.02rem;
    }
    .shop-img{
        width: 10%;
        background-image: url("../assets/images/cshop.png");
        background-repeat: no-repeat;
        background-size: 0.2rem 0.2rem;
        background-position: 0.05rem 0;
    }
    .shop-name span{
        display: inline-block;
        width: 0.07rem;
        height: 0.07rem;
        border-right: 0.01rem solid #6F6F6F;
        border-bottom: 0.01rem solid #6F6F6F;
        margin-left: 0.07rem;
        transform: rotate3d(0,0,1,-45deg);
        position: relative;
        top: -0.01rem;
    }
    .shop-name{
        width:70%;
        height: 100%;
        color: #333333;
    }
    .sn-shop-name{
        width: 90%;
        height: 100%;
        /*background-color: #2c3e50;*/
        display: flex;
    }
    .shop-info{
        width: 100%;
        height: 0.2rem;
        display: flex;
        padding: 0.1rem 0;
    }
    .products{
        margin-top: 0.1rem;
        background-color: white;
        padding-right: 0.1rem;
        border-radius: 0.1rem;
    }
    .sn-shop-check{
        width: 10%;
        height: 100%;
        background-color: white;
        position: relative;
    }
    .sn-shop-check input{
        width: 0.2rem;
        height: 0.2rem;
        appearance: none;
    }
    .check-img{
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        left: 0.1rem;
        border-radius: 50%;
        overflow: hidden;
    }
    .shop-check{
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
</style>