<template>
    <div class="sn-home-foot">
        <sn-foot-item :key="i" v-for="(n,i) in data" :data="n"></sn-foot-item>
    </div>
</template>
<script>
    import snFootItem from './sn-footer-item'
    export default {
        name: "sn-footer",
        props:['data'],
        components:{
            // eslint-disable-next-line vue/no-unused-components
            snFootItem
        }
    }
</script>

<style scoped>
    .sn-home-foot{
        width: 100%;
        position: fixed;
        bottom: 0rem;
        font-size: 0.12rem;
        text-align: center;
        display: flex;
        z-index: 10;
        background-color: white;
    }
</style>