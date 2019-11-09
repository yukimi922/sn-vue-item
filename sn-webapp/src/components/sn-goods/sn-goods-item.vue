<template>
    <div class="sn-goods-item">

    </div>
</template>

<script>
    export default {
        name: "sn-goods-item",
        props:['data','pid'],
        mounted() {
            // eslint-disable-next-line no-console
            console.log(this.data)
        }
    }
</script>

<style scoped>
    .sn-goods-item{
        width: 49%;
        height: 2rem;
        background-color: #ff5277;
        margin-bottom: 0.06rem;
    }
</style>