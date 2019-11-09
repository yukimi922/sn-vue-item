<template>
    <div class="sn-tool-page">
<!--        每一个工具项-->
        <sn-tool-item :key="i" v-for="(n,i) in data" :data="n"></sn-tool-item>
    </div>
</template>

<script>
    import snToolItem from './sn-tool-item'
    export default {
        name: "sn-tool-list",
        components:{
            // eslint-disable-next-line vue/no-unused-components
            snToolItem
        },
        props:['data']
    }
</script>

<style scoped>
    .sn-tool-page{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        margin: 0.1rem 0;
    }
</style>