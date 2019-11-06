<template>
    <div>
        <li :key="index" v-for="(n,index) in data" @click="fun(index)" :class="tag===index?'now':''" :idx="index"> {{n.title}}</li>
    </div>
</template>

<script>
    export default {
        name: "sort-list-item",
        props:['data'],
        methods:{
           fun(index){
               this.tag = index;
           }
        },
        data(){
            return{
                tag:0,
                idx:0
            }
        },
    }
</script>

<style scoped>
    li{
        width: 100%;
        height: 0.5rem;
        text-align: center;
        line-height: 0.5rem;
        background-color: #F4F4F4;
        border-bottom: 0.01rem solid #D5D5D5;
        color: #666666;
        font-size: 0.14rem;
    }
    .now{
        background-color: white;
    }
</style>