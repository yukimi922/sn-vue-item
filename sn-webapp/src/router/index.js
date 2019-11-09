import Vue from 'vue'
import VueRouter from 'vue-router'
import NavInfo from '../components/navInfo'
import home from "../components/home"
import snSortPage from '../components/sn-sort-page'
import snMustBy from '../components/sn-must-page'
import snCart from '../components/sn-cart-page'
import snLigin from '../components/sn-login'
import snMyslef from '../components/sn-myslef'
Vue.use(VueRouter)

let router = new VueRouter({
    //路由map的集合，path: views component
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/info',component:NavInfo},
        {path:'/sort',component:snSortPage},
        {path:'/list',component:snMustBy},
        {path:'/cart',component:snCart},
        {path:'/login',component:snLigin},
        {path:'/logon',component:snMyslef, meta: {requireAuth: true,}}// 添加该字段，表示进入这个路由是需要登录的
    ]
})

router.beforeEach((to,from,next)=>{
    // eslint-disable-next-line no-console
    //console.log(to.path) // to from $route
    // eslint-disable-next-line no-console
    //console.log(from.path)
    // const nextRoute = '/logon';
    let token = localStorage.getItem('token')
    // eslint-disable-next-line no-console
    //console.log(token)
    next()

    if (to.meta.requireAuth) {//如果需要跳转 ，往下走（1）
        if (token) {//判断是否登录过，如果有登陆过，说明有token,或者token未过期，可以跳过登录（2）
            if (to.path === '/logon') {//判断下一个路由是否为要验证的路由（3）
                next();// 如果是直接跳到首页，
            } else {//如果该路由不需要验证，那么直接往后走
                next();
            }
        } else {
            // eslint-disable-next-line no-console
            alert('请登录');//如果没有登陆过，或者token 过期， 那么跳转到登录页
            next('/login');
        }
    } else {                           //不需要跳转，直接往下走
        next();
    }

})


export default  router;