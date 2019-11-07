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
                                        src: './images/154518776962642834.png'
                                },
                                {
                                        id: 1,
                                        title: '分类',
                                        src: './images/154518777766983546.png'
                                },
                                {
                                        id: 2,
                                        title: '必抢清单',
                                        src: './images/154518778584812163.png'
                                },
                                {
                                        id: 3,
                                        title: '购物车',
                                        src: './images/154518779385872504.png'
                                },
                                {
                                        id: 4,
                                        title: '我的易购',
                                        src: './images/154518780211077845.png'
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
