<template>
    <div>
        <sn-cart-item :key="i" v-for="(n,i) in data" :data="n" :sid="i"></sn-cart-item>
    </div>
</template>

<script>

    import snCartItem from './sn-cart-item'
    import snCartFoot from './sn-cart-footer'

    export default {
        name: "sn-carts-products",
        props:['data'],
        components:{
            // eslint-disable-next-line vue/no-unused-components
            snCartItem,snCartFoot
        },
        methods:{
            shopSelectAll(){
                //let checked = this.data.checkedAll
                // this.data.shops.forEach((shop, i) => {
                //     shop.checked = checked
                //     shop.products.forEach((product, i) => {
                //         product.checked = checked
                //     })
                // })
            }
        }
    }
</script>

<style scoped>

</style>