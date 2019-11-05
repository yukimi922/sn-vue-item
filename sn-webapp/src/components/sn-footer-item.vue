<template>
    <a href="#" class="home-footer-item">
        <img :src="data.src" alt=""><br>
        <span>{{data.title}}</span>
    </a>
</template>

<script>
    export default {
        name: "sn-footer-item",
        props:['data']
    }
</script>

<style scoped>
    .home-footer-item{
        flex: 1;
        height: 0.5rem;
        font-size: 0.10rem;
        text-decoration: none;
        color: #6F6F6F;
    }
    .home-footer-item img{
        width: 0.3rem;
    }
</style>