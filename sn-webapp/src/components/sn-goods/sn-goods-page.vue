<template>
    <div class="sn-goods">
        <sn-goods-item :key="i" v-for="(n,i) in data.products" :data="n" :sid="i"></sn-goods-item>
    </div>
</template>
<!--@click.native="fun(i)"-->
<script>
    import api from "../../api/api";

    import snGoodsItem from "./sn-goods-item"

    export default {
        name: "sn-goods-page",
        components:{
            snGoodsItem
        },
        data(){
          return {
              data:[]
          }
        },
        methods:{
            async _initGoodsData() {
                let b = await api.getGoodsData()
                this.data = b
                // eslint-disable-next-line no-console
                console.log(this.goods)
            }
        },
        beforeMount () {
            this._initGoodsData()
        },
        // methods:{
        //     fun(i){
        //         this.$bus.$emit('goodsItem',i);
        //         this.$router.push('/goods')
        //         // eslint-disable-next-line no-console
        //         // console.log(i)
        //     }
        // }
    }
</script>

<style scoped>
    .sn-goods{
        width: 93%;
        margin: 0.1rem auto;
        display: flex;
        flex-wrap: wrap;
        background-color: #F7F7F7;
        justify-content: space-between;
    }
</style>