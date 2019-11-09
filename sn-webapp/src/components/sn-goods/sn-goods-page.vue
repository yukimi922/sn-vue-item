<template>
    <div class="sn-goods">
        <sn-goods-item :key="i" v-for="(n,i) in data" :pid="i" :data="n" @click="fun(i)"></sn-goods-item>
    </div>
</template>

<script>

    import snGoodsItem from "./sn-goods-item"

    export default {
        name: "sn-goods-page",
        components:{
            snGoodsItem
        },
        props:['data','sid'],
        mounted() {
            // eslint-disable-next-line no-console
            console.log(this.data)
        },
        methods:{
            fun(i){
                // eslint-disable-next-line no-console
                console.log(i)
            }
        }
    }
</script>

<style scoped>
    .sn-goods{
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        background-color: darkcyan;
        justify-content: space-between;
    }
</style>