<template>
    <div class="sn-sort-goods">
        <div :key="i" v-for="(n,i) in data" v-show="tag==i">
            <div class="sn-sort-list-title">
                <span>{{n.name}}</span>
            </div>
            <ul>
                <li :key="index" v-for="(item,index) in n.list" class="goods-item">
                    <img :src="item.src" alt="" ><br>
                    <p>{{item.words}}</p>
                </li>
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
        },
        data(){
          return {
              tag:''
          }
        },
        mounted() {
            // eslint-disable-next-line no-unused-vars
            this.$bus.$on('changeGoods',(msg)=>{
                this.tag = msg
            })
        }

    }
</script>

<style scoped>
    .sn-sort-goods{
        width: 100%;
        overflow: hidden;
        /*border: 0.01rem solid red;*/
    }
    .sn-sort-list-title{
        width: 97%;
        height: 0.3rem;
        /*position: absolute;*/
        border-bottom: 0.01rem solid #F6F6F6;
        /*margin: 0 0.1rem 0 0;*/
    }
    .sn-sort-list-title span{
        display: inline-block;
        position: relative;
        font-size: 0.12rem;
        color: #6F6F6F;
        background-color: white;
        padding: 0 0.05rem ;
        top: 0.16rem;
    }
    ul{
        width: 100%;
        margin-top: 0.1rem;
        overflow: hidden;
        text-align: center;
        font-size: 0.14rem;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .goods-item{
        width: 30%;
        float: left;
        list-style: none;
    }
    .goods-item img{
        width: 100%;
        height: 0.75rem;
    }
</style>