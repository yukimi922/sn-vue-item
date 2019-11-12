<template>
    <div>
        <div :key="i" class="sn-goods-item" v-for="(n,i) in data">
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
    export default {
        name: "sn-goods-item",
        props:['data']
    }
</script>

<style scoped>
    .goods-num{
        width: 42%;
        height: 100%;
        display: flex;
        align-items: flex-end;
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
</style>