<template>
    <div class="sn-sort-top">
        <a href="#" class="sn-sort-back"></a>
        <div class="sn-sort-search">
            <a href="#"></a>
            <a href="#">搜索商品或店铺</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sn-sort-top"
    }
</script>

<style scoped>
    .sn-sort-top{
        position: fixed;
        top: 0;
        width: 100%;
        height: 0.5rem;
        background-color: #F8F8F8;
        z-index: 10;
    }
    .sn-sort-back{
        display: block;
        position: absolute;
        width: 0.15rem;
        height: 0.15rem;
        left: 0.16rem;
        top: 0.16rem;
        border-left: 0.01rem solid #6F6F6F;
        border-bottom: 0.01rem solid #6F6F6F;
        -webkit-transform: rotate3d(0,0,1,45deg);
        transform: rotate3d(0,0,1,45deg);
    }
    .sn-sort-search{
        width: 3rem;
        height: 0.35rem;
        position: absolute;
        top: 0.05rem;
        left: 0.5rem;
        border: 0.01rem solid #E7E7E7;
        background-color: white;
    }
    .sn-sort-search a:nth-child(1){
        display: block;
        position: absolute;
        width: 0.2rem;
        height: 0.2rem;
        left: 0.1rem;
        top: 0.08rem;
        background-image: url(".././assets/images/search.png");
        background-repeat: no-repeat;
        background-size: 0.2rem 0.2rem;
    }
    .sn-sort-search a:nth-child(2){
        display: block;
        position: absolute;
        text-decoration: none;
        left: 0.4rem;
        top: 0.1rem;
        color: #D5D5D5;
        font-size: 0.14rem;
    }
</style>