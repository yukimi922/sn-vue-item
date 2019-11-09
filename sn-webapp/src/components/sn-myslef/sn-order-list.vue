<template>
    <div class="order-list">
        <img :src="data.src" alt="">
        <p>{{data.title}}</p>
    </div>
</template>

<script>
    export default {
        name: "sn-order-list",
        props:['data']
    }
</script>

<style scoped>
    .order-list img{
        width: 0.3rem;
        margin-top: 0.2rem;
    }
    .order-list p{
        color: #666;
    }
    .order-list{
        width: 20%;
        height: 0.8rem;
        text-align: center;
    }
</style>