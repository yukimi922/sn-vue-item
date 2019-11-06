<template>
            <div class="sn-sort-left">
                <ul>
                    <sort-list-item :data="data"></sort-list-item>
                </ul>
            </div>
</template>

<script>

    import sortListItem from './sort-list-item'

    export default {
        name: "sn-sort-list",
        props:['data'],
        components:{
            // eslint-disable-next-line vue/no-unused-components
            sortListItem
        },
    }
</script>

<style scoped>
    .sn-sort-left{
        position: fixed;
        width: 0.95rem;
        height: 6.5rem;
        left: 0rem;
        overflow: auto;
        border-right: 0.01rem solid #F4F4F4;
        border-top: 0.01rem solid #F4F4F4;
    }
</style>