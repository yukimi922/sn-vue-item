<template>
    <div class="sn-sort-goods">
        <div :key="i" v-for="(n,i) in data">
            <div class="sn-sort-list-title">
                <span>{{n.name}}</span>
            </div>
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
    // import snSortGoodsItem from './sn-sort-goods-item'
    export default {
        name: "sn-sort-goodsModel",
        props:['data'],
        components:{
            // snSortGoodsItem
        }
    }
</script>

<style scoped>
    .sn-sort-goods{
        width: 100%;
        overflow: hidden;
        border: 0.01rem solid red;
    }
    .sn-sort-list-title{
        width: 97%;
        height: 0.3rem;
        position: absolute;
        border-bottom: 0.01rem solid #F6F6F6;
        margin: 0 0.1rem 0 0;
    }
    .sn-sort-list-title span{
        display: block;
        position: absolute;
        font-size: 0.12rem;
        color: #6F6F6F;
        background-color: white;
        padding: 0 0.05rem ;
        top: 0.25rem;
    }
    ul{
        width: 100%;
        height: 2rem ;
        background-color: pink;
        margin-top: 0.4rem;
    }
</style>