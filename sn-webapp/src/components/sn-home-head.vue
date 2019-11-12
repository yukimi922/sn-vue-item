<template>
    <div class="header">
<!--        头部分类-->
        <div class="sn-home-head-sort">

        </div>
<!--        搜索框-->
        <div class="sn-home-head-search">
            <input type="text" placeholder="商品/店铺">
        </div>
<!--&lt;!&ndash;        登录&ndash;&gt;-->
        <a class="sn-home-head-login" @click="fun">

        </a>
    </div>
</template>

<script>
    export default {
        name: "sn-home-head",
        methods:{
            fun(){
                let token = localStorage.getItem('token')
                if(token){
                    this.$router.push('/logon')
                }else{
                    this.$router.push('/login')
                }
            }
        }
    }
</script>

<style scoped>
    .header{
        width: 100%;
        display: flex;
        background-image: url("../assets/images/157260181257313287.png");
        background-repeat: no-repeat;
        background-size: 100%;
        height: 0.5rem;
        font-size: 0.16rem;
        position: fixed;
        top: 0rem;
        z-index: 5;
    }
    .sn-home-head-sort{
        /*width: 0.5rem;*/
        width: 15%;
        height: 0.5rem;
        background-image:url("../assets/images/157199320847433454 (1).png") ;
        background-size: 0.2rem;
        background-repeat: no-repeat;
        background-position: 0.15rem 0.08rem;
    }
    .sn-home-head-search{
        width: 70%;
        /*background-color: pink;*/
    }
    .sn-home-head-search input{
        width: 100%;
        height: 0.35rem;
        border: none;
        border-radius: 0.12rem;
        margin-top: 0.07rem;
        box-sizing: border-box;
        padding-left: 0.3rem;
        background: url("../assets/images/search.png") rgba(255,255,255,0.7) no-repeat 0.03rem 0.05rem;
        background-size: 0.25rem 0.25rem;

    }
    .sn-home-head-login{
        width: 15%;
        background-image: url("../assets/images/157199321817918653 (1).png");
        background-position: 0.15rem 0.03rem;
        background-size: 0.25rem;
        background-repeat: no-repeat;
    }
</style>