<template>
    <img :src="data.src" alt="" class="sn-home-post-item">
</template>

<script>
    export default {
        name: "sn-poster-item",
        props:['data']
    }
</script>

<style scoped>
    .sn-home-post-item{
        display: block;
        width: 33%;
        float: left;
    }
</style>