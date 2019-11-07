<template>
    <div class="sn-sort-goodsPage">
<!--        放广告的块-->
        <div class="sn-sort-poster">
            <img src="../assets/images/1572942841806_app_list.jpg" alt="">
        </div>
        <sn-sort-goods-model :data="data"></sn-sort-goods-model>
    </div>
</template>

<script>
    import snSortGoodsModel from './sn-sort-goodsModel'
    export default {
        name: "sn-sort-goods",
        //商品列表数据
        props:['data'],
        data(){
          return {
              tag:0
          }
        },
        components:{
            // eslint-disable-next-line vue/no-unused-components
           snSortGoodsModel
        },

    }
</script>

<style scoped>
    .sn-sort-goodsPage{
        width: 2.8rem;
        height: 6rem;
        /*background-color: darkcyan;*/
        margin: 0.5rem 0 0 0.95rem;
    }
    .sn-sort-poster{
        width: 100%;
    }
    .sn-sort-list-title{
        width: 97%;
        height: 0.3rem;
        position: relative;
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

    .sn-sort-poster img{
        width: 100%;
        display: block;
    }
</style>