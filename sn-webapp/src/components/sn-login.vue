<template>
    <div class="sn-login">
<!--        登录顶部-->
        <div class="sn-login-top">
<!--            联系客服-->
            <div>
                <a href="#">联系客服</a><span>|</span>
                <a href="#">企业注册</a>
            </div>
        </div>
<!--        登录页面-->
        <div class="sn-login-text">
            <div class="welcome">
                欢迎登录苏宁易购
            </div>
            <div class="sn-tel">
<!--                <label class="tel-label" for="tel">请输入手机号</label>-->
                <input type="text" id="tel" placeholder="请输入手机号" ref="tel">
            </div>
            <!--            验证码-->
            <div class="sn-code">
                <label class="label"></label>
                <label class="label"></label>
                <label class="label"></label>
                <label class="label"></label>
                <a>获取验证码</a>
            </div>
            <div class="sn-login-btn">
                <a>登录</a>
            </div>
            <a class="login-for-id">账号密码登录</a>
        </div>
<!--        其他登录方式-->
        <div class="login-bottom">
            <div class="login-for-other">
                <p>其他登陆方式</p>
                <div class="other-logo">
                    <a><img src="../assets/images/icon_qq.png" alt="" /></a>
                    <a><img src="../assets/images/icon_epp.png" alt="" /></a>
                    <a><img src="../assets/images/icon_k.png" alt="" /></a>
                </div>
                <p class="login-book">我同意《<a href="">苏宁易购会员章程</a>》&nbsp;&nbsp;《<a href="">易付宝协议</a>》</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sn-login",
        // methods:{
        //     logon(){
        //         if(){
        //             localStorage.setItem('token',a);
        //             this.$router.push('/logon')
        //         }else{
        //             alert('请输入手机号!')
        //         }
        //
        //     }
        // }
    }
</script>

<style scoped>
    .login-book a{
        color: black;
    }
    .login-book{
        font-size: 0.1rem;
        text-align: center;
        margin-top: 0.1rem;
        color: #999999;
    }
    .other-logo a img{
        width: 0.35rem;
    }
    .other-logo a{
        display: block;
        flex: 1;
        text-align: center;
    }
    .other-logo{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 0.1rem;
    }
    .login-for-other p:nth-child(1) {
        text-align: center;
        color: #ADADAD;
        font-size: 0.14rem;
    }
    .login-for-other p:before{
        left: 0;
        content: "";
        display: block;
        position: absolute;
        top: .1rem;
        width: 1rem;
        border-bottom: 1px solid #ddd;
    }
    .login-for-other p:after{
        right: 0;
        content: "";
        display: block;
        position: absolute;
        top: .1rem;
        width: 1rem;
        border-bottom: 1px solid #ddd;
    }
    .login-bottom{
        width: 100%;
        height: 1rem;
        background-color: white;
        position: fixed;
        bottom: 0;
        z-index: 99;
        font-size: 0.14rem;
    }
    .login-for-other{
        width: 80%;
        margin: 0 auto;
        position: relative;
    }
    .login-for-id{
        display: block;
        width: 100%;
        height: 0.5rem;
        text-align: center;
        font-size: 0.16rem;
        line-height: 0.5rem;
    }
    .sn-login-btn{
        width: 100%;
        height: 0.5rem;
        margin: 0.3rem auto 0;
        background-color: #FFCC00;
        border-radius: 0.1rem;
        text-align: center;
        line-height: 0.5rem;
        font-size: 0.16rem;
        font-weight: 700;
        font-family: "Microsoft YaHei UI";
    }
    .sn-login-btn a{
        display: inline-block;
        width: 100%;
    }
    .sn-code a{
        display: inline-block;
        width: 30%;
        border: 0.01rem solid #D5D5D5;
        text-align: center;
        line-height: 0.5rem;
        font-size: 0.16rem;
        color: #D4D4D4;
        border-radius: 0.1rem;
        padding: 0 0.1rem;
    }
    .sn-code{
        width: 100%;
        height: 0.5rem;
        /*background-color: darkcyan;*/
        display: flex;
        justify-content: space-between;
    }
    .label{
        width: 13%;
        height: 100%;
        border-bottom: 0.01rem solid #a7a7a7;
    }
    .sn-tel{
        width: 100%;
        height: 0.4rem;
        position: relative;
        margin-top: 0.2rem;
        overflow: hidden;
    }
    .sn-tel input{
        width: 100%;
        height: 0.5rem;
        border: none;
        outline: none;
        font-size: 0.18rem;
        border-bottom: 0.01rem solid #e7e7e7;
    }
    .welcome{
        width: 100%;
        height: 0.4rem;
        font-size: 0.18rem;
        line-height: 0.4rem;
    }
    .sn-login-text{
        width: 80%;
        /*height: 3rem;*/
        /*background-color: pink;*/
        margin: 0.3rem auto;
        font-size: 0.14rem;
        position: relative;
        overflow: hidden;
    }
    .sn-login-top div a{
        display: inline-block;
        text-decoration: none;
        color: #333333;
        line-height: 0.4rem;
    }
    .sn-login-top div span{
        color:#EDEDED ;
        display: inline-block;
        margin: 0 0.1rem;
    }
    .sn-login-top div{
        width: 1.5rem;
        height: 100%;
        float: right;
        text-align: center;
    }
    .sn-login-top{
        width: 100%;
        height: 0.4rem;
        background-color: white;
        overflow: hidden;
        font-size: 0.14rem;
    }
    .sn-login{
        width: 100%;
        overflow: hidden;
    }
</style>