<template>
        <div>
                <router-view></router-view>
                <sn-footer :data="footInfo"></sn-footer>
        </div>

</template>

<script>
import snFooter from './components/sn-footer'
export default {
        name: 'app',
        components:{
                snFooter
        },
        data(){
                return{
                        footInfo: [
                                {
                                        id: 0,
                                        title: '猜你喜欢',
                                        src: './images/154518776962642834.png',
                                        src2:'./images/157105696599538235.png',
                                        goto:'#/home'
                                },
                                {
                                        id: 1,
                                        title: '分类',
                                        src: './images/157105701015391606.png',
                                        src2:'./images/154518777766983546.png',
                                        goto:'#/sort'
                                },
                                {
                                        id: 2,
                                        title: '必抢清单',
                                        src: './images/154518778584812163.png',
                                        src2:'./images/154518778584812163.png',
                                        goto:'#/list'
                                },
                                {
                                        id: 3,
                                        title: '购物车',
                                        src: './images/157105763151658248.png',
                                        src2:'./images/154518779385872504.png',
                                        goto:'#/cart'
                                },
                                {
                                        id: 4,
                                        title: '我的易购',
                                        src: './images/154518780211077845.png',
                                        src2: './images/154518780211077845.png',
                                        goto:'#/logon'
                                },

                        ],
                }
        }

}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
