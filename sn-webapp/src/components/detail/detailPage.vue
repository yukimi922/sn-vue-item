<template>
    <div class="detail">
        <div>
           <div class="sn-detail-swp">
               <img :src="data.products[tag].img" alt="">
           </div>
            <div class="sn-goods-price">
                <div class="price">
                    <p>￥<span>{{data.products[tag].price}}</span>.<span>{{data.products[tag].pr2}}</span><span v-show="data.products[tag].pr2<10">0</span></p>
                    <p><span>{{data.products[tag].sale}}</span></p>
                </div>
                <div class="time">

                </div>
            </div>
            <div class="goods-money">
                <h1 class="sn-goods-title">{{data.products[tag].title}}</h1>
            </div>
<!--            底部-->
            <div class="join-cart">
                <div class="cart">
                    <a>马上抢</a>
                </div>
                <div  class="buy">
                    <a>加入购物车</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import api from "../../api/api";
    export default {
        name: "detailPage",
        data(){
            return{
                tag:'',
                data:[]
            }
        },
        mounted() {
            let a = this.$route.query.id
            this.tag = a
        },
        methods:{
            async _initData(){
                let b = await api.getGoodsData()
                this.data = b
                // eslint-disable-next-line no-console
                console.log(this.data.products[this.tag])
            },
        },
        beforeMount () {
            this._initData()
        },
    }
</script>

<style scoped>
    .join-cart{
        width: 100%;
        height: 0.5rem;
        background-color: white;
        position: fixed;
        bottom: 0rem;
        z-index: 30;
        display: flex;
        justify-content: space-between;
    }
    .cart a{
        display: inline-block;
        background-color: #ffcc00;
        padding: 0.15rem 0.6rem;
    }
    .buy a{
        display: inline-block;
        background-color: #FF6600;
        padding: 0.15rem 0.7rem;
    }
    .sn-goods-title{
        font-size: 0.16rem;
        font-weight: 700;
    }
    .goods-money{
        width: 90%;
        margin: 0.1rem auto;
    }
    .price{
        width: 65%;
        overflow: hidden;
        box-sizing: border-box;
        padding: 0.1rem;

    }
    .price p:nth-child(1){
        color: white;
        font-size: 0.16rem;
        font-weight: 500;
    }
    .price p:nth-child(2)>span{
        display: inline-block;
        font-size: 0.16rem;
        color: white;
    }
    .price p:nth-child(1) span:nth-child(1){
        font-size: 0.25rem;
    }
    .time{
        width: 35%;
        /*background-color: darkcyan;*/
    }
    .sn-goods-price{
        width: 100%;
        display: flex;
        background-image: url("../../assets/images/157286956779778415.jpg");
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .sn-detail-swp{
        width: 100%;
        overflow: hidden;
    }
    .sn-detail-swp img{
        width: 100%;
        display: block;
    }
    .detail{
        font-size: 0.14rem;
        width: 100%;
        background-color: white;
    }
</style>