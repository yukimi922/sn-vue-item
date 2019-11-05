<template>
    <div>
        <img :src="data.src" alt="" :id="data.id">
    </div>
</template>

<script>
    export default {
        name: "new-user-item",
        props:['data'],
    }
</script>

<style scoped>
    img{
        display: block;
        float: left;
    }
    #new-0{
        width: 48%;
        margin-left: 0.05rem;
    }
    #new-1{
        width: 24%;
        margin-left: 0.01rem;
    }
    #new-2{
        width: 24%;
        margin-left: 0.01rem;
    }


</style>