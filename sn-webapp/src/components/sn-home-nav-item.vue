<template>
    <div class="sn-home-nav-item" >
        <img :src="data.src" alt="" class="nav-img">
        <p>{{data.title}}</p>
    </div>
</template>

<script>
    export default {
        name: "sn-home-nav-item",
        props:[ 'data','pid'],
    }
</script>

<style scoped>
    .sn-home-nav-item{
        float: left;
        width: 20%;
        height: 0.75rem;
        font-size: 0.10rem;
        color: #6F6F6F;
        text-align: center;
    }
    .nav-img{
        width: 0.46rem;
        height: 0.46rem;
        margin-top: 0.1rem;
    }
</style>