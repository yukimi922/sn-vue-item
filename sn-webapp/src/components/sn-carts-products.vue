<template>
    <div>
        <sn-cart-item :key="i" v-for="(n,i) in data" :data="n"></sn-cart-item>
    </div>
</template>

<script>

    import snCartItem from './sn-cart-item'

    export default {
        name: "sn-carts-products",
        props:['data'],
        components:{
            snCartItem
        }
    }
</script>

<style scoped>

</style>