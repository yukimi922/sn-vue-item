<template>
    <div>
        <sn-home-head></sn-home-head>
        <sn-swp :data="navInfo"></sn-swp>
        <sn-home-nav :data="navs"></sn-home-nav>
        <sn-post-top :data="posterTop"></sn-post-top>
        <sn-home-poster :data="posterInfo"></sn-home-poster>
        <sn-home-new-user :data="newsInfo"></sn-home-new-user>
    </div>
</template>

<script>
    import  snHomeHead from './sn-home-head'
    import snHomeNav from './sn-home-nav'
    import snSwp from './sn-swp'
    import snHomePoster from './sn-home-poster'
    import snPostTop from './sn-poster-top'
    import snFooter from './sn-footer'
    import snHomeNewUser from './sn-home-newUser'
    import navInfo from "./navInfo"

    export default {
        name: "home",
        components: {
            // eslint-disable-next-line vue/no-unused-components
            snHomeHead,snHomeNav,snSwp,snHomePoster,snPostTop,snFooter,snHomeNewUser,navInfo
        },
        data(){
            return {
                newsInfo:[
                    {
                        id:'new-0',
                        src:require('../assets/images/157164802290749135.png')
                    },
                    {
                        id:'new-1',
                        src:require('../assets/images/157164804836590653.gif')
                    },
                    {
                        id:'new-2',
                        src:require('../assets/images/157164807214147117.gif')
                    }
                ],
                navs:[
                    {
                        id:0,
                        title:'显示抢购',
                        src:require('../assets/images/157165880722181116.png')
                    },
                    {
                        id:1,
                        title:'苏宁超市',
                        src:require('../assets/images/157165889469283916.png')
                    },
                    {
                        id:2,
                        title:'苏宁拼购',
                        src:require('../assets/images/157165891799364137.png')
                    },
                    {
                        id:3,
                        title:'爆款手机',
                        src:require('../assets/images/157165893790085815.png')
                    },
                    {
                        id:4,
                        title:'苏宁家电',
                        src:require('../assets/images/157165895671653077.png')
                    },
                    {
                        id:5,
                        title:'免费兑好物',
                        src:require('../assets/images/157165897779526702.png')
                    },
                    {
                        id:6,
                        title:'赚钱',
                        src:require('../assets/images/154708810364057852.png')
                    },
                    {
                        id:7,
                        title:'签到有礼',
                        src:require('../assets/images/157165906281444963.png')
                    },
                    {
                        id:8,
                        title:'领劵中心',
                        src:require('../assets/images/157165912004147386.png')
                    },
                    {
                        id:8,
                        title:'更多频道',
                        src:require('../assets/images/157165908511134313.png')
                    }

                ],
                navInfo:[
                    {
                        id:0,
                        src:require('../assets/images/155058120060465377.jpg')
                    },
                    {
                        id:1,
                        src:require('../assets/images/155429640067652550.jpg')
                    },
                    {
                        id:2,
                        src:require('../assets/images/155589844883178173.jpg')
                    },
                    {
                        id:3,
                        src:require('../assets/images/155058120028429292.jpg')
                    }
                ],
                posterInfo:[
                    {
                        id:0,
                        src:require('../assets/images/157277898355998946.png')
                    },
                    {
                        id:1,
                        src:require('../assets/images/157277900228813255.png')
                    },
                    {
                        id:2,
                        src:require('../assets/images/157277906199032641.png')
                    }
                ],
                posterTop:{src:require('../assets/images/157277896810687787.png')}
            }
        },
    }
</script>

<style scoped>

</style>