<template>
    <div class="sn-my-tool">
        <div class="sn-tool-head">
            <span>必备工具</span>
        </div>
<!--        必备工具列表-->
        <sn-tool-list :data="list"></sn-tool-list>
    </div>
</template>

<script>
    import snToolList from './sn-tool-list'
    export default {
        name: "sn-my-tool",
        components:{
            // eslint-disable-next-line vue/no-unused-components
            snToolList
        },
        data(){
            return{
                list:[
                    {
                        tid:0,
                        title:'红包',
                        src:'./images/157250874743127029.png'
                    },
                    {
                        tid:1,
                        title:'店铺关注',
                        src:'./images/157250876042530564.png'
                    },
                    {
                        tid:2,
                        title:'足迹',
                        src:'./images/157250878626080332.png'
                    },
                    {
                        tid:3,
                        title:'客户服务',
                        src:'./images/157136450994431031.png'

                    },
                    {
                        tid:4,
                        title:'必抢清单',
                        src:'./images/157251063564774447.png'

                    },
                    {
                        tid:5,
                        title:'拼购',
                        src:'./images/157136448419617333.png'

                    },
                    {
                        tid:6,
                        title:'校园VIP',
                        src:'./images/157251073785756292.png'

                    },
                    {
                        tid:7,
                        title:'我的拼购',
                        src:'./images/157136454213083878.png'

                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .sn-tool-head{
        font-family: PingFangSC-Semibold;
        font-size: 0.16rem;
        color: #222;
        letter-spacing: 0;
        font-weight: 700;
    }
    .sn-my-tool{
        width: 90%;
        background-color: white;
        margin: 0.05rem auto;
        border-radius: 0.1rem;
        padding: 0.1rem;
    }
</style>