<template>
    <div>
        <li :key="i" v-for="(n,i) in data">
            <img src="" alt=""><br>
            <p>{{}}</p>
        </li>
    </div>
</template>

<script>
    export default {
        name: "sn-sort-goods-item",
        props:['data'],
    }
</script>

<style scoped>
    li{
        width: 33%;
        border: 0.01rem solid red;
        float: left;
    }
    li img{
        width: 100%;
    }
</style>