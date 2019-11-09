<template>
    <div class="sn-logon-list">
        <p>{{data.num}}</p>
        <p>{{data.title}}</p>
    </div>
</template>

<script>
    export default {
        name: "sn-top-list",
        props:['data']
    }
</script>

<style scoped>
    .sn-logon-list{
        width: 25%;
        text-align: center;
    }
</style>