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