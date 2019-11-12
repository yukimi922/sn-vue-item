<template>
    <div class="sn-sort">
        <sn-sort-top></sn-sort-top>
        <sn-sort-list :data="data.snSortListInfo"></sn-sort-list>
        <sn-sort-goods :data="data.goodsLIst"></sn-sort-goods>
    </div>
</template>

<script>
    import snSortTop from './sn-sort-top'
    import snSortList from './sn-sort-list'
    import snSortGoods from './sn-sort-goods'
    import api from "../api/api"
    export default {
        name: "sn-sort-page",
        components:{
            // eslint-disable-next-line vue/no-unused-components
            snSortTop,snSortList,snSortGoods
        },
        data(){
          return{
              data:[]
          }
        },
        methods:{
            async _initHomeData() {
                let data = await api.getSortData()
                this.data=data
            },
        },
        beforeMount () {
            this._initHomeData()
        },
    }
</script>

<style scoped>
    .sn-sort{
        font-size: 0.16rem;
    }
</style>