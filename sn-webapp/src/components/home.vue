<template>
    <div>
        <sn-home-head></sn-home-head>
        <sn-swp :data="data"></sn-swp>
        <sn-home-nav :data="data.navs"></sn-home-nav>
        <sn-post-top :data="data.posterTop"></sn-post-top>
        <sn-home-poster :data="data.posterInfo"></sn-home-poster>
        <sn-home-new-user :data="data.newsInfo"></sn-home-new-user>
<!--        商品列表-->
        <div class="sn-goods-list">
            <sn-goods-page :data="goods"></sn-goods-page>
        </div>
<!--        <router-view></router-view>-->
    </div>
</template>

<script>
    import  snHomeHead from './sn-home-head'
    import snHomeNav from './sn-home-nav'
    import snSwp from './sn-swp'
    import snHomePoster from './sn-home-poster'
    import snPostTop from './sn-poster-top'
    // import snFooter from './sn-footer'
    import snHomeNewUser from './sn-home-newUser'
    import navInfo from "./navInfo"
    import api from "../api/api";
    import snGoodsPage from "./sn-goods/sn-goods-page"

    export default {
        name: "home",
        components: {
            // eslint-disable-next-line vue/no-unused-components
            snHomeHead,snHomeNav,snSwp,snHomePoster,snPostTop,snHomeNewUser,navInfo,snGoodsPage
        },
        data(){
            return {
                data:[],
                goods:[]
            }
        },
        methods:{
            async _initHomeData() {
                let data = await api.getHomeData()
                // let b = await api.getGoodsData()
                // eslint-disable-next-line no-console
                // console.log(data)
                this.data = data
                // this.goods = b
                // eslint-disable-next-line no-console
                // console.log(this.goods)
            },
            async _initGoodsData() {
                let b = await api.getGoodsData()
                 this.goods = b
                // eslint-disable-next-line no-console
                 console.log(this.goods)
            }
        },
        beforeMount () {
            this._initHomeData()
            this._initGoodsData()
        },

    }
</script>

<style scoped>
    .sn-goods-list{
        width: 100%;
        height: 6rem;
        background-color: #F7F7F7;
        margin:0.1rem auto;
        font-size: 0.14rem;
    }
</style>