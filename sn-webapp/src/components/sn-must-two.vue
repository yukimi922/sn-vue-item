<template>
    <div class="floor2-img">
        <ul>
            <li :key="i" v-for="(n,i) in data" class="floor2-item">
                <img :src="n.src" alt="">
                <p class="floor2-tit">{{n.title}}</p>
                <span>{{n.sale}}</span>
                <p class="floor2-price">￥{{n.price}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "sn-must-two",
        props:['data']
    }
</script>

<style scoped>
    .floor2-price{
        font-size: 0.12rem;
        color: #6F6F6F;
        margin-bottom: 0.1rem;
        margin-top: 0.1rem;
    }
    .floor2-tit{
        color: #6F6F6F;
    }
    .floor2-item span{
        display: inline-block;
        color: #FF5277;
        border: 0.01rem solid #FF5277;
        font-size: 0.12rem;
        margin-top: 0.1rem;
    }
    .floor2-item img{
        width: 1rem;
    }
    .floor2-item img:after{
        width: 1.1rem;
        height: 1.05rem;
        background-color: rgba(0,0,0,0.1);
        content: "";
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
    }
    .floor2-tit{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 1rem;
        margin: 0 auto;
    }
    .floor2-img{
        width: 100%;
        background-color: white;
        overflow: hidden;
        text-align: center;
        margin-top: 0.05rem;
    }
    .floor2-img ul{
        display: flex;
        width: 100%;
        list-style: none;
    }
    .floor2-img ul li{
        flex: 1;
        overflow: hidden;
        text-align: center;
        position: relative;
    }
</style>