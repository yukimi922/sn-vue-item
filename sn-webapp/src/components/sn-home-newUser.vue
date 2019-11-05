<template>
    <div class="sn-home-new-user">
        <new-user-item :key="i" v-for="(n,i) in data" :data="n"></new-user-item>
    </div>
</template>

<script>
    import NewUserItem from "./new-user-item";
    export default {
        name: "sn-home-newUser",
        props:['data'],
        components:{
            NewUserItem
        }
    }
</script>

<style scoped>
    .sn-home-new-user{
        width: 100%;
        overflow: hidden;
        margin-top: 0.1rem;
    }
</style>