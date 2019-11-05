<template>
    <div class="swiper-slide">
        <img :src="data.src" alt="">
    </div>
</template>

<script>
    export default {
        name: "swp-item",
        props:['data']
    }
</script>

<style scoped>
    .swiper-slide{
        width: 100%;
    }
    .swiper-slide img{
        width: 100%;
        display: block;
    }
</style>