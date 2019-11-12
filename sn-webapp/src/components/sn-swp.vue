<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <swp-item :key="i" v-for="(n,i) in data.navInfo" :data="n"></swp-item>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import swpItem from './swp-item'
    import Swiper from 'swiper'
    export default {
        name: "sn-swp",
        props:['data'],
        components:{
            // eslint-disable-next-line vue/no-unused-components
            swpItem
        },
        mounted(){
            new Swiper ('.swiper-container', {
                loop: true,
                // 如果需要分页器
                pagination:{
                    el:'.swiper-pagination'
                },
                autoplay: {
                    disableOnInteraction: false
                },
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                // observeParents:true//修改swiper的父元素时，自动初始化swiper
            })
        }
    }
</script>

<style scoped>
    .swiper-container{
        width: 100%;
        font-size: 0.12rem;
        margin-top: 0.5rem;
    }
</style>