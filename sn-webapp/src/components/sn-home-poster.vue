<template>
    <div class="sn-home-poster">
        <sn-poster-item :key="i" v-for="(n,i) in data" :data="n"></sn-poster-item>
    </div>
</template>

<script>
    import snPosterItem from './sn-poster-item'
    export default {
        name: "sn-home-poster",
        props:['data'],
        components:{
            snPosterItem
        }
    }
</script>

<style scoped>
    .sn-home-poster{
        font-size: 0.12rem;
        overflow: hidden;
    }
</style>