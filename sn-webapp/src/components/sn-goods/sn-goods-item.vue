<template>
    <div class="sn-goods-item">
        <div class="sn-goods-img" @click="fun(sid)">
            <img :src="data.img" alt="">
            <p class="goods-title">{{data.title}}</p>
<!--            优惠-->
            <div class="goods-sale">
                <span v-show="data.sale">{{data.sale}}</span>
                <span v-show="data.sale2">{{data.sale2}}</span>
            </div>
            <p class="goods-price">￥<span>{{data.price}}</span><span v-show="data.pr2">.{{data.pr2}}</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sn-goods-item",
        props:['data','sid'],
        mounted() {
            // eslint-disable-next-line no-console
            // console.log(this.data)
        },
        methods:{
            fun(sid){
                this.$bus.$emit('goodsItem',sid);
                this.$router.push(`/goods?id=${sid}`)
                //this.$router.push('/home/goods')
                // eslint-disable-next-line no-console
                console.log(sid)
            }
        }
    }
</script>

<style scoped>
    .goods-price{
        color: #f42;
        font-weight: 700;
    }
    .goods-price span:nth-child(1){
        font-size: 0.16rem;
    }
    .goods-sale span{
        display: inline-block;
        border: 0.01rem solid orangered;
        font-size: 0.1rem;
        padding: 0 0.05rem;
        border-radius:0.1rem ;
    }
    .goods-sale{
        margin: 0.05rem 0;
    }
    .goods-title{
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;  /*要显示的行数*/
        -webkit-box-orient: vertical;
        margin-top: 0.1rem;
        font-size: 0.12rem;
        font-weight: 500;
        color: #333;
    }
    .sn-goods-img{
        width: 100%;
    }
    .sn-goods-img img{
        width: 100%;
        display: block;
    }
    .sn-goods-item{
        width: 49%;
        margin-bottom: 0.1rem;
        overflow: hidden;
        background-color: white;
        padding-bottom: 0.1rem;
        border-radius: 0.1rem;
    }
</style>