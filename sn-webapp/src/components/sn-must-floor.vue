<template>
    <div>
        <div class="sn-must-floor">
            <div class="sn-floor1-title">{{data.floor1}}</div>
            <div class="sn-floor1-img">
                <ul>
                    <li class="must-floor1" :key="i" v-for="(n,i) in data.floor1Src">
                        <img :src="n.src" alt=""><br>
                        <div class="sale">
                            <span class="floor1" v-show="n.sale">{{n.sale}}</span>
                        </div>
                        <p>￥{{n.price}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="sn-must-floor2">
            <div class="floor2-poster">
                <img :src="data.floor2.poster" alt="">
                <p>{{data.floor2.desc}}</p>
            </div>
                <sn-must-two :data="data.floor2Src"></sn-must-two>
        </div>

<!--        第二个类似模块-->
        <div class="sn-must-floor">
            <div class="sn-floor1-title">{{data.floor3}}</div>
            <div class="sn-floor1-img">
                <ul>
                    <li class="must-floor1" :key="i" v-for="(n,i) in data.floor3Src">
                        <img :src="n.src" alt=""><br>
                        <div class="sale">
                            <span v-if="n.sale" class="floor1">{{n.sale}}</span>
                        </div>
                        <p>￥{{n.price}}</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="sn-must-floor2">
            <div class="floor2-poster">
                <img :src="data.floor4.poster" alt="">
                <p>{{data.floor4.desc}}</p>
            </div>
            <sn-must-two :data="data.floor4Src"></sn-must-two>
        </div>

    </div>
</template>

<script>
    import snMustTwo from './sn-must-two'
    import api from "../api/api";
    export default {
        name: "sn-must-floor",
        components:{
            // eslint-disable-next-line vue/no-unused-components
            snMustTwo
        },
        data(){
            return {
                data:[]
                // floor1:{
                //     title:'香酥松脆,美味夏威夷果细腻软滑'
                // },
                // floor1Src:[
                //     {
                //         price:'30.9',
                //         sale:'领劵3元',
                //          src:'./images/AeT_1WA6PVVsREixqsRRCA.jpg',
                //     },
                //     {
                //         price:'27.9',
                //         src:'./images/I5Ueh2i4FFkqxac1hS5gXQ.jpg'
                //
                //     },
                //     {
                //         price:'42',
                //         src:'./images/0070164966-000000000629006793_1.jpg'
                //     },
                // ],
                // floor2:{
                //     poster:'./images/154287636387505228.jpg',
                //     desc:'走亲伴手礼,坚果礼盒乃是佳选!'
                // },
                // floor2Src:[
                //     {
                //         title:'【三只松鼠_每日坚果750g/30天装】混合果仁零食大礼包组合送礼',
                //         sale:'满138减39',
                //         src:'./images/iM7ZLl3zJ4cNvaBBAUh7nQ.png',
                //         price:138
                //     },
                //     {
                //         title:'百草味 坚果炒货礼盒-E 全坚果大礼包2168g（富贵开）每日坚果零食混合组合礼盒装',
                //         sale:'领劵5元',
                //         src:'./images/2wy2DlI2mLlpjXYt-SovMQ.jpg',
                //         price:228
                //     },
                //     {
                //         title:'森林大叔欢聚礼盒2020g 零食大礼包 10袋装 森林大叔出品',
                //         sale:'满99打6折',
                //         src:'./images/j5Xqt1UN89Fp1Mi5wjg45g.jpg',
                //         price:128
                //     }
                // ],
                // floor3:{
                //     title:'出众静音,暖风轻拂,安享好眠'
                // },
                // floor3Src:[
                //     {
                //         price:'3399',
                //         sale:'领劵200元',
                //         src:'./images/ESyLafICYjhBoJVHcyPWyQ.jpg',
                //     },
                //     {
                //         price:'1999',
                //         src:'./images/Fi5KrTIzxPv5aLoP3xs7Vw.jpg'
                //
                //     },
                //     {
                //         price:'2399',
                //         sale:'领劵200元',
                //         src:'./images/FMGGdM2DcsyQqO7CNvOugA.jpg'
                //     },
                // ],
                // floor4:{
                //     poster:'./images/155263482128293142.jpg',
                //     desc:'百草味坚果,健康与格调的代表'
                // },
                // floor4Src:[
                //     {
                //         title:'百草味 坚果 盐焗味开心果 100g 休闲零食每日坚果干果炒货特产大颗粒原色无漂白食品满减',
                //         sale:'领劵65元',
                //         src:'./images/nepP1BtBVdv11Qm5_iSQMA.jpg',
                //         price:46.2
                //     },
                //     {
                //         title:'百草味 坚果 夏威夷果奶油味 100g 坚果蜜饯休闲零食特产干果炒货送开口器原味满减',
                //         sale:'领劵65元',
                //         src:'./images/qwNz1MwgNStQV9IDMz0qnQ.jpg',
                //         price:32.6
                //     },
                //     {
                //         title:'百草味 坚果 无壳板栗仁 80g零食特产甘栗仁熟制甜栗子仁任选',
                //         sale:'领劵25元',
                //         src:'./images/OMco2eqHjQ3F97ZDdf3knw.jpg',
                //         price:17.7
                //     }
                // ],
            }

        },
        beforeMount() {
            this._initGetMust()
        },
        methods:{
            async _initGetMust(){
                let a = await api.getMustData();
                this.data = a;
            }
        }
    }
</script>

<style scoped>
    .sale{
        width: 100%;
        height: 0.3rem;
    }
    .floor1{
        display: inline-block;
        color: #FF5277;
        border: 0.01rem solid #FF5277;
        font-size: 0.12rem;
        margin-top: 0.1rem;
    }
    .floor2-poster{
        width: 100%;
        background-color: darkcyan;
        overflow: hidden;
        position: relative;
    }
    .floor2-poster p{
        position: absolute;
        bottom: 0.1rem;
        width: 100%;
        text-align: center;
        font-size: 0.2rem;
        font-family: "Microsoft YaHei UI";
        color: white;
    }
    .floor2-poster:before{
        width: 5rem;
        height: 1.65rem;
        background-color: rgba(0,0,0,0.2);
        content: "";
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
    }
    .floor2-poster img{
        width: 100%;
        display: block;
    }
    .sn-must-floor2{
        width: 95%;
        margin: 0.1rem auto;
        border-radius: 0.1rem;
        font-size: 0.14rem;
        overflow: hidden;
        background-color: white;
    }
    .sn-must-floor{
        width: 95%;
        background-color: white;
        font-size: 0.16rem;
        margin: 0.1rem auto;
        border-radius: 0.1rem;
        box-sizing: border-box;
        padding: 0.05rem;
        overflow: hidden;
    }
    .sn-floor1-img{
        width: 100%;
        display: flex;
        overflow: hidden;
        margin-top: 0.05rem;
    }
    .sn-floor1-img ul{
        width: 100%;
        display: flex;
    }
    .must-floor1{
        list-style: none;
        flex: 1;
        float: left;
        text-align: center;
        position: relative;
    }
    .must-floor1 img{
        width: 1rem;
    }
    .must-floor1 :before{
        width: 1.1rem;
        height: 1.05rem;
        background-color: rgba(0,0,0,0.03);
        content: "";
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
    }
    .sn-floor1-title{
        font-family: "Microsoft YaHei UI";
        font-size: 0.16rem;
        color: #333333;
        box-sizing: border-box;
        padding-left: 0.1rem;

    }
    .must-floor1 p{
        color: #A7A7A7;
        font-size: 0.14rem;
    }
</style>