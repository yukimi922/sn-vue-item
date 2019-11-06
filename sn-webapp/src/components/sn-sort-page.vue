<template>
    <div class="sn-sort">
        <sn-sort-top></sn-sort-top>
        <sn-sort-list :data="snSortListInfo"></sn-sort-list>
        <sn-sort-goods :data="goodsLIst"></sn-sort-goods>
    </div>
</template>

<script>
    import snSortTop from './sn-sort-top'
    import snSortList from './sn-sort-list'
    import snSortGoods from './sn-sort-goods'
    export default {
        name: "sn-sort-page",
        components:{
            // eslint-disable-next-line vue/no-unused-components
            snSortTop,snSortList,snSortGoods
        },
        data(){
            return {
                snSortListInfo:[
                    {
                        id:0,
                        title:'热门推荐',
                        goodsInfo:[
                            {
                                id:0,
                                words:'空调',
                                src:'./images/1526974072412_app_wap_list.jpg'
                            },
                            {
                                id:1,
                                words:'电视',
                                src:'./images/1491712405935_pc_list.jpg'
                            },
                            {
                                id:2,
                                words:'洗衣机',
                                src:'./images/1491712405935_pc_list.jpg'
                            }
                        ]
                    },
                    {
                        id:1,
                        title:'手机数码'
                    },
                    {
                        id:2,
                        title:'大家电'
                    },
                    {
                        id:3,
                        title:'电脑办公'
                    },
                    {
                        id:4,
                        title:'厨卫大电'
                    },
                    {
                        id:5,
                        title:'生活家电'
                    },
                    {
                        id:6,
                        title:'食品酒水'
                    },
                    {
                        id:7,
                        title:'品质男装'
                    },
                    {
                        id:8,
                        title:'苏宁国际'
                    },
                    {
                        id:9,
                        title:'家居家纺'
                    },
                    {
                        id:10,
                        title:'运动户外'
                    },
                    {
                        id:11,
                        title:'居家生活'
                    },
                    {
                        id:12,
                        title:'珠宝首饰'
                    },
                    {
                        id:13,
                        title:'家装建材'
                    },
                    {
                        id:14,
                        title:'厨具水具'
                    },
                    {
                        id:15,
                        title:'二手优品'
                    },
                    {
                        id:16,
                        title:'苏宁生鲜'
                    },
                ],
                goodsLIst:[
                    {
                        name:'热门搜索',
                        id:0,
                        list:[
                            {
                                gid:0,
                                src:'./images/1526974072412_app_wap_list.jpg',
                                words:'空调'
                            },
                            {
                                id:1,
                                words:'电视',
                                src:'./images/1491712405935_pc_list.jpg'
                            },
                            {
                                id:2,
                                words:'洗衣机',
                                src:'./images/1491712405935_pc_list.jpg'
                            }
                        ]
                    }
                ]

            }
        }
    }
</script>

<style scoped>
    .sn-sort{
        font-size: 0.16rem;
    }

</style>