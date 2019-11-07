<template>
    <h1>{{cartInfo.name}}</h1>
</template>

<script>
    import caraApi from '../../../sn-weapp-api/cartInfo'

    export default {
        name: "sn-cart-page",
        data(){
            return {
                'cartInfo':[]
            }
        },
        methods:{
          async  _initData(){
              this.cartInfo = await caraApi.getCartInfoByUserId()
            }
        },
        beforeMount() {
            this._initData()
        },
        mounted() {
            // eslint-disable-next-line no-console
            console.log(this.cartInfo)
        }
    }
</script>

<style scoped>

</style>