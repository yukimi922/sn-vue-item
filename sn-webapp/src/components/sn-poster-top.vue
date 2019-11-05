<template>
    <div class="sn-post-top">
        <img :src="data.src" alt="">
    </div>
</template>

<script>
    export default {
        name: "sn-poster-top",
        props:['data']
    }
</script>

<style scoped>
    .sn-post-top{
        font-size: 0.12rem;
        width: 99%;
    }
    .sn-post-top img{
        width: 100%;
        display: block;
    }
</style>