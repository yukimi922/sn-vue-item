<template>
    <div class="sn-tool-item">
        <img :src="data.src" alt="">
        <p>{{data.title}}</p>
    </div>
</template>

<script>
    export default {
        name: "sn-tool-item",
        props:['data']
    }
</script>

<style scoped>
    .sn-tool-item{
        width: 25%;
        height: 0.6rem;
    }
    .sn-tool-item img{
        width: 0.2rem;
    }
</style>