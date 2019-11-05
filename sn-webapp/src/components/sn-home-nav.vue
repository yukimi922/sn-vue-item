<template>
    <div class="sn-home-nav">
<!--        <sn-home-nav-item v-for="n in 8">{{n}}</sn-home-nav-item>-->
        <nav-item :key="i" v-for="(n,i) in data" :data="n" :pid="i"></nav-item>
    </div>
</template>

<script>
    // eslint-disable-next-line no-unused-vars
    import NavItem from './sn-home-nav-item'

    export default {
        name: "sn-home-nav",
        components: {
            // eslint-disable-next-line vue/no-unused-components
            NavItem
        },
        props:['data'],
    }
</script>

<style scoped>
    .sn-home-nav{
        width: 100%;
        font-size: 0.16rem;
        overflow: hidden;
        padding:0 0  0.1rem 0;
    }
</style>