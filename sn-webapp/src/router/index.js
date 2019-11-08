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
        {path:'/logon',component:snMyslef}
    ]
})

router.beforeEach((to,from,next)=>{
    // eslint-disable-next-line no-console
    console.log(to.path) // to from $route
    // eslint-disable-next-line no-console
    // console.log(from.path)
    let token = localStorage.getItem('token')
    // eslint-disable-next-line no-console
    // console.log(token)
    next()
    if (to.name === 'logon') {
        if(token){
            next()
        }else{
            alert('请登录')
            next('/login')
        }
    }
})


// router.beforeEach((to, from, next) => {
//     // to: Route: 即将要进入的目标 路由对象
//     // from: Route: 当前导航正要离开的路由
//     // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
//     const nextRoute = ['login'];
//     // 未登录状态；当路由到nextRoute指定页时，跳转至login
//     let token = localStorage.getItem('token')
//     if (nextRoute.indexOf(to.name) >= 0 && token) {
//         next({
//             path: '/login',
//             // 将跳转的路由path作为参数，登录成功后跳转到该路由
//             query: {redirect: to.fullPath}
//         })
//     }else{
//         next();
//     }
//     // 已登录状态；当路由到login时，跳转至home
//     if (to.name === 'login') {
//         if (token) {
//             // eslint-disable-next-line no-console
//             console.log('已登录');
//             router.push({ path: '/logon' });
//         }
//     }
// });


export default  router;